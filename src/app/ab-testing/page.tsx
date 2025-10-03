
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Beaker, CheckCircle, ArrowRight, Lightbulb, Bot, TestTube, Target, Puzzle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'The Ideas Lab | Data-Driven Innovation & A/B Testing',
  description: 'Our Ideas Lab uses rigorous A/B testing to transform creative concepts into data-proven successes. Learn how we validate innovation and build integrated solutions.',
};

const processSteps = [
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "1. Ideate: The Hypothesis",
        description: "Every great innovation starts with a bold 'what if.' We collaborate with you to turn business challenges and creative sparks into testable hypotheses based on our deep industry knowledge."
    },
    {
        icon: <TestTube className="h-8 w-8 text-primary" />,
        title: "2. Test: The Scientific Method",
        description: "Our A/B testing engine is where ideas face the ultimate judge: your audience. We rigorously test variations to gather clean, unbiased data on what truly drives user behavior and conversions."
    },
     {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "3. Validate: Data-Proven Results",
        description: "We transform raw test data into clear, actionable insights. This crucial step separates assumptions from facts, ensuring that strategic decisions are backed by undeniable evidence."
    },
    {
        icon: <Puzzle className="h-8 w-8 text-primary" />,
        title: "4. Integrate: Connecting the Dots",
        description: "An insight is only as valuable as its implementation. We use validated learnings to build robust, integrated solutions that improve your entire digital ecosystem, not just a single metric."
    }
];

const promptA = `
# Prompt A (Vague)

Generate a report for the company [Company Name].
`;

const promptB = `
# Prompt B (Structured)

## ROLE:
You are an expert business analyst.

## TASK:
Generate a concise company report for [Company Name].

## FORMAT:
Return a JSON object with the following keys:
- "companyProfile": { "summary": "...", "industry": "..." }
- "swotAnalysis": { "strengths": [], "weaknesses": [] }

## CONSTRAINTS:
- The summary should be one paragraph.
- Provide exactly 2 strengths and 2 weaknesses.
`;

export default function ABTestingPage() {
  return (
    <div className="bg-background">
      <PageHero
        title="The Ideas Lab: Where Data Validates Innovation"
        description="Our Ideas Lab is powered by a relentless curiosity. Here, we use rigorous A/B testing as the scientific engine to validate creative concepts, turning experimental ideas into data-proven successes that drive your business forward."
        icon={<Beaker className="h-12 w-12 md:h-16 md:w-16 text-primary" />}
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        
        <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">From Hypothesis to Integrated Solution</h2>
                <p className="mt-4 text-md md:text-lg text-muted-foreground leading-relaxed">
                    Our methodology is more than a tool; it's a four-step process that ensures innovation is tied directly to results.
                </p>
            </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step) => (
                    <Card key={step.title} className="bg-secondary/50 flex flex-col text-center items-center p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                        <CardHeader className="p-0 items-center">
                            {step.icon}
                            <CardTitle className="pt-4 text-lg md:text-xl">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">Example: A/B Testing a Prompt</h2>
                <p className="mt-4 text-md md:text-lg text-muted-foreground">
                    Our "Ideas Lab" methodology extends to AI itself. A small change in structure can lead to a dramatic improvement in output quality. Compare the two prompts below designed to generate a company report.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="bg-secondary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-destructive" /> Hypothesis A: Vague Request</CardTitle>
                        <CardDescription>This prompt lacks structure, forcing the AI to guess the desired format and content.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="relative p-4 bg-background/50 rounded-lg">
                            <pre className="whitespace-pre-wrap text-sm font-mono overflow-x-auto">
                                <code>{promptA.trim()}</code>
                            </pre>
                        </div>
                        <div className="mt-4 p-4 border-l-4 border-destructive bg-destructive/10 rounded">
                            <h4 className="font-semibold text-destructive-foreground">Expected Outcome:</h4>
                            <p className="text-sm text-destructive-foreground/80">Inconsistent, often verbose results that are difficult to parse automatically.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                     <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Hypothesis B: Structured Request</CardTitle>
                        <CardDescription>This prompt provides a clear role, task, format, and constraints, ensuring a predictable output.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="relative p-4 bg-background/50 rounded-lg">
                            <pre className="whitespace-pre-wrap text-sm font-mono overflow-x-auto">
                                <code>{promptB.trim()}</code>
                            </pre>
                        </div>
                        <div className="mt-4 p-4 border-l-4 border-primary bg-primary/10 rounded">
                            <h4 className="font-semibold text-primary">Expected Outcome:</h4>
                            <p className="text-sm text-primary/80">Reliable, structured JSON output that can be easily used in an application.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

         <section className="text-center mt-16 md:mt-24 py-12 md:py-16 bg-secondary/30 rounded-lg px-6">
            <h2 className="text-2xl md:text-4xl font-bold font-headline">Ready to Turn Your Ideas Into Results?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our data-driven innovation process can help you achieve your business goals. Schedule a free consultation today.
            </p>
            <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                    <Link href="/contact?subject=AI+Prompt+Optimization">
                        Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}

    