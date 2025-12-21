import templatesData from '@/lib/data/workflow-templates.json';
import { slugify } from './slugify';

export interface TemplateStep {
    name: string;
    description: string;
}

export interface Template {
  category: 'Finance' | 'Human Resources' | 'Sales' | 'Marketing' | 'Real Estate' | 'IT Operations' | 'Procurement' | 'Development' | 'Healthcare' | 'Admin and Ops' | 'CS and Support';
  name: string;
  slug: string;
  description: string;
  purpose?: string;
  steps?: TemplateStep[];
}

// Add a slug to each template object dynamically
export const templates: Template[] = (templatesData as Omit<Template, 'slug'>[]).map(template => ({
    ...template,
    slug: slugify(template.name)
}));

export function getTemplates(): Template[] {
    return templates;
}

export function getTemplateBySlug(slug: string): Template | undefined {
    return templates.find(template => template.slug === slug);
}
