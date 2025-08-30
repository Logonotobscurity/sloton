import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, Scaling } from 'lucide-react';

const features = [
  {
    title: 'Intelligent Automation',
    description: 'Streamline your workflows and eliminate repetitive tasks with our custom automation solutions.',
  },
  {
    title: 'AI-Powered Solutions',
    description: 'Unlock data-driven insights and predictive capabilities with our bespoke AI and machine learning models.',
  },
  {
    title: 'Scalable IT Infrastructure',
    description: 'Build a robust and flexible IT foundation that grows with your business, ensuring reliability and performance.',
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">
            Your All-in-One Platform for Next-Gen IT Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We deliver a comprehensive suite of services designed to modernize your operations and drive growth.
            </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border border-border bg-background transition-all duration-300 hover:border-primary hover:-translate-y-2">
              <span className="text-sm font-semibold text-primary block mb-4">0{index + 1}</span>
              <h3 className="text-2xl mb-4 font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
