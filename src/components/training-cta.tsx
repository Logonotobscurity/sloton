
"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Bold, Calendar as CalendarIcon, Italic, Strikethrough, Underline, Ellipsis, GraduationCap, ShieldQuestion, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlowingCard } from './ui/glowing-card';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';


const ScheduleIllustration = ({ className, variant = 'elevated' }: { className?: string; variant?: 'elevated' | 'outlined' | 'mixed' }) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1', {
                    'shadow-black-950/10 shadow-lg': variant === 'elevated',
                    'border-foreground/10 border': variant === 'outlined',
                    'border-foreground/10 border shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button
                    size="sm"
                    className="rounded-sm">
                    <CalendarIcon className="size-3" />
                    <span className="text-sm font-medium">Schedule</span>
                </Button>
            </div>
            <span>
                <span className="bg-secondary text-secondary-foreground py-1">Tomorrow 8:30 pm</span> is our priority.
            </span>
        </div>
    )
}

const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
                {['AI Models', 'Automation', 'Workflows', 'Prompt Engineering', 'RPA'].map((item, index) => (
                    <li
                        key={index}
                        className={cn(index == 3 && "text-foreground before:absolute before:-translate-x-[110%] before:text-primary before:content-['Learn']", "py-1")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}


export function TrainingCTA() {
  return (
    <section className="bg-secondary/20 py-24 relative overflow-hidden">
        <div 
          role="presentation"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        />
        <div className="mx-auto w-full max-w-5xl px-6">
             <div className="grid lg:grid-cols-3 gap-8 rounded-xl">
                <div className="space-y-4">
                    <div className="bg-primary/10 p-3 rounded-full w-fit">
                       <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline">Expert-Led Training</h3>
                    <p className="text-muted-foreground">Master in-demand skills with our hands-on curriculum in AI, Automation, and Prompt Engineering.</p>
                    <Button asChild>
                        <Link href="/training">Explore Training</Link>
                    </Button>
                </div>
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                     <Card className="bg-background/50">
                        <CardHeader>
                            <ShieldQuestion className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">AI Insights: A Practical Guide</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">A comprehensive overview of AI types and their practical applications.</p>
                        </CardContent>
                        <CardFooter>
                             <Button variant="secondary" size="sm" asChild><Link href="/training">Learn More</Link></Button>
                        </CardFooter>
                    </Card>
                    <Card className="bg-background/50">
                         <CardHeader>
                            <Lightbulb className="h-6 w-6 text-primary mb-2" />
                            <CardTitle className="text-lg">Transforming Customer Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Learn to build, train, and deploy private AI assistants using your own company documents.</p>
                        </CardContent>
                         <CardFooter>
                             <Button variant="secondary" size="sm" asChild><Link href="/training">Learn More</Link></Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  );
}
