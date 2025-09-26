
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CommunityLeadForm } from './community-lead-form';
import { cn } from '@/lib/utils';

export function BookDemoWidget() {
  return (
    <div className="fixed bottom-24 right-4 z-[100]">
       <Dialog>
        <DialogTrigger asChild>
            <Button 
                className={cn(
                    "rounded-full h-14 w-14 p-0 shadow-lg bg-primary hover:bg-primary/90 transition-transform duration-300 flex items-center justify-center",
                    "md:h-auto md:w-auto md:px-6 md:py-3"
                )}
            >
                <Calendar className="h-6 w-6 text-primary-foreground" />
                <span className="hidden md:inline ml-2 font-semibold">Book a Demo</span>
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl md:max-w-2xl bg-background p-0">
            <div className="p-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Book a Free Demo</DialogTitle>
                    <DialogDescription>
                        Choose a date that works for you, and we'll get in touch to schedule a personalized demo of our solutions.
                    </DialogDescription>
                </DialogHeader>
            </div>
             <div className="p-6 pt-0">
                <CommunityLeadForm interest="Free Demo Request" />
             </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
