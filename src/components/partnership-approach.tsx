
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { CaseStudiesCarousel } from "./case-studies-carousel";

const partners = [
    { name: "Google Cloud Partner", logo: "https://img.icons8.com/color/96/google-cloud.png", dataAiHint: "Google Cloud logo" },
    { name: "AWS Partner", logo: "https://img.icons8.com/color/96/amazon-web-services.png", dataAiHint: "AWS logo" },
    { name: "Microsoft Partner", logo: "https://img.icons8.com/color/96/microsoft-azure.png", dataAiHint: "Microsoft Azure logo" },
    { name: "Vercel Partner", logo: "https://logowik.com/content/uploads/images/vercel1868.logowik.com.webp", dataAiHint: "Vercel logo" },
];


export function PartnershipApproach() {
  return (
    <section className="min-h-screen w-full py-16 md:py-24 flex items-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
                 <p className="text-sm font-normal uppercase tracking-widest text-primary">03/ Partnership & Results</p>
                <h2 className="font-headline text-[clamp(1.5rem,4vw,2.25rem)] !leading-snug">
                   WE PARTNER WITH AMBITIOUS TEAMS - FROM STARTUPS TO ENTERPRISES - WHO WANT TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE.
                </h2>
                 <p className="text-muted-foreground text-md md:text-lg">
                    Our impact spans from widely-used open source AI tools to mission-critical enterprise solutions. We embed ourselves with your team to understand your vision, challenges, and opportunities, ensuring the solutions we build are perfectly aligned with your goals. Our success is measured by your success, and we're committed to delivering tangible results that fuel growth and innovation.
                </p>
                 <div className="pt-4 space-y-4">
                     <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Trusted & Certified</h3>
                     <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                        {partners.map(partner => (
                            <div key={partner.name} className="flex items-center gap-2" title={partner.name}>
                                <Image 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    width={24}
                                    height={24}
                                    className="h-6 w-auto"
                                    data-ai-hint={partner.dataAiHint}
                                    unoptimized
                                />
                                <span className="text-sm text-muted-foreground">{partner.name}</span>
                            </div>
                        ))}
                         <div className="flex items-center gap-2" title="Cybersecurity & Compliance">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                             <span className="text-sm text-muted-foreground">Security Compliant</span>
                         </div>
                     </div>
                 </div>
                 <Button asChild className="w-full sm:w-auto mt-4">
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
