
import { BrainCircuit, ArrowRight, Calculator } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SolutionRecommendationForm } from './solution-recommendation-form';
import { TaskAutomationForm } from './task-automation-form';
import { Button } from './ui/button';
import { DialogFormWrapper } from './dialog-form-wrapper';
import { CommunityLeadForm } from './community-lead-form';

export function StrategicPartner() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-normal uppercase tracking-widest text-primary">01/ Your Strategic Partner</p>
            <h2 className="font-headline text-2xl md:text-4xl font-bold">A Clear Path to Digital Transformation</h2>
            <p className="text-muted-foreground md:text-lg">
              We provide a clear, structured pathway to integrating technology that drives real business results. Our engagement model is designed to deliver immediate value while building a foundation for long-term growth. See how our free, interactive tools can kickstart your journey.
            </p>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">1</div>
                    <div>
                        <h3 className="font-semibold">Free AI Assessment</h3>
                        <p className="text-muted-foreground">Get an instant, data-driven analysis of your AI readiness and a high-level technology roadmap. No commitment required.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/80 text-primary-foreground font-bold flex-shrink-0">2</div>
                    <div>
                        <h3 className="font-semibold">Detailed Consultation</h3>
                        <p className="text-muted-foreground">Our experts dive deep into your assessment results, refining the strategy and aligning it with your specific business goals.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/60 text-primary-foreground font-bold flex-shrink-0">3</div>
                     <div>
                        <h3 className="font-semibold">Custom Proposal & Implementation</h3>
                        <p className="text-muted-foreground">Receive a comprehensive proposal with a clear scope, timeline, and ROI projections, followed by expert implementation.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="space-y-8 mt-8 lg:mt-0">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-background group flex flex-col text-left cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2">
                  <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <BrainCircuit className="h-6 w-6" />
                      </div>
                      <CardTitle className="pt-4 text-xl md:text-2xl">Free AI Business Assessment</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                      <p className="text-muted-foreground">Get a high-level technology roadmap tailored to your business goals. Ideal for strategic planning. This tool helps you identify the best technology strategies for your goals.</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                      <div className="text-primary font-semibold flex items-center">
                      Launch Assessment Tool <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
              </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-background">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2"><BrainCircuit className="h-6 w-6 text-accent" /> AI Business Assessment</DialogTitle>
                  <DialogDescription>
                    Describe your business needs to receive tailored IT solution recommendations from our AI consultant. This tool helps you identify the best technology strategies for your goals.
                  </DialogDescription>
                </DialogHeader>
                <SolutionRecommendationForm />
              </DialogContent>
            </Dialog>
            
            <DialogFormWrapper
              trigger={
                <Button variant="secondary" className="w-full">
                    Or, Design a Specific Automation Task
                </Button>
              }
              title="Automation Task Designer"
              description="Describe a workflow to generate a configured, optimized task design, complete with AI suggestions."
              form={<TaskAutomationForm />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
