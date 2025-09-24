
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator, Zap, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { CaseStudyFeature } from '@/components/case-study-feature';
import { WorkflowTemplateLibrary } from '@/components/workflow-template-library';

export const metadata: Metadata = {
  title: 'Intelligent Automation Solutions | RPA & Workflow Design',
  description: 'Design, configure, and deploy automated IT tasks and business workflows with our intelligent automation and RPA solutions. Get AI-powered optimization suggestions.',
};


export default function AutomationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold">Intelligent Automation</h1>
            <p className="text-md md:text-lg text-muted-foreground mt-4">
              Design, configure, and deploy automated IT tasks with unparalleled ease and intelligence. Our platform allows you to visually map out workflows while our AI provides real-time optimization suggestions to enhance efficiency, reduce costs, and minimize errors.
            </p>
        </div>
        
        <WorkflowTemplateLibrary />

        <CaseStudyFeature 
            tags={["Automation", "RPA"]}
            title="Automation in Action"
            description="Discover how we've helped businesses save hundreds of hours and dramatically reduce errors through Robotic Process Automation (RPA) and intelligent workflow design."
        />

         <section className="text-center mt-16 md:mt-24 py-12 md:py-16 bg-secondary/30 rounded-lg px-4">
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
