

export const menuData = {
  "menuVersion": "1.0",
  "menu": {
    "solutions": {
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
    "usecases": {
      "heading": "Use Cases",
      "items": [{ "href": "/use-cases" }]
    },
    "partners": {
        "heading": "Partners",
        "items": [{ "href": "/partners" }]
    },
    "company": {
      "heading": "Company",
      "intro": "Learn more about our mission, values, and the team driving our innovation.",
      "cta": {"label": "Learn More", "href": "/about"},
      "items": [
        {"title": "About Us", "description": "Our mission, values, and company news.", "href": "/about"},
        {"title": "Our Leadership", "description": "Meet the LOG_ON leadership team.", "href": "/about/our-leadership"},
        {"title": "Careers", "description": "Explore open positions and join our team.", "href": "/about/careers"},
        {"title": "Investor Relations", "description": "News and resources for our investors.", "href": "/about/investors"},
        {"title": "Insights", "description": "Expert analysis on AI, automation, and tech trends.", "href": "/insights"},
        {"title": "Our Locations", "description": "Find LOG_ON office information.", "href": "/about/locations"},
      ]
    }
  }
};

export type MenuKey = keyof typeof menuData.menu;
