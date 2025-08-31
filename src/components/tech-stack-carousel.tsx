
import Image from 'next/image';

const technologies = [
  { name: 'React', hint: 'React logo', src: '/react.svg' },
  { name: 'Next.js', hint: 'Nextjs logo', src: '/nextjs.svg' },
  { name: 'TypeScript', hint: 'TypeScript logo', src: '/typescript.svg' },
  { name: 'JavaScript', hint: 'JavaScript logo', src: '/javascript.svg' },
  { name: 'Node.js', hint: 'Nodejs logo', src: '/nodejs.svg' },
  { name: 'Python', hint: 'Python logo', src: '/python.svg' },
  { name: 'AWS', hint: 'AWS logo', src: '/aws.svg' },
  { name: 'Google Cloud', hint: 'Google Cloud logo', src: '/google-cloud.svg' },
  { name: 'Azure', hint: 'Azure logo', src: '/azure.svg' },
  { name: 'Firebase', hint: 'Firebase logo', src: '/firebase.svg' },
  { name: 'Docker', hint: 'Docker logo', src: '/docker.svg' },
  { name: 'Kubernetes', hint: 'Kubernetes logo', src: '/kubernetes.svg' },
  { name: 'Git', hint: 'Git logo', src: '/git.svg' },
  { name: 'Figma', hint: 'Figma logo', src: '/figma.svg' },
  { name: 'Tailwind CSS', hint: 'Tailwind logo', src: '/tailwind.svg' },
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
              <div className="text-foreground/80">
                <Image 
                  src={tech.src}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                  data-ai-hint={tech.hint}
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
              <div className="text-foreground/80">
                 <Image 
                  src={tech.src}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="grayscale hover:grayscale-0 transition-all"
                  data-ai-hint={tech.hint}
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
