
import {
  BrainCircuit,
  Zap,
  Code,
  MessageSquare,
  BarChart3,
  Database,
} from "lucide-react";
import type { Metadata } from "next";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Technology Solutions",
  description:
    "Explore our suite of scalable services including AI Solutions, Process Automation, Web Development, and more. We provide technology solutions to grow your business.",
};

const services = [
  {
    Icon: BrainCircuit,
    name: "AI Solutions",
    description: "Custom AI models, NLP, and computer vision to solve complex business challenges.",
    href: "/ai-solutions",
    cta: "Learn More",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Zap,
    name: "Process Automation",
    description: "Intelligent automation and RPA to streamline workflows and increase efficiency.",
    href: "/automation",
    cta: "Learn More",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Code,
    name: "Web & Custom Development",
    description: "Scalable websites, e-commerce platforms, and custom applications.",
    href: "/web-development",
    cta: "Learn More",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",

  },
  {
    Icon: MessageSquare,
    name: "Chatbots & Virtual Assistants",
    description: "AI-powered conversational agents for 24/7 customer engagement.",
    href: "/chatbots",
    cta: "Learn More",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BarChart3,
    name: "Business Analytics",
    description: "Custom dashboards and BI reporting to turn data into actionable insights.",
    href: "/business-analytics",
    cta: "Learn More",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
   {
    Icon: Database,
    name: "Database Solutions",
    description: "Robust database design, migration, and management for applications of all sizes.",
    href: "/database-solutions",
    cta: "Learn More",
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-4",
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-background">
      <PageHero 
        title="Our Solutions"
        description="We provide a comprehensive suite of scalable services designed to grow with your business, tackle your most significant challenges head-on, and drive measurable results."
      />
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <BentoGrid className="lg:grid-rows-3 mt-16">
            {services.map((service) => (
                <BentoCard key={service.name} {...service} />
            ))}
        </BentoGrid>
      </div>
    </div>
  );
}
