
"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "./ui/arrow-icon";
import { ShieldCheck } from "lucide-react";
import { caseStudies as allCaseStudies, CaseStudy } from "@/lib/case-studies";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "./ui/badge";

const partners = [
    { name: "Google Cloud Partner", logo: "https://img.icons8.com/color/96/google-cloud.png", dataAiHint: "Google Cloud logo" },
    { name: "AWS Partner", logo: "https://img.icons8.com/color/96/amazon-web-services.png", dataAiHint: "AWS logo" },
    { name: "Microsoft Partner", logo: "https://img.icons8.com/color/96/azure-storage-explorer.png", dataAiHint: "Microsoft Azure logo" },
    { name: "Vercel Partner", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg", dataAiHint: "Vercel logo" },
];

const caseStudyGridAreas = [
    "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/6]",
    "md:[grid-area:1/7/2/13] xl:[grid-area:1/6/2/10]",
    "md:[grid-area:2/1/3/7] xl:[grid-area:1/10/2/13]",
    "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/7]",
    "md:[grid-area:3/1/4/13] xl:[grid-area:2/7/3/13]",
];


interface GridItemProps {
  area: string;
  study: CaseStudy;
}

const GridItem = ({ area, study }: GridItemProps) => {
  return (
    <li className={`min-h-[24rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-background dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <Image
                src={study.image}
                alt={study.title}
                width={study.width}
                height={study.height}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
                data-ai-hint={study.dataAiHint}
            />
            <div className="relative flex flex-1 flex-col justify-between gap-3 p-6 z-10 bg-gradient-to-t from-background/80 via-background/50 to-transparent">
                <div />
                <div className="space-y-3">
                    <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-foreground md:text-2xl/[1.875rem]">
                        {study.title}
                    </h3>
                    <p className="font-sans text-sm/[1.125rem] text-muted-foreground md:text-base/[1.375rem]">
                        {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {study.tags.map(tag => <Badge key={tag} variant="outline" className="border-primary text-primary bg-background/50">{tag}</Badge>)}
                   </div>
                </div>
            </div>
        </div>
      </div>
    </li>
  );
};


export function PartnershipApproach() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
         <div className="max-w-3xl mx-auto text-center space-y-6">
             <p className="text-sm font-normal uppercase tracking-widest text-primary">03/ Partnership & Results</p>
            <h2 className="font-headline text-[clamp(1.5rem,4vw,2.25rem)] !leading-snug">
               WE PARTNER WITH AMBITIOUS TEAMS - FROM STARTUPS TO ENTERPRISES - WHO WANT TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE.
            </h2>
             <p className="text-muted-foreground text-md md:text-lg">
                Our impact spans from widely-used open source AI tools to mission-critical enterprise solutions. We embed ourselves with your team to understand your vision, challenges, and opportunities, ensuring the solutions we build are perfectly aligned with your goals. Our success is measured by your success, and we're committed to delivering tangible results that fuel growth and innovation.
            </p>
             <div className="pt-4 space-y-4">
                 <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Trusted & Certified</h3>
                 <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                    {partners.map(partner => (
                        <div key={partner.name} className="flex items-center gap-2" title={partner.name}>
                            <Image 
                                src={partner.logo} 
                                alt={partner.name}
                                width={24}
                                height={24}
                                className="h-6 w-auto"
                                data-ai-hint={partner.dataAiHint}
                            />
                        </div>
                    ))}
                     <div className="flex items-center gap-2" title="Cybersecurity & Compliance">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                     </div>
                 </div>
             </div>
        </div>
        
        <div className="text-center pt-4">
            <Button asChild className="group flex justify-center gap-2 items-center">
                <Link href="/contact">
                    Start a Project
                    <ArrowIcon />
                </Link>
            </Button>
        </div>
        
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[50rem] xl:grid-rows-2 mt-16">
            {allCaseStudies.map((study, index) => (
                <GridItem key={study.title} study={study} area={caseStudyGridAreas[index % caseStudyGridAreas.length]} />
            ))}
        </ul>

      </div>
    </section>
  );
}
