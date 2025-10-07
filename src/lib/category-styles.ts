
import {
  IconHumanResources,
  IconSales,
  IconMarketing,
  IconBriefcase,
  IconProcurement,
  IconDevelopment,
  IconHealthcare,
  IconItOperations,
  IconRealEstate,
  IconAdminOps,
  IconSupport,
  IconGeneral
} from '@/components/ui/category-icons';
import React from 'react';

export const categories = [
  { name: 'Show All', icon: IconGeneral },
  { name: 'Finance', icon: IconBriefcase },
  { name: 'Human Resources', icon: IconHumanResources },
  { name: 'Sales', icon: IconSales },
  { name: 'Marketing', icon: IconMarketing },
  { name: 'Real Estate', icon: IconRealEstate },
  { name: 'IT Operations', icon: IconItOperations },
  { name: 'Procurement', icon: IconProcurement },
  { name: 'Development', icon: IconDevelopment },
  { name: 'Healthcare', icon: IconHealthcare },
  { name: 'Admin and Ops', icon: IconAdminOps },
  { name: 'CS and Support', icon: IconSupport },
];

export const categoryStyles: { [key: string]: { icon: React.ElementType, iconBg: string, color: string } } = {
  'Finance': { icon: IconBriefcase, iconBg: "bg-green-100 dark:bg-green-900/50", color: "text-green-600 dark:text-green-400" },
  'Human Resources': { icon: IconHumanResources, iconBg: "bg-blue-100 dark:bg-blue-900/50", color: "text-blue-600 dark:text-blue-400" },
  'Sales': { icon: IconSales, iconBg: "bg-orange-100 dark:bg-orange-900/50", color: "text-orange-600 dark:text-orange-400" },
  'Marketing': { icon: IconMarketing, iconBg: "bg-purple-100 dark:bg-purple-900/50", color: "text-purple-600 dark:text-purple-400" },
  'Real Estate': { icon: IconRealEstate, iconBg: "bg-violet-100 dark:bg-violet-900/50", color: "text-violet-600 dark:text-violet-400" },
  'IT Operations': { icon: IconItOperations, iconBg: "bg-pink-100 dark:bg-pink-900/50", color: "text-pink-600 dark:text-pink-400" },
  'Procurement': { icon: IconProcurement, iconBg: "bg-indigo-100 dark:bg-indigo-900/50", color: "text-indigo-600 dark:text-indigo-400" },
  'Development': { icon: IconDevelopment, iconBg: "bg-red-100 dark:bg-red-900/50", color: "text-red-600 dark:text-red-400" },
  'Healthcare': { icon: IconHealthcare, iconBg: "bg-emerald-100 dark:bg-emerald-900/50", color: "text-emerald-600 dark:text-emerald-400" },
  'Admin and Ops': { icon: IconAdminOps, iconBg: "bg-yellow-100 dark:bg-yellow-900/50", color: "text-yellow-600 dark:text-yellow-400" },
  'CS and Support': { icon: IconSupport, iconBg: "bg-cyan-100 dark:bg-cyan-900/50", color: "text-cyan-600 dark:text-cyan-400" },
  'General': { icon: IconGeneral, iconBg: "bg-gray-100 dark:bg-gray-900/50", color: "text-gray-600 dark:text-gray-400" },
};
