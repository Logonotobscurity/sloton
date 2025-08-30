
"use client";

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getSolutionRecommendation } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles, ArrowRight, ArrowLeft, Phone, Calendar } from 'lucide-react';
import type { SolutionRecommendationOutput } from '@/ai/flows/solution-recommendation';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import Link from 'next/link';

const formSchema = z.object({
  businessNeeds: z.string().min(20, 'Please describe your business needs in at least 20 characters.'),
  companySize: z.string().min(1, 'Please select a company size.'),
  industry: z.string().min(2, 'Please enter your industry.'),
  budget: z.string().min(1, 'Please select a budget range.'),
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
});

export function SolutionRecommendationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SolutionRecommendationOutput | null>(null);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessNeeds: '',
      companySize: '',
      industry: '',
      budget: '',
      name: '',
      email: '',
    },
  });

  const { trigger, formState: {isValid} } = form;

  const handleNext = async () => {
    const fieldsToValidate: ("businessNeeds" | "companySize" | "industry" | "budget")[] = step === 1 ? ["businessNeeds"] : ["companySize", "industry", "budget"];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep(step + 1);
    }
  };
  
  const handleBack = () => {
    setStep(step - 1);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    try {
      const res = await getSolutionRecommendation(values);
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
        <p className="text-muted-foreground">Analyzing your needs and crafting solutions...</p>
      </div>
    );
  }

  if (result) {
    return (
      <div className="p-1 space-y-6 max-h-[70vh] overflow-y-auto" aria-live="polite">
        <div className="space-y-4 p-2">
          <h3 className="text-xl font-semibold text-primary flex items-center gap-2"><Sparkles className="h-5 w-5" /> Your Recommended Roadmap</h3>
          <p className="whitespace-pre-wrap text-sm text-foreground/90">{result.recommendedSolutions}</p>
        </div>
        <div className="space-y-4 p-2">
          <h3 className="text-xl font-semibold text-accent">How LOG_ON Can Build It</h3>
          <p className="whitespace-pre-wrap text-sm text-foreground/80">{result.implementationPlan}</p>
        </div>
         <Card className="bg-secondary/50 border-primary/50 border">
            <CardHeader>
                <CardTitle>Ready for the Next Step?</CardTitle>
                <CardDescription>
                This AI-generated plan is the first step. Let's discuss how we can make it a reality for your business.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
                <Button asChild>
                    <Link href="https://calendly.com/" target="_blank">
                        <Calendar className="mr-2 h-4 w-4" /> Book a Call
                    </Link>
                </Button>
                <Button variant="secondary" onClick={() => { setResult(null); form.reset(); setStep(1); }}>
                    Start a New Assessment
                </Button>
            </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-1">
        <div className="px-1 py-2">
            <Progress value={(step / 3) * 100} className="w-full h-2" />
        </div>
        
        {step === 1 && (
           <FormField
            control={form.control}
            name="businessNeeds"
            render={({ field }) => (
                <FormItem>
                <FormLabel>What are your primary business goals or challenges?</FormLabel>
                <FormControl>
                    <Textarea placeholder="e.g., We need to automate customer support and streamline our sales process to handle more clients." {...field} rows={5} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        )}

        {step === 2 && (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                            <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                            <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                            <SelectItem value="201-1000 employees">201-1000 employees</SelectItem>
                            <SelectItem value="1000+ employees">1000+ employees</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
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
                </div>
                <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Project Budget Range (USD)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                        <SelectItem value="Under $5,000 USD">Under $5,000</SelectItem>
                        <SelectItem value="$5,000 - $20,000 USD">$5,000 - $20,000</SelectItem>
                        <SelectItem value="$20,000 - $100,000 USD">$20,000 - $100,000</SelectItem>
                        <SelectItem value="$100,000+ USD">$100,000+</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </>
        )}

        {step === 3 && (
             <>
                <p className="text-sm text-muted-foreground">Almost there! Just a few details to finalize your personalized plan.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                            <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </div>
            </>
        )}
        
        <div className="flex justify-between gap-4 pt-4">
            {step > 1 && (
                <Button type="button" variant="secondary" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            )}

            {step < 3 ? (
                <Button type="button" onClick={handleNext} className={step === 1 ? "w-full" : ""}>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            ) : (
                <Button type="submit" disabled={loading || !isValid} className="w-full">
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                    Generate My Free Plan
                </Button>
            )}
        </div>
      </form>
    </Form>
  );
}
