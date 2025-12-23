
"use client";

import React from "react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import SolutionRecommendationForm from "@/components/solution-recommendation-form";
import { motion } from "framer-motion";
import { AdinkraBackground } from "../ui/adinkra-background";
import { TypeAnimation } from "react-type-animation";
 
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
      <AdinkraBackground />
      <div className="relative z-10 container px-fluid-sm">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-sm font-normal uppercase tracking-widest text-primary">
            Connecting Advantages. Delivering Results.
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="font-headline text-fluid-xl font-bold !leading-tight my-4"
          >
            Do More with Less:
            <span className="block h-[2.4em] md:h-[1.2em]">
              <span className="text-primary whitespace-nowrap">
                <TypeAnimation
                  sequence={[
                    'Smart Automation',
                    2000,
                    'AI Agents',
                    2000,
                    'Actionable Intelligence',
                    2000,
                  ]}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                />
              </span>
            </span>
            <span className="block sm:inline"><span className="whitespace-nowrap">for Growing Businesses.</span></span>
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
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
