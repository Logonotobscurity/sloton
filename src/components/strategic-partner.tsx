"use client";

import { BrainCircuit, ArrowRight, Cog, FileText, UserCheck, Search } from 'lucide-react';
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
        area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
        icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
        title: "Free AI Assessment",
        description: "Get an instant, data-driven analysis of your AI readiness and a high-level technology roadmap. No commitment required.",
        isDialog: false,
    },
    {
        area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
        icon: <UserCheck className="h-4 w-4 text-black dark:text-neutral-400" />,
        title: "Detailed Consultation",
        description: "Our experts dive deep into your assessment results, refining the strategy and aligning it with your specific business goals.",
        isDialog: false,
    },
    {
        area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
        icon: <FileText className="h-4 w-4 text-black dark:text-neutral-400" />,
        title: "Custom Proposal & Implementation",
        description: "Receive a comprehensive proposal with a clear scope, timeline, and ROI projections, followed by expert implementation.",
        isDialog: false,
    },
    {
        area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
        icon: <BrainCircuit className="h-4 w-4 text-black dark:text-neutral-400" />,
        title: "Free AI Business Assessment",
        description: "Get a high-level technology roadmap tailored to your business goals. Ideal for strategic planning.",
        isDialog: true,
        dialogContent: <SolutionRecommendationForm />,
        dialogTitle: "AI Business Assessment",
        dialogDescription: "Describe your business needs to receive tailored IT solution recommendations from our AI consultant."
    },
    {
        area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
        icon: <Cog className="h-4 w-4 text-black dark:text-neutral-400" />,
        title: "Automation Task Designer",
        description: "Describe a repetitive task or workflow and get a configured, optimized automation plan in seconds.",
        isDialog: true,
        dialogContent: <TaskAutomationForm />,
        dialogTitle: "Automation Task Designer",
        dialogDescription: "Describe a workflow to generate a configured, optimized task design, complete with AI suggestions."
    },
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}

const GridItem = ({ area, icon, title, description, children }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
           {children && <div className="mt-4">{children}</div>}
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">A Clear Path to Digital Transformation</h2>
            <p className="text-muted-foreground md:text-lg mt-4">
              We provide a clear, structured pathway to integrating technology that drives real business results. Our engagement model is designed to deliver immediate value while building a foundation for long-term growth. See how our free, interactive tools can kickstart your journey.
            </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
           {gridItems.map((item) => {
                if (item.isDialog) {
                    return (
                        <Dialog key={item.title}>
                            <DialogTrigger asChild>
                                 <li className={`min-h-[14rem] list-none ${item.area} cursor-pointer`}>
                                  <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                                    <GlowingEffect
                                      spread={40}
                                      glow={true}
                                      disabled={false}
                                      proximity={64}
                                      inactiveZone={0.01}
                                    />
                                    <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                                      <div className="relative flex flex-1 flex-col justify-between gap-3">
                                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                                          {item.icon}
                                        </div>
                                        <div className="space-y-3">
                                          <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                            {item.title}
                                          </h3>
                                          <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                            {item.description}
                                          </h2>
                                        </div>
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
                    />
                );
            })}
        </ul>
      </div>
    </section>
  );
}
