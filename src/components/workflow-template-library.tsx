
"use client";

import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, ArrowRight, BookUser, Calculator } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  IconHumanResources,
  IconSales,
  IconMarketing,
  IconFinance,
  IconProcurement,
  IconDevelopment,
  IconHealthcare,
  IconItOperations,
  IconRealEstate,
  IconAdminOps,
  IconSupport,
  IconGeneral
} from '@/lib/icons';
import { templates as allTemplates } from '@/lib/workflow-templates';
import { TaskAutomationForm } from './task-automation-form';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink, PaginationEllipsis } from '@/components/ui/pagination';

const categories = [
  { name: 'Show All', icon: IconGeneral, color: 'text-gray-600', borderColor: 'border-gray-300', bgColor: 'hover:bg-gray-50' },
  { name: 'Finance', icon: IconFinance, color: 'text-green-600', borderColor: 'border-green-300', bgColor: 'hover:bg-green-50' },
  { name: 'Human Resources', icon: IconHumanResources, color: 'text-blue-600', borderColor: 'border-blue-300', bgColor: 'hover:bg-blue-50' },
  { name: 'Sales', icon: IconSales, color: 'text-orange-600', borderColor: 'border-orange-300', bgColor: 'hover:bg-orange-50' },
  { name: 'Marketing', icon: IconMarketing, color: 'text-purple-600', borderColor: 'border-purple-300', bgColor: 'hover:bg-purple-50' },
  { name: 'Real Estate', icon: IconRealEstate, color: 'text-violet-600', borderColor: 'border-violet-300', bgColor: 'hover:bg-violet-50' },
  { name: 'IT Operations', icon: IconItOperations, color: 'text-pink-600', borderColor: 'border-pink-300', bgColor: 'hover:bg-pink-50' },
  { name: 'Procurement', icon: IconProcurement, color: 'text-indigo-600', borderColor: 'border-indigo-300', bgColor: 'hover:bg-indigo-50' },
  { name: 'Development', icon: IconDevelopment, color: 'text-red-600', borderColor: 'border-red-300', bgColor: 'hover:bg-red-50' },
  { name: 'Healthcare', icon: IconHealthcare, color: 'text-emerald-600', borderColor: 'border-emerald-300', bgColor: 'hover:bg-emerald-50' },
  { name: 'Admin and Ops', icon: IconAdminOps, color: 'text-yellow-600', borderColor: 'border-yellow-300', bgColor: 'hover:bg-yellow-50' },
  { name: 'CS and Support', icon: IconSupport, color: 'text-cyan-600', borderColor: 'border-cyan-300', bgColor: 'hover:bg-cyan-50' },
];

const categoryIconMap: { [key: string]: React.ElementType } = {
  'Finance': IconFinance,
  'Human Resources': IconHumanResources,
  'Sales': IconSales,
  'Marketing': IconMarketing,
  'Real Estate': IconRealEstate,
  'IT Operations': IconItOperations,
  'Procurement': IconProcurement,
  'Development': IconDevelopment,
  'Healthcare': IconHealthcare,
  'Admin and Ops': IconAdminOps,
  'CS and Support': IconSupport,
};

const ITEMS_PER_PAGE = 8; // 9 total cards including the static one

export function WorkflowTemplateLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryClick = (category: string) => {
    if (category === 'Show All') {
        setSelectedCategory('All');
    } else {
        setSelectedCategory(category === selectedCategory ? 'All' : category);
    }
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredTemplates = useMemo(() => allTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const paginatedTemplates = filteredTemplates.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-16 md:py-24">
      <div className="bg-amber-50/50 dark:bg-zinc-900/50 -mx-4 md:-mx-10 lg:-mx-20 px-4 md:px-10 lg:px-20 py-12 rounded-t-3xl">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search template"
              className="w-full h-14 pl-12 pr-4 rounded-lg bg-background border-border/50 shadow-sm"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {categories.map(({ name, icon: Icon, color, borderColor, bgColor }) => (
              <Button
                key={name}
                variant="outline"
                className={`rounded-full border ${(selectedCategory === name || (name === 'Show All' && selectedCategory === 'All')) ? 'bg-primary text-primary-foreground' : 'bg-background'} ${borderColor} ${bgColor} transition-colors`}
                onClick={() => handleCategoryClick(name)}
              >
                <Icon className={`mr-2 h-4 w-4 ${(selectedCategory === name || (name === 'Show All' && selectedCategory === 'All')) ? '' : color}`} />
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-8">
            <h2 className="text-2xl font-bold">
                {selectedCategory === 'All' ? 'Showing All Templates' : `Workflow template results for ${selectedCategory}`}
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="bg-secondary/50 flex flex-col group transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer border-dashed border-primary hover:border-primary/80">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Calculator className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Automation Task Designer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>Have a unique workflow? Describe it here to generate a custom, optimized automation plan instantly.</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 text-primary group">
                      Create Custom Workflow <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-background">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex items-center gap-2"><Calculator className="h-6 w-6 text-accent" /> Automation Task Designer</DialogTitle>
                    <DialogDescription>
                        Describe a workflow to generate a configured, optimized task design, complete with AI suggestions.
                    </DialogDescription>
                </DialogHeader>
                <TaskAutomationForm />
            </DialogContent>
          </Dialog>

          {paginatedTemplates.map(template => {
            const Icon = categoryIconMap[template.category] || BookUser;
            return (
              <Card key={template.name} className="bg-secondary/50 flex flex-col group transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{template.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 text-primary group">
                      Use Template <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {filteredTemplates.length === 0 && (
           <div className="text-center py-16 col-span-3">
              <Search className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-xl font-semibold">No Templates Found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your search or category filters.</p>
            </div>
        )}
      </div>
      
       {totalPages > 1 && (
        <div className="mt-16">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => { e.preventDefault(); if(currentPage > 1) handlePageChange(currentPage - 1); }}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                   href="#"
                   onClick={(e) => { e.preventDefault(); if(currentPage < totalPages) handlePageChange(currentPage + 1); }}
                   className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
