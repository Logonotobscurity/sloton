import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, ShieldCheck, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Process Automation',
    description: 'We identify and automate your repetitive, time-consuming tasks, freeing up your team to focus on high-value work. From data entry to report generation, we build seamless workflows.',
    features: [
      'Robotic Process Automation (RPA)',
      'Custom API Integrations',
      'Workflow Orchestration',
      'Error reduction and increased efficiency',
    ],
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'AI & Data Analytics',
    description: 'Transform your raw data into actionable insights. Our AI solutions help you understand trends, predict outcomes, and make smarter business decisions.',
    features: [
      'Custom Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Predictive Analytics Dashboards',
      'Data-driven strategy development',
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Cloud & IT Infrastructure',
    description: 'Build a secure, scalable, and resilient cloud infrastructure that supports your business growth. We manage your cloud environment so you can focus on your business.',
    features: [
      'Cloud Migration & Management (AWS, GCP, Azure)',
      'DevOps and CI/CD Implementation',
      'Cybersecurity and Compliance',
      'High-availability and disaster recovery planning',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Our Solutions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a suite of scalable services designed to grow with your business and tackle your most significant challenges head-on.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-1 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary/50 border-border/50">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-4">
                      {service.icon}
                      <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </div>
                <div className="p-6 md:p-8 bg-background/50 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                  <h4 className="font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
