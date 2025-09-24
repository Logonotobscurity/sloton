
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'AI & Automation Strategy',
    details: [
        'Proprietary 47-Dimension AI Assessment',
        'Custom Machine Learning Model Development',
        'Robotic Process Automation (RPA)',
        'Predictive Analytics & BI Implementation',
    ]
  },
  {
    title: 'Custom Platform Development',
     details: [
        'High-Performance Web & Mobile Apps',
        'Scalable E-commerce Platforms',
        'Secure API & System Integrations',
        'Optimized Database Architecture',
    ]
  },
];

export function GeneralistApproach() {
  return (
    <section className="min-h-screen w-full py-16 md:py-24 flex items-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-normal uppercase tracking-widest text-primary">02/ Why We're Different</p>
            <h2 className="font-headline text-[clamp(2rem,6vw,3.5rem)] !leading-tight mt-4">
                Only 3% of tech consultants combine deep AI expertise with strategic business acumen. 
                <br />
                <span className="text-primary">We are in that 3%.</span>
            </h2>
            <p className="text-muted-foreground text-md md:text-lg max-w-3xl mx-auto mt-6">
                Our value isn't just in understanding technology; it's in applying it to solve your core business challenges. Our proprietary assessment methodology analyzes 47 unique business dimensions to create a holistic, data-driven technology roadmap. This comprehensive approach allows us to uncover opportunities and efficiencies that siloed specialists miss, delivering integrated solutions that produce measurable results.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            {features.map((feature) => (
                <Card key={feature.title} className="bg-secondary/20 backdrop-blur-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
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
    </section>
  );
}
