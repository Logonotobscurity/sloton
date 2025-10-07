"use client";

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/glowing-card';


const technologies = [
    { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png', dataAiHint: "React logo", href: "https://react.dev/" },
    { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', dataAiHint: "Next.js logo", href: "https://nextjs.org/" },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png', dataAiHint: "TypeScript logo", href: "https://www.typescriptlang.org/" },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png', dataAiHint: "Node.js logo", href: "https://nodejs.org/" },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png', dataAiHint: "Python logo", href: "https://www.python.org/" },
    { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png', dataAiHint: "AWS logo", href: "https://aws.amazon.com/" },
    { name: 'Google Cloud', icon: 'https://img.icons8.com/color/96/google-cloud.png', dataAiHint: "Google Cloud logo", href: "https://cloud.google.com/" },
    { name: 'Azure', icon: 'https://img.icons8.com/color/96/microsoft-azure.png', dataAiHint: "Microsoft Azure logo", href: "https://azure.microsoft.com/" },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png', dataAiHint: "Firebase logo", href: "https://firebase.google.com/" },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png', dataAiHint: "Docker logo", href: "https://www.docker.com/" },
    { name: 'Kubernetes', icon: 'https://img.icons8.com/color/96/kubernetes.png', dataAiHint: "Kubernetes logo", href: "https://kubernetes.io/" },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png', dataAiHint: "Git logo", href: "https://git-scm.com/" },
    { name: 'Figma', icon: 'https://img.icons8.com/color/96/figma.png', dataAiHint: "Figma logo", href: "https://www.figma.com/" },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/tailwind_css.png', dataAiHint: "Tailwind CSS logo", href: "https://tailwindcss.com/" },
    { name: 'OpenAI', icon: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg', dataAiHint: "OpenAI logo", href: "https://openai.com/" },
    { name: 'Hugging Face', icon: 'https://www.vectorlogo.zone/logos/huggingface/huggingface-icon.svg', dataAiHint: "Hugging Face logo", href: "https://huggingface.co/" },
];

export function TechStackCarousel() {
  return (
    <section className="bg-secondary/20 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <GlowingCard className="p-8 md:p-12">
            <div 
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
            >
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {technologies.map((tech, index) => (
                        <li key={index}>
                            <a href={tech.href} target="_blank" rel="noopener noreferrer" title={tech.name}>
                                <Image src={tech.icon} alt={tech.name} width={48} height={48} className="h-12 w-auto" />
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {technologies.map((tech, index) => (
                        <li key={index}>
                             <a href={tech.href} target="_blank" rel="noopener noreferrer" title={tech.name}>
                                <Image src={tech.icon} alt={tech.name} width={48} height={48} className="h-12 w-auto" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                <h2 className="text-balance text-3xl font-semibold md:text-4xl font-headline">
                    Business Value First
                </h2>
                <p className="text-muted-foreground">
                    We leverage proven, scalable technology that grows with your business. No legacy systems, no technical debt—just solutions that deliver measurable results today and adapt for tomorrow.
                </p>

                <Button variant="outline" size="sm" asChild>
                    <Link href="/solutions">Explore Our Solutions</Link>
                </Button>
            </div>
        </GlowingCard>
      </div>
    </section>
  );
}
