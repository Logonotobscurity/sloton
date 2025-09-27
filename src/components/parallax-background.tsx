"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const layers = [
  { id: 'bg-layer-7', src: 'https://cdn-benkb.nitrocdn.com/ZtlNGPuVDgGYZTtnpPrYcgJWctLyDuUr/assets/images/optimized/rev-6768f38/www.bruceclay.com/wp-content/themes/bruceclay/assets/images/layers/7.png', depth: 0.35 },
  { id: 'bg-layer-6', src: 'https://cdn-benkb.nitrocdn.com/ZtlNGPuVDgGYZTtnpPrYcgJWctLyDuUr/assets/images/optimized/rev-6768f38/www.bruceclay.com/wp-content/themes/bruceclay/assets/images/layers/6.png', depth: 0.18 },
  { id: 'bg-layer-footer', src: 'https://cdn-benkb.nitrocdn.com/ZtlNGPuVDgGYZTtnpPrYcgJWctLyDuUr/assets/images/optimized/rev-6768f38/www.bruceclay.com/wp-content/themes/bruceclay/assets/images/footer.png', depth: 0.05 },
  { id: 'bg-layer-bottom', src: 'https://cdn-benkb.nitrocdn.com/ZtlNGPuVDgGYZTtnpPrYcgJWctLyDuUr/assets/images/optimized/rev-6768f38/www.bruceclay.com/wp-content/themes/bruceclay/assets/images/bottom.png', depth: 0.05 },
];

export function ParallaxBackground() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          layerRefs.current.forEach((ref, index) => {
            if (ref) {
              const depth = layers[index].depth;
              const movement = -(scrollY * depth);
              ref.style.transform = `translate3d(0, ${movement}px, 0)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {layers.map((layer, index) => (
        <div
          key={layer.id}
          id={layer.id}
          ref={(el) => (layerRefs.current[index] = el)}
          className="parallax-layer"
          style={{ willChange: 'transform' }}
          role="presentation"
          aria-hidden="true"
        >
          <Image
            src={layer.src}
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
            loading="eager"
            priority={index < 2}
          />
        </div>
      ))}
    </>
  );
}