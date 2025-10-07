
"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { exampleWorkflows } from "@/lib/data/example-workflows";
import { motion } from "framer-motion";
import { Loader, RefreshCw, Wand2 } from "lucide-react";
import { VisualWorkflow } from "./visual-workflow";
import { Badge } from "./ui/badge";

const formSchema = z.object({
  workflowDescription: z.string().min(10, "Please describe the task you want to automate in at least 10 characters."),
  optimizationSuggestions: z.string().optional(),
});

export function TaskAutomationForm() {
  const [result, setResult] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workflowDescription: exampleWorkflows[0],
      optimizationSuggestions: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    // This is where you would typically make an API call to your backend 
    // to process the workflow and get the results.
    // For now, we'll just use a static result.
    const staticResult = {
        "nodes": [
          { "id": "start", "type": "start", "label": "Start" },
          { "id": "check_user_status", "type": "process", "label": "Check User Status" },
          { "id": "fetch_user_data", "type": "process", "label": "Fetch User Data" },
          { "id": "check_account_type", "type": "decision", "label": "Is Premium Account?" },
          { "id": "grant_premium_access", "type": "process", "label": "Grant Premium Access" },
          { "id": "grant_standard_access", "type": "process", "label": "Grant Standard Access" },
          { "id": "end", "type": "end", "label": "End" }
        ],
        "edges": [
          { "source": "start", "target": "check_user_status" },
          { "source": "check_user_status", "target": "fetch_user_data" },
          { "source": "fetch_user_data", "target": "check_account_type" },
          { "source": "check_account_type", "target": "grant_premium_access", "label": "Yes" },
          { "source": "check_account_type", "target": "grant_standard_access", "label": "No" },
          { "source": "grant_premium_access", "target": "end" },
          { "source": "grant_standard_access", "target": "end" }
        ]
      }
    setResult(staticResult);
    setIsLoading(false);
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
    <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
            <div className="flex flex-col items-center text-center">
                <Wand2 className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold">Design Your Automated Task</CardTitle>
                 <p className="text-muted-foreground mt-2">Describe a task, and we'll generate a visual workflow and suggest AI-powered optimizations.</p>
            </div>
        </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="workflowDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Task Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Automate the user onboarding process, including account creation, email verification, and a welcome tour."
                      className="min-h-[120px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Be as specific as possible for the best results.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="space-y-2">
                <FormLabel>Or try one of our examples:</FormLabel>
                <div className="flex flex-wrap gap-2">
                    {exampleWorkflows.map((example, i) => (
                        <Button key={i} type="button" variant="outline" size="sm" onClick={() => form.setValue('workflowDescription', example)}>
                            {example}
                        </Button>
                    ))}
                </div>
            </div>
            
            <FormField
              control={form.control}
              name="optimizationSuggestions"
              render={({ field }) => (
                <FormItem>
                    <div className="flex items-center gap-2">
                        <FormLabel className="text-lg font-semibold">Optimization (Optional)</FormLabel>
                        <Badge>AI-Powered</Badge>
                    </div>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Use a decision node to check user type (free/paid) and tailor the onboarding flow accordingly."
                      className="min-h-[80px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                     Tell us how you'd like to optimize this workflow. Our AI will incorporate your suggestions.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button type="submit" size="lg" disabled={isLoading} className="w-full max-w-xs text-lg font-bold shadow-lg">
                  {isLoading ? (
                    <>
                      <Loader className="mr-2 h-5 w-5 animate-spin" />
                      Generating Workflow...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" />
                      Generate Workflow
                    </>
                  )}
                </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
