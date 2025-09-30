
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">Built on a Foundation of Trusted Partners</h2>
                <p className="text-muted-foreground md:text-lg">
                    We partner with ambitious teams to deliver tangible outcomes. Our success is measured by your success, and we leverage the best technologies to build solutions that fuel growth and innovation.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-4">
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
                            <span className="font-semibold text-sm">{partner.name.replace(" Partner", "")}</span>
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <Button asChild>
                        <Link href="/contact">
                            Start a Project
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="max-w-xl mx-auto w-full">
                <CaseStudiesCarousel />
            </div>
        </div>
      </div>
    </section>
  );
}
