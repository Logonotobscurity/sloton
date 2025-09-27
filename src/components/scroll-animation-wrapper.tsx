
"use client";

import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ScrollAnimationWrapper({ children, className }: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'reveal-on-scroll',
        isVisible && 'is-visible',
        className
      )}
    >
      {children}
    </div>
  );
}
