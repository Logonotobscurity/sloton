import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Briefcase, HeartPulse, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const useCases = [
  {
    id: 'retail',
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'Retail & E-commerce',
    description: 'We help retail businesses enhance customer experiences and streamline operations through intelligent automation and AI. From inventory management to personalized marketing, our solutions are designed to boost your bottom line.',
    features: [
      'AI-Powered Recommendation Engines',
      'Automated Inventory & Supply Chain Management',
      '24/7 Customer Support Chatbots',
      'Personalized Marketing Automation',
      'Secure Cloud-Based POS Systems',
    ],
  },
  {
    id: 'healthcare',
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Healthcare',
    description: 'Our solutions for the healthcare industry focus on improving patient outcomes and operational efficiency. We implement secure, compliant systems that automate administrative tasks and provide valuable data insights.',
    features: [
      'Automated Appointment Scheduling & Reminders',
      'Secure Electronic Health Record (EHR) Management',
      'AI for Diagnostic Imaging Analysis',
      'Telemedicine Platform Integration',
      'Compliance & Data Security Solutions',
    ],
  },
    {
    id: 'finance',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Banking & Financial Services',
    description: 'We empower financial institutions with secure, scalable technology. Our services include AI-driven fraud detection, process automation for loan applications, and robust cloud infrastructure to ensure data integrity and compliance.',
    features: [
      'AI-Powered Fraud Detection & Risk Analysis',
      'Robotic Process Automation (RPA) for Back-Office Tasks',
      'Secure Cloud Infrastructure & Compliance (PCI-DSS)',
      'Automated Customer Onboarding (KYC)',
      'Personalized Financial Advisory Chatbots',
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Industry Use Cases</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore detailed examples of how LOG_ON's technology solutions drive success across various sectors. We tailor our services to meet the unique demands and challenges of your industry.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-1 gap-12">
          {useCases.map((useCase) => (
            <Card key={useCase.id} id={useCase.id} className="bg-secondary/50 border-border/50 scroll-mt-24">
              <div className="grid md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-4">
                      {useCase.icon}
                      <CardTitle className="text-2xl md:text-3xl">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </div>
                <div className="p-6 md:p-8 bg-background/50 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                  <h4 className="font-semibold mb-4 text-primary">Example Applications:</h4>
                  <ul className="space-y-3">
                    {useCase.features.map((feature) => (
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
         <div className="text-center mt-20">
             <p className="text-lg text-muted-foreground">Ready to see how we can help your business?</p>
              <Link href="/contact" className="text-primary text-lg font-semibold hover:underline mt-2 inline-block">
                Contact Us Today
              </Link>
         </div>
      </div>
    </div>
  );
}
