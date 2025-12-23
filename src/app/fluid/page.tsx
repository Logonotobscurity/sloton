
import { PageHero } from "@/components/page-sections/page-hero";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, Columns, Group } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fluid Design Demo',
  description: 'A demonstration of a fully responsive layout using modern CSS techniques like clamp() and auto-fitting grids without media queries.',
};

const featureCards = [
    {
        title: "Fluid Scaling",
        description: "Notice how the heading and paragraph text scale proportionally as you resize the window. The clamp() function ensures text stays readable at all sizes."
    },
    {
        title: "No Breakpoints Needed",
        description: "The grid automatically determines how many columns fit. On mobile you get 1 column, on tablets 2, on desktop 3 or more—all without media queries."
    },
    {
        title: "Proportional Spacing",
        description: "Padding and gaps also use clamp(), so spacing grows with viewport size. Everything feels balanced at every screen width."
    }
];

const flexFeatures = [
    {
        title: "Flexible Items",
        description: "Each item has flex: 1 1 min(350px, 100%), allowing them to grow, shrink, and wrap as needed."
    },
    {
        title: "Wrapping Behavior",
        description: "Items wrap to new lines when they can't fit their minimum width, creating a responsive multi-column layout."
    },
    {
        title: "Equal Distribution",
        description: "The flex-grow property ensures items distribute space evenly across the full width."
    }
];


export default function FluidDesignPage() {
    const sectionStyles = "w-full p-fluid-md";

    return (
        <div>
            <PageHero 
                title="Responsive Typography in Action"
                description="This entire layout uses fluid typography with clamp() and full-width responsive grids. Resize your browser to see how text scales smoothly and layouts adapt automatically without breakpoints."
            />
            
            <main>
                <section className={cn(sectionStyles, 'bg-background')}>
                    <div className="mx-auto w-full">
                        <div className="mb-fluid-md">
                            <h2 className="text-fluid-lg font-bold">Auto-Responsive Grid Layout</h2>
                            <p className="text-fluid-base mt-2 text-muted-foreground max-w-prose">These cards use CSS Grid with `auto-fit` and `minmax`. They automatically flow into multiple columns based on available space, always using full width.</p>
                        </div>

                        <div className="grid grid-cols-auto-fit gap-fluid-sm">
                           {featureCards.map((card, i) => (
                             <Card key={i} className="bg-secondary/20">
                               <CardHeader>
                                 <CardTitle className="text-fluid-md">{card.title}</CardTitle>
                                 <CardDescription className="text-fluid-sm mt-2">{card.description}</CardDescription>
                               </CardHeader>
                             </Card>
                           ))}
                        </div>
                    </div>
                </section>

                <section className={cn(sectionStyles, 'bg-secondary/30')}>
                    <div className="mx-auto w-full">
                        <div className="mb-fluid-md">
                            <h2 className="text-fluid-lg font-bold">Flexbox Alternative</h2>
                            <p className="text-fluid-base mt-2 text-muted-foreground max-w-prose">This section uses Flexbox with `flex-wrap` for similar auto-responsive behavior.</p>
                        </div>
                        <div className="flex flex-wrap gap-fluid-sm">
                           {flexFeatures.map((card, i) => (
                               <Card key={i} className="flex-fluid-item bg-background">
                                   <CardHeader>
                                     <CardTitle className="text-fluid-md">{card.title}</CardTitle>
                                     <CardDescription className="text-fluid-sm mt-2">{card.description}</CardDescription>
                                   </CardHeader>
                               </Card>
                           ))}
                        </div>
                    </div>
                </section>

                <section className={cn(sectionStyles, 'bg-primary text-primary-foreground')}>
                     <div className="mx-auto w-full">
                        <h2 className="text-fluid-xl font-bold">Full Width Banner Section</h2>
                        <p className="text-fluid-base mt-2 max-w-prose">This section demonstrates edge-to-edge color with proportional internal padding. The content never touches the edges, but the background extends fully.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}
