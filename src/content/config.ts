import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		excerpt: z.string(),
		category: z.string(),
		categorySlug: z.string(),
		tags: z.array(z.string()),
		bodySystems: z.array(z.string()),
		contentType: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date(),
		reviewedAt: z.coerce.date().optional(),
		reviewedBy: z.string(),
		reviewerCredential: z.string(),
		author: z.string(),
		readingTime: z.number(),
		image: z.string(),
		imageAlt: z.string(),
		keyTakeaways: z.array(z.string()),
		testimonials: z.array(z.object({
			quote: z.string(),
			author: z.string(),
			role: z.string(),
			rating: z.number(),
		})).optional(),
		comparison: z.array(z.object({
			aspect: z.string(),
			traditional: z.string(),
			rpt: z.string(),
		})).optional(),
		faq: z.array(z.object({
			question: z.string(),
			answer: z.string(),
		})),
		related: z.array(z.string()).optional(),
		seo: z.object({
			title: z.string(),
			description: z.string(),
			image: z.string(),
			noindex: z.boolean().optional(),
			canonical: z.string().optional(),
		}),
	}),
});

const categories = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
	}),
});

export const collections = { articles, categories };
