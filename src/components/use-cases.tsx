import { ArrowRight, Briefcase, HeartPulse, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from './ui/button';

const useCases = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'E-Commerce & Retail',
    description: 'Boost sales and customer satisfaction with AI-driven personalization and automated inventory management.',
    href: '/use-cases#e-commerce',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Healthcare',
    description: 'Enhance patient care and operational efficiency by automating scheduling and records management.',
    href: '/use-cases#healthcare',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Finance & Banking',
    description: 'Secure your operations with automated fraud detection and 24/7 AI-powered customer support.',
    href: '/use-cases#finance',
  },
];

export function UseCases() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Driving Success Across Industries</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We tailor our automation and AI solutions to solve the unique challenges of your sector, driving growth and innovation.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="bg-secondary/50 group flex flex-col transition-all duration-300 hover:border-primary hover:-translate-y-2">
                <CardHeader>
                    {useCase.icon}
                    <CardTitle className="pt-4">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
                <CardFooter>
                   <Link href={useCase.href} className="text-primary font-semibold flex items-center group">
                     Explore Use Case <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                   </Link>
                </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button asChild>
                <Link href="/use-cases">View All Industries</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
