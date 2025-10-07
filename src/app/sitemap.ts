
import { MetadataRoute } from 'next';
import { insights } from '@/lib/insights';
import { getTemplates } from '@/lib/workflow-templates';
import { menuData } from '@/lib/menu-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logonsolutions.netlify.app';
  const seenUrls = new Set<string>();

  // Function to add a URL to the set
  const addUrl = (url: string) => {
    if (url && url.startsWith('/') && !seenUrls.has(url)) {
      seenUrls.add(url);
    }
  };

  // Add static home page
  addUrl('/');

  // From header navigation (menuData)
  Object.values(menuData.menu).forEach(menuSection => {
    if (menuSection.cta?.href) {
      addUrl(menuSection.cta.href);
    }
    menuSection.items.forEach(item => addUrl(item.href));
  });

  // Other known pages not in menuData
  addUrl('/contact');
  addUrl('/automation');
  addUrl('/support');
  addUrl('/training');
  addUrl('/partners');
  addUrl('/use-cases');
  addUrl('/about');
  addUrl('/ideas-lab');
  addUrl('/ab-testing');


  // Generate sitemap entries for static pages
  const staticUrls = Array.from(seenUrls).map((page) => ({
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

  // Dynamic pages for automation templates
  const templates = getTemplates();
  const templateUrls = templates.map((template) => ({
      url: `${baseUrl}/automation/${template.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.6
  }));

  return [...staticUrls, ...insightUrls, ...templateUrls];
}
