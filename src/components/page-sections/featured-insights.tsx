
"use client";

import Link from 'next/link';
import { CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { insights } from '@/lib/insights';
import { Button } from '../ui/button';
import { GlowingCard } from '../ui/glowing-card';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from 'react';


export function FeaturedInsights() {
  const featuredInsights = insights.slice(0, 6); // Fetch more for a better loop
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5
      }
    })
  };

  const InsightCard = ({ insight }: { insight: typeof insights[0] }) => (
    <GlowingCard>
      <CardHeader className="p-0">
        <Link href={`/insights/${insight.slug}`}>
          <div data-ai-hint={insight.dataAiHint}>
            <Image
              src={insight.image}
              alt={insight.title}
              width={insight.width}
              height={insight.height}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 md:p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
            {insight.tags.map(tag => (
              <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>
            ))}
        </div>
        <CardTitle className="text-lg md:text-xl">
            <Link href={`/insights/${insight.slug}`} className="hover:text-primary transition-colors">
                {insight.title}
            </Link>
        </CardTitle>
        <CardDescription className="mt-2 text-sm line-clamp-3">{insight.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Link href={`/insights/${insight.slug}`} className="text-primary font-semibold flex items-center group">
          Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardFooter>
    </GlowingCard>
  );

  return (
    <section className="py-fluid-lg bg-background">
      <div className="container mx-auto px-fluid-sm">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-fluid-lg font-bold font-headline">Practical Business Intelligence</h2>
          <p className="mt-4 text-fluid-base text-muted-foreground">
            Actionable advice on AI, automation, and growth strategies that actually work for real businesses.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          {isMobile ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {featuredInsights.map((insight, index) => (
                  <CarouselItem key={index} className="basis-4/5">
                    <div className="p-1 h-full">
                      <InsightCard insight={insight} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredInsights.slice(0, 3).map((insight, i) => (
                <motion.div
                  key={insight.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={cardVariants}
                >
                  <InsightCard insight={insight} />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
            <Button asChild size="lg">
                <Link href="/insights">
                    View All Articles
                </Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
