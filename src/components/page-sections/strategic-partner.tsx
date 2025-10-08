
"use client";

import React from 'react';
import { BrainCircuit, ArrowRight, Cog } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from '../solution-recommendation-form';
import { TaskAutomationForm } from '../task-automation-form';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

const MotionCard = motion(Card);

const ActionCard = ({ icon, title, description, buttonText, dialogTitle, dialogDescription, dialogContent, customIndex }: { icon: React.ReactNode, title: string, description: string, buttonText: string, dialogTitle: string, dialogDescription: string, dialogContent: React.ReactNode, customIndex: number }) => (
    <Dialog>
        <DialogTrigger asChild>
            <motion.div
              custom={customIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <MotionCard className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-background/80 flex flex-col h-full">
                  <CardHeader className="flex-grow p-6 md:p-8">
                      <div className="p-3 md:p-4 rounded-full bg-primary/10 mb-4 w-fit">
                          {icon}
                      </div>
                      <CardTitle className="text-xl">{title}</CardTitle>
                      <CardDescription className="mt-2">
                          {description}
                      </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-6 md:p-8 pt-0">
                      <Button variant="ghost" className="p-0 text-primary group-hover:text-primary/90">
                          {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                  </CardFooter>
              </MotionCard>
            </motion.div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
            <DialogHeader>
                <DialogTitle className="text-2xl">{dialogTitle}</DialogTitle>
                <DialogDescription>
                    {dialogDescription}
                </DialogDescription>
            </DialogHeader>
            {dialogContent}
        </DialogContent>
    </Dialog>
);

const StrategicPartnerTextContent = () => (
    <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-sm font-normal uppercase tracking-widest text-primary">What We Do</motion.p>
        <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="font-headline text-[clamp(2rem,5vw,3rem)] font-bold !leading-snug">
            Make an Impact. Do More with Less.
        </motion.h2>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-muted-foreground md:text-lg">
            Time and money are valuable commodities. Our solutions focus on precise targets and powerful automation, helping your business run leaner and smarter. We turn complexity into a competitive advantage so you can focus on your vision, not your operations.
        </motion.p>
    </motion.div>
);

const ActionCards = () => (
     <div className="space-y-8">
        <ActionCard
            icon={<BrainCircuit className="h-8 w-8 md:h-10 md:w-10 text-primary" />}
            title="Free Business Assessment"
            description="Our AI will analyze your business and generate a custom report outlining your best opportunities for automation and digital transformation."
            buttonText="Get Your Custom Plan"
            dialogTitle="Free Business Assessment"
            dialogDescription="Get a customized report showing exactly where automation can save you time and money, with specific solutions for your unique needs."
            dialogContent={<SolutionRecommendationForm />}
            customIndex={0}
        />
        <ActionCard
            icon={<Cog className="h-8 w-8 md:h-10 md:w-10 text-primary" />}
            title="Intelligent Automation Designer"
            description="Describe any workflow in plain English and our AI will design an optimized automation plan, showing you exactly where you'll save time and money."
            buttonText="Try It Free"
            dialogTitle="Intelligent Automation Designer"
            dialogDescription="Describe any workflow in plain English. Our AI creates your optimized automation plan in seconds—showing exactly where you'll save time and money."
            dialogContent={<TaskAutomationForm />}
            customIndex={1}
        />
    </div>
);


export function StrategicPartner() {
    return (
        <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <StrategicPartnerTextContent />
                    <ActionCards />
                </div>
            </div>
        </section>
    );
}
