
"use client";

import { BrainCircuit, ArrowRight, Cog, Search, Zap, Code } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';

const numberedList = [
    { number: "01", text: "We start with a free, no-obligation AI Assessment to understand your unique business challenges and goals." },
    { number: "02", text: "Our AI generates a high-level technology roadmap, identifying key areas for automation and cost savings." },
    { number: "03", text: "We then partner with you to implement the solutions, ensuring they are perfectly aligned with your strategic objectives." },
];

const carouselItems = [
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        title: "AI & Automation Strategy",
        description: "From our proprietary AI Assessment to custom model development, we create holistic, data-driven technology roadmaps.",
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Robotic Process Automation (RPA)",
        description: "We automate your repetitive, manual tasks, freeing up your team to focus on high-value work that drives growth.",
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Custom Platform Development",
        description: "We build high-performance web and mobile apps, scalable e-commerce platforms, and optimized database architectures.",
    },
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Predictive Analytics & BI",
        description: "Unlock the power of your data with custom dashboards and predictive models that inform your business strategy.",
    }
];


export function StrategicPartner() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">01/ The Process</p>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    Only 3% of tech consultants combine deep AI expertise with strategic business acumen. <span className="text-primary">We are in that 3%.</span>
                </h2>
                <p className="text-muted-foreground md:text-lg">
                Our value isn't just in understanding technology; it's in applying it to solve your core business challenges. We provide a clear, structured pathway to integrating technology that drives real business results.
                </p>
                <div className="space-y-6 pt-4">
                    {numberedList.map((item) => (
                    <div key={item.number} className="flex items-start gap-4">
                        <div className="flex-shrink-0 text-2xl font-bold text-primary">{item.number}</div>
                        <p className="text-muted-foreground">{item.text}</p>
                    </div>
                    ))}
                </div>
            </div>
             <div className="lg:max-w-lg mx-auto">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {carouselItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="bg-background/80 backdrop-blur-sm h-full">
                                <CardHeader className="items-center text-center">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="pt-2">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                     <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
                     <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
                </Carousel>
            </div>
         </div>
      </div>
    </section>
  );
}
