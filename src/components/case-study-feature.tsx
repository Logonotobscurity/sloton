
"use client"

import { caseStudies as allCaseStudies } from "@/lib/case-studies";
import { CaseStudiesCarousel } from "./case-studies-carousel";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyFeatureProps {
  tags: string[];
  title: string;
  description: string;
}

export function CaseStudyFeature({ tags, title, description }: CaseStudyFeatureProps) {
  const featuredStudies = allCaseStudies.filter(study => 
    tags.some(tag => study.tags.includes(tag))
  );

  if (featuredStudies.length === 0) {
    return null; // Don't render anything if no relevant case studies are found
  }

  return (
    <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    {description}
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <CaseStudiesCarousel studies={featuredStudies} />
            </div>
             <div className="mt-16 text-center">
                <Button asChild>
                    <Link href="/use-cases">
                        Explore All Use Cases <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
