
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
    description: "We implemented an AI-powered chatbot using Google's Dialogflow that now handles over 60% of initial customer queries. This provides instant, 24/7 answers and has freed up human agents to focus on complex, high-value issues. The project involved integrating the chatbot with their existing CRM and inventory systems, leading to a 15% improvement in customer satisfaction scores.",
    image: "https://picsum.photos/600/400?random=10",
    dataAiHint: "customer support chatbot",
    tags: ["AI", "Chatbot", "E-Commerce", "Dialogflow"],
  },
  {
    client: "Nigerian Financial Services Firm",
    title: "Automated Compliance Reporting Saves 40+ Hours/Week",
    description: "Our team developed an RPA solution using UiPath to automate the generation of complex daily compliance reports required by Nigerian financial regulators. This solution eliminated manual data entry from multiple sources, reduced errors to near-zero, and allowed the finance team to shift their focus from data gathering to strategic analysis, significantly improving their operational efficiency.",
    image: "https://picsum.photos/600/400?random=11",
    dataAiHint: "financial data analysis",
    tags: ["Automation", "RPA", "Finance", "UiPath"],
  },
  {
    client: "Healthcare Tech Startup",
    title: "Scalable Cloud Platform for 5x Growth in Users",
    description: "We architected and migrated their entire infrastructure to a scalable, HIPAA-compliant cloud environment on AWS. The new platform was designed for high availability and now handles rapid user growth with 99.99% uptime. The solution included setting up automated deployment pipelines (CI/CD) and robust security monitoring to protect sensitive patient data.",
    image: "https://picsum.photos/600/400?random=12",
    dataAiHint: "cloud server infrastructure",
    tags: ["Cloud", "AWS", "Scalability", "Healthcare"],
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
