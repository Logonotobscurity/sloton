import { BrainCircuit, Calculator, ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
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

export function StrategicPartner() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Your Strategic Technology Partner</h2>
            <p className="text-muted-foreground md:text-lg">
              We don't just provide services; we build partnerships. Our goal is to understand your unique business challenges and co-create technology solutions that deliver tangible results and a competitive edge.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Use our interactive tools to get instant, AI-powered insights for your business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer bg-secondary/50 hover:bg-secondary border border-transparent hover:border-accent transition-all transform hover:-translate-y-2">
                  <CardHeader>
                    <BrainCircuit className="h-10 w-10 text-accent mb-4" />
                    <CardTitle>Business Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center text-sm text-muted-foreground group-hover:text-accent transition-colors">
                      Get AI-powered recommendations
                      <ArrowRight className="ml-auto h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </p>
                  </CardContent>
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

            <Dialog>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer bg-secondary/50 hover:bg-secondary border border-transparent hover:border-accent transition-all transform hover:-translate-y-2">
                  <CardHeader>
                    <Calculator className="h-10 w-10 text-accent mb-4" />
                    <CardTitle>Project Calculator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="flex items-center text-sm text-muted-foreground group-hover:text-accent transition-colors">
                      Design your automation task
                      <ArrowRight className="ml-auto h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-background">
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-2"><Calculator className="h-6 w-6 text-accent" /> Automation Task Designer</DialogTitle>
                  <DialogDescription>
                    Describe a workflow you want to automate, and our AI will generate a detailed task design, including steps, dependencies, and optimization suggestions.
                  </DialogDescription>
                </DialogHeader>
                <TaskAutomationForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
