
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HeroCarousel } from './hero-carousel';

const slideData = [
  {
    headline: "ServiceNow AI Platform for any industry",
    description: "Put the ServiceNow advantage to work. One platform bringing any AI, any data, and any workflows together to power your business.",
    cta1: "Discover Platform",
    cta2: "Schedule Demo",
    carouselItems: [
      { image: 'https://picsum.photos/seed/1/360/240', dataAiHint: "abstract infinity loop" },
      { image: 'https://picsum.photos/seed/2/360/240', dataAiHint: "woman smiling computer" },
      { image: 'https://picsum.photos/seed/3/360/240', dataAiHint: "glowing orbs network" },
      { image: 'https://picsum.photos/seed/4/360/240', dataAiHint: "futuristic user interface" },
      { image: 'https://picsum.photos/seed/5/360/240', dataAiHint: "data visualization chart" },
    ]
  },
  {
    headline: "Automate and Optimize with LOG_ON",
    description: "Leverage our expertise to build custom AI-powered workflows that drive efficiency and innovation across your entire organization.",
    cta1: "Explore Automation",
    cta2: "Get Free Assessment",
     carouselItems: [
      { image: 'https://picsum.photos/seed/6/360/240', dataAiHint: "robot arm gears" },
      { image: 'https://picsum.photos/seed/7/360/240', dataAiHint: "data server room" },
      { image: 'https://picsum.photos/seed/8/360/240', dataAiHint: "business people meeting" },
      { image: 'https://picsum.photos/seed/9/360/240', dataAiHint: "analytics dashboard graph" },
      { image: 'https://picsum.photos/seed/10/360/240', dataAiHint: "glowing brain icon" },
    ]
  },
  {
    headline: "Your Strategic Partner in Digital Transformation",
    description: "We help you navigate the complexities of technology to create scalable, secure, and future-proof solutions that grow with your business.",
    cta1: "Our Solutions",
    cta2: "Contact Us",
     carouselItems: [
      { image: 'https://picsum.photos/seed/11/360/240', dataAiHint: "cloud computing architecture" },
      { image: 'https://picsum.photos/seed/12/360/240', dataAiHint: "global network connections" },
      { image: 'https://picsum.photos/seed/13/360/240', dataAiHint: "team collaborating whiteboard" },
      { image: 'https://picsum.photos/seed/14/360/240', dataAiHint: "secure data lock" },
      { image: 'https://picsum.photos/seed/15/360/240', dataAiHint: "person using tablet" },
    ]
  }
];

export function Hero() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index % slideData.length);
  };
  
  const currentSlide = slideData[activeSlideIndex];

  return (
     <section 
        className="relative w-full h-screen min-h-[700px] md:min-h-[800px] flex flex-col bg-bg-deep overflow-hidden"
        role="region" 
        aria-roledescription="carousel" 
        aria-label="Hero content"
    >
        <div className="container mx-auto px-4 md:px-6 flex-grow grid md:grid-cols-2 lg:grid-cols-[1fr_420px] items-center gap-8 md:gap-16 pt-24 md:pt-0">
            {/* Left Column */}
            <div className="text-center md:text-left relative z-10">
                <h1 className="font-headline text-h1-clamp !leading-tight text-white transition-opacity duration-500">
                    {currentSlide.headline}
                </h1>
            </div>

            {/* Right Column */}
            <div className="relative z-10 flex flex-col items-center md:items-start justify-center gap-4 text-center md:text-left">
                <p className="text-lg text-white/80 transition-opacity duration-500">
                    {currentSlide.description}
                </p>
                <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto">
                    <Button size="lg" className="bg-accent-green hover:bg-accent-green-2 text-white w-full md:w-auto">
                        {currentSlide.cta1}
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white w-full md:w-auto">
                        {currentSlide.cta2}
                    </Button>
                </div>
            </div>
        </div>

        <HeroCarousel slides={slideData.flatMap(s => s.carouselItems)} onSlideChange={handleSlideChange} />
        
        {/* Visually hidden for screen readers */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
            {`Slide ${activeSlideIndex + 1} of ${slideData.length}: ${currentSlide.headline}`}
        </div>
    </section>
  );
}
