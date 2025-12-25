
"use client";

import { useState } from 'react';
import { PageHero } from '@/components/page-sections/page-hero';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { insights, Insight } from '@/lib/insights';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { topics } from '@/lib/data/insights-page-data';
import { GlowingCard } from '@/components/ui/glowing-card';

// Note: This page is a client component, so metadata should be handled in the layout or a parent server component.
// For simplicity in this starter, we're not defining dynamic metadata here.

export default function InsightsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const filteredInsights = insights.filter(insight => {
        const matchesSearch = searchTerm === '' ||
            insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            insight.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesTopic = selectedTopic === null || insight.tags.includes(selectedTopic);

        return matchesSearch && matchesTopic;
    });

    return (
        <div className="bg-background">
            <PageHero 
                title="LOG_ON Insights"
                description="Explore expert analysis, practical guides, and forward-thinking perspectives on AI, automation, and digital transformation. Our insights are designed to help you navigate the complexities of modern technology and turn challenges into growth opportunities."
            />
            <div className="container mx-auto px-fluid-sm py-fluid-lg space-y-fluid-lg">
                <section>
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full h-12 pl-12 pr-4 rounded-full bg-secondary/50 border-border/50 shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                     <div className="flex flex-wrap gap-3 justify-center mt-6">
                        <Badge
                            onClick={() => setSelectedTopic(null)}
                            variant={selectedTopic === null ? "default" : "outline"}
                            className="cursor-pointer text-sm"
                        >
                            All Topics
                        </Badge>
                        {topics.map(topic => (
                           <Badge
                             key={topic}
                             onClick={() => setSelectedTopic(topic)}
                             variant={selectedTopic === topic ? "default" : "outline"}
                             className="cursor-pointer text-sm"
                           >
                            {topic}
                           </Badge>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredInsights.map(insight => (
                            <GlowingCard key={insight.slug}>
                                <Link href={`/insights/${insight.slug}`} className="block h-full">
                                    <div className="flex flex-col h-full">
                                        <CardHeader className="p-0">
                                            <div data-ai-hint={insight.dataAiHint} className="overflow-hidden rounded-t-xl">
                                                <Image
                                                    src={insight.image}
                                                    alt={insight.title}
                                                    width={insight.width}
                                                    height={insight.height}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4 md:p-6 flex-grow">
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {insight.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                                ))}
                                            </div>
                                            <CardTitle className="text-lg md:text-xl">
                                                {insight.title}
                                            </CardTitle>
                                            <CardDescription className="mt-2 text-sm line-clamp-3">{insight.description}</CardDescription>
                                        </CardContent>
                                        <CardFooter className="p-4 md:p-6 pt-0 mt-auto">
                                            <div className="text-primary font-semibold flex items-center">
                                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        </CardFooter>
                                    </div>
                                </Link>
                            </GlowingCard>
                        ))}
                    </div>
                    {filteredInsights.length === 0 && (
                        <div className="text-center py-16">
                            <Search className="mx-auto h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-4 text-xl font-semibold">No Articles Found</h3>
                            <p className="mt-2 text-muted-foreground">Try adjusting your search or category filters.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
