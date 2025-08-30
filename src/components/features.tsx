import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Cpu, Scaling } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Intelligent Automation',
    description: 'Streamline your workflows and eliminate repetitive tasks with our custom automation solutions.',
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Solutions',
    description: 'Unlock data-driven insights and predictive capabilities with our bespoke AI and machine learning models.',
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: 'Scalable IT Infrastructure',
    description: 'Build a robust and flexible IT foundation that grows with your business, ensuring reliability and performance.',
  },
];

export function Features() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-border/50 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader className="flex flex-row items-start justify-between">
                <div className="space-y-2">
                  {feature.icon}
                  <CardTitle className="text-2xl pt-2">{feature.title}</CardTitle>
                </div>
                <div className="text-5xl font-bold text-primary/20 transition-colors group-hover:text-primary/80">
                  0{index + 1}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
