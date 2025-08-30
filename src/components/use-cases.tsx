import { ArrowRight, Briefcase, HeartPulse, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const useCases = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'Retail & E-commerce',
    description: 'Boost sales and customer satisfaction with AI-driven personalization and automated inventory management. We streamline your supply chain and automate order processing for maximum efficiency.',
    href: '/use-cases#retail',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Healthcare',
    description: 'Enhance patient care and operational efficiency. Our solutions automate appointment scheduling and records management, while AI provides data-driven insights for better health outcomes.',
    href: '/use-cases#healthcare',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Banking & Finance',
    description: 'Secure your operations and delight customers with automated fraud detection and 24/7 AI-powered support. We implement robust cloud infrastructure and streamline financial workflows.',
    href: '/use-cases#finance',
  },
];

export function UseCases() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Industry Use Cases</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Discover how our automation and AI solutions are tailored to solve challenges in your industry, driving growth and innovation.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="bg-background/50 group flex flex-col">
                <CardHeader>
                    {useCase.icon}
                    <CardTitle className="pt-4">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                   <Link href={useCase.href} className="text-primary font-semibold flex items-center group">
                     Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
