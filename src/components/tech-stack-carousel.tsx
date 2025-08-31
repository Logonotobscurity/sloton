
"use client";

import Image from 'next/image';

const technologies = [
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2048px-React-icon.svg.png' },
  { name: 'Next.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg' },
  { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
  { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Node.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg' },
  { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' },
  { name: 'AWS', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png' },
  { name: 'Google Cloud', icon: 'https://img.icons8.com/color/600/google-cloud.png' },
  { name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png' },
  { name: 'Firebase', icon: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png' },
  { name: 'Docker', icon: 'https://img.icons8.com/fluent/512/docker.png' },
  { name: 'Kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png' },
  { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
  { name: 'Figma', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/figma-color.png' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
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
              <div className="relative w-20 h-20 text-foreground/80 grayscale hover:grayscale-0 transition-all p-2">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
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
               <div className="relative w-20 h-20 text-foreground/80 grayscale hover:grayscale-0 transition-all p-2">
                 <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20"></div>
      </div>
    </section>
  );
}
