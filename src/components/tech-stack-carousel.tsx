
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const technologies = [
    { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png', dataAiHint: "React logo", href: "https://react.dev/" },
    { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', dataAiHint: "Next.js logo", href: "https://nextjs.org/" },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png', dataAiHint: "TypeScript logo", href: "https://www.typescriptlang.org/" },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png', dataAiHint: "Node.js logo", href: "https://nodejs.org/" },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png', dataAiHint: "Python logo", href: "https://www.python.org/" },
    { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png', dataAiHint: "AWS logo", href: "https://aws.amazon.com/" },
    { name: 'Google Cloud', icon: 'https://img.icons8.com/color/96/google-cloud.png', dataAiHint: "Google Cloud logo", href: "https://cloud.google.com/" },
    { name: 'Azure', icon: 'https://img.icons8.com/color/96/azure-storage-explorer.png', dataAiHint: "Microsoft Azure logo", href: "https://azure.microsoft.com/" },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png', dataAiHint: "Firebase logo", href: "https://firebase.google.com/" },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png', dataAiHint: "Docker logo", href: "https://www.docker.com/" },
    { name: 'Kubernetes', icon: 'https://img.icons8.com/color/96/kubernetes.png', dataAiHint: "Kubernetes logo", href: "https://kubernetes.io/" },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png', dataAiHint: "Git logo", href: "https://git-scm.com/" },
    { name: 'Figma', icon: 'https://img.icons8.com/color/96/figma.png', dataAiHint: "Figma logo", href: "https://www.figma.com/" },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/tailwind_css.png', dataAiHint: "Tailwind CSS logo", href: "https://tailwindcss.com/" },
    { name: 'OpenAI', icon: 'https://img.icons8.com/color/96/openai.png', dataAiHint: "OpenAI logo", href: "https://openai.com/" },
    { name: 'Hugging Face', icon: 'https://img.icons8.com/color/96/hugging-face.png', dataAiHint: "Hugging Face logo", href: "https://huggingface.co/" },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

const TechCard = ({ title, description, children, link }: { title: string; description: string; children: React.ReactNode; link: string }) => (
    <Card className="p-4 bg-secondary/30 h-full flex flex-col">
        <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background shadow">
                {children}
            </div>
            <div className="space-y-2 py-4">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
            </div>
        </div>
        <div className="mt-auto flex gap-3 border-t border-dashed pt-4">
            <Button asChild variant="outline" size="sm" className="gap-1 pr-2 shadow-none bg-background">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                </Link>
            </Button>
        </div>
    </Card>
);

export function TechStackCarousel() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
        <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
                <h2 className="text-balance text-3xl font-bold font-headline md:text-4xl">
                    The Technologies We Master
                </h2>
                <p className="text-muted-foreground mt-6">
                    We leverage a modern, robust, and scalable tech stack to build enterprise-grade solutions that stand the test of time and deliver real business value.
                </p>
            </div>
            <motion.div 
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                {technologies.map((tech) => (
                    <motion.div key={tech.name} variants={cardVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                        <TechCard
                            title={tech.name}
                            description={`Explore the official documentation for ${tech.name}.`}
                            link={tech.href}
                        >
                            <Image
                                src={tech.icon}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="h-8 w-auto object-contain"
                                data-ai-hint={tech.dataAiHint}
                            />
                        </TechCard>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
