
'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SolutionRecommendationForm } from '@/components/solution-recommendation-form';
import { BrainCircuit, Cog, ArrowRight } from 'lucide-react';
import { TaskAutomationForm } from '../task-automation-form';
import { GlowingCard } from './glowing-card';
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';


const AnimatedLine = ({ inView }: { inView: boolean }) => {
  const isMobile = useIsMobile();
  return (
    <svg
      width={isMobile ? '2' : '3'}
      height="100%"
      viewBox={`0 0 ${isMobile ? '2' : '3'} 576`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-1/2 -translate-x-1/2"
    >
      <motion.path
        d={`M${isMobile ? 1 : 1.5} 0V576`}
        stroke="url(#paint0_linear_14_33)"
        strokeWidth={isMobile ? '2' : '3'}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_33"
          x1={isMobile ? '0' : '0'}
          y1="0"
          x2={isMobile ? '0' : '0'}
          y2="576"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#57D24C" />
          <stop offset="1" stopColor="#57D24C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  );
};

export default function ContentSection() {
    const isMobile = useIsMobile();
  const { ref: inViewRef, inView } = useIntersectionObserver({
    triggerOnce: true,
    threshold: isMobile ? 0.3 : 0.8,
  });

  return (
    <div className="relative overflow-hidden bg-background">
      <Section className="container relative z-10 mx-auto min-h-screen max-w-4xl px-4 pt-48">
        <div className="text-center">
          <p className="text-sm font-normal uppercase tracking-widest text-primary">
            Your Partner in Growth
          </p>
          <h1 className="font-headline text-[clamp(2.5rem,8vw,5rem)] !leading-tight my-4">
            The modern, AI-powered <span className="text-primary">tech solution</span>
          </h1>
          <p className="mx-auto max-w-2xl text-md text-muted-foreground md:text-xl">
            We build and manage scalable, secure, and intelligent systems that
            help businesses cut costs, automate processes, and scale faster. Get
            a free AI assessment to see how we can help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg">Get Your Free AI Assessment</Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl bg-background md:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    Free AI Business Assessment
                  </DialogTitle>
                  <DialogDescription>
                    Describe your business needs to receive tailored IT
                    solution recommendations from our AI consultant. This tool
                    helps you identify the best technology strategies for your
                    goals.
                  </DialogDescription>
                </DialogHeader>
                <SolutionRecommendationForm />
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/solutions">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </Section>
      <div
        ref={inViewRef}
        className="container relative z-10 mx-auto mt-24 max-w-5xl px-4 pb-24 md:mt-32"
      >
        <div className="relative">
          <AnimatedLine inView={inView} />

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <Section className="md:mt-24">
              <p className="text-sm font-normal uppercase tracking-widest text-primary">
                01/ The Process
              </p>
              <h2 className="font-headline text-3xl font-bold !leading-snug md:text-4xl">
                A Clear Path to Digital Transformation
              </h2>
              <p className="mt-4 text-md text-muted-foreground md:text-lg">
                We provide a clear, structured pathway to integrating
                technology that drives real business results. Our engagement
                model is designed to deliver immediate value while building a
                foundation for long-term growth. See how our free, interactive
                tools can kickstart your journey.
              </p>
            </Section>
            <Section className="row-start-2 md:row-start-auto">
              <div className="grid gap-8">
                <Dialog>
                  <GlowingCard>
                    <div className="flex h-full flex-col p-6 text-center">
                      <CardHeader className="p-0 items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <BrainCircuit className="h-6 w-6" />
                        </div>
                        <CardTitle className="pt-4 text-xl md:text-2xl">{`Free AI Business Assessment`}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-4 flex-grow">
                        <p className="text-muted-foreground">
                          Get a high-level technology roadmap tailored to your
                          business goals. Ideal for strategic planning.
                        </p>
                      </CardContent>
                      <CardFooter className="p-0 pt-6 mt-auto flex justify-center">
                        <DialogTrigger asChild>
                          <Button variant="secondary" className="group">
                            Launch Assessment Tool{' '}
                            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                          </Button>
                        </DialogTrigger>
                      </CardFooter>
                    </div>
                  </GlowingCard>
                  <DialogContent className="max-w-[600px] bg-background">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-2">
                        <BrainCircuit className="h-6 w-6 text-accent" /> AI
                        Business Assessment
                      </DialogTitle>
                      <DialogDescription>
                        Describe your business needs to receive tailored IT
                        solution recommendations from our AI consultant. This
                        tool helps you identify the best technology strategies
                        for your goals.
                      </DialogDescription>
                    </DialogHeader>
                    <SolutionRecommendationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </Section>

            <Section className="md:mt-32">
              <p className="text-sm font-normal uppercase tracking-widest text-primary">
                Why We&apos;re Different
              </p>
              <h2 className="font-headline text-3xl font-bold !leading-tight md:text-4xl">
                Only 3% of tech consultants combine deep AI expertise with
                strategic business acumen.{' '}
                <span className="text-primary">We are in that 3%.</span>
              </h2>
              <p className="text-md mt-4 text-muted-foreground md:text-lg">
                Our value isn&apos;t just in understanding technology;
                it&apos;s in applying it to solve your core business
                challenges. Our proprietary assessment methodology analyzes 47
                unique business dimensions to create a holistic, data-driven
                technology roadmap. This comprehensive approach allows us to
                uncover opportunities and efficiencies that siloed specialists
                miss, delivering integrated solutions that produce measurable
                results.
              </p>
            </Section>

            <Section className="row-start-4 md:row-start-auto">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
                <Dialog>
                  <GlowingCard>
                    <div className="flex h-full flex-col p-6 text-center">
                      <CardHeader className="p-0 items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Cog className="h-6 w-6" />
                        </div>
                        <CardTitle className="pt-4 text-xl md:text-2xl">
                          Automation Task Designer
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-4 flex-grow">
                        <p className="text-muted-foreground">
                          Describe a repetitive task or workflow and get a
                          configured, optimized automation plan in seconds.
                        </p>
                      </CardContent>
                      <CardFooter className="p-0 pt-6 mt-auto flex justify-center">
                        <DialogTrigger asChild>
                          <Button variant="secondary" className="group">
                            Design an Automation{' '}
                            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                          </Button>
                        </DialogTrigger>
                      </CardFooter>
                    </div>
                  </GlowingCard>
                  <DialogContent className="max-w-[600px] bg-background">
                    <DialogHeader>
                      <DialogTitle className="text-2xl flex items-center gap-2">
                        <Cog className="h-6 w-6 text-accent" /> Automation Task
                        Designer
                      </DialogTitle>
                      <DialogDescription>
                        Describe a workflow to generate a configured, optimized
                        task design, complete with AI suggestions.
                      </DialogDescription>
                    </DialogHeader>
                    <TaskAutomationForm />
                  </DialogContent>
                </Dialog>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}
