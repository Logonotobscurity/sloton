
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const integrations = [
    { name: "Zapier", logo: "https://espysys.com/wp-content/uploads/2024/08/zapier-logo.webp", dataAiHint: "Zapier logo" },
    { name: "Bubble", logo: "https://framerusercontent.com/images/7TcMknDIsXoJChZO9ArpTGE.webp", dataAiHint: "Bubble logo" },
    { name: "Webflow", logo: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/651f2091caa28de325c11530_BlogHeader_Introducing-webflow-2-2400x1260.webp", dataAiHint: "Webflow logo" },
    { name: "Salesforce", logo: "https://ciberspring.com/_astro/06238f8955e49480293f6f5dbd31f85c6932dcbb-1208x1096_Z1PBML4.webp", dataAiHint: "Salesforce logo" },
    { name: "Notion", logo: "https://iconlogovector.com/uploads/images/2024/12/lg-6763d9c3b0a77-Notion.webp", dataAiHint: "Notion logo" },
     { name: "UiPath", logo: "https://assets.bizclikmedia.net/600/6368d6f519520e743a175898f09511ae:5f458532083a2185c84d72a95c812a6e/uipath-logo-1-1.jpg", dataAiHint: "UiPath logo" },
];

export function IntegrationsHighlight() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-[clamp(2rem,6vw,3rem)] !leading-tight">
              Take your <span className="text-primary">Human-AI Workflows</span> to the Next Level through Integrations
            </h2>
            <p className="text-muted-foreground text-md md:text-lg">
              AI is most powerful when it's seamlessly integrated into the tools you already use. We specialize in connecting intelligent systems with your existing workflows, creating a cohesive ecosystem where automation and human expertise work hand-in-hand. From CRMs to no-code platforms, we build the bridges that make your business smarter.
            </p>
            <Button asChild>
                <Link href="/automation">
                    Explore Automation Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex flex-col items-center justify-center p-6 bg-background rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain"
                  data-ai-hint={integration.dataAiHint}
                />
                <p className="mt-4 font-semibold text-sm text-muted-foreground">{integration.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
