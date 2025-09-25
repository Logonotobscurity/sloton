
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { GlowingCard } from './ui/glowing-card';

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
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <p className="text-sm font-normal uppercase tracking-widest text-primary">Why We're Different</p>
                <h2 className="font-headline text-[clamp(2rem,6vw,3.5rem)] !leading-tight">
                    Only 3% of tech consultants combine deep AI expertise with strategic business acumen. 
                    <br />
                    <span className="text-primary">We are in that 3%.</span>
                </h2>
                <p className="text-muted-foreground text-md md:text-lg">
                    Our value isn't just in understanding technology; it's in applying it to solve your core business challenges. Our proprietary assessment methodology analyzes 47 unique business dimensions to create a holistic, data-driven technology roadmap. This comprehensive approach allows us to uncover opportunities and efficiencies that siloed specialists miss, delivering integrated solutions that produce measurable results.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {features.map((feature) => (
                    <GlowingCard key={feature.title}>
                      <div className="p-6">
                        <CardHeader className="p-0">
                            <CardTitle>{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                             <ul className="space-y-3">
                                {feature.details.map((detail) => (
                                <li key={detail} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm">{detail}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                        </div>
                    </GlowingCard>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
