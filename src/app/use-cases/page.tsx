

import { PageHero } from '@/components/page-hero';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  Shield,
  Calculator,
  Factory,
  Building,
  Users,
  Truck,
  Phone,
  CheckCircle,
  ArrowRight,
  BrainCircuit,
  Zap
} from 'lucide-react';
import type { Metadata } from 'next';
import { BottomCta } from '@/components/bottom-cta';
import { SidebarNav } from '@/components/sidebar-nav';

export const metadata: Metadata = {
  title: 'Use Cases by Industry | Tailored AI & Automation Solutions',
  description: 'Explore how LOG_ON delivers industry-specific AI and automation solutions for Finance, Healthcare, E-Commerce, and more to solve unique business challenges and drive growth.',
};

const industries = [
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: <Landmark className="h-10 w-10 text-primary" />,
    description: 'Enhancing security, compliance, and customer experiences with intelligent automation.',
    challenges: [
      'Regulatory compliance and reporting burdens',
      'High volumes of manual data entry and reconciliation',
      'Fraud detection and prevention',
      'Customer service inefficiencies',
    ],
    solutions: [
      { name: 'AI-Powered Fraud Detection', description: 'Real-time transaction monitoring to identify and flag suspicious activities, reducing financial losses.' },
      { name: 'RPA for Back-Office Operations', description: 'Automate accounts payable, receivable, and financial closing processes to reduce errors and improve speed.' },
      { name: 'Compliance Automation', description: 'Automate the generation of regulatory reports and maintain a clear audit trail for compliance.' },
      { name: 'Conversational AI for Customer Service', description: 'Deploy intelligent chatbots to handle routine customer inquiries, account checks, and transaction support 24/7.' },
    ],
    benefits: ['Reduced operational costs', 'Enhanced regulatory compliance', 'Improved fraud detection rates', 'Increased customer satisfaction'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    description: 'Streamlining administrative tasks and improving patient outcomes through technology.',
    challenges: [
      'Manual and time-consuming patient scheduling and reminders',
      'Administrative burdens of medical billing and coding',
      'Managing patient data securely and ensuring HIPAA compliance',
      'Inefficient patient communication and follow-up',
    ],
    solutions: [
      { name: 'Automated Appointment Scheduling', description: 'AI-powered systems for patients to book, reschedule, and receive reminders for appointments.' },
      { name: 'AI-Assisted Medical Coding', description: 'NLP tools that analyze clinical documentation to suggest accurate medical codes, speeding up the billing cycle.' },
      { name: 'Secure Patient Data Management', description: 'Robust database solutions and cloud infrastructure to manage Electronic Health Records (EHR) securely.' },
      { name: 'Post-Visit Patient Follow-up Bots', description: 'Automate follow-up communication to check on patients post-visit, provide care instructions, and gather feedback.' },
    ],
    benefits: ['Reduced administrative workload', 'Improved billing accuracy and speed', 'Enhanced patient engagement', 'Strengthened data security'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    description: 'Personalizing customer journeys and optimizing operations for online retailers.',
    challenges: [
      'Providing personalized shopping experiences at scale',
      'High volume of customer support inquiries (order status, returns)',
      'Managing inventory levels and preventing stockouts',
      'Shopping cart abandonment',
    ],
    solutions: [
      { name: 'AI Recommendation Engines', description: 'Personalize product recommendations based on user behavior, increasing cross-sell and upsell opportunities.' },
      { name: "24/7 Customer Support Chatbots", description: 'Handle inquiries about order tracking, return policies, and product questions instantly.' },
      { name: 'Predictive Inventory Management', description: 'Use machine learning to forecast demand and automate reordering, optimizing stock levels.' },
      { name: 'Automated Cart Abandonment Campaigns', description: 'Trigger personalized email or SMS sequences to recover potentially lost sales.' },
    ],
    benefits: ['Increased average order value', 'Lowered customer support costs', 'Optimized inventory management', 'Higher conversion rates'],
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: <Shield className="h-10 w-10 text-primary" />,
    description: 'Automating claims, underwriting, and customer service for the insurance industry.',
    challenges: [
      'Lengthy and manual claims processing workflows',
      'Complex underwriting and risk assessment processes',
      'Detecting fraudulent claims',
      'Personalizing policy recommendations and pricing',
    ],
    solutions: [
      { name: 'Automated Claims Processing', description: 'Use OCR and AI to extract data from claim forms, verify information, and automate initial processing steps.' },
      { name: 'AI-Powered Underwriting', description: 'Machine learning models that analyze vast datasets to assess risk more accurately and quickly.' },
      { name: 'Fraud Detection Analytics', description: 'AI algorithms that identify patterns and anomalies indicative of fraudulent claims.' },
      { name: 'Personalized Policy Quoting Tools', description: 'Chatbots and online tools that guide customers to the right policy based on their needs.' },
    ],
    benefits: ['Faster claims settlement times', 'More consistent and accurate underwriting', 'Reduced losses from fraud', 'Improved customer acquisition'],
  },
   {
    id: 'accounting',
    name: 'Accounting',
    icon: <Calculator className="h-10 w-10 text-primary" />,
    description: 'Streamlining accounting workflows with automated data entry and reconciliation.',
    challenges: [
      'Time-consuming manual data entry from invoices and receipts',
      'Lengthy month-end closing processes',
      'Ensuring accuracy in financial reporting',
      'Managing expense claims and reimbursements',
    ],
    solutions: [
      { name: 'AI-Powered OCR for Invoices', description: 'Automate the extraction of data from invoices and receipts, eliminating manual data entry and reducing errors.' },
      { name: 'Automated Bank Reconciliation', description: 'AI tools that automatically match transactions between bank statements and your accounting system.' },
      { name: 'Automated Expense Management', description: 'Streamline employee expense reporting with mobile receipt capture and automated policy checks.' },
      { name: 'AI-Assisted Financial Reporting', description: 'Generate financial statements and variance analysis reports automatically, freeing up time for strategic analysis.' },
    ],
    benefits: ['Drastically reduced manual data entry', 'Faster month-end close', 'Increased accuracy in financial records', 'Improved compliance and audit trails'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: <Factory className="h-10 w-10 text-primary" />,
    description: 'Driving efficiency and quality on the factory floor with smart technology.',
    challenges: [
      'Ensuring product quality and minimizing defects',
      'Predicting and preventing equipment failure',
      'Optimizing supply chain and inventory of raw materials',
      'Workforce safety and compliance',
    ],
    solutions: [
      { name: 'Computer Vision for Quality Control', description: 'AI-powered cameras that automatically inspect products on the assembly line to detect defects in real-time.' },
      { name: 'Predictive Maintenance', description: 'IoT sensors and ML models that predict equipment failure before it happens, allowing for proactive maintenance.' },
      { name: 'Supply Chain Automation', description: 'RPA to automate purchase order creation, shipment tracking, and inventory reconciliation.' },
      { name: 'Automated Safety Monitoring', description: 'AI video analytics to monitor for safety protocol violations and alert supervisors.' },
    ],
    benefits: ['Higher product quality and less waste', 'Reduced equipment downtime', 'More resilient supply chain', 'Safer working environment'],
  },
   {
    id: 'real-estate',
    name: 'Real Estate',
    icon: <Building className="h-10 w-10 text-primary" />,
    description: 'Enhancing client engagement and streamlining operations with AI-powered tools.',
    challenges: [
      'Responding to lead inquiries 24/7',
      'Qualifying a high volume of leads',
      'Personalizing property recommendations for clients',
      'Managing property viewing schedules',
    ],
    solutions: [
      { name: 'AI Chatbots for Lead Capture', description: 'Deploy chatbots on your website to engage visitors 24/7, answer common questions, and schedule property viewings.' },
      { name: 'Automated Lead Qualification & Nurturing', description: 'Use AI to score and qualify leads based on their inquiries, and automatically enroll them in personalized email nurturing campaigns.' },
      { name: 'AI-Powered Property Matching', description: 'Develop systems that recommend properties to clients based on their stated preferences and browsing behavior.' },
      { name: 'Automated Showing Coordination', description: 'Streamline the process of scheduling and confirming property viewings between agents, buyers, and sellers.' },
    ],
    benefits: ['Increased lead conversion rates', 'More efficient use of agent time', 'Improved client satisfaction', 'Streamlined operations'],
  },
  {
    id: 'it-consulting',
    name: 'IT Consulting',
    icon: <Users className="h-10 w-10 text-primary" />,
    description: 'Enhancing service offerings and internal efficiencies with AI and automation.',
    challenges: [
      'Scaling service delivery without proportionally increasing headcount',
      'Managing client projects and reporting efficiently',
      'Keeping teams up-to-date with the latest technologies',
      'Developing repeatable, high-value service offerings',
    ],
    solutions: [
      { name: 'AI-Powered Project Management Tools', description: 'Utilize AI to automate task assignment, predict project timelines, and identify potential risks before they impact deadlines.' },
      { name: 'Automated Client Reporting', description: 'Develop automated systems to generate regular, data-driven progress and performance reports for clients.' },
      { name: 'Internal Knowledge Management Systems', description: 'Build an AI-powered internal knowledge base that allows consultants to quickly find best practices, case studies, and code snippets.' },
      { name: 'Automation as a Service Offering', description: 'Partner with us to build out and offer automation and AI solutions to your own clients, creating a new revenue stream.' },
    ],
    benefits: ['Increased consultant productivity', 'Enhanced client transparency and satisfaction', 'Improved scalability of services', 'New revenue opportunities'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Transport',
    icon: <Truck className="h-10 w-10 text-primary" />,
    description: 'Optimizing supply chains from warehousing to final delivery.',
     challenges: [
      'Inefficient routing and high fuel costs',
      'Manual warehouse management processes',
      'Lack of real-time visibility into shipment status',
      'Complex documentation for cross-border shipping',
    ],
    solutions: [
      { name: 'AI-Powered Route Optimization', description: 'Machine learning algorithms that calculate the most efficient delivery routes, factoring in traffic, weather, and delivery windows.' },
      { name: 'Warehouse Automation (RPA)', description: 'Automate tasks like inventory tracking, order picking instructions, and receiving reports.' },
      { name: 'Real-Time Shipment Tracking Platforms', description: 'Develop integrated dashboards that provide live visibility of shipments for both internal teams and customers.' },
      { name: 'Automated Customs Documentation', description: 'RPA bots that automatically generate and file the necessary customs paperwork for international shipments.' },
    ],
    benefits: ['Reduced fuel consumption and delivery times', 'Increased warehouse efficiency', 'Improved customer transparency', 'Faster customs clearance'],
  },
   {
    id: 'telecom',
    name: 'Telecom',
    icon: <Phone className="h-10 w-10 text-primary" />,
    description: 'Managing infrastructure and improving customer service on one AI platform.',
    challenges: [
      'Managing complex network infrastructure and predicting failures',
      'High volume of customer support calls for billing and technical issues',
      'Optimizing network performance and capacity planning',
      'Reducing customer churn in a competitive market',
    ],
    solutions: [
      { name: 'AI for Predictive Network Maintenance', description: 'Use AI to analyze network data, predict equipment failures, and schedule proactive maintenance to prevent outages.' },
      { name: 'Customer Service Chatbots & Voicebots', description: 'Automate the handling of common customer inquiries like bill payments, plan changes, and basic troubleshooting.' },
      { name: 'AI-Powered Network Optimization', description: 'Machine learning models that analyze traffic patterns to dynamically manage network resources and optimize performance.' },
      { name: 'Churn Prediction Modeling', description: 'Use AI to identify customers who are at high risk of churning, allowing for proactive retention offers and interventions.' },
    ],
    benefits: ['Improved network reliability and uptime', 'Lower customer support operational costs', 'Enhanced network performance', 'Reduced customer churn'],
  },
];

const sidebarNavItems = industries.map(industry => ({
  title: industry.name,
  href: `/use-cases#${industry.id}`,
}));

export default function UseCasesPage() {
  return (
    <div className="bg-background">
      <PageHero
        title="Solutions For Your Industry"
        description="We combine deep industry knowledge with technological expertise to build solutions that address the unique challenges of your sector. Explore how we empower businesses to innovate and grow."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-5 gap-12">
            <aside className="lg:col-span-1 lg:sticky top-24 self-start">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="lg:col-span-4 space-y-20">
              {industries.map((industry) => (
                <section key={industry.id} id={industry.id} className="scroll-mt-20">
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-8">
                      {industry.icon}
                      <div className='flex-1'>
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">{industry.name}</h2>
                        <p className="mt-1 text-lg text-muted-foreground">{industry.description}</p>
                      </div>
                  </div>
                  <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Zap className="h-5 w-5 text-accent" /> Key Industry Challenges</h3>
                        <ul className="space-y-2 list-inside list-disc text-muted-foreground">
                          {industry.challenges.map((challenge) => (
                            <li key={challenge}>{challenge}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><BrainCircuit className="h-5 w-5 text-accent" /> Our AI-Powered Solutions</h3>
                        <div className="space-y-4">
                          {industry.solutions.map((solution) => (
                            <Card key={solution.name} className="bg-secondary/50">
                              <CardHeader>
                                <CardTitle className="text-base">{solution.name}</CardTitle>
                                <CardDescription>{solution.description}</CardDescription>
                              </CardHeader>
                            </Card>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><CheckCircle className="h-5 w-5 text-accent" /> Tangible Benefits</h3>
                        <div className="flex flex-wrap gap-3">
                          {industry.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full text-sm">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                       <div className="pt-6">
                        <Button asChild>
                          <Link href={`/contact?subject=Inquiry%20for%20${industry.name}`}>
                            Discuss Your {industry.name} Needs <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                </section>
              ))}
            </div>
        </div>
      </div>
      <BottomCta />
    </div>
  );
}


