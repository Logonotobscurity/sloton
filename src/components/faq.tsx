
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrainCircuit, Zap, CircleDollarSign, Calendar, Code, GraduationCap } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import React from 'react';

const faqItems = [
  {
    value: "item-1",
    question: "What kind of results can I expect from your AI and automation solutions?",
    answer: "Clients typically see significant improvements in efficiency, cost reduction, and scalability. For example, our AI chatbots can reduce customer support tickets by over 30%, and our RPA solutions can save dozens of hours per week by automating manual tasks. We focus on delivering measurable ROI.",
    icon: <BrainCircuit className="h-5 w-5 text-primary" />
  },
  {
    value: "item-2",
    question: "How do you approach a new project?",
    answer: "Our process begins with a free AI Business Assessment to understand your goals. From there, we move to a discovery and planning phase to create a detailed project roadmap and timeline. We believe in a collaborative partnership, so you'll be involved at every stage to ensure the solution perfectly aligns with your needs.",
    icon: <Zap className="h-5 w-5 text-primary" />
  },
  {
      value: "item-5",
      question: "You offer a wide range of services. What is your core specialty?",
      answer: "We are strategic technology generalists. Our core specialty lies in understanding the entire digital ecosystem and how different technologies—from AI and automation to web development and data analytics—can be integrated to solve complex business problems. This allows us to create holistic solutions that specialists might miss.",
      icon: <Code className="h-5 w-5 text-primary" />
  },
  {
    value: "item-3",
    question: "What is your pricing model?",
    answer: "Our pricing is tailored to the scope and complexity of each project. We offer project-based pricing for specific builds (like a website or automation workflow) and monthly retainers for ongoing support, maintenance, and strategic guidance. We are transparent with all costs upfront. For a detailed quote, please <a href='/contact' class='text-primary underline'>contact us</a>.",
    icon: <CircleDollarSign className="h-5 w-5 text-primary" />
  },
  {
    value: "item-4",
    question: "How long does it take to implement a solution?",
    answer: "Timelines vary depending on the project. A simple chatbot or a small automation task might be deployed in 2-4 weeks. A full custom web development project could range from 6 to 12 weeks, while a complex digital transformation initiative could take several months. We provide a detailed timeline in our project proposal after the initial assessment.",
    icon: <Calendar className="h-5 w-5 text-primary" />
  },
   {
    value: "item-6",
    question: "Who are your training programs for?",
    answer: "Our training programs are designed for both individuals looking to advance their tech careers and for corporate teams that need to upskill for a digital transformation. We cover topics like AI, Process Automation, and Digital Strategy, focusing on practical, hands-on learning that can be applied directly to real-world business scenarios. Visit our <a href='/training' class='text-primary underline'>Training page</a> to learn more.",
    icon: <GraduationCap className="h-5 w-5 text-primary" />
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer.replace(/<[^>]*>/g, '') // strip HTML for schema
    }
  }))
};

export function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-secondary/20">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We have answers. Here are some of the most common inquiries we receive from prospective partners.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="text-muted-foreground pl-11" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
