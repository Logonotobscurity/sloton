
"use client"

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DialogFormWrapperProps {
    trigger: React.ReactNode;
    title: string;
    description: string;
    form: React.ReactNode;
}

export function DialogFormWrapper({ trigger, title, description, form }: DialogFormWrapperProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        {form}
      </DialogContent>
    </Dialog>
  );
}
