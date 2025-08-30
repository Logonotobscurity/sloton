import { cn } from '@/lib/utils';
import {
  IconAws,
  IconAzure,
  IconDocker,
  IconFigma,
  IconFirebase,
  IconGit,
  IconGoogleCloud,
  IconJavascript,
  IconKubernetes,
  IconNextjs,
  IconNodejs,
  IconPython,
  IconReact,
  IconTailwind,
  IconTypescript,
} from '@/lib/icons';

const technologies = [
  <IconReact key="react" />,
  <IconNextjs key="nextjs" />,
  <IconTypescript key="typescript" />,
  <IconJavascript key="javascript" />,
  <IconNodejs key="nodejs" />,
  <IconPython key="python" />,
  <IconAws key="aws" />,
  <IconGoogleCloud key="gcp" />,
  <IconAzure key="azure" />,
  <IconFirebase key="firebase" />,
  <IconDocker key="docker" />,
  <IconKubernetes key="kubernetes" />,
  <IconGit key="git" />,
  <IconFigma key="figma" />,
  <IconTailwind key="tailwind" />,
];

export function TechStackCarousel() {
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
          {[...technologies, ...technologies, ...technologies].map((icon, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 w-36 h-36 flex items-center justify-center rounded-lg bg-background border border-border mx-4"
            >
              <div className="text-foreground/80">{icon}</div>
            </div>
          ))}
        </div>
        <div className="flex -translate-x-1/3 animate-scroll-x-reverse" style={{ animationDuration: '60s' }}>
          {[...technologies, ...technologies, ...technologies].map((icon, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 w-36 h-36 flex items-center justify-center rounded-lg bg-background border border-border mx-4"
            >
              <div className="text-foreground/80">{icon}</div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20"></div>
      </div>
    </section>
  );
}
