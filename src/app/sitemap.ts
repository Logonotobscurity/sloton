
import { MetadataRoute } from 'next';
import { insights } from '@/lib/insights';
import { templates } from '@/lib/workflow-templates';
import { menuData } from '@/lib/menu-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://logonsolutions.netlify.app';

  // Static pages from menuData and other known pages
  const seenUrls = new Set<string>(['/']);

  const addUrl = (url: string) => {
    if (url && url.startsWith('/') && !seenUrls.has(url)) {
      // Exclude pages that have been merged
      const excludedPages = [
        '/about/newsroom', 
        '/about/analyst-reports', 
        '/about/global-impact', 
        '/about/research', 
        '/about/trust'
      ];
      if (!excludedPages.includes(url)) {
        seenUrls.add(url);
      }
    }
  };

  menuData.menu.products.items.forEach(item => addUrl(item.href));
  addUrl(menuData.menu.products.cta.href);

  menuData.menu.industries.items.forEach(item => addUrl(item.href));
  addUrl(menuData.menu.industries.cta.href);
  
  menuData.menu.learning.center.links.forEach(item => addUrl(item.href));
  addUrl(menuData.menu.learning.center.cta.href);
  
  menuData.menu.partners.items.forEach(item => addUrl(item.href));
  addUrl(menuData.menu.partners.cta.href);

  menuData.menu.company.items.forEach(item => addUrl(item.href));
  addUrl(menuData.menu.company.cta.href);

  menuData.menu.support.center.links.forEach(link => addUrl(link.href));
  addUrl(menuData.menu.support.promo.cta.href);

  // Manually add other pages not in menu
  ['/ab-testing'].forEach(addUrl);


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
  const templateUrls = templates.map((template) => ({
      url: `${baseUrl}/automation/${template.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as 'monthly',
      priority: 0.6
  }));


  return [...staticUrls, ...insightUrls, ...templateUrls];
}
