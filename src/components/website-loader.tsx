
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function WebsiteLoader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, [pathname]); // End loading on route change, not after a timeout.

  // This effect handles the initial load
  useEffect(() => {
    if (document.readyState === 'complete') {
        setLoading(false);
    } else {
        const handleLoad = () => setLoading(false);
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="loader"></div>
    </div>
  );
}
