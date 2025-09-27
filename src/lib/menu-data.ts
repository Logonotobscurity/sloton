import React from 'react';
import { BrainCircuit, Zap, Code, MessageSquare, BarChart3, Database, Cog, Users, Landmark, Search, Globe, Building, Briefcase, HeartPulse, ShoppingCart, Shield, Calculator, Factory, Server, Truck, Phone } from 'lucide-react';

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
        {"title": "Finance and Banking", "shortDescription": "Future-proof your bank with one AI platform.", "href": "/use-cases"},
        {"title": "Healthcare", "shortDescription": "Fuel efficiency, reduce costs, and deliver quality care.", "href": "/use-cases"},
        {"title": "E-Commerce", "shortDescription": "Enhance retail experiences with AI-powered insights.", "href": "/use-cases"},
        {"title": "Insurance", "shortDescription": "Be the trusted carrier of choice with one AI platform.", "href": "/use-cases"},
        {"title": "Accounting", "shortDescription": "Streamline your accounting workflows with automated data entry.", "href": "/use-cases"},
        {"title": "Manufacturing", "shortDescription": "Drive manufacturing efficiency with one AI platform.", "href": "/use-cases"},
        {"title": "Real Estate", "shortDescription": "Enhance client engagement with AI-powered chatbots.", "href": "/use-cases"},
        {"title": "IT Consulting", "shortDescription": "Enhance your service offerings and internal efficiencies.", "href": "/use-cases"},
        {"title": "Logistics & Transport", "shortDescription": "Optimize your logistics network with AI-driven route planning.", "href": "/use-cases"},
        {"title": "Telecom", "shortDescription": "Manage infrastructure on one AI platform.", "href": "/use-cases"}
      ]
    },
    "learning": {
      "heading": "Learning",
      "leftNav": [
        "LOG_ON Learning",
        "Community",
        "Developer Resources",
        "Events",
        "Customer Stories",
        "Blog"
      ],
      "center": {
        "title": "LOG_ON Learning",
        "intro": "Discover a playground for learning, designed to help develop the skills you need for an AI-driven world.",
        "cta": {"label": "Start Learning", "href": "/training"},
        "links": [
          {"title": "Career journeys", "desc": "Learn about key roles in high demand within the LOG_ON ecosystem.", "href": "/training"},
          {"title": "Learning Help Center", "desc": "Find answers to your questions by exploring our knowledge base.", "href": "/support"},
          {"title": "Information Community", "desc": "Connect with peers and experts in our community forums.", "href": "/support"},
          {"title": "Training and certification", "desc": "Explore the LOG_ON certification portfolio.", "href": "/training"},
          {"title": "RiseUp with LOG_ON", "desc": "Empower individuals in emerging technology field communities with key skills to launch tech careers.", "href": "/training#impact"},
          {"title": "Expert programs", "desc": "Chart a course to elevate your career and become a recognized leader.", "href": "/training"}
        ]
      }
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
      "heading": "Discover why LOG_ON is the AI platform for business transformation",
      "intro": "Bring AI Agents to every corner of your business.",
      "cta": {"label": "Learn More", "href": "/about"},
      "items": [
        {"title": "Careers", "desc": "Make your next career move with us.", "href": "/about/careers"},
        {"title": "Investors", "desc": "Explore investor news and resources.", "href": "/about/investors"},
        {"title": "LOG_ON Research", "desc": "How we keep innovation moving forward.", "href": "/about/research"},
        {"title": "Leadership", "desc": "Meet the LOG_ON leadership team.", "href": "/about/leadership"},
        {"title": "Locations", "desc": "See LOG_ON office locations.", "href": "/about/locations"},
        {"title": "Newsroom", "desc": "Find announcements, media kits, and more.", "href": "/about/newsroom"},
        {"title": "Analyst Reports", "desc": "Get expert insights from top industry analysts.", "href": "/about/analyst-reports"},
        {"title": "Global Impact", "desc": "Fostering a more sustainable and ethical world.", "href": "/about/global-impact"},
        {"title": "Trust and Compliance", "desc": "How we keep your data secure and compliant.", "href": "/about/trust"}
      ]
    },
    "support": {
      "heading": "Support",
      "leftNav": [
        "Customer Support",
        "Documentation",
        "Best Practices",
        "MyNow",
        "Customer Success",
        "Platform Releases"
      ],
      "center": {
        "title": "Customer Support",
        "intro": "Access your instances, manage tasks and explore self-service help all in one place.",
        "links": [
          {"title": "Community", "desc": "Connect with other customers to share tips, exchange resources, and solve problems together.", "href": "/support"}
        ]
      },
      "promo": {
        "title": "Get support",
        "desc": "Discover answers, troubleshoot issues, and get expert help, all in our support center.",
        "cta": {"label": "Visit Support Center", "href": "/support"}
      }
    }
  }
};
