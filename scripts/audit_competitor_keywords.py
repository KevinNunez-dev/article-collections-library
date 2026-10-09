#!/usr/bin/env python3
"""Fetch allowlisted competitor pages and report visible main-text keyword counts."""

from collections import Counter
from datetime import datetime, timezone
from html.parser import HTMLParser
import json
import re
from urllib.error import URLError
from urllib.request import Request, urlopen


PAGES = {
    "Corewell Health": (
        "https://corewellhealth.org/care-and-specialties/orthopedics/back-neck-spine-care",
        ["lower back pain", "back and neck care", "spine care", "Michigan", "Troy"],
    ),
    "Nerve Disc Institute": (
        "https://nervediscinstitute.com/",
        ["lower back pain", "disc", "sciatica", "non-surgical", "Michigan", "Troy"],
    ),
    "University of Michigan Health": (
        "https://www.uofmhealth.org/our-care/specialties-services/back-pain",
        ["lower back pain", "back pain", "physical therapy", "Michigan", "Troy"],
    ),
    "U.S. News provider directory": (
        "https://health.usnews.com/doctors/lower-back-pain/michigan",
        ["lower back pain", "Michigan", "doctor", "spine", "Troy"],
    ),
    "Spine Michigan": (
        "https://spinemi.com/",
        ["back pain", "spine surgery", "Michigan", "Troy", "non-surgical"],
    ),
}

SKIP_TAGS = {"script", "style", "noscript", "template", "nav", "footer", "aside", "form"}
BLOCK_TAGS = {
    "address", "blockquote", "br", "dd", "div", "dl", "dt", "figcaption", "h1", "h2",
    "h3", "h4", "h5", "h6", "li", "ol", "p", "section", "table", "td", "th", "tr", "ul",
}
WORD = re.compile(r"(?u)\b[\w]+(?:[’'-][\w]+)*\b")


class VisibleText(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.body_text = []
        self.main_text = []
        self.headings = []
        self.skip_depth = 0
        self.content_root = None
        self.content_root_depth = 0
        self.heading_depth = 0
        self.heading_text = []
        self.heading_scope = None
        self.body_headings = []
        self.main_headings = []

    def handle_starttag(self, tag, attrs):
        if tag in SKIP_TAGS:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        if tag in {"header"}:
            self.skip_depth += 1
            return
        if self.content_root is None and tag in {"main", "article"}:
            self.content_root = tag
            self.content_root_depth = 1
        elif self.content_root == tag:
            self.content_root_depth += 1
        if tag in BLOCK_TAGS:
            self.body_text.append(" ")
            if self.content_root is not None:
                self.main_text.append(" ")
        if self.content_root is not None and tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self.heading_depth += 1
            self.heading_text = []
            self.heading_scope = "main"
        elif tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            self.heading_depth += 1
            self.heading_text = []
            self.heading_scope = "body"

    def handle_endtag(self, tag):
        if tag in SKIP_TAGS or tag == "header":
            self.skip_depth = max(0, self.skip_depth - 1)
            return
        if self.skip_depth:
            return
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"} and self.heading_depth:
            heading = re.sub(r"\s+", " ", "".join(self.heading_text)).strip()
            if heading:
                target = self.main_headings if self.heading_scope == "main" else self.body_headings
                target.append(heading)
            self.heading_depth = 0
            self.heading_text = []
        if self.content_root is not None:
            if tag == self.content_root:
                self.content_root_depth -= 1
                if self.content_root_depth <= 0:
                    self.content_root = None
                    self.content_root_depth = 0

    def handle_data(self, data):
        if self.skip_depth:
            return
        self.body_text.append(data)
        if self.content_root is not None:
            self.main_text.append(data)
            if self.heading_depth:
                self.heading_text.append(data)


def normalize(parts):
    return re.sub(r"\s+", " ", "".join(parts)).strip()


def analyze(name, url, phrases):
    result = {
        "name": name,
        "url": url,
        "retrieved_at_utc": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "extraction_scope": "visible text in the first main/article element; fallback to visible body text if neither exists; excludes script, style, navigation, header, footer, aside, and form text",
    }
    try:
        request = Request(url, headers={"User-Agent": "ArticleCollectionsKeywordAudit/1.0"})
        with urlopen(request, timeout=20) as response:
            html = response.read().decode(response.headers.get_content_charset() or "utf-8", errors="replace")
            result["final_url"] = response.geturl()
        parser = VisibleText()
        parser.feed(html)
        text = normalize(parser.main_text if parser.main_text else parser.body_text)
        words = WORD.findall(text)
        headings = parser.main_headings if parser.main_text else parser.body_headings
        result["status"] = "retrieved"
        result["word_count"] = len(words)
        result["headings"] = headings
        result["phrases"] = {}
        for phrase in phrases:
            count = len(re.findall(rf"(?<![\w]){re.escape(phrase)}(?![\w])", text, flags=re.IGNORECASE))
            matched_headings = [
                heading for heading in headings
                if re.search(rf"(?<![\w]){re.escape(phrase)}(?![\w])", heading, flags=re.IGNORECASE)
            ]
            result["phrases"][phrase] = {
                "count": count,
                "per_1000_words": round(count * 1000 / len(words), 2) if words else None,
                "visible_headings": matched_headings,
            }
    except (OSError, URLError, UnicodeError, TimeoutError) as error:
        reason = getattr(error, "reason", error)
        result.update({"status": "unavailable", "error": f"{type(reason).__name__}: {reason}"})
    return result


if __name__ == "__main__":
    report = [analyze(name, url, phrases) for name, (url, phrases) in PAGES.items()]
    print(json.dumps(report, indent=2, ensure_ascii=False))
