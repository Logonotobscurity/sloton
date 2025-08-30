import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'AI & Automation Solutions',
    description: 'Leverage AI and intelligent automation to enhance efficiency, reduce costs, and drive innovation across your business.',
    details: [
        'Custom Machine Learning Models',
        'Robotic Process Automation (RPA)',
        'Intelligent Chatbots & Virtual Assistants',
        'Predictive Analytics & BI',
    ]
  },
  {
    title: 'Custom Development',
    description: 'Build robust, scalable web and mobile applications tailored to your specific business needs and customer expectations.',
     details: [
        'Modern Web & Mobile Applications',
        'E-commerce & Custom Platforms',
        'Secure API Development & Integration',
        'Scalable Database Solutions',
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your infrastructure and processes to build a resilient, future-ready business foundation for sustained growth.',
     details: [
        'Technology & Process Assessment',
        'Cloud Migration & Management',
        'Strategic Process Digitization',
        'Enhanced Cybersecurity & Compliance',
    ]
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
            Your All-in-One Platform for Next-Gen IT Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We deliver a comprehensive suite of services designed to modernize your operations, drive growth, and secure your future.
            </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background flex flex-col text-left transition-all duration-300 hover:border-primary hover:-translate-y-2">
                <CardHeader>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <p className="pt-2 text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                    <ul className="space-y-3">
                    {feature.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
