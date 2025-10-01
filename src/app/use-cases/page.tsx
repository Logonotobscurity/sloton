
import {
  Briefcase,
  HeartPulse,
  ShoppingCart,
  Shield,
  Calculator,
  Factory,
  Building,
  Server,
  Truck,
  Zap,
  Phone,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies, CaseStudy } from "@/lib/case-studies";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Industry Use Cases & Case Studies | LOG_ON",
  description:
    "Explore how LOG_ON drives success across various sectors like Healthcare, Finance, E-Commerce, and Manufacturing with tailored automation and AI solutions.",
};

interface GridItemProps {
  area: string;
  study: CaseStudy;
}

const caseStudyGridAreas = [
    "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/6]",
    "md:[grid-area:1/7/2/13] xl:[grid-area:1/6/2/10]",
    "md:[grid-area:2/1/3/7] xl:[grid-area:1/10/2/13]",
    "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/7]",
    "md:[grid-area:3/1/4/13] xl:[grid-area:2/7/3/13]",
];


const GridItem = ({ area, study }: GridItemProps) => {
  return (
    <li className={`min-h-[24rem] list-none ${area} border-l border-border/50`}>
      <div className="relative h-full rounded-3xl p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-background p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6" data-ai-hint={study.dataAiHint}>
            <Image
                src={study.image}
                alt={study.title}
                width={study.width}
                height={study.height}
                className="absolute inset-0 z-0 h-full w-full object-cover opacity-20"
            />
            <div className="relative z-10 flex flex-1 flex-col justify-between gap-3 bg-gradient-to-t from-background/80 via-background/50 to-transparent">
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


export default function UseCasesPage() {
  return (
    <div>
      <PageHero 
        title="Automating Industries"
        description="Explore detailed examples of how LOG_ON's technology solutions drive success across various sectors. We tailor our services to meet the unique demands and challenges of your industry."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">

        <ul className="grid grid-cols-1 grid-rows-none border-t border-border/50 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2 mt-16">
            {caseStudies.map((study, index) => (
                <GridItem key={study.title} study={study} area={caseStudyGridAreas[index % caseStudyGridAreas.length]} />
            ))}
        </ul>

        <div className="text-center mt-16 md:mt-20">
          <p className="text-lg text-muted-foreground">
            Ready to see how we can help your business?
          </p>
          <Link
            href="/contact"
            className="text-primary text-lg font-semibold hover:underline mt-2 inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
