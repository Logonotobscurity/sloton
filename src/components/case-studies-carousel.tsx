
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
import { caseStudies as allCaseStudies } from "@/lib/case-studies";
import { CaseStudy } from "@/lib/case-studies";

interface CaseStudiesCarouselProps {
  studies?: CaseStudy[];
}

export function CaseStudiesCarousel({ studies }: CaseStudiesCarouselProps) {
  const caseStudies = studies || allCaseStudies;

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
                  width={study.width}
                  height={study.height}
                  className="w-full h-48 sm:h-64 object-cover"
                  data-ai-hint={study.dataAiHint}
                />
                <CardHeader>
                  <CardDescription>{study.client}</CardDescription>
                  <CardTitle className="text-xl md:text-2xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm md:text-base">{study.description}</p>
                   <div className="flex flex-wrap gap-2">
                    {study.tags.map(tag => <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>)}
                   </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
