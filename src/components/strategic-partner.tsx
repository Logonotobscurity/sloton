import { BrainCircuit, ArrowRight } from 'lucide-react';
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

export function StrategicPartner() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Your Strategic Technology Partner</h2>
            <p className="text-muted-foreground md:text-lg">
              Feeling stuck or unsure which technology to invest in? We build partnerships by turning confusion into clarity. Our goal is to co-create a technology roadmap that delivers tangible results.
            </p>
            <p className="text-muted-foreground md:text-lg">
             Use our free, interactive tool to get instant, AI-powered insights for your specific business challenges. It&apos;s the perfect first step.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer bg-background hover:bg-secondary border-2 border-primary hover:border-primary transition-all transform hover:-translate-y-2">
                  <CardHeader>
                    <BrainCircuit className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl">Free AI Business Assessment</CardTitle>
                    <CardDescription>Get a personalized tech roadmap in minutes. Ideal for identifying growth opportunities and clarifying your needs.</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <p className="flex items-center text-sm font-semibold text-primary group-hover:text-primary transition-colors">
                      Start Your Assessment
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
          </div>
        </div>
      </div>
    </section>
  );
}
