
"use client";

import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getSolutionRecommendation } from '@/ai/flows/solution-recommendation';

const formSchema = z.object({
  industry: z.string().min(1, "Industry is required"),
  challenge: z.string().min(1, "Business challenge is required"),
  goals: z.string().min(1, "Goals are required"),
});

const SolutionRecommendationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: "",
      challenge: "",
      goals: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const recommendation = await getSolutionRecommendation(values);
    // TODO: Display the recommendation to the user
    console.log(recommendation);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get a Solution Recommendation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-background">
        <DialogHeader>
          <DialogTitle>Get a Solution Recommendation</DialogTitle>
          <DialogDescription>
            Fill out the form below to get a personalized solution recommendation from our AI.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., E-commerce" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="challenge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Challenge</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., High cart abandonment rate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Goals</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., Reduce cart abandonment by 15%" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Get Recommendation</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionRecommendationForm;
