
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'AI & Automation Solutions',
    details: [
        'Custom Machine Learning Models',
        'Robotic Process Automation (RPA)',
        'Intelligent Chatbots & Virtual Assistants',
        'Predictive Analytics & BI',
    ]
  },
  {
    title: 'Custom Development',
     details: [
        'Modern Web & Mobile Applications',
        'E-commerce & Custom Platforms',
        'Secure API Development & Integration',
        'Scalable Database Solutions',
    ]
  },
  {
    title: 'Digital Transformation',
     details: [
        'Technology & Process Assessment',
        'Cloud Migration & Management',
        'Strategic Process Digitization',
        'Enhanced Cybersecurity & Compliance',
    ]
  },
];

export function GeneralistApproach() {
  return (
    <section className="min-h-screen w-full py-24 sm:py-32 flex items-center bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">02/ Generalist Approach</p>
                <h2 className="font-headline text-[clamp(2rem,6vw,3.5rem)] !leading-tight">
                    WE BELIEVE THE FUTURE BELONGS TO TEAMS WHO CAN THINK ACROSS BOUNDARIES AND SEE THE WHOLE PICTURE.
                    <br />
                    <br />
                    <span className="text-primary">WE ARE GENERALISTS.</span>
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature) => (
                    <Card key={feature.title} className="bg-background/80 backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                        <CardHeader>
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-3">
                                {feature.details.map((detail) => (
                                <li key={detail} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm">{detail}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
