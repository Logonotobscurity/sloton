
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Briefcase, HeartPulse, ShoppingCart, Shield, Calculator, Factory, Building, Server, Truck, Zap, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Use Cases | AI & Automation Solutions by Sector',
  description: 'Explore how LOG_ON drives success across various sectors like Healthcare, Finance, E-Commerce, and Manufacturing with tailored automation and AI solutions.',
};

const useCases = [
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
      'Compliance & Data Security Solutions (HIPAA)',
    ],
  },
  {
    id: 'finance',
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Finance and Banking',
    description: 'We empower financial institutions with secure, scalable technology. Our services include AI-driven fraud detection, process automation for loan applications, and robust cloud infrastructure to ensure data integrity and compliance.',
    features: [
      'AI-Powered Fraud Detection & Risk Analysis',
      'Robotic Process Automation (RPA) for Back-Office Tasks',
      'Secure Cloud Infrastructure & Compliance (PCI-DSS)',
      'Automated Customer Onboarding (KYC)',
      'Personalized Financial Advisory Chatbots',
    ],
  },
    {
    id: 'e-commerce',
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: 'E-Commerce',
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
    id: 'insurance',
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Insurance',
    description: 'Automate claims processing, underwriting, and customer service to increase efficiency and reduce human error. Our AI models can assess risk and detect fraudulent claims, saving you time and money.',
    features: [
      'Automated Claims Processing & Payouts',
      'AI-Powered Underwriting and Risk Assessment',
      '24/7 Chatbots for Policy Inquiries and Support',
      'Personalized Insurance Product Recommendations',
      'Data Analytics for Actuarial Modeling',
    ],
  },
  {
    id: 'accounting',
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: 'Accounting',
    description: 'Streamline your accounting workflows with automated data entry, invoice processing, and financial reporting. Our solutions integrate seamlessly with your existing software to ensure accuracy and compliance.',
    features: [
      'Automated Invoice and Receipt Processing (OCR)',
      'Robotic Process Automation for Bookkeeping',
      'Real-time Financial Dashboards and Reporting',
      'Automated Expense Management and Approval',
      'Integration with QuickBooks, Xero, and other platforms',
    ],
  },
  {
    id: 'manufacturing',
    icon: <Factory className="h-8 w-8 text-primary" />,
    title: 'Manufacturing',
    description: 'Optimize your production lines with IoT and AI. We implement systems for predictive maintenance, quality control automation, and supply chain optimization to reduce downtime and increase output.',
    features: [
      'AI-Powered Predictive Maintenance',
      'Automated Quality Control with Computer Vision',
      'Supply Chain & Inventory Automation',
      'Production Line Monitoring and Optimization',
      'Robotics and Automation Integration',
    ],
  },
  {
    id: 'real-estate',
    icon: <Building className="h-8 w-8 text-primary" />,
    title: 'Real Estate',
    description: 'Enhance client engagement with AI-powered chatbots for property inquiries and automated viewing schedules. We streamline administrative tasks like contract generation and client onboarding.',
    features: [
      'AI Chatbots for 24/7 Property Inquiries',
      'Automated Lead Nurturing and Follow-up',
      'Virtual Property Tours and Digital Staging',
      'Automated Contract Generation and Management',
      'Predictive Market Analysis Tools',
    ],
  },
  {
    id: 'it-consulting',
    icon: <Server className="h-8 w-8 text-primary" />,
    title: 'IT Consulting',
    description: 'We provide strategic guidance and implementation services to help other IT firms and departments leverage automation and AI, enhancing their service offerings and internal efficiencies.',
    features: [
      'Automation Strategy and Roadmap Development',
      'Custom AI Model Development and Integration',
      'Cloud Infrastructure Optimization and Management',
      'DevOps and CI/CD Pipeline Automation',
      'Cybersecurity Automation and Threat Detection',
    ],
  },
  {
    id: 'logistics',
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Logistics & Transport',
    description: 'Optimize your logistics network with AI-driven route planning, automated shipment tracking, and predictive analytics for demand forecasting. Improve efficiency and reduce transportation costs.',
    features: [
      'AI-Optimized Route and Fleet Management',
      'Automated Warehouse and Inventory Systems',
      'Real-time Shipment Tracking and Alerts',
      'Predictive Demand and Capacity Forecasting',
      'Automated Documentation and Customs Processing',
    ],
  },
  {
    id: 'energy',
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Energy',
    description: 'Implement smart grid technology, automate monitoring of energy infrastructure, and use predictive analytics for maintenance and demand management. Enhance safety and operational efficiency.',
    features: [
      'Predictive Maintenance for Energy Grids',
      'AI-Powered Demand and Load Forecasting',
      'Automated Monitoring of Remote Assets (IoT)',
      'Smart Grid Management and Optimization',
      'Safety and Compliance Automation',
    ],
  },
  {
    id: 'telecom',
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Telecom',
    description: 'Improve customer service with AI chatbots, automate network monitoring and diagnostics, and optimize network performance with predictive analytics to reduce downtime and enhance user experience.',
    features: [
      'Automated Network Monitoring and Fault Detection',
      'AI-Powered Customer Service Chatbots',
      'Predictive Analytics for Network Performance',
      'Automated Service Provisioning and Activation',
      'Fraud Detection and Prevention',
    ],
  },
];

export default function UseCasesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">Automating Industries</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            Explore detailed examples of how LOG_ON's technology solutions drive success across various sectors. We tailor our services to meet the unique demands and challenges of your industry.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <Card key={useCase.id} id={useCase.id} className="bg-secondary/50 border-border/50 scroll-mt-24 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="p-6 md:p-8">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-4">
                      {useCase.icon}
                      <CardTitle className="text-xl md:text-3xl">{useCase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 pt-4">
                    <p className="text-muted-foreground">{useCase.description}</p>
                     <div className="pt-6">
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
                  </CardContent>
                </div>
            </Card>
          ))}
        </div>
         <div className="text-center mt-16 md:mt-20">
             <p className="text-lg text-muted-foreground">Ready to see how we can help your business?</p>
              <Link href="/contact" className="text-primary text-lg font-semibold hover:underline mt-2 inline-block">
                Contact Us Today
              </Link>
         </div>
      </div>
    </div>
  );
}
