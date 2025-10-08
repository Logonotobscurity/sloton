
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cog, ArrowRight, Bot } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TaskAutomationForm } from '@/components/task-automation-form';
import { GlowingCard } from '@/components/ui/glowing-card';

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

const CardContentWrapper = ({ isGlow, children }: { isGlow?: boolean; children: React.ReactNode }) => {
    return isGlow ? <GlowingCard className="w-full">{children}</GlowingCard> : <>{children}</>;
};

export function DesignerCard({ customIndex = 0, isGlow = false }: { customIndex?: number; isGlow?: boolean }) {
  const cardBody = (
    <div className="cursor-pointer h-full flex flex-col p-8">
        <CardHeader className="p-0">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="pt-4 text-xl">Intelligent Automation Designer</CardTitle>
        </CardHeader>
        <CardFooter className="p-0 flex-grow items-end pt-2">
            <CardDescription>Describe any workflow in plain English and our AI will design an optimized automation plan, showing you exactly where you'll save time and money.</CardDescription>
        </CardFooter>
        <CardFooter className="p-0 pt-6">
            <Button className="w-full">
                Create a Workflow <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </CardFooter>
    </div>
  );
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CardContentWrapper isGlow={isGlow}>
            {isGlow ? cardBody : (
                <motion.div
                    custom={customIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                >
                    <MotionCard className="group cursor-pointer transition-all duration-300 hover:border-primary hover:-translate-y-2 bg-background/80 flex flex-col h-full">
                        <div className="p-6 md:p-8">
                             <div className="p-3 md:p-4 rounded-full bg-primary/10 mb-4 w-fit">
                                <Cog className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                            </div>
                            <CardTitle className="text-xl">Intelligent Automation Designer</CardTitle>
                            <CardDescription className="mt-2">
                                Describe any workflow in plain English and our AI will design an optimized automation plan, showing you exactly where you'll save time and money.
                            </CardDescription>
                        </div>
                        <CardFooter className="p-6 md:p-8 pt-0 mt-auto">
                            <Button variant="ghost" className="p-0 text-primary group-hover:text-primary/90">
                                Try It Free <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </MotionCard>
                </motion.div>
            )}
        </CardContentWrapper>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2"><Cog className="h-6 w-6 text-primary" /> Automation Task Designer</DialogTitle>
          <DialogDescription>
            Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.
          </DialogDescription>
        </DialogHeader>
        <TaskAutomationForm />
      </DialogContent>
    </Dialog>
  );
}
