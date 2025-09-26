
"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
    HeartHandshake,
    Globe,
    Zap,
    GraduationCap,
    ShieldQuestion,
    Lightbulb,
    Award,
    BookOpen,
    TrendingUp,
    Users,
    Check
} from "lucide-react";


const features = [
  {
    Icon: GraduationCap,
    name: "Expert-Led Training Programs",
    description: "Master in-demand skills with our hands-on curriculum in AI, Automation, and Prompt Engineering. Elevate your career with industry-relevant knowledge.",
    href: "/training",
    cta: "Explore Courses",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
    content: (
        <ul className="space-y-3 mt-4">
            {[
                { icon: <Award className="h-4 w-4 text-primary" />, text: 'Industry Expert Instructors' },
                { icon: <BookOpen className="h-4 w-4 text-primary" />, text: 'Hands-on Projects' },
                { icon: <TrendingUp className="h-4 w-4 text-primary" />, text: 'Career Support' },
                { icon: <Users className="h-4 w-4 text-primary" />, text: 'Community-Driven Learning' },
            ].map(item => (
                <li key={item.text} className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                </li>
            ))}
        </ul>
    )
  },
  {
    Icon: ShieldQuestion,
    name: "Transforming Customer Support with AI",
    description: "Learn to build, train, and deploy private AI assistants using your own company documents to revolutionize support systems.",
    href: "/training",
    cta: "Learn More",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Lightbulb,
    name: "AI Insights: A Practical Guide",
    description: "A comprehensive overview of AI types and their practical applications. Gain foundational knowledge for strategic AI adoption.",
    href: "/training",
    cta: "Learn More",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: HeartHandshake,
    name: "Community Impact: LISTNER AI",
    description: "An AI mental health chatbot designed to provide compassionate, accessible, and confidential support.",
    href: "/training#impact",
    cta: "See Our Projects",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Globe,
    name: "Ethical AI: Cultural Bridge Tech",
    description: "A research project and toolkit for identifying and mitigating cultural bias in large language models (LLMs).",
    href: "/training#impact",
    cta: "See Our Projects",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
   {
    Icon: Zap,
    name: "Gigpilot: AI Gig Economy Assistant",
    description: "An AI-powered tool to convert job seekers into engaged users through intelligent job matching and automated nurturing.",
    href: "/training#impact",
    cta: "See Our Projects",
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-4",
  },
];

export function TrainingCTA() {
  return (
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div 
            role="presentation"
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          />
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Community & Innovation</h2>
                    <p className="mt-4 text-md md:text-lg text-muted-foreground">
                        We believe in building more than just technology; we're dedicated to building skills, fostering leadership, and making a positive community impact. Explore our training programs and our commitment to ethical innovation.
                    </p>
                </div>
              <BentoGrid className="lg:grid-rows-3 mt-16">
                  {features.map((feature) => (
                      <BentoCard key={feature.name} {...feature} />
                  ))}
              </BentoGrid>
          </div>
    </section>
  );
}
