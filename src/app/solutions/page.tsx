import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, BrainCircuit, Zap, Code, MessageSquare, BarChart3, Database, Smartphone, GitBranch } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Solutions | LOG_ON connecting Advantages',
  description: 'Explore our suite of scalable services including AI Solutions, Process Automation, Web Development, and more. We provide technology solutions to grow your business.',
};

const services = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI Solutions',
    description: 'Custom AI solutions to automate tasks, analyze data, and make intelligent decisions for your business.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
    ],
    href: '#'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Process Automation',
    description: 'Streamline your business operations with intelligent automation solutions that save time and reduce errors.',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Task Automation',
      'Integration Services',
    ],
    href: '#'
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Web Development',
    description: 'Modern, responsive web applications built with the latest technologies to enhance your online presence.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Development',
    ],
    href: '#'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Chatbots & Virtual Assistants',
    description: 'Intelligent conversational agents that provide 24/7 customer service and automate customer interactions.',
    features: [
      'Custom Chatbots',
      'WhatsApp Integration',
      'Customer Service Automation',
      'Lead Generation Bots',
    ],
    href: '#'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Business Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and visualization solutions.',
    features: [
      'Data Analysis',
      'Business Intelligence',
      'Performance Metrics',
      'Custom Dashboards',
    ],
    href: '#'
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Database Solutions',
    description: 'Robust database solutions for efficient data management and seamless business operations.',
    features: [
      'Database Design',
      'Data Migration',
      'Performance Optimization',
      'Data Security',
    ],
    href: '#'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'Mobile UI/UX Design',
    ],
    href: '#'
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
    features: [
      'Technology Assessment',
      'Digital Strategy',
      'Process Digitization',
      'Change Management',
    ],
    href: '#'
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

        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
             <Card key={index} className="bg-secondary/50 border-border/50 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {service.icon}
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <p className="pt-4 text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button asChild>
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
