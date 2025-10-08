
import {
  Briefcase,
  HeartPulse,
  MessageCircle,
  Users,
  ShoppingCart,
  Megaphone,
  SearchCheck,
  Code,
  ServerCog,
  Home,
  GanttChartSquare,
} from 'lucide-react';
import { IconGeneral } from '@/components/ui/category-icons';
import React from 'react';

export const categories = [
  { name: 'Show All', icon: IconGeneral },
  { name: 'Finance', icon: Briefcase },
  { name: 'Human Resources', icon: Users },
  { name: 'Sales', icon: ShoppingCart },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Real Estate', icon: Home },
  { name: 'IT Operations', icon: ServerCog },
  { name: 'Procurement', icon: SearchCheck },
  { name: 'Development', icon: Code },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Admin and Ops', icon: GanttChartSquare },
  { name: 'CS and Support', icon: MessageCircle },
];

export const categoryStyles: { [key: string]: { icon: React.ElementType, iconBg: string, color: string } } = {
  'Finance': { icon: Briefcase, iconBg: "bg-green-100 dark:bg-green-900/50", color: "text-green-600 dark:text-green-400" },
  'Human Resources': { icon: Users, iconBg: "bg-blue-100 dark:bg-blue-900/50", color: "text-blue-600 dark:text-blue-400" },
  'Sales': { icon: ShoppingCart, iconBg: "bg-orange-100 dark:bg-orange-900/50", color: "text-orange-600 dark:text-orange-400" },
  'Marketing': { icon: Megaphone, iconBg: "bg-purple-100 dark:bg-purple-900/50", color: "text-purple-600 dark:text-purple-400" },
  'Real Estate': { icon: Home, iconBg: "bg-violet-100 dark:bg-violet-900/50", color: "text-violet-600 dark:text-violet-400" },
  'IT Operations': { icon: ServerCog, iconBg: "bg-pink-100 dark:bg-pink-900/50", color: "text-pink-600 dark:text-pink-400" },
  'Procurement': { icon: SearchCheck, iconBg: "bg-indigo-100 dark:bg-indigo-900/50", color: "text-indigo-600 dark:text-indigo-400" },
  'Development': { icon: Code, iconBg: "bg-red-100 dark:bg-red-900/50", color: "text-red-600 dark:text-red-400" },
  'Healthcare': { icon: HeartPulse, iconBg: "bg-emerald-100 dark:bg-emerald-900/50", color: "text-emerald-600 dark:text-emerald-400" },
  'Admin and Ops': { icon: GanttChartSquare, iconBg: "bg-yellow-100 dark:bg-yellow-900/50", color: "text-yellow-600 dark:text-yellow-400" },
  'CS and Support': { icon: MessageCircle, iconBg: "bg-cyan-100 dark:bg-cyan-900/50", color: "text-cyan-600 dark:text-cyan-400" },
  'General': { icon: IconGeneral, iconBg: "bg-gray-100 dark:bg-gray-900/50", color: "text-gray-600 dark:text-gray-400" },
};
