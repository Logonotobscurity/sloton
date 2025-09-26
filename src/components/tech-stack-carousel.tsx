
"use client";

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import * as React from 'react'
import Image from 'next/image';

const technologies = [
    { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png', dataAiHint: "React logo" },
    { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', dataAiHint: "Next.js logo" },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png', dataAiHint: "TypeScript logo" },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png', dataAiHint: "Node.js logo" },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png', dataAiHint: "Python logo" },
    { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png', dataAiHint: "AWS logo" },
    { name: 'Google Cloud', icon: 'https://img.icons8.com/color/96/google-cloud.png', dataAiHint: "Google Cloud logo" },
    { name: 'Azure', icon: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg', dataAiHint: "Microsoft Azure logo" },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png', dataAiHint: "Firebase logo" },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png', dataAiHint: "Docker logo" },
    { name: 'Kubernetes', icon: 'https://img.icons8.com/color/96/kubernetes.png', dataAiHint: "Kubernetes logo" },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png', dataAiHint: "Git logo" },
    { name: 'Figma', icon: 'https://img.icons8.com/color/96/figma.png', dataAiHint: "Figma logo" },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/tailwind_css.png', dataAiHint: "Tailwind CSS logo" },
    { name: 'OpenAI', icon: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg', dataAiHint: "OpenAI logo" },
    { name: 'Hugging Face', icon: 'https://www.vectorlogo.zone/logos/huggingface/huggingface-icon.svg', dataAiHint: "Hugging Face logo" },
];

const IntegrationCard = ({
    children,
    className,
    borderClassName,
}: {
    children: React.ReactNode
    className?: string
    borderClassName?: string
}) => {
    return (
        <div className={cn('bg-background relative flex size-20 items-center justify-center rounded-xl dark:bg-transparent', className)}>
            <div
                role="presentation"
                className={cn('absolute inset-0 rounded-xl border border-black/20 dark:border-white/25', borderClassName)}
            />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    )
}

export function TechStackCarousel() {
    // We'll select a subset of technologies to display in this styled grid.
    const displayedTech = [
        technologies.find(t => t.name === 'React'),
        technologies.find(t => t.name === 'Next.js'),
        technologies.find(t => t.name === 'TypeScript'),
        technologies.find(t => t.name === 'Node.js'),
        technologies.find(t => t.name === 'Python'),
        technologies.find(t => t.name === 'AWS'),
        technologies.find(t => t.name === 'Google Cloud'),
        technologies.find(t => t.name === 'Firebase'),
    ].filter(Boolean) as { name: string; icon: string; dataAiHint: string }[];

    return (
        <section className="bg-secondary/20 py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="dark:bg-muted/50 relative mx-auto w-fit rounded-2xl">
                    <div
                        role="presentation"
                        className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div>
                    <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                        <IntegrationCard>
                            <Image src={displayedTech[0].icon} alt={displayedTech[0].name} width={32} height={32} />
                        </IntegrationCard>
                        <IntegrationCard>
                             <Image src={displayedTech[1].icon} alt={displayedTech[1].name} width={32} height={32} />
                        </IntegrationCard>
                    </div>
                    <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                        <IntegrationCard>
                             <Image src={displayedTech[2].icon} alt={displayedTech[2].name} width={32} height={32} />
                        </IntegrationCard>
                       
                        <IntegrationCard
                            borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                            className="dark:bg-white/10">
                             <Image src={displayedTech[3].icon} alt={displayedTech[3].name} width={32} height={32} />
                        </IntegrationCard>
                        <IntegrationCard>
                           <Image src={displayedTech[4].icon} alt={displayedTech[4].name} width={32} height={32} />
                        </IntegrationCard>
                    </div>

                    <div className="mx-auto flex w-fit justify-center gap-2">
                        <IntegrationCard>
                            <Image src={displayedTech[5].icon} alt={displayedTech[5].name} width={32} height={32} />
                        </IntegrationCard>

                        <IntegrationCard>
                             <Image src={displayedTech[6].icon} alt={displayedTech[6].name} width={32} height={32} />
                        </IntegrationCard>
                         <IntegrationCard>
                             <Image src={displayedTech[7].icon} alt={displayedTech[7].name} width={32} height={32} />
                        </IntegrationCard>
                    </div>
                </div>
                <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                    <h2 className="text-balance text-3xl font-semibold md:text-4xl font-headline">
                        The Technologies We Master
                    </h2>
                    <p className="text-muted-foreground">
                        We leverage a modern, robust, and scalable tech stack to build enterprise-grade solutions that stand the test of time.
                    </p>

                    <Button variant="outline" size="sm" asChild>
                        <Link href="/solutions">Explore Our Solutions</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
