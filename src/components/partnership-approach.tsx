
"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { CaseStudiesCarousel } from "./case-studies-carousel";

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
         <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                 <div className="space-y-4">
                    <p className="text-sm font-normal uppercase tracking-widest text-primary">03/ Partnership & Results</p>
                    <h2 className="font-headline text-[clamp(1.8rem,5vw,3rem)] font-bold !leading-snug">
                        We embed with your team to deliver results.
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        Our success is measured by your success. We partner with ambitious teams to understand their vision and deliver tangible outcomes that fuel growth and innovation.
                    </p>
                 </div>

                 <div className="space-y-4">
                     <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Trusted & Certified With</h3>
                     <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                        {partners.map(partner => (
                            <div key={partner.name} className="flex items-center gap-3" title={partner.name}>
                                <Image 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    width={32}
                                    height={32}
                                    className="h-8 w-auto"
                                    data-ai-hint={partner.dataAiHint}
                                />
                                <span className="font-semibold text-sm">{partner.name}</span>
                            </div>
                        ))}
                     </div>
                 </div>

                 <div>
                    <Button asChild>
                        <Link href="/contact">
                            Start a Project
                        </Link>
                    </Button>
                </div>
            </div>

            <div>
                <CaseStudiesCarousel />
            </div>
         </div>
      </div>
    </section>
  );
}
