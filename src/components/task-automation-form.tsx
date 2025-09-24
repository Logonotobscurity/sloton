
"use client";

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAutomatedTaskDesign } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, RefreshCw, Dices } from 'lucide-react';
import type { AutomateTaskDesignOutput } from '@/ai/flows/automated-task-design';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from './ui/card';
import { VisualWorkflow } from './visual-workflow';
import { ArrowIcon } from './ui/arrow-icon';

const formSchema = z.object({
  workflowDescription: z.string().min(20, 'Please describe your workflow in at least 20 characters.'),
  optimizationSuggestions: z.string().optional(),
});

interface TaskAutomationFormProps {
  initialValues?: Partial<z.infer<typeof formSchema>>;
  onSuccessfulSubmit?: () => void;
}

const exampleWorkflows = [
    "When a new user signs up, send them a welcome email, add them to our CRM, and schedule a follow-up task for the sales team in 3 days.",
    "Every month, automatically generate a sales performance report from Salesforce data and email it as a PDF to the management team.",
    "When an invoice is received in our finance@ email, use OCR to extract the details, match it to a PO, and if it matches, approve it for payment.",
    "For new employee onboarding, create their user accounts in Office 365 and Slack, order their laptop, and schedule their orientation meetings.",
];

export function TaskAutomationForm({ initialValues, onSuccessfulSubmit }: TaskAutomationFormProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AutomateTaskDesignOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workflowDescription: initialValues?.workflowDescription || exampleWorkflows[0],
      optimizationSuggestions: initialValues?.optimizationSuggestions || '',
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues);
    }
  }, [initialValues, form]);
  
  const handleLoadExample = () => {
    const currentDescription = form.getValues("workflowDescription");
    let newExample = currentDescription;
    while (newExample === currentDescription) {
        newExample = exampleWorkflows[Math.floor(Math.random() * exampleWorkflows.length)];
    }
    form.setValue("workflowDescription", newExample);
  };


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const res = await getAutomatedTaskDesign(values);
      if (res.error) {
         toast({
          variant: 'destructive',
          title: 'Error Generating Design',
          description: res.error,
        });
      } else {
        setResult(res.data);
        if(onSuccessfulSubmit) onSuccessfulSubmit();
      }
    } catch (error) {
       toast({
        variant: 'destructive',
        title: 'An unexpected error occurred',
        description: 'Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8 min-h-[400px]" aria-live="polite">
        <div className="loader"></div>
        <p className="text-muted-foreground mt-4">Designing your automated task flow...</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="space-y-6" aria-live="polite">
        <VisualWorkflow result={result} />
        <Button onClick={() => { setResult(null); form.reset({workflowDescription: exampleWorkflows[0], optimizationSuggestions: ''}); }} variant="outline" className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Design Another Task
        </Button>
      </div>
    );
  }

  return (
    <Card className="bg-secondary/30 border-border/50">
        <CardContent className="p-6">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="workflowDescription"
                render={({ field }) => (
                    <FormItem>
                        <div className="flex justify-between items-center">
                            <FormLabel className="text-base">Workflow Description</FormLabel>
                             <Button type="button" variant="ghost" size="sm" onClick={handleLoadExample}>
                                <Dices className="mr-2 h-4 w-4"/>
                                Load Example
                            </Button>
                        </div>
                    <FormControl>
                        <Textarea
                        placeholder="e.g., When a new user signs up, send a welcome email, add them to our CRM, and schedule a follow-up task for the sales team in 3 days."
                        {...field}
                        rows={5}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="optimizationSuggestions"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="text-base">Optimization Suggestions (Optional)</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="e.g., Could we personalize the email based on user's country? Is it possible to notify the team on Slack?"
                        {...field}
                        rows={3}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" disabled={loading} className="group w-full flex justify-center gap-2 items-center">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Generate Task Design
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
