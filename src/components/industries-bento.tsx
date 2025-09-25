
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  IconFinance,
  IconHealthcare,
  IconSales,
  IconItOperations,
  IconMarketing,
  IconRealEstate,
  IconProcurement,
  IconDevelopment,
  IconAdminOps,
  IconSupport,
  IconGeneral
} from '@/lib/icons';
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts"
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Briefcase, HeartPulse, Server, ShoppingCart, Workflow } from "lucide-react";
import { menuData } from "@/lib/menu-data";

const { items: industries } = menuData.menu.industries;

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden bg-secondary/30`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight font-headline text-foreground text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-muted-foreground text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
    const data = [
        { name: "Jan", value: 30 }, { name: "Feb", value: 40 },
        { name: "Mar", value: 20 }, { name: "Apr", value: 50 },
        { name: "May", value: 45 }, { name: "Jun", value: 60 },
    ];
  return (
    <div className="relative flex p-2 md:p-8 gap-10 h-full">
      <div className="w-full h-full p-2 md:p-5 mx-auto bg-background/50 shadow-2xl group flex flex-col justify-center items-center">
         <Briefcase className="h-10 w-10 text-primary mb-4" />
         <h4 className="font-semibold text-center text-muted-foreground">Financial Services & Banking</h4>
        <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      href="/use-cases#e-commerce"
      className="relative flex gap-10 h-full group/image"
    >
      <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2 relative items-center justify-center">
          <ShoppingCart className="h-20 w-20 absolute z-10 inset-0 text-primary m-auto transition-transform duration-300 group-hover/image:scale-110" />
          <div className="h-full w-full aspect-square bg-secondary/50 rounded-lg blur-sm group-hover/image:blur-md transition-all duration-200"></div>
           <p className="absolute bottom-4 text-sm text-muted-foreground">Explore E-commerce Solutions</p>
        </div>
      </div>
    </Link>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 gap-4 h-full overflow-hidden">
        <HeartPulse className="h-16 w-16 text-red-500" />
        <h4 className="font-semibold text-center text-muted-foreground mt-4">Healthcare Innovation</h4>
        <p className="text-xs text-center text-muted-foreground">Automating patient care and administrative tasks.</p>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center justify-center relative bg-transparent dark:bg-transparent mt-10">
        <div className="flex flex-row gap-4 items-center">
            <Server className="h-12 w-12 text-primary" />
            <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            >
                <svg width="100" height="20">
                    <path d="M 10 10 L 90 10" stroke="hsl(var(--primary))" strokeWidth="2" />
                </svg>
            </motion.div>
             <Workflow className="h-12 w-12 text-primary" />
        </div>
       <h4 className="font-semibold text-center text-muted-foreground mt-4">IT & Logistics</h4>
       <p className="text-xs text-center text-muted-foreground">Optimizing your infrastructure and supply chain.</p>
    </div>
  );
};


export function IndustriesBento() {
    const features = [
    {
      title: "Finance & Banking",
      description: "Future-proof your bank with one AI platform.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "Healthcare",
      description: "Fuel efficiency, reduce costs, and deliver quality care.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b dark:border-neutral-800",
    },
    {
      title: "E-Commerce",
      description: "Enhance retail experiences with AI-powered insights.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r dark:border-neutral-800",
    },
    {
      title: "IT & Logistics",
      description: "Optimize your infrastructure and supply chain with intelligent automation.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium font-headline">
            Solutions For Your Industry
          </h2>
          <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-muted-foreground text-center font-normal">
            We combine deep industry knowledge with technological expertise to build solutions that address the unique challenges of your sector.
          </p>
        </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>

       <div className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/use-cases">Explore All Use Cases</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
