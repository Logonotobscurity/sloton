
import { caseStudies, CaseStudy } from "@/lib/case-studies";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, BrainCircuit, Zap } from "lucide-react";
import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { BottomCta } from "@/components/bottom-cta";

export const metadata: Metadata = {
  title: "Industry Use Cases & Case Studies | LOG_ON",
  description:
    "Explore how LOG_ON drives success across various sectors like Healthcare, Finance, E-Commerce, and Manufacturing with tailored automation and AI solutions.",
};

interface Industry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  caseStudies: CaseStudy[];
}

const industries: Industry[] = [
    {
        id: "finance",
        name: "Finance & Banking",
        description: "Enhancing security, compliance, and customer experiences with intelligent automation.",
        challenges: [
            "Real-time fraud detection and prevention",
            "High volumes of manual data entry and reconciliation",
            "Regulatory compliance and reporting burdens",
        ],
        caseStudies: caseStudies.filter(cs => cs.tags.includes("Finance") || cs.tags.includes("Analytics"))
    },
    {
        id: "healthcare",
        name: "Healthcare",
        description: "Streamlining administrative tasks and improving patient outcomes through technology.",
        challenges: [
            "Administrative burdens of medical billing and coding",
            "Managing patient data securely and ensuring HIPAA compliance",
            "Inefficient patient communication and follow-up",
        ],
        caseStudies: caseStudies.filter(cs => cs.tags.includes("Healthcare") || cs.tags.includes("Chatbot"))
    },
    {
        id: "ecommerce",
        name: "E-Commerce",
        description: "Personalizing customer journeys and optimizing operations for online retailers.",
        challenges: [
            "Providing personalized shopping experiences at scale",
            "High volume of customer support inquiries (order status, returns)",
            "Managing inventory levels and preventing stockouts",
        ],
        caseStudies: caseStudies.filter(cs => cs.tags.includes("E-Commerce") || cs.tags.includes("Web Development"))
    },
];

export default function UseCasesPage() {
  return (
    <div>
      <PageHero
        title="Industry Solutions in Action"
        description="Explore detailed examples of how LOG_ON's technology solutions solve real-world challenges and drive success across various sectors. We tailor our services to meet the unique demands of your industry."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-20">
          {industries.map((industry) => (
            <section key={industry.id} id={industry.id} className="scroll-mt-20">
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mt-4">{industry.name}</h2>
                    <p className="mt-2 text-lg text-muted-foreground">{industry.description}</p>
                    <div className="mt-6 space-y-3">
                         <h3 className="text-lg font-semibold flex items-center gap-2"><Zap className="h-5 w-5 text-accent" /> Key Challenges</h3>
                         <ul className="space-y-2 list-inside list-disc text-muted-foreground">
                            {industry.challenges.map((challenge) => (
                                <li key={challenge}>{challenge}</li>
                            ))}
                        </ul>
                    </div>
                    <Button asChild className="mt-6">
                      <Link href={`/contact?subject=Inquiry%20for%20${industry.name}`}>
                        Get a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-accent" /> Solutions in Action</h3>
                    <div className="space-y-6">
                      {industry.caseStudies.map((study) => (
                        <Card key={study.title} className="overflow-hidden bg-background/80 group transition-all duration-300 hover:shadow-lg hover:border-primary">
                            <div className="grid md:grid-cols-3">
                                <div className="md:col-span-1 overflow-hidden" data-ai-hint={study.dataAiHint}>
                                     <Image
                                        src={study.image}
                                        alt={study.title}
                                        width={study.width}
                                        height={study.height}
                                        className="w-full h-48 md:h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <CardHeader>
                                        <CardDescription>{study.client}</CardDescription>
                                        <CardTitle className="text-lg">{study.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm line-clamp-3">{study.description}</p>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
      </div>
      <BottomCta />
    </div>
  );
}
