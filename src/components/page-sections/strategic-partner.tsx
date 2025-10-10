
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveCard } from '../shared/interactive-card';
import { BrainCircuit, Cog } from 'lucide-react';
import SolutionRecommendationForm from '@/components/solution-recommendation-form';
import { TaskAutomationForm } from '@/components/task-automation-form';

const interactiveCards = [
    {
        icon: <BrainCircuit className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
        title: "Free Business Assessment",
        description: "Our AI will analyze your business and generate a custom report outlining your best opportunities for automation and digital transformation.",
        'aria-label': "Open Free Business Assessment dialog",
        dialogTitle: "Free Business Assessment",
        dialogDescription: "Get a customized report showing exactly where automation can save you time and money, with specific solutions for your unique needs.",
        dialogContent: <SolutionRecommendationForm />,
    },
    {
        icon: <Cog className="h-8 w-8 md:h-10 md:w-10 text-primary" />,
        title: "Intelligent Automation Designer",
        description: "Describe any workflow in plain English and our AI will design an optimized automation plan, showing you exactly where you'll save time and money.",
        'aria-label': "Open Intelligent Automation Designer dialog",
        dialogTitle: "Intelligent Automation Designer",
        dialogDescription: "Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.",
        dialogContent: <TaskAutomationForm />,
    }
];

const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const StrategicPartnerTextContent = () => (
    <motion.div
        className="space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
        <motion.p variants={textContentVariants} className="text-sm font-normal uppercase tracking-widest text-primary">What We Do</motion.p>
        <motion.h2 variants={textContentVariants} className="font-headline text-[clamp(2rem,5vw,3rem)] font-bold !leading-snug">
            Make an Impact. Do More with Less.
        </motion.h2>
        <motion.p variants={textContentVariants} className="text-muted-foreground md:text-lg">
            Time and money are valuable commodities. Our solutions focus on precise targets and powerful automation, helping your business run leaner and smarter. We turn complexity into a competitive advantage so you can focus on your vision, not your operations.
        </motion.p>
    </motion.div>
);

export function StrategicPartner() {
    return (
        <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <StrategicPartnerTextContent />
                    <div className="space-y-8">
                        {interactiveCards.map((card, index) => (
                            <InteractiveCard
                                key={index}
                                customIndex={index}
                                {...card}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
