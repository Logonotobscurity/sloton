import { Award, BookOpen, BrainCircuit, Bot, Zap, TrendingUp, Check, Users, BarChart2, Clock, ShieldQuestion, Code, Briefcase, Share2, Lightbulb, HeartHandshake, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DialogFormWrapper } from '@/components/dialog-form-wrapper';
import type { Metadata } from 'next';
import { CommunityLeadForm } from '@/components/community-lead-form';
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";


export const metadata: Metadata = {
  title: 'Community & Training | AI, Automation, & Leadership Programs',
  description: 'Advance your career with our expert-led online training programs and explore our community impact initiatives in ethical AI and digital skill development.',
};

const features = [
  {
    Icon: GraduationCap,
    name: "Expert-Led Training Programs",
    description: "Master in-demand skills with our hands-on curriculum in AI, Automation, and Prompt Engineering. Elevate your career with industry-relevant knowledge.",
    href: "/training",
    cta: "Explore Courses",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Users,
    name: "Leadership & Community Impact",
    description: "Our commitment to innovation extends beyond our client work. We actively lead and contribute to projects that drive positive change, from ethical AI research to digital skill development initiatives that empower our community.",
    href: "/training#impact",
    cta: "See Our Projects",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Code,
    name: "Quick Start to Prompt Engineering",
    description: "A one-day intensive for developers or business users. Supercharge your productivity by learning to craft effective prompts, automate tasks, and revolutionize your workflows with AI.",
    href: "/training",
    cta: "Learn More",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
  },
];


export default function TrainingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">Community &amp; Innovation</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            We believe in building more than just technology; we're dedicated to building skills, fostering leadership, and making a positive community impact. Explore our training programs and our commitment to ethical innovation.
          </p>
        </section>

         <BentoGrid className="lg:grid-rows-2 mt-16">
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>

        <section className="text-center mt-16 md:mt-24 py-12 md:py-16 bg-secondary/30 rounded-lg px-4">
            <h2 className="text-2xl md:text-4xl font-bold font-headline">Ready to Start a Conversation?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're interested in a training program or want to collaborate on an impact project, we'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <DialogFormWrapper
                    trigger={<Button size="lg">Get In Touch</Button>}
                    title="Let's Connect"
                    description="Please fill out your details below to start a conversation with our team."
                    form={<CommunityLeadForm />}
                />
            </div>
        </section>

      </div>
    </div>
  );
}
