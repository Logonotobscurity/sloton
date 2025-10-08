
import type { Metadata } from 'next';
import { TaskAutomationForm } from '@/components/task-automation-form';
import { WorkflowTemplateLibrary } from '@/app/automation/_components/workflow-template-library';
import { PageHero } from '@/components/page-sections/page-hero';

export const metadata: Metadata = {
  title: 'Intelligent Automation Solutions | RPA & Workflow Design',
  description: 'Design, configure, and deploy automated IT tasks and business workflows with our intelligent automation and RPA solutions. Get AI-powered optimization suggestions.',
};

export default async function AutomationPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const workflow = typeof searchParams?.workflow === 'string' ? searchParams.workflow : undefined;

  return (
    <div className="bg-background">
      <PageHero 
        title="Intelligent Automation Task Designer"
        description="Describe a workflow to generate a configured, optimized task design, complete with AI suggestions. Go from idea to a fully-structured automation plan in seconds."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <TaskAutomationForm initialValues={{ workflowDescription: workflow }} />
        </div>

        <div className="mt-16 md:mt-24">
          <WorkflowTemplateLibrary />
        </div>

      </div>
    </div>
  );
}
