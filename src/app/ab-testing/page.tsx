
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Beaker, CheckCircle, ArrowRight, Lightbulb, Bot } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'A/B Testing for Prompts | Optimize Your AI Results',
  description: 'Use A/B testing to refine your AI prompts and achieve better, more consistent results. Turn good outputs into great ones with data-driven prompt engineering.',
};

const benefits = [
    "Improve AI response quality and accuracy",
    "Increase consistency and reliability of outputs",
    "Reduce generative AI costs by getting it right the first time",
    "Discover which instructions yield the best results",
    "Make confident, data-backed decisions in your AI strategy"
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
        title="A/B Testing for AI Prompts"
        description="Stop guessing which prompts work and start knowing. Our A/B testing methodology for prompt engineering allows you to test variations of your instructions, formats, and constraints to discover what truly drives optimal AI performance. Make small changes that lead to big results."
        icon={<Beaker className="h-12 w-12 md:h-16 md:w-16 text-primary" />}
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-headline">Data-Driven Prompt Engineering</h2>
            <p className="text-md md:text-lg text-muted-foreground">
              Our tools and expertise provide clear insights into how AI models respond to different instructions, empowering you to create better, more reliable generative systems.
            </p>
             <div className="space-y-3 pt-4">
                {benefits.map(benefit => (
                    <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{benefit}</span>
                    </div>
                ))}
            </div>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact?subject=Prompt+Optimization">Contact Us For a Prompt Audit</Link>
            </Button>
          </div>
          <div className="relative h-80 lg:h-96 mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 transition-transform duration-300 ease-in-out hover:rotate-0"></div>
            <Card className="absolute inset-2 sm:inset-5 bg-background/80 backdrop-blur-lg rotate-2 transition-transform duration-300 ease-in-out hover:rotate-0 hover:scale-105">
                 <CardHeader>
                    <div className="flex justify-center mb-4">
                        <Bot className="h-12 w-12 md:h-16 md:w-16 text-primary" />
                    </div>
                    <CardTitle className="text-center text-2xl md:text-3xl">Prompt Optimization</CardTitle>
                    <CardDescription className="text-center">
                        Test, measure, and refine for AI success.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-sm md:text-base">
                    <p>Unlock the power of data to create AI prompts that deliver consistent, high-quality results every time.</p>
                </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">Example: A/B Testing a Prompt</h2>
                <p className="mt-4 text-md md:text-lg text-muted-foreground">
                    A small change in structure can lead to a dramatic improvement in output quality. Compare the two prompts below designed to generate a company report.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <Card className="bg-secondary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-destructive" /> Prompt A: Vague Request</CardTitle>
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
                        <CardTitle className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Prompt B: Structured Request</CardTitle>
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
            <h2 className="text-2xl md:text-4xl font-bold font-headline">Ready to Improve Your AI's Performance?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our prompt engineering and A/B testing services can help you achieve your business goals. Schedule a free consultation today.
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

    