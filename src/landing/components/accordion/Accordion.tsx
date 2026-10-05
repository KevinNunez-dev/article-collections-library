import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  // @ts-expect-error
} from "../../shadcn/ui/accordion";
import * as React from "react";

export interface AccordionProps {
  p: p;
}

type p = {
  TriggerText: string;
  TriggerBody: string | undefined;
  TriggerBodyHTML: string | undefined;
  itemId?: string;
};

export const AccordionComponent = (props: AccordionProps) => {
  const itemValue = props.p.TriggerText;
  const [openValue, setOpenValue] = React.useState<string | undefined>(
    typeof window !== "undefined" && window.location.hash === `#${props.p.itemId}`
      ? itemValue
      : undefined
  );

  return (
    <Accordion type="single" collapsible value={openValue} onValueChange={setOpenValue}>
      <AccordionItem value={itemValue} id={props.p.itemId}>
        <AccordionTrigger>{props.p.TriggerText}</AccordionTrigger>
        <AccordionContent>
          {props.p.TriggerBody ? props.p.TriggerBody : null}
          {props.p.TriggerBodyHTML ? (
            <div
              dangerouslySetInnerHTML={{ __html: props.p.TriggerBodyHTML }}
            ></div>
          ) : null}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
