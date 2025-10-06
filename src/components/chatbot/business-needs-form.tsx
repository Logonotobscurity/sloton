
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface BusinessNeedsFormProps {
    onFormPartSubmit: (partData: any, partName: string, userMessageText: string) => void;
    partName: string;
}

export function BusinessNeedsForm({ onFormPartSubmit, partName }: BusinessNeedsFormProps) {
    const [businessNeeds, setBusinessNeeds] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (businessNeeds.trim().length > 10) {
            onFormPartSubmit({ businessNeeds }, partName, businessNeeds);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <Input 
                value={businessNeeds}
                onChange={e => setBusinessNeeds(e.target.value)}
                placeholder="e.g., Reduce support costs..."
                required 
                className="h-8 text-xs" 
            />
            <Button type="submit" size="sm" className="w-full h-8 text-xs">Continue</Button>
        </form>
    );
};
