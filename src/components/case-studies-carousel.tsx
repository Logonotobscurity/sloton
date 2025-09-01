
"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";

const caseStudies = [
  {
    client: "Global E-Commerce Brand",
    title: "30% Reduction in Support Tickets via AI Chatbot",
    description: "We implemented an AI-powered chatbot that handles over 60% of initial customer queries, providing instant answers and freeing up human agents to focus on complex issues. The chatbot also improved customer satisfaction scores by 15%.",
    image: "https://picsum.photos/600/400?random=10",
    dataAiHint: "customer support chatbot",
    tags: ["AI", "Chatbot", "E-Commerce"],
  },
  {
    client: "Financial Services Firm",
    title: "Automated Compliance Reporting Saves 40+ Hours/Week",
    description: "Our team developed an RPA solution that automates the generation of complex daily compliance reports. This eliminated manual data entry, reduced errors to near-zero, and allowed the finance team to focus on strategic analysis.",
    image: "https://picsum.photos/600/400?random=11",
    dataAiHint: "financial data analysis",
    tags: ["Automation", "RPA", "Finance"],
  },
  {
    client: "Healthcare Tech Startup",
    title: "Scalable Cloud Platform for a 5x Growth in Users",
    description: "We architected and migrated their entire infrastructure to a scalable, HIPAA-compliant cloud environment. The new platform handles rapid user growth with 99.99% uptime and enhanced security features.",
    image: "https://picsum.photos/600/400?random=12",
    dataAiHint: "cloud server infrastructure",
    tags: ["Cloud", "Scalability", "Healthcare"],
  },
];

export function CaseStudiesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {caseStudies.map((study, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
            <div className="p-1">
              <Card className="overflow-hidden bg-secondary/50">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                  data-ai-hint={study.dataAiHint}
                />
                <CardHeader>
                  <CardDescription>{study.client}</CardDescription>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                   <div className="flex flex-wrap gap-2">
                    {study.tags.map(tag => <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>)}
                   </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
