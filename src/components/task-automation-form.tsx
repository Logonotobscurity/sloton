
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAutomatedTaskDesign } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, Workflow, CheckCircle, Lightbulb, BarChart, ExternalLink } from 'lucide-react';
import type { AutomateTaskDesignOutput } from '@/ai/flows/automated-task-design';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from './ui/badge';

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
          title: 'Error Generating Design',
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
      <div className="flex flex-col items-center justify-center space-y-4 p-8 min-h-[400px]" aria-live="polite">
        <div className="loader"></div>
        <p className="text-muted-foreground mt-4">Designing your automated task flow...</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="space-y-6 max-h-[70vh] overflow-y-auto" aria-live="polite">
        <Card className="bg-background/50">
            <CardHeader>
                <CardTitle className="text-xl">{result.taskName}</CardTitle>
                <CardDescription>{result.objective}</CardDescription>
            </CardHeader>
             <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary flex items-center gap-2"><Workflow className="h-5 w-5" /> Workflow Steps</h4>
                  <p className="text-sm text-muted-foreground mb-4">Triggered by: <span className="font-medium text-foreground">{result.trigger}</span></p>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[60px]">Step</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {result.steps.map(step => (
                        <TableRow key={step.stepNumber}>
                          <TableCell className="font-bold">{step.stepNumber}</TableCell>
                          <TableCell>{step.action}</TableCell>
                          <TableCell>{step.details}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div>
                   <h4 className="font-semibold text-primary flex items-center gap-2"><ExternalLink className="h-5 w-5" /> Required Integrations</h4>
                   <div className="flex flex-wrap gap-2 mt-2">
                    {result.integrations.map(integration => (
                        <Badge key={integration} variant="secondary">{integration}</Badge>
                    ))}
                   </div>
                </div>

                <div>
                   <h4 className="font-semibold text-primary flex items-center gap-2"><Lightbulb className="h-5 w-5" /> AI Optimizations</h4>
                   <ul className="space-y-2 mt-2 list-inside">
                        {result.optimizations.map(opt => (
                            <li key={opt} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                                <span>{opt}</span>
                            </li>
                        ))}
                   </ul>
                </div>

                <div>
                   <h4 className="font-semibold text-primary flex items-center gap-2"><BarChart className="h-5 w-5" /> Estimated Impact</h4>
                   <p className="text-muted-foreground">{result.estimatedImpact}</p>
                </div>
            </CardContent>
        </Card>
        <Button onClick={() => { setResult(null); form.reset(); }} variant="outline" className="w-full">
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
