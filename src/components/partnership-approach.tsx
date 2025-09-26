
"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { CaseStudiesCarousel } from "./case-studies-carousel";
import { caseStudies } from "@/lib/case-studies";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GlowingCard } from "./ui/glowing-card";

const partners = [
    { name: "Google Cloud Partner", logo: "https://img.icons8.com/color/96/google-cloud.png", dataAiHint: "Google Cloud logo" },
    { name: "AWS Partner", logo: "https://img.icons8.com/color/96/amazon-web-services.png", dataAiHint: "AWS logo" },
    { name: "Microsoft Partner", logo: "https://img.icons8.com/color/96/azure-storage-explorer.png", dataAiHint: "Microsoft Azure logo" },
    { name: "Vercel Partner", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg", dataAiHint: "Vercel logo" },
];


export function PartnershipApproach() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
         <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-normal uppercase tracking-widest text-primary">03/ Partnership & Results</p>
            <h2 className="font-headline text-[clamp(1.8rem,5vw,3rem)] font-bold !leading-snug mt-4">
                We embed with your team to deliver results.
            </h2>
            <p className="text-muted-foreground md:text-lg mt-4">
                Our success is measured by your success. We partner with ambitious teams to understand their vision and deliver tangible outcomes that fuel growth and innovation.
            </p>
             <div className="mt-8">
                <Button asChild>
                    <Link href="/contact">
                        Start a Project
                    </Link>
                </Button>
            </div>
         </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {caseStudies.slice(0,3).map((study) => (
                <GlowingCard key={study.title}>
                  <div className="flex flex-col h-full">
                    <CardHeader className="p-0">
                         <Image
                            src={study.image}
                            alt={study.title}
                            width={study.width}
                            height={study.height}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                            data-ai-hint={study.dataAiHint}
                        />
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardDescription>{study.client}</CardDescription>
                      <CardTitle className="text-lg md:text-xl mt-2">
                          {study.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm line-clamp-3">{study.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map(tag => <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>)}
                      </div>
                    </CardFooter>
                  </div>
                </GlowingCard>
            ))}
        </div>

      </div>
    </section>
  );
}

