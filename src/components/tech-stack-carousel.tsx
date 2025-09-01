
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

const technologies = [
    { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2048px-React-icon.svg.png' },
    { name: 'Next.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg' },
    { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    { name: 'Node.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg' },
    { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' },
    { name: 'AWS', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png' },
    { name: 'Google Cloud', icon: 'https://img.icons8.com/color/600/google-cloud.png' },
    { name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png' },
    { name: 'Firebase', icon: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png' },
    { name: 'Docker', icon: 'https://img.icons8.com/fluent/512/docker.png' },
    { name: 'Kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png' },
    { name: 'Git', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Figma', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/figma-color.png' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
    { name: 'OpenAI', icon: 'https://icon2.cleanpng.com/lnd/20250226/ug/59b6ea01cb9de15c20d252c096d2ee.webp' },
    { name: 'Anthropic', icon: 'https://iconlogovector.com/uploads/images/2024/06/lg-666474e766139-Anthropic.webp' },
    { name: 'Hugging Face', icon: 'https://cdn-uploads.huggingface.co/production/uploads/6349b36221f7b96c188e553c/kT-GBi2qYV7C7GUrc7vax.webp' },
    { name: 'Cohere', icon: 'https://logowik.com/content/uploads/images/cohere6480.logowik.com.webp' },
    { name: 'Stability AI', icon: 'https://static.stocktitan.net/company-logo/path-lg.webp' },
    { name: 'UiPath', icon: 'https://assets.bizclikmedia.net/600/6368d6f519520e743a175898f09511ae:5f458532083a2185c84d72a95c812a6e/uipath-logo-1-1.jpg' },
    { name: 'Automation Anywhere', icon: 'https://logowik.com/content/uploads/images/automation-anywhere6480.logowik.com.webp' },
    { name: 'Blue Prism', icon: 'https://techgalaxy.business.blog/wp-content/uploads/2024/11/blue-prism-tutorial.webp' },
    { name: 'Microsoft Power Automate', icon: 'https://contauro.com/wp-content/uploads/2024/08/uipath-png.webp' },
    { name: 'Zapier', icon: 'https://espysys.com/wp-content/uploads/2024/08/zapier-logo.webp' },
    { name: 'Bubble', icon: 'https://framerusercontent.com/images/7TcMknDIsXoJChZO9ArpTGE.webp' },
    { name: 'Webflow', icon: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/651f2091caa28de325c11530_BlogHeader_Introducing-webflow-2-2400x1260.webp' },
    { name: 'Salesforce', icon: 'https://ciberspring.com/_astro/06238f8955e49480293f6f5dbd31f85c6932dcbb-1208x1096_Z1PBML4.webp' },
    { name: 'Notion', icon: 'https://iconlogovector.com/uploads/images/2024/12/lg-6763d9c3b0a77-Notion.webp' },
];

export function TechStackCarousel() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">The Technologies We Master</h2>
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
                    <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center mx-4">
                        <Image src={tech.icon} alt={tech.name} width={80} height={80} className="max-h-16 w-auto object-contain" unoptimized />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
