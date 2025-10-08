
"use client";

import React from "react";
import { Button } from '@/components/ui/button';
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SolutionRecommendationForm } from "../solution-recommendation-form";
 
export function Hero() {

  return (
    <div>
        <div>
            <div>
                <p>
                    Connecting Advantages. Delivering Results.
                </p>
                <h1>
                    Do More with Less: <span>Smart Automation</span> for Growing Businesses.
                </h1>
                <p>
                    Stop wasting time on disconnected tools. Get a clear roadmap to integrated systems that save time and drive revenue growth.
                </p>
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Get Your Free Efficiency Assessment</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Free AI Business Assessment</DialogTitle>
                                <DialogDescription>
                                Describe your business needs to receive tailored IT solution recommendations from our AI consultant.
                                </DialogDescription>
                            </DialogHeader>
                            <SolutionRecommendationForm />
                        </DialogContent>
                    </Dialog>
                    <Button asChild>
                        <Link href="/solutions">See How We Drive Growth</Link>
                    </Button>
                </div>
            </div>
      </div>
    </div>
  );
}
