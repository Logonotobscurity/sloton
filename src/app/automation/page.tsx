
import type { Metadata } from 'next';
import { TaskAutomationForm } from '@/components/task-automation-form';
import { WorkflowTemplateLibrary } from '@/app/automation/_components/workflow-template-library';
import { PageHero } from '@/components/page-sections/page-hero';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Workplace Automation in Nigeria | Intelligent Solutions',
  description: 'Design and deploy workplace automation solutions in Nigeria. Our intelligent automation platform helps you configure RPA & business workflows, with AI-powered optimization.',
};

export default async function AutomationPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const workflow = typeof searchParams?.workflow === 'string' ? searchParams.workflow : "";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is workplace automation in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Workplace automation in Nigeria involves using intelligent software and RPA to streamline business processes. By automating repetitive tasks like data entry, reporting, and lead follow-up, Nigerian businesses can reduce operational costs, eliminate human error, and scale their operations more effectively."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://logonsolutions.netlify.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Automation",
        "item": "https://logonsolutions.netlify.app/automation"
      }
    ]
  };

  return (
    <div className="bg-background">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero 
        title="Workplace Automation in Nigeria | Intelligent Solutions"
        description="Describe a workflow to generate a configured, optimized task design, complete with AI suggestions. Go from idea to a fully-structured automation plan in seconds."
      />

      <section className="container mx-auto px-fluid-sm py-8 border-b">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Workplace automation in Nigeria involves using intelligent software and RPA to streamline business processes. By automating repetitive tasks like data entry, reporting, and lead follow-up, Nigerian businesses can reduce operational costs, eliminate human error, and scale their operations more effectively.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-fluid-sm py-fluid-lg">
        
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <TaskAutomationForm initialValues={{ workflowDescription: workflow }} />
        </div>

        <div className="mt-fluid-lg">
          <WorkflowTemplateLibrary />
        </div>

      </div>
    </div>
  );
}
