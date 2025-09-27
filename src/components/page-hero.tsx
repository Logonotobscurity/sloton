
import { cn } from '@/lib/utils';
import React from 'react';

interface PageHeroProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export function PageHero({ title, description, icon, children }: PageHeroProps) {
    return (
        <section className="relative py-24 md:py-32 bg-secondary/20">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 dark:opacity-20" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    {icon && <div className="flex justify-center mb-4">{icon}</div>}
                    <h1 className="text-3xl md:text-5xl font-bold font-headline">{title}</h1>
                    <p className="mt-4 text-md md:text-lg text-muted-foreground">
                        {description}
                    </p>
                    {children}
                </div>
            </div>
        </section>
    );
}
