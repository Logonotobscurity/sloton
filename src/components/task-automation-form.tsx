
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAutomatedTaskDesign } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles } from 'lucide-react';
import type { AutomateTaskDesignOutput } from '@/ai/flows/automated-task-design';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  workflowDescription: z.string().min(20, 'Please describe your workflow in at least 20 characters.'),
  optimizationSuggestions: z.string().optional(),
});

export function TaskAutomationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AutomateTaskDesignOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workflowDescription: '',
      optimizationSuggestions: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const res = await getAutomatedTaskDesign(values);
      if (res.error) {
         toast({
          variant: 'destructive',
          title: 'Error',
          description: res.error,
        });
      } else {
        setResult(res.data);
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
      <div className="flex flex-col items-center justify-center space-y-4 p-8 min-h-[300px]" aria-live="polite">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="text-muted-foreground">Designing your automated task flow...</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="p-4 space-y-6 max-h-[70vh] overflow-y-auto" aria-live="polite">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary flex items-center gap-2"><Sparkles className="h-5 w-5" /> Automated Task Design</h3>
          <p className="whitespace-pre-wrap text-sm text-foreground/90 bg-secondary p-4 rounded-md">{result.taskDesign}</p>
        </div>
        <Button onClick={() => { setResult(null); form.reset(); }} variant="outline">
          Design Another Task
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-1">
        <FormField
          control={form.control}
          name="workflowDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workflow Description</FormLabel>
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
              <FormLabel>Optimization Suggestions (Optional)</FormLabel>
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
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Generate Task Design
        </Button>
      </form>
    </Form>
  );
}
