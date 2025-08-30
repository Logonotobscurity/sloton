import { BrainCircuit, ArrowRight, FileText, Lightbulb, BarChart } from 'lucide-react';
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
import { Button } from './ui/button';

export function StrategicPartner() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Your Strategic Technology Partner</h2>
            <p className="text-muted-foreground md:text-lg">
              Feeling stuck or unsure which technology to invest in? We build partnerships by turning confusion into clarity. Our goal is to co-create a technology roadmap that delivers tangible results.
            </p>
            <p className="text-muted-foreground md:text-lg">
             Use our free, interactive tool to get instant, AI-powered insights for your specific business challenges. It takes less than 60 seconds.
            </p>
             <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">Get Your Free AI Assessment</Button>
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
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Step 1: Describe Your Needs</h3>
                <p className="text-muted-foreground">Briefly tell our AI about your goals or challenges. No technical jargon required.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Step 2: Get Instant Analysis</h3>
                <p className="text-muted-foreground">Our AI analyzes your input against thousands of solution models to find the best fit.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <BarChart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Step 3: Receive Your Roadmap</h3>
                <p className="text-muted-foreground">Get a clear, actionable technology roadmap tailored to your specific business case.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
