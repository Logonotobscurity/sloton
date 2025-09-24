
import type { Metadata } from 'next';
import { TaskAutomationForm } from '@/components/task-automation-form';
import { WorkflowTemplateLibrary } from '@/components/workflow-template-library';

export const metadata: Metadata = {
  title: 'Intelligent Automation Solutions | RPA & Workflow Design',
  description: 'Design, configure, and deploy automated IT tasks and business workflows with our intelligent automation and RPA solutions. Get AI-powered optimization suggestions.',
};


export default function AutomationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold font-headline">Intelligent Automation Task Designer</h1>
            <p className="text-md md:text-lg text-muted-foreground mt-4">
              Describe a workflow to generate a configured, optimized task design, complete with AI suggestions. Go from idea to a fully-structured automation plan in seconds.
            </p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
            <TaskAutomationForm />
        </div>

        <div className="mt-24">
          <WorkflowTemplateLibrary />
        </div>

      </div>
    </div>
  );
}
