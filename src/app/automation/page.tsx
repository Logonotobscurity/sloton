
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TaskAutomationForm } from '@/components/task-automation-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calculator } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intelligent Automation | LOG_ON connecting Advantages',
  description: 'Design, configure, and deploy automated IT tasks with our intelligent automation platform. Visually map workflows and get AI-powered optimization suggestions.',
};

export default function AutomationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Intelligent Automation</h1>
            <p className="text-lg text-muted-foreground">
              Design, configure, and deploy automated IT tasks with unparalleled ease and intelligence. Our platform allows you to visually map out workflows while our AI provides real-time optimization suggestions to enhance efficiency, reduce costs, and minimize errors.
            </p>
             <p className="text-lg text-muted-foreground">
              From simple notifications to complex, multi-system integrations, turn your operational concepts into reality. Use our designer tool to see how it works.
            </p>
            <Button asChild>
                <Link href="/contact">
                    Discuss your Automation needs
                </Link>
            </Button>
          </div>
          <Card className="bg-secondary/50">
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
      </div>
    </div>
  );
}
