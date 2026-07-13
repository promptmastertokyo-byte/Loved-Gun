"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="faq-list">
      {items.map((item, index) => (
        <AccordionPrimitive.Item className="faq-item" value={`item-${index}`} key={item.question}>
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="faq-trigger">
              <span>{item.question}</span>
              <ChevronDown aria-hidden="true" size={18} />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="faq-content">
            <div>{item.answer}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
