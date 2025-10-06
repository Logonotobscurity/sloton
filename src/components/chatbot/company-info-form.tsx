
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CompanyInfoFormProps {
    onFormPartSubmit: (partData: any, partName: string, userMessageText: string) => void;
    partName: string;
}

export function CompanyInfoForm({ onFormPartSubmit, partName }: CompanyInfoFormProps) {
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companySize && industry && budget) {
      onFormPartSubmit({ companySize, industry, budget }, partName, `Company info provided.`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2 pt-2 text-xs">
      <div className="grid grid-cols-2 gap-2">
         <Select onValueChange={setCompanySize} value={companySize} required>
            <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="Company Size" /></SelectTrigger>
            <SelectContent>
                <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                <SelectItem value="51-200 employees">51-200 employees</SelectItem>
            </SelectContent>
        </Select>
        <Input value={industry} onChange={e => setIndustry(e.target.value)} placeholder="Industry" required className="h-8 text-xs"/>
      </div>
      <Select onValueChange={setBudget} value={budget} required>
        <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="Budget" /></SelectTrigger>
        <SelectContent>
            <SelectItem value="Under $5,000">Under $5,000</SelectItem>
            <SelectItem value="$5,000 - $20,000">$5,000 - $20,000</SelectItem>
        </SelectContent>
    </Select>
      <Button type="submit" size="sm" className="w-full h-8 text-xs">Continue</Button>
    </form>
  )
}
