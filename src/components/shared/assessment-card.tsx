
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ArrowRight } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import SolutionRecommendationForm from '@/components/solution-recommendation-form';

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

export function AssessmentCard({ customIndex = 0 }: { customIndex?: number }) {
    return (
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
                            <BrainCircuit className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Free Business Assessment</CardTitle>
                        <CardDescription className="mt-2">
                            Our AI will analyze your business and generate a custom report outlining your best opportunities for automation and digital transformation.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-6 md:p-8 pt-0">
                        <span className="p-0 text-primary group-hover:text-primary/90 flex items-center font-semibold">
                            Get Your Custom Plan <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                    </CardFooter>
                </MotionCard>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Free Business Assessment</DialogTitle>
                    <DialogDescription>
                        Get a customized report showing exactly where automation can save you time and money, with specific solutions for your unique needs.
                    </DialogDescription>
                </DialogHeader>
                <SolutionRecommendationForm />
            </DialogContent>
        </Dialog>
    );
}
