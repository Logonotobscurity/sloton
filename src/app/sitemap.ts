
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logonsolutions.netlify.app';
  const pages = [
    '/',
    '/about',
    '/automation',
    '/contact',
    '/insights',
    '/solutions',
    '/training',
    '/use-cases',
    '/web-development',
    '/ai-solutions',
    '/chatbots',
    '/business-analytics'
  ];

  const pageUrls = pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: page === '/' ? 1 : 0.8,
  }));

  return [
    ...pageUrls,
  ];
}
