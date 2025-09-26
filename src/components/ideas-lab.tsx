
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlowingCard } from "./ui/glowing-card";

export function IdeasLab() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <GlowingCard>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">
                Our Ideas Lab
              </h2>
              <p className="text-muted-foreground text-md md:text-lg">
                We are relentlessly curious, constantly testing new concepts and creative approaches. This dedicated space is where we share experimental ideas—often born from collaborations with partners—to gather feedback and drive improvement.
              </p>
              <p className="text-muted-foreground text-md md:text-lg">
                Understanding technology is our core value. It allows us to connect dots that specialists might miss, creating integrated solutions that are more robust, efficient, and innovative.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-64 w-64 md:h-80 md:w-80"
              >
                <Image
                  src="https://www.servicenow.com/content/dam/servicenow-assets/public/scripts/homepage-redesign/images/Home_AI-Agent-Logo.svg"
                  alt="AI Agent Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
}
