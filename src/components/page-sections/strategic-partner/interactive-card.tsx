
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

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

export const InteractiveCard = ({ icon, title, description, dialogTitle, dialogDescription, dialogContent, customIndex, 'aria-label': ariaLabel }: any) => (
    <Dialog>
        <DialogTrigger asChild>
            <motion.button
                custom={customIndex}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                aria-label={ariaLabel}
                className="w-full text-left"
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
                        <span className="p-0 text-primary group-hover:text-primary/90 flex items-center font-semibold">
                            Get Your Custom Plan <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                    </CardFooter>
                </MotionCard>
            </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background">
            <DialogHeader>
                <DialogTitle className="text-2xl">{dialogTitle}</DialogTitle>
                <DialogDescription>{dialogDescription}</DialogDescription>
            </DialogHeader>
            {dialogContent}
        </DialogContent>
    </Dialog>
);

