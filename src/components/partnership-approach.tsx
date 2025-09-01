
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CaseStudiesCarousel } from "./case-studies-carousel";

export function PartnershipApproach() {
  return (
    <section className="min-h-screen w-full py-16 md:py-24 flex items-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
                 <p className="text-sm font-normal uppercase tracking-widest text-primary">03/ Partnership Approach</p>
                <h2 className="font-headline text-[clamp(1.5rem,4vw,2.25rem)] !leading-snug">
                   WE PARTNER WITH AMBITIOUS TEAMS - STARTUPS, AND NON-PROFITS WHO WANT TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE TODAY.
                </h2>
                 <p className="text-muted-foreground text-md md:text-lg">
                    OUR IMPACT SPANS FROM WIDELY-USED OPEN SOURCE AI TOOLS TO ENTERPRISE SOLUTIONS. WE TRANSFORM CUSTOMER EXPERIENCES, UNLOCK DATA INTELLIGENCE, AND SOLVE COMPLEX BUSINESS CHALLENGES. We embed ourselves with your team to understand your vision, challenges, and opportunities, ensuring the solutions we build are perfectly aligned with your goals. Our success is measured by your success, and we're committed to delivering tangible results that fuel growth and innovation. Explore our case studies to see how we've helped businesses like yours thrive.
                </p>
                 <Button asChild className="w-full sm:w-auto">
                    <Link href="/contact">
                        Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
             <div className="space-y-8 mt-8 lg:mt-0">
                 <CaseStudiesCarousel />
            </div>
        </div>
      </div>
    </section>
  );
}
