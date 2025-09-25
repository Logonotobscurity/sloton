"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselItem {
  image: string;
  dataAiHint: string;
}

interface HeroCarouselProps {
  slides: CarouselItem[];
  activeSlideIndex: number;
  onSlideChange: (index: number) => void;
}

export function HeroCarousel({ slides, activeSlideIndex, onSlideChange }: HeroCarouselProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
  }, [Autoplay({ playOnInit: true, delay: 5000, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  
  const togglePlay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    if (autoplay.isPlaying()) autoplay.stop();
    else autoplay.play();
    setIsPlaying(autoplay.isPlaying());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = (api: EmblaCarouselType) => {
      onSlideChange(api.selectedScrollSnap());
      setIsPlaying(api.plugins().autoplay.isPlaying());
    };
    
    emblaApi.on('select', onSelect);
    emblaApi.on('autoplay:play', () => setIsPlaying(true));
    emblaApi.on('autoplay:stop', () => setIsPlaying(false));

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSlideChange]);
  
   useEffect(() => {
    if (emblaApi && emblaApi.selectedScrollSnap() !== activeSlideIndex) {
      emblaApi.scrollTo(activeSlideIndex);
    }
  }, [activeSlideIndex, emblaApi]);

  return (
    <div className="absolute bottom-0 left-0 w-full" aria-roledescription="carousel" aria-label="Showcase of AI platform features">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pl-4">
                <Card className="rounded-xl overflow-hidden bg-card-glass backdrop-blur-sm border-2 border-white/10 aspect-[3/2] transition-transform duration-500 ease-in-out"
                 style={{ transform: activeSlideIndex === index ? 'scale(1.05)' : 'scale(0.9)', opacity: activeSlideIndex === index ? 1 : 0.7 }}
                >
                    <CardContent className="p-0 h-full w-full">
                    <Image 
                        src={slide.image} 
                        alt={`Showcase image ${index + 1}`} 
                        width={360} 
                        height={240} 
                        className="w-full h-full object-cover"
                        data-ai-hint={slide.dataAiHint}
                    />
                    </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center gap-4 mt-4 pb-4">
        <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous slide">
            <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={togglePlay} aria-label={isPlaying ? 'Pause autoplay' : 'Play autoplay'}>
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
         <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next slide">
            <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
