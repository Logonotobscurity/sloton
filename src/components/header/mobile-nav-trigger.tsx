
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useHeader } from "./header-v2";

export function MobileNavTrigger() {
  const { setIsOpen } = useHeader();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsOpen(true)}
      aria-label="Open navigation menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </Button>
  );
}
