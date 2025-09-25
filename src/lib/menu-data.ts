
import { BrainCircuit, Zap, Code, MessageSquare, BarChart3, Database, Cog, Users, Landmark, Search, Globe, Building, Briefcase, HeartPulse, ShoppingCart, Shield, Calculator, Factory, Server, Truck, Phone } from 'lucide-react';
import React from 'react';

export const menuData = {
  "menuVersion": "1.0",
  "menu": {
    "products": {
       "heading": "Products",
       "intro": "Unite people, processes, and systems with AI-powered products for all your workflows.",
       "cta": {"label": "See All Products", "href": "/solutions"},
       "items": [
          {
            icon: React.createElement(BrainCircuit, { className: "h-5 w-5 text-primary" }),
            title: 'AI Solutions',
            href: '/ai-solutions',
            description: 'Custom AI models to solve complex business challenges.'
          },
          {
            icon: React.createElement(Zap, { className: "h-5 w-5 text-primary" }),
            title: 'Process Automation',
            href: '/automation',
            description: 'Streamline workflows and boost operational efficiency.'
          },
          {
            icon: React.createElement(Code, { className: "h-5 w-5 text-primary" }),
            title: 'Web & Custom Development',
            href: '/web-development',
            description: 'Scalable websites and applications tailored to your needs.'
          },
          {
            icon: React.createElement(MessageSquare, { className: "h-5 w-5 text-primary" }),
            title: 'AI Chatbots',
            href: '/chatbots',
            description: 'Engage customers 24/7 with intelligent virtual assistants.'
          },
          {
            icon: React.createElement(BarChart3, { className: "h-5 w-5 text-primary" }),
            title: 'Business Analytics',
            href: '/business-analytics',
            description: 'Turn data into actionable insights with custom dashboards.'
          },
          {
            icon: React.createElement(Database, { className: "h-5 w-5 text-primary" }),
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
        {"icon": React.createElement(Briefcase, { className: "h-5 w-5 text-primary" }), "title": "Finance and Banking", "shortDescription": "Future-proof your bank with one AI platform.", "href": "/use-cases#finance"},
        {"icon": React.createElement(HeartPulse, { className: "h-5 w-5 text-primary" }), "title": "Healthcare", "shortDescription": "Fuel efficiency, reduce costs, and deliver quality care.", "href": "/use-cases#healthcare"},
        {"icon": React.createElement(ShoppingCart, { className: "h-5 w-5 text-primary" }), "title": "E-Commerce", "shortDescription": "Enhance retail experiences with AI-powered insights.", "href": "/use-cases#e-commerce"},
        {"icon": React.createElement(Shield, { className: "h-5 w-5 text-primary" }), "title": "Insurance", "shortDescription": "Be the trusted carrier of choice with one AI platform.", "href": "/use-cases#insurance"},
        {"icon": React.createElement(Calculator, { className: "h-5 w-5 text-primary" }), "title": "Accounting", "shortDescription": "Streamline your accounting workflows with automated data entry.", "href": "/use-cases#accounting"},
        {"icon": React.createElement(Factory, { className: "h-5 w-5 text-primary" }), "title": "Manufacturing", "shortDescription": "Drive manufacturing efficiency with one AI platform.", "href": "/use-cases#manufacturing"},
        {"icon": React.createElement(Building, { className: "h-5 w-5 text-primary" }), "title": "Real Estate", "shortDescription": "Enhance client engagement with AI-powered chatbots.", "href": "/use-cases#real-estate"},
        {"icon": React.createElement(Server, { className: "h-5 w-5 text-primary" }), "title": "IT Consulting", "shortDescription": "Enhance your service offerings and internal efficiencies.", "href": "/use-cases#it-consulting"},
        {"icon": React.createElement(Truck, { className: "h-5 w-5 text-primary" }), "title": "Logistics & Transport", "shortDescription": "Optimize your logistics network with AI-driven route planning.", "href": "/use-cases#logistics"},
        {"icon": React.createElement(Phone, { className: "h-5 w-5 text-primary" }), "title": "Telecom", "shortDescription": "Manage infrastructure on one AI platform.", "href": "/use-cases#telecom"}
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
        {"title": "Careers", "desc": "Make your next career move with the fastest growing enterprise software company.", "href": "/about"},
        {"title": "Investors", "desc": "Explore investor news and resources.", "href": "/about"},
        {"title": "LOG_ON Research", "desc": "Learn how we keep innovation moving forward through our AI research team, labs, and partnerships.", "href": "/ai-solutions"},
        {"title": "Leadership", "desc": "Meet the LOG_ON leadership team.", "href": "/about"},
        {"title": "Locations", "desc": "See LOG_ON office locations around the world.", "href": "/contact"},
        {"title": "Newsroom", "desc": "LOG_ON is making headlines. Find announcements, media kits, and more.", "href": "/insights"},
        {"title": "Analyst Reports", "desc": "Get expert insights from top industry analysts on LOG_ON.", "href": "/insights"},
        {"title": "Global impact", "desc": "Join us to foster a more sustainable, fair, and ethical world.", "href": "/training#impact"},
        {"title": "Trust and compliance", "desc": "Learn the measures LOG_ON takes to keep your data secure and compliant.", "href": "/about"}
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
