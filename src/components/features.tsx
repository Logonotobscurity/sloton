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
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold mb-12 max-w-2xl">
          Your All-in-One Platform for Next-Gen IT Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border border-white/10 transition-all duration-300 hover:border-primary hover:-translate-y-1">
              <span className="text-xs text-primary block mb-4">0{index + 1}</span>
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-muted-foreground text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
