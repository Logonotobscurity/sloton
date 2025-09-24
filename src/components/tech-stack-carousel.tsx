
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

const technologies = [
    { name: 'React', icon: 'https://img.icons8.com/color/96/react-native.png', dataAiHint: "React logo" },
    { name: 'Next.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg', dataAiHint: "Next.js logo" },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/96/typescript.png', dataAiHint: "TypeScript logo" },
    { name: 'Node.js', icon: 'https://img.icons8.com/color/96/nodejs.png', dataAiHint: "Node.js logo" },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/python.png', dataAiHint: "Python logo" },
    { name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png', dataAiHint: "AWS logo" },
    { name: 'Google Cloud', icon: 'https://img.icons8.com/color/96/google-cloud.png', dataAiHint: "Google Cloud logo" },
    { name: 'Azure', icon: 'https://img.icons8.com/color/96/microsoft-azure.png', dataAiHint: "Microsoft Azure logo" },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/96/firebase.png', dataAiHint: "Firebase logo" },
    { name: 'Docker', icon: 'https://img.icons8.com/color/96/docker.png', dataAiHint: "Docker logo" },
    { name: 'Kubernetes', icon: 'https://img.icons8.com/color/96/kubernetes.png', dataAiHint: "Kubernetes logo" },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/git.png', dataAiHint: "Git logo" },
    { name: 'Figma', icon: 'https://img.icons8.com/color/96/figma.png', dataAiHint: "Figma logo" },
    { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/96/tailwind_css.png', dataAiHint: "Tailwind CSS logo" },
    { name: 'OpenAI', icon: 'https://img.icons8.com/color/96/openai.png', dataAiHint: "OpenAI logo" },
    { name: 'Anthropic', icon: 'https://iconlogovector.com/uploads/images/2024/06/lg-666474e766139-Anthropic.webp', dataAiHint: "Anthropic logo" },
    { name: 'Hugging Face', icon: 'https://img.icons8.com/color/96/hugging-face.png', dataAiHint: "Hugging Face logo" },
    { name: 'Cohere', icon: 'https://logowik.com/content/uploads/images/cohere6480.logowik.com.webp', dataAiHint: "Cohere logo" },
    { name: 'Stability AI', icon: 'https://static.stocktitan.net/company-logo/path-lg.webp', dataAiHint: "Stability AI logo" },
    { name: 'UiPath', icon: 'https://assets.bizclikmedia.net/600/6368d6f519520e743a175898f09511ae:5f458532083a2185c84d72a95c812a6e/uipath-logo-1-1.jpg', dataAiHint: "UiPath logo" },
    { name: 'Automation Anywhere', icon: 'https://logowik.com/content/uploads/images/automation-anywhere6480.logowik.com.webp', dataAiHint: "Automation Anywhere logo" },
    { name: 'Blue Prism', icon: 'https://techgalaxy.business.blog/wp-content/uploads/2024/11/blue-prism-tutorial.webp', dataAiHint: "Blue Prism logo" },
    { name: 'Microsoft Power Automate', icon: 'https://contauro.com/wp-content/uploads/2024/08/uipath-png.webp', dataAiHint: "Microsoft Power Automate logo" },
    { name: 'Zapier', icon: 'https://espysys.com/wp-content/uploads/2024/08/zapier-logo.webp', dataAiHint: "Zapier logo" },
    { name: 'Bubble', icon: 'https://framerusercontent.com/images/7TcMknDIsXoJChZO9ArpTGE.webp', dataAiHint: "Bubble logo" },
    { name: 'Webflow', icon: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/651f2091caa28de325c11530_BlogHeader_Introducing-webflow-2-2400x1260.webp', dataAiHint: "Webflow logo" },
    { name: 'Salesforce', icon: 'https://ciberspring.com/_astro/06238f8955e49480293f6f5dbd31f85c6932dcbb-1208x1096_Z1PBML4.webp', dataAiHint: "Salesforce logo" },
    { name: 'Notion', icon: 'https://iconlogovector.com/uploads/images/2024/12/lg-6763d9c3b0a77-Notion.webp', dataAiHint: "Notion logo" },
];

export function TechStackCarousel() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">The Technologies We Master</h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          We leverage a modern, robust, and scalable tech stack to build enterprise-grade solutions that stand the test of time and deliver real business value.
        </p>
      </div>
      <div
        className="mt-16 w-full"
      >
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex w-max animate-infinite-scroll">
                {technologies.concat(technologies).map((tech, index) => (
                    <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center mx-4" title={tech.name}>
                        <Image 
                            src={tech.icon} 
                            alt={tech.name} 
                            width={64} 
                            height={64} 
                            className="max-h-12 w-auto object-contain" 
                            data-ai-hint={tech.dataAiHint}
                         />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
