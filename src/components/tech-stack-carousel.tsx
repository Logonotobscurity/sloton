
"use client";

import { IconReact, IconNextjs, IconTypescript, IconJavascript, IconNodejs, IconPython, IconAws, IconGoogleCloud, IconAzure, IconFirebase, IconDocker, IconKubernetes, IconGit, IconFigma, IconTailwind } from '@/lib/icons';
import Image from 'next/image';

const technologies = [
  { name: 'React', hint: 'React logo', icon: <IconReact /> },
  { name: 'Next.js', hint: 'Nextjs logo', icon: <IconNextjs /> },
  { name: 'TypeScript', hint: 'TypeScript logo', icon: <IconTypescript /> },
  { name: 'JavaScript', hint: 'JavaScript logo', icon: <IconJavascript /> },
  { name: 'Node.js', hint: 'Nodejs logo', icon: <IconNodejs /> },
  { name: 'Python', hint: 'Python logo', icon: <IconPython /> },
  { name: 'AWS', hint: 'AWS logo', icon: <IconAws /> },
  { name: 'Google Cloud', hint: 'Google Cloud logo', icon: <IconGoogleCloud /> },
  { name: 'Azure', hint: 'Azure logo', icon: <IconAzure /> },
  { name: 'Firebase', hint: 'Firebase logo', icon: <IconFirebase /> },
  { name: 'Docker', hint: 'Docker logo', icon: <IconDocker /> },
  { name: 'Kubernetes', hint: 'Kubernetes logo', icon: <IconKubernetes /> },
  { name: 'Git', hint: 'Git logo', icon: <IconGit /> },
  { name: 'Figma', hint: 'Figma logo', icon: <IconFigma /> },
  { name: 'Tailwind CSS', hint: 'Tailwind logo', icon: <IconTailwind /> },
];

export function TechStackCarousel() {
  const allTech = [...technologies, ...technologies, ...technologies];
  return (
    <section className="py-24 sm:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">The Technologies We Use</h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          We leverage a modern, robust, and scalable tech stack to build solutions that stand the test of time.
        </p>
      </div>
      <div className="mt-16 relative flex flex-col gap-8 overflow-hidden">
        <div className="flex -translate-x-1/4 animate-scroll-x" style={{ animationDuration: '60s' }}>
          {allTech.map((tech, index) => (
            <div
              key={`top-${index}-${tech.name}`}
              className="flex-shrink-0 w-36 h-36 flex items-center justify-center rounded-lg bg-background border border-border mx-4"
            >
              <div className="relative w-20 h-20 text-foreground/80 grayscale hover:grayscale-0 transition-all">
                {tech.icon ? tech.icon : (
                    <Image 
                      src={'/placeholder.svg'}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="object-contain"
                      data-ai-hint={tech.hint}
                      unoptimized
                    />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex -translate-x-1/3 animate-scroll-x-reverse" style={{ animationDuration: '60s' }}>
          {allTech.map((tech, index) => (
            <div
              key={`bottom-${index}-${tech.name}`}
              className="flex-shrink-0 w-36 h-36 flex items-center justify-center rounded-lg bg-background border border-border mx-4"
            >
               <div className="relative w-20 h-20 text-foreground/80 grayscale hover:grayscale-0 transition-all">
                 {tech.icon ? tech.icon : (
                    <Image 
                      src={'/placeholder.svg'}
                      alt={tech.name}
                      width={80}
                      height={80}
                      className="object-contain"
                      data-ai-hint={tech.hint}
                      unoptimized
                    />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20"></div>
      </div>
    </section>
  );
}
