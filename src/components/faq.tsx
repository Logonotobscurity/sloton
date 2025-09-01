
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
    answer: "Clients typically see significant improvements in efficiency, cost reduction, and scalability. For example, our AI chatbots can reduce customer support tickets by over 30%, and our RPA solutions can save dozens of hours per week by automating manual tasks. We focus on delivering measurable ROI, which we outline in our initial <a href='/solutions' class='text-primary underline'>solutions proposal</a>.",
    icon: <BrainCircuit className="h-5 w-5 text-primary" />
  },
  {
    value: "item-2",
    question: "How do you start a new project with a client?",
    answer: "Our process begins with a free AI Business Assessment to understand your goals. From there, we move to a discovery and planning phase to create a detailed project roadmap and timeline. We believe in a collaborative partnership, so you'll be involved at every stage, ensuring the final solution perfectly fits your needs.",
    icon: <Zap className="h-5 w-5 text-primary" />
  },
  {
    value: "item-3",
    question: "What is your pricing model for development and consulting?",
    answer: "Our pricing is tailored to the scope and complexity of each project. We offer project-based pricing for specific builds (like a new website or AI model) and monthly retainers for ongoing support and strategic guidance. We are transparent with all costs upfront. For a detailed quote, please <a href='/contact' class='text-primary underline'>contact us</a>.",
    icon: <CircleDollarSign className="h-5 w-5 text-primary" />
  },
  {
    value: "item-4",
    question: "How long does it take to implement a solution?",
    answer: "Timelines vary depending on the project. A simple chatbot might be deployed in 2-4 weeks, while a complex custom web application could take several months. We provide a detailed timeline in our project proposal after the initial assessment.",
    icon: <Calendar className="h-5 w-5 text-primary" />
  },
  {
    value: "item-5",
    question: "What technologies do you use for web development?",
    answer: "We specialize in building high-performance, scalable web applications using modern technologies. Our primary stack includes React, Next.js, and TypeScript for the frontend, with Node.js and Python for backend services. We leverage cloud platforms like AWS, Google Cloud, and Vercel for hosting. You can see a broader list on our <a href='/#tech-stack' class='text-primary underline'>homepage</a>.",
    icon: <Code className="h-5 w-5 text-primary" />
  },
  {
    value: "item-6",
    question: "Who are the instructors for your training programs?",
    answer: "Our courses are taught by our own senior developers and architects—the same experts who lead our client projects. This ensures you learn from professionals with extensive, real-world experience in AI, automation, and digital transformation. Learn more about our <a href='/training' class='text-primary underline'>training programs</a>.",
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
    <section id="faq" className="py-16 md:py-24 bg-secondary/20">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            Have questions? We have answers. Here are some of the most common inquiries we receive from prospective partners.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  <div className="flex items-start md:items-center gap-4">
                    {item.icon}
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="text-muted-foreground pl-9 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
