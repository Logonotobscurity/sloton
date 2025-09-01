
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TaskAutomationForm } from '@/components/task-automation-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator, Zap, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { CaseStudyFeature } from '@/components/case-study-feature';

export const metadata: Metadata = {
  title: 'Intelligent Automation Solutions | RPA & Workflow Design',
  description: 'Design, configure, and deploy automated IT tasks and business workflows with our intelligent automation and RPA solutions. Get AI-powered optimization suggestions.',
};

const automationBenefits = [
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: "Increased Efficiency",
        description: "Automate repetitive tasks to free up your team for more strategic work, accelerating productivity across your organization."
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        title: "Cost Reduction",
        description: "Lower operational costs by minimizing manual intervention, reducing human error, and optimizing resource allocation."
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Enhanced Accuracy",
        description: "Improve data accuracy and compliance by creating standardized, automated processes that eliminate manual mistakes."
    }
]

export default function AutomationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Intelligent Automation</h1>
            <p className="text-md md:text-lg text-muted-foreground">
              Design, configure, and deploy automated IT tasks with unparalleled ease and intelligence. Our platform allows you to visually map out workflows while our AI provides real-time optimization suggestions to enhance efficiency, reduce costs, and minimize errors.
            </p>
             <p className="text-md md:text-lg text-muted-foreground">
              From simple notifications to complex, multi-system integrations, turn your operational concepts into reality. Use our designer tool to see how it works or contact us to discuss how we can tailor a solution for your specific needs.
            </p>
            <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">
                    Discuss your Automation needs
                </Link>
            </Button>
          </div>
          <Card className="bg-secondary/50 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mt-8 lg:mt-0">
            <CardHeader>
                <div className="flex items-center gap-2 text-accent">
                    <Calculator className="h-6 w-6" />
                    <CardTitle className="text-2xl">Automation Task Designer</CardTitle>
                </div>
                <CardDescription>
                    Describe your workflow below to generate a configured, optimized task design.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <TaskAutomationForm />
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 md:mt-24 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Why Choose Intelligent Automation?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Implementing automation is more than just a technical upgrade; it's a strategic business decision that unlocks new levels of performance and scalability.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                {automationBenefits.map((benefit) => (
                    <Card key={benefit.title} className="bg-secondary/30">
                        <CardHeader className="flex flex-row items-center gap-4">
                            {benefit.icon}
                            <CardTitle className="text-lg">{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>

        <CaseStudyFeature 
            tags={["Automation", "RPA"]}
            title="Automation in Action"
            description="Discover how we've helped businesses save hundreds of hours and dramatically reduce errors through Robotic Process Automation (RPA) and intelligent workflow design."
        />

         <section className="text-center mt-16 md:mt-24 py-12 md:py-16 bg-background rounded-lg px-4">
            <h2 className="text-2xl md:text-4xl font-bold">Ready to Optimize Your Operations?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our custom automation solutions can revolutionize your business. Schedule a free consultation with our experts today.
            </p>
            <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/contact">
                        Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>
      </div>
    </div>
  );
}
