
"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Bold, Calendar as CalendarIcon, Italic, Strikethrough, Underline, Ellipsis } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';


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
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold">
                        <Bold className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic">
                        <Italic className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline">
                        <Underline className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough">
                        <Strikethrough className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <Button
                    size="icon"
                    className="size-8"
                    variant="ghost">
                    <Ellipsis className="size-3" />
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
    <section className="bg-secondary/20 py-24">
        <div className="mx-auto w-full max-w-5xl px-6">
            <div className="border-foreground/5 space-y-12 sm:space-y-0 sm:divide-y">
                
                <div className="grid sm:grid-cols-5 sm:divide-x items-center">
                    <div className="sm:col-span-2">
                         <CodeIllustration />
                    </div>
                    <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                        <span className="text-primary">Advance Your Career</span>
                        <h3 className="text-foreground text-2xl md:text-3xl font-semibold font-headline mt-2">Expert-Led Training Programs</h3>
                        <p className="text-muted-foreground mt-4 text-lg">Master the most in-demand tech skills with our hands-on curriculum. Our programs in AI, Automation, and Prompt Engineering are designed to give you a competitive edge in the digital economy.</p>
                        <Button asChild className="mt-6">
                            <Link href="/training">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-5 sm:divide-x items-center">
                    <div className="pt-12 sm:col-span-3 sm:border-r sm:pr-12">
                        <span className="text-primary">Community & Innovation</span>
                        <h3 className="text-foreground text-2xl md:text-3xl font-semibold font-headline mt-2">Building Skills, Fostering Leadership</h3>
                        <p className="text-muted-foreground mt-4 text-lg">We believe in building more than just technology. Explore our community impact initiatives, from our "Seek and Ye Shall Find" pedagogical model to our work in ethical AI and digital skill development.</p>
                         <Button asChild className="mt-6">
                            <Link href="/training#impact">Learn About Our Impact <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                    <div className="row-start-1 flex items-center justify-center pt-12 sm:col-span-2 sm:row-start-auto">
                        <ScheduleIllustration className="pt-8" />
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
