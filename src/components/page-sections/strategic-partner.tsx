
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AssessmentCard } from '@/components/shared/assessment-card';
import { DesignerCard } from '@/components/shared/designer-card';

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

export function StrategicPartner() {
    return (
        <section id="strategic-partner" className="py-16 md:py-24 bg-secondary/20 scroll-mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <StrategicPartnerTextContent />
                    <div className="space-y-8">
                        <AssessmentCard customIndex={0} />
                        <DesignerCard customIndex={1} />
                    </div>
                </div>
            </div>
        </section>
    );
}
