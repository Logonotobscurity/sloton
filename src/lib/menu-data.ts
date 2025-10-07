
export const menuData = {
  "menuVersion": "1.0",
  "menu": {
    "products": {
       "heading": "Products",
       "intro": "Unite people, processes, and systems with AI-powered products for all your workflows.",
       "cta": {"label": "See All Products", "href": "/solutions"},
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
      "cta": {"label": "Learn More", "href": "/use-cases"},
      "items": [
        {"title": "Finance & Banking", "shortDescription": "Future-proof your bank with one AI platform.", "href": "/use-cases#finance"},
        {"title": "Healthcare", "shortDescription": "Fuel efficiency, reduce costs, and deliver quality care.", "href": "/use-cases#healthcare"},
        {"title": "E-Commerce", "shortDescription": "Enhance retail experiences with AI-powered insights.", "href": "/use-cases#ecommerce"},
        {"title": "Insurance", "shortDescription": "Be the trusted carrier of choice with one AI platform.", "href": "/use-cases#insurance"},
        {"title": "Accounting", "shortDescription": "Streamline your accounting workflows with automated data entry.", "href": "/use-cases#accounting"},
        {"title": "Manufacturing", "shortDescription": "Drive manufacturing efficiency with one AI platform.", "href": "/use-cases#manufacturing"},
        {"title": "Real Estate", "shortDescription": "Enhance client engagement with AI-powered chatbots.", "href": "/use-cases#real-estate"},
        {"title": "IT Consulting", "shortDescription": "Enhance your service offerings and internal efficiencies.", "href": "/use-cases#it-consulting"},
        {"title": "Logistics & Transport", "shortDescription": "Optimize your logistics network with AI-driven route planning.", "href": "/use-cases#logistics"},
        {"title": "Telecom", "shortDescription": "Manage infrastructure on one AI platform.", "href": "/use-cases#telecom"}
      ]
    },
    "partners": {
      "heading": "Partners",
      "intro": "Locate the partner you need, or explore the benefits of partnering with LOG_ON.",
      "cta": {"label": "Learn More", "href": "/partners"},
      "items": [
        {"title": "Find a partner", "desc": "Connect with a LOG_ON partner to reach your business goals.", "href": "/partners"},
        {"title": "Become a partner", "desc": "Join our partner ecosystem. Choose partner paths that best fit your expertise and experience.", "href": "/contact"},
        {"title": "Partner awards", "desc": "Meet the global LOG_ON partners leading the way in innovation and value for our customers.", "href": "/partners"},
        {"title": "Partner portal", "desc": "Find tasks, alerts, and information you need, all in one place.", "href": "/contact"},
        {"title": "Partner applications", "desc": "Explore innovative apps that extend and complement the LOG_ON AI Platform.", "href": "/partners"}
      ]
    },
    "company": {
      "heading": "Company",
      "intro": "Bring AI Agents to every corner of your business.",
      "cta": {"label": "Learn More", "href": "/about"},
      "items": [
        {"title": "About Us", "desc": "Learn about our mission, values, and news.", "href": "/about"},
        {"title": "Careers", "desc": "Make your next career move with us.", "href": "/about/careers"},
        {"title": "Investors", "desc": "Explore investor news and resources.", "href": "/about/investors"},
        {"title": "Leadership", "desc": "Meet the LOG_ON leadership team.", "href": "/about/our-leadership"},
        {"title": "Locations", "desc": "See LOG_ON office locations.", "href": "/about/locations"},
      ]
    },
     "resources": {
      "heading": "Resources",
      "intro": "Explore our resources to help you get the most out of our products.",
      "cta": {"label": "Learn More", "href": "/"},
      "items": [
        {"title": "Insights", "desc": "Stay ahead with our expert analysis.", "href": "/insights"},
        {"title": "FAQ", "desc": "Find answers to common questions.", "href": "/#faq"},
        {"title": "Training", "desc": "Get the most out of our products with our training resources.", "href": "/training"},
        {"title": "Support", "desc": "Get help from our support team.", "href": "/support"}
      ]
    },
    "topLevelNav": []
  }
};

export type MenuKey = keyof typeof menuData.menu;
