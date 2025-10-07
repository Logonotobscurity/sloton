export const menuData = {
  "menuVersion": "1.0",
  "menu": {
    "products": {
       "heading": "Solutions",
       "intro": "Unite people, processes, and systems with AI-powered products for all your workflows.",
       "cta": {"label": "See All Solutions", "href": "/solutions"},
       "items": [
          {
            title: 'AI Solutions',
            href: '/ai-solutions',
            description: 'Custom AI models to solve complex business challenges.'
          },
          {
            title: 'Process Automation',
            href: '/automation',
            description: 'Streamline workflows and boost operational efficiency.'
          },
          {
            title: 'Web & Custom Development',
            href: '/web-development',
            description: 'Scalable websites and applications tailored to your needs.'
          },
          {
            title: 'AI Chatbots',
            href: '/chatbots',
            description: 'Engage customers 24/7 with intelligent virtual assistants.'
          },
          {
            title: 'Business Analytics',
            href: '/business-analytics',
            description: 'Turn data into actionable insights with custom dashboards.'
          },
          {
            title: 'Database Solutions',
            href: '/database-solutions',
            description: 'Secure, scalable, and high-performance data management.'
          }
        ]
    },
    "industries": {
      "heading": "Industries",
      "intro": "Browse solutions to help you solve the complex business challenges unique to your industry.",
      "cta": {"label": "Explore Use Cases", "href": "/use-cases"},
      "items": [
        {"title": "Finance & Banking", "shortDescription": "Future-proof your bank with one AI platform.", "href": "/use-cases#finance"},
        {"title": "Healthcare", "shortDescription": "Fuel efficiency, reduce costs, and deliver quality care.", "href": "/use-cases#healthcare"},
        {"title": "E-Commerce", "shortDescription": "Enhance retail experiences with AI-powered insights.", "href": "/use-cases#ecommerce"},
        {"title": "Insurance", "shortDescription": "Be the trusted carrier of choice with one AI platform.", "href": "/use-cases#insurance"},
      ]
    },
    "company": {
      "heading": "Company",
      "intro": "Bring AI Agents to every corner of your business.",
      "cta": {"label": "Learn More", "href": "/about"},
      "items": [
        {"title": "About Us", "desc": "Learn about our mission, values, and news.", "href": "/about"},
        {"title": "Our Leadership", "desc": "Meet the LOG_ON leadership team.", "href": "/about/our-leadership"},
        {"title": "Careers", "desc": "Make your next career move with us.", "href": "/about/careers"},
        {"title": "Investors", "desc": "Explore investor news and resources.", "href": "/about/investors"},
        {"title": "Partners", "desc": "Locate a partner or join our partner ecosystem.", "href": "/partners"},
        {"title": "Locations", "desc": "See LOG_ON office locations.", "href": "/about/locations"},
      ]
    },
     "topLevelNav": [
        { "title": "Products", "href": "/products" },
        { "title": "Industries", "href": "/industries" },
        { "title": "Partners", "href": "/partners" },
        { "title": "Company", "href": "/company" }
     ]
  }
};

export type MenuKey = keyof Omit<typeof menuData.menu, "topLevelNav">;
