
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function WebsiteLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading. 
    // In a real app, you might use router events or data fetching status to control this.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader will be visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-1000",
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="loader"></div>
    </div>
  );
}
