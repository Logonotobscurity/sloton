
"use client";

import React from "react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from "../solution-recommendation-form";
import { motion } from "framer-motion";
import { AdinkraBackground } from "../ui/adinkra-background";
 
export function Hero() {

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <AdinkraBackground />
        <div className="relative z-10 container px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
                <motion.p variants={itemVariants} className="text-sm font-normal uppercase tracking-widest text-primary">
                    Connecting Advantages. Delivering Results.
                </motion.p>
                <motion.h1 variants={itemVariants} className="font-headline text-[clamp(2.5rem,8vw,5rem)] font-bold !leading-tight my-4">
                    Do More with Less: <span className="text-primary">Smart Automation</span> for Growing Businesses.
                </motion.h1>
                <motion.p variants={itemVariants} className="text-md md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Stop wasting time on disconnected tools. Get a clear roadmap to integrated systems that save time and drive revenue growth.
                </motion.p>
                <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="lg">Get Your Free Efficiency Assessment</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
                            <DialogHeader>
                                <DialogTitle className="text-2xl">Free AI Business Assessment</DialogTitle>
                                <DialogDescription>
                                Describe your business needs to receive tailored IT solution recommendations from our AI consultant.
                                </DialogDescription>
                            </DialogHeader>
                            <SolutionRecommendationForm />
                        </DialogContent>
                    </Dialog>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/solutions">See How We Drive Growth</Link>
                    </Button>
                </motion.div>
            </motion.div>
      </div>
    </section>
  );
}
