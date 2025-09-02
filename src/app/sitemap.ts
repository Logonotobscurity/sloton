
import { MetadataRoute } from 'next';
import { insights } from '@/lib/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logonsolutions.netlify.app';

  // Static pages
  const staticPages = [
    '/',
    '/about',
    '/solutions',
    '/automation',
    '/web-development',
    '/ai-solutions',
    '/chatbots',
    '/business-analytics',
    '/database-solutions',
    '/use-cases',
    '/training',
    '/insights',
    '/contact',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: page === '/' ? 1.0 : 0.8,
  }));

  // Dynamic pages for insights/articles
  const insightUrls = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.date),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.7,
  }));


  return [...staticUrls, ...insightUrls];
}
