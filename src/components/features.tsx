import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Intelligent Automation',
    description: 'Streamline your workflows and eliminate repetitive tasks with our custom automation solutions.',
    details: [
        'Robotic Process Automation (RPA)',
        'Custom API Integrations & Workflow Orchestration',
        'Reduced operational costs and human error',
    ]
  },
  {
    title: 'AI-Powered Solutions',
    description: 'Unlock data-driven insights and predictive capabilities with our bespoke AI and machine learning models.',
     details: [
        'Custom Machine Learning Model Development',
        'Natural Language Processing (NLP) for Chatbots',
        'Predictive Analytics and Business Intelligence',
    ]
  },
  {
    title: 'Scalable IT Infrastructure',
    description: 'Build a robust and flexible IT foundation that grows with your business, ensuring reliability and performance.',
     details: [
        'Cloud Migration & Management (AWS, GCP, Azure)',
        'DevOps and CI/CD Implementation for faster delivery',
        'Cybersecurity, Compliance, and Disaster Recovery',
    ]
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
                We deliver a comprehensive suite of services designed to modernize your operations and drive growth. Click on any feature to learn more.
            </p>
        </div>
        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {features.map((feature, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border border-border bg-background transition-all duration-300 hover:border-primary data-[state=open]:border-primary rounded-lg">
                <AccordionTrigger className="p-8 text-left hover:no-underline">
                   <div className="flex-grow">
                        <span className="text-sm font-semibold text-primary block mb-4">0{index + 1}</span>
                        <h3 className="text-2xl mb-2 font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground text-base font-normal">{feature.description}</p>
                   </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="px-8 pb-8 pt-0">
                      <div className="border-t border-border pt-6">
                           <ul className="space-y-3">
                            {feature.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                      </div>
                    </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
