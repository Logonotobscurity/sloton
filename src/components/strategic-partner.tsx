
"use client";

import { BrainCircuit, ArrowRight, Cog, Search } from 'lucide-react';
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
import { GlowingEffect } from "@/components/ui/glowing-effect";

const gridItems = [
    {
        area: "md:[grid-area:1/1/2/8]",
        icon: <BrainCircuit className="h-6 w-6" />,
        title: "AI & Automation Strategy",
        description: "From our proprietary AI Assessment to custom model development, we create holistic, data-driven technology roadmaps.",
        features: [
            'Proprietary AI Assessment',
            'Custom Machine Learning Models',
            'Robotic Process Automation (RPA)',
            'Predictive Analytics & BI',
        ],
        isDialog: false,
    },
    {
        area: "md:[grid-area:2/1/3/8]",
        icon: <Cog className="h-6 w-6" />,
        title: "Custom Platform Development",
        description: "We build high-performance web and mobile apps, scalable e-commerce platforms, and optimized database architectures.",
         features: [
            'High-Performance Web & Mobile Apps',
            'Scalable E-commerce Platforms',
            'Secure API & System Integrations',
            'Optimized Database Architecture',
        ],
        isDialog: false,
    },
    {
        area: "md:[grid-area:1/8/2/13]",
        icon: <Search className="h-6 w-6" />,
        title: "Free AI Business Assessment",
        description: "Get an instant, data-driven analysis of your AI readiness and a high-level technology roadmap.",
        isDialog: true,
        dialogContent: <SolutionRecommendationForm />,
        dialogTitle: "AI Business Assessment",
        dialogDescription: "Describe your business needs to receive tailored IT solution recommendations from our AI consultant.",
        ctaText: "Launch Assessment"
    },
    {
        area: "md:[grid-area:2/8/3/13]",
        icon: <Cog className="h-6 w-6" />,
        title: "Automation Task Designer",
        description: "Describe a repetitive task or workflow and get a configured, optimized automation plan in seconds.",
        isDialog: true,
        dialogContent: <TaskAutomationForm />,
        dialogTitle: "Automation Task Designer",
        dialogDescription: "Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.",
        ctaText: "Launch Designer"
    },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  features?: string[];
  children?: React.ReactNode;
}

const GridItem = ({ area, icon, title, description, features, children }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-secondary/30 border-border/50">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-background dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="flex-1 space-y-4">
                <div className="w-fit rounded-lg bg-primary/10 text-primary p-2">
                    {icon}
                </div>
                <h3 className="font-semibold text-xl text-foreground">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm">
                    {description}
                </p>
                 {features && (
                    <ul className="space-y-2 pt-2">
                        {features.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                            <svg className="h-4 w-4 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="text-muted-foreground text-xs">{detail}</span>
                        </li>
                        ))}
                    </ul>
                )}
            </div>
           {children && <div className="mt-auto">{children}</div>}
        </div>
      </div>
    </li>
  );
};


export function StrategicPartner() {
  return (
    <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
             <p className="text-sm font-normal uppercase tracking-widest text-primary">01/ The Process</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">
                Only 3% of tech consultants combine deep AI expertise with strategic business acumen. <span className="text-primary">We are in that 3%.</span>
            </h2>
            <p className="text-muted-foreground md:text-lg mt-4">
              Our value isn't just in understanding technology; it's in applying it to solve your core business challenges. We provide a clear, structured pathway to integrating technology that drives real business results, starting with our free, interactive tools.
            </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2">
           {gridItems.map((item: any) => {
                if (item.isDialog) {
                    return (
                        <Dialog key={item.title}>
                            <DialogTrigger asChild>
                                 <li className={`min-h-[14rem] list-none ${item.area} cursor-pointer group`}>
                                    <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-secondary/30 border-border/50">
                                        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01}/>
                                        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-background dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                                            <div className="flex-1 space-y-4">
                                                <div className="w-fit rounded-lg bg-primary/10 text-primary p-2">
                                                    {item.icon}
                                                </div>
                                                <h3 className="font-semibold text-xl text-foreground">
                                                    {item.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="flex items-center text-sm font-semibold text-primary group-hover:underline">
                                                {item.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px] bg-background">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl flex items-center gap-2">{item.icon} {item.dialogTitle}</DialogTitle>
                                    <DialogDescription>{item.dialogDescription}</DialogDescription>
                                </DialogHeader>
                                {item.dialogContent}
                            </DialogContent>
                        </Dialog>
                    );
                }
                return (
                    <GridItem
                        key={item.title}
                        area={item.area}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        features={item.features}
                    />
                );
            })}
        </ul>
      </div>
    </section>
  );
}
