
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function PartnershipApproach() {
  return (
    <section className="min-h-screen w-full py-24 sm:py-32 flex items-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                 <p className="text-sm font-normal uppercase tracking-widest text-primary">03/ Partnership Approach</p>
                <h2 className="font-headline text-[clamp(1.5rem,4vw,2.25rem)] !leading-snug">
                   WE PARTNER WITH AMBITIOUS TEAMS - STARTUPS, AND NON-PROFITS WHO WANT TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE TODAY.
                </h2>
                 <p className="text-muted-foreground text-lg">
                    OUR IMPACT SPANS FROM WIDELY-USED OPEN SOURCE AI TOOLS TO ENTERPRISE SOLUTIONS. WE TRANSFORM CUSTOMER EXPERIENCES, UNLOCK DATA INTELLIGENCE, AND SOLVE COMPLEX BUSINESS CHALLENGES.
                </p>
                 <Button asChild>
                    <Link href="/contact">
                        Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
             <div className="space-y-8">
                 <div className="bg-secondary/50 rounded-lg aspect-square">
                    <Image 
                        src="https://picsum.photos/600/600" 
                        alt="A diverse team collaborating on a technology project" 
                        width={600} 
                        height={600}
                        className="rounded-lg object-cover w-full h-full"
                        data-ai-hint="team collaboration"
                    />
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
