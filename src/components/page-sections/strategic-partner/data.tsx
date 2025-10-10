
"use client";

import React from 'react';
import { BrainCircuit, Cog } from 'lucide-react';
import SolutionRecommendationForm from '@/components/solution-recommendation-form';
import { TaskAutomationForm } from '@/components/task-automation-form';

export const interactiveCards = [
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
