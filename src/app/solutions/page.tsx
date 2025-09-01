
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
    description: 'We design and implement custom AI solutions that unlock data-driven insights, automate complex processes, and create intelligent systems. Our team leverages machine learning, natural language processing, and computer vision to build tools that solve real-world business problems, from predictive analytics to intelligent document processing. By integrating AI into your operations, we help you reduce costs, enhance decision-making, and create a significant competitive advantage.',
    features: [
      'Custom Machine Learning Models',
      'Natural Language Processing (NLP)',
      'Computer Vision & Image Analysis',
      'Predictive Analytics & Forecasting',
    ],
    href: '/use-cases#it-consulting'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Process Automation',
    description: 'Streamline your business operations by automating repetitive, manual tasks. We use Robotic Process Automation (RPA) and workflow design to build intelligent systems that handle everything from data entry and report generation to customer onboarding. Our solutions reduce human error, increase operational speed, and free up your team to focus on high-value, strategic work, ultimately driving efficiency and lowering costs.',
    features: [
      'Robotic Process Automation (RPA)',
      'Automated Document Processing (OCR)',
      'Custom Workflow Design & Integration',
      'API-based System Integration',
    ],
    href: '/automation'
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Web Development',
    description: 'We build modern, responsive, and high-performance web applications tailored to your specific business needs. Using the latest technologies like React and Next.js, we create everything from dynamic e-commerce platforms and customer portals to complex enterprise-grade systems. Our focus is on delivering secure, scalable, and user-friendly web solutions that enhance your digital presence and provide an exceptional user experience.',
    features: [
      'Custom Web Applications',
      'E-commerce & Marketplace Solutions',
      'Progressive Web Apps (PWAs)',
      'API Development & Integration',
    ],
    href: '/use-cases#e-commerce'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Chatbots & Virtual Assistants',
    description: 'Engage your customers 24/7 with intelligent, AI-powered chatbots and virtual assistants. We design and deploy conversational agents that can handle customer service inquiries, generate leads, and automate sales interactions across platforms like your website and WhatsApp. These bots provide instant, accurate responses, improving customer satisfaction while reducing the workload on your support teams.',
    features: [
      'AI-Powered Conversational Agents',
      'WhatsApp & Website Integration',
      '24/7 Customer Service Automation',
      'Automated Lead Generation & Qualification',
    ],
    href: '#'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Business Analytics',
    description: 'Transform your raw data into a strategic asset. We create powerful business intelligence (BI) and analytics solutions that provide actionable insights into your operations, customers, and market trends. From custom dashboards and data visualizations to in-depth performance metric tracking, we empower you to make informed, data-driven decisions that fuel growth and optimize performance across your organization.',
    features: [
      'Interactive Data Dashboards',
      'Business Intelligence (BI) Reporting',
      'Key Performance Indicator (KPI) Tracking',
      'Data-driven Strategic Insights',
    ],
    href: '#'
  },
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Database Solutions',
    description: 'Ensure your data is secure, organized, and optimized for performance with our robust database solutions. We specialize in database design, migration, and management for applications of all sizes. Our team works with both SQL and NoSQL databases to build scalable and efficient systems that form the backbone of your business operations, ensuring data integrity and fast, reliable access.',
    features: [
      'Database Architecture & Design',
      'Cloud Data Migration & Integration',
      'Performance Tuning & Optimization',
      'Data Security & Compliance',
    ],
    href: '#'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Mobile Solutions',
    description: 'Reach your customers on the go with custom native and cross-platform mobile applications. We develop intuitive, high-performance apps for both iOS and Android that deliver a seamless user experience. Whether you need a customer-facing app or an internal enterprise tool, we build mobile solutions that are engaging, reliable, and perfectly aligned with your business objectives.',
    features: [
      'iOS & Android App Development',
      'Cross-platform Solutions (React Native)',
      'Mobile UI/UX Design',
      'App Store Deployment & Maintenance',
    ],
    href: '#'
  },
  {
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    title: 'Digital Transformation',
    description: 'Navigate the complexities of modernization with our end-to-end digital transformation services. We partner with you to assess your current technology stack, identify opportunities for improvement, and develop a strategic roadmap for change. From process digitization and cloud adoption to change management support, we guide you through every step of your journey to becoming a more agile, efficient, and technology-driven organization.',
    features: [
      'Comprehensive Technology Assessment',
      'Digital Modernization Strategy',
      'Legacy System & Process Digitization',
      'Change Management & Implementation Support',
    ],
    href: '/about'
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Our Solutions</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a comprehensive suite of scalable services designed to grow with your business, tackle your most significant challenges head-on, and drive measurable results.
          </p>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
             <Card key={index} className="bg-secondary/50 border-border/50 flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
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
