
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ContactInfoFormProps {
    onFormPartSubmit: (partData: any, partName: string, userMessageText: string) => void;
    partName: string;
}

export function ContactInfoForm({ onFormPartSubmit, partName }: ContactInfoFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onFormPartSubmit({ name, email }, partName, 'Report will be sent to ' + email);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 pt-2 text-xs">
      <div className="grid grid-cols-2 gap-2">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" required className="h-8 text-xs" />
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="h-8 text-xs" />
      </div>
      <Button type="submit" size="sm" className="w-full h-8 text-xs">Generate My Report</Button>
    </form>
  )
}
