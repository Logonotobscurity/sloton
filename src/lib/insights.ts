
import imageData from '@/lib/placeholder-images.json';

export interface Insight {
    title: string;
    slug: string;
    description: string;
    image: string;
    width: number;
    height: number;
    dataAiHint: string;
    tags: string[];
    author: string;
    date: string;
}

export const insights: Insight[] = [
   {
    title: "Why llms.txt Matters for AI Agent Development",
    slug: "why-llms-txt-matters-for-seo",
    description: "Learn how the llms.txt file is a key tool for AI agent development, helping websites communicate effectively with large language models.",
    image: imageData.llmsTxtFile.src,
    width: imageData.llmsTxtFile.width,
    height: imageData.llmsTxtFile.height,
    dataAiHint: imageData.llmsTxtFile.dataAiHint,
    tags: ["SEO", "AI", "Technical SEO"],
    author: "Oluwamayowa Logo",
    date: "2025-08-19"
  },
  {
    title: "10 Content Formats to Supercharge Workplace AI",
    slug: "10-content-formats-that-get-picked-up-by-llms",
    description: "Discover how to structure your internal content to improve visibility for workplace AI and ensure your key information is accurately represented in automated workflows.",
    image: imageData.aiContentFormats.src,
    width: imageData.aiContentFormats.width,
    height: imageData.aiContentFormats.height,
    dataAiHint: imageData.aiContentFormats.dataAiHint,
    tags: ["AI", "SEO", "Content Strategy"],
    author: "Favour Alfred",
    date: "2025-08-11"
  },
  {
    title: "SEO vs GEO: Why Your Content is Invisible to Workplace AI",
    slug: "seo-vs-geo-invisible-in-ai-search",
    description: "Learn the difference between traditional SEO and Generative Engine Optimization (GEO) for internal knowledge bases and workplace AI.",
    image: imageData.seoVsGeo.src,
    width: imageData.seoVsGeo.width,
    height: imageData.seoVsGeo.height,
    dataAiHint: imageData.seoVsGeo.dataAiHint,
    tags: ["SEO", "GEO", "AI Search", "Content Strategy"],
    author: "Favour Alfred",
    date: "2025-04-14"
  },
  {
    title: "My AI Investment Playbook: A Guide to Workplace Automation",
    slug: "ai-investment-playbook",
    description: "A practical guide to investing in workplace AI and automation. Here's exactly what I'm focusing on and why for businesses in Nigeria.",
    image: imageData.stockMarketChart.src,
    width: imageData.stockMarketChart.width,
    height: imageData.stockMarketChart.height,
    dataAiHint: imageData.stockMarketChart.dataAiHint,
    tags: ["AI", "Investing", "Technology", "Automation"],
    author: "Oluwamayowa Logo",
    date: "2024-08-21"
  },
  {
    title: "How to Put AI Agents to Work in Customer Support",
    slug: "transforming-customer-support-with-ai",
    description: "Learn how to leverage your existing company documents to build private AI agents that can revolutionize your customer support systems in Nigeria.",
    image: imageData.customerSupportAi.src,
    width: imageData.customerSupportAi.width,
    height: imageData.customerSupportAi.height,
    dataAiHint: imageData.customerSupportAi.dataAiHint,
    tags: ["AI", "Training", "Customer Support"],
    author: "Oluwamayowa Logo",
    date: "2024-08-20"
  },
  {
    title: "Prompt Engineering for AI Agent Development",
    slug: "prompt-engineering-for-developers",
    description: "Discover how prompt engineering can supercharge your AI agent development. Learn to automate tasks and build more effective workplace AI solutions.",
    image: imageData.codeOnScreen.src,
    width: imageData.codeOnScreen.width,
    height: imageData.codeOnScreen.height,
    dataAiHint: imageData.codeOnScreen.dataAiHint,
    tags: ["AI", "Training", "Development", "Prompt Engineering"],
    author: "Oluwamayowa Logo",
    date: "2024-08-19"
  },
  {
    title: "Building Recommendation Systems for E-Commerce in Nigeria",
    slug: "building-recommendation-systems",
    description: "A deep dive into building and deploying scalable AI recommendation models using Python to create personalized user experiences for the Nigerian market.",
    image: imageData.abstractDataNetwork.src,
    width: imageData.abstractDataNetwork.width,
    height: imageData.abstractDataNetwork.height,
    dataAiHint: imageData.abstractDataNetwork.dataAiHint,
    tags: ["AI", "Training", "Python", "Data Science"],
    author: "Favour Alfred",
    date: "2024-08-18"
  },
  {
    title: "A Practical Guide to Workplace AI",
    slug: "ai-insights-a-practical-guide",
    description: "A comprehensive overview of AI types and their practical applications in the workplace. Understand the core principles of a successful AI automation strategy.",
    image: imageData.glowingAiBrain.src,
    width: imageData.glowingAiBrain.width,
    height: imageData.glowingAiBrain.height,
    dataAiHint: imageData.glowingAiBrain.dataAiHint,
    tags: ["AI", "Training", "Strategy"],
    author: "Oluwamayowa Logo",
    date: "2024-08-17"
  },
  {
    title: "Prompt Engineering for Business Automation",
    slug: "prompt-engineering-for-business",
    description: "Learn how to use prompt engineering for ChatGPT to boost productivity and revolutionize business processes through workplace automation.",
    image: imageData.professionalsMeeting.src,
    width: imageData.professionalsMeeting.width,
    height: imageData.professionalsMeeting.height,
    dataAiHint: imageData.professionalsMeeting.dataAiHint,
    tags: ["AI", "Training", "Business", "Prompt Engineering"],
    author: "Favour Alfred",
    date: "2024-08-16"
  },
  {
    title: "The Future of Work: How AI Agents are Redefining Productivity",
    slug: "future-of-work-ai",
    description: "Explore the transformative impact of AI agents on modern workplaces and how businesses in Nigeria can adapt to the new era of workplace automation.",
    image: imageData.futuristicAiTech.src,
    width: imageData.futuristicAiTech.width,
    height: imageData.futuristicAiTech.height,
    dataAiHint: imageData.futuristicAiTech.dataAiHint,
    tags: ["AI", "Future of Work"],
    author: "Oluwamayowa Logo",
    date: "2024-08-15"
  },
  {
    title: "A Guide to Workplace Automation in Nigeria",
    slug: "guide-to-business-process-automation",
    description: "A deep dive into the strategies and technologies behind successful workplace automation implementation for businesses in Nigeria.",
    image: imageData.workflowAutomation.src,
    width: imageData.workflowAutomation.width,
    height: imageData.workflowAutomation.height,
    dataAiHint: imageData.workflowAutomation.dataAiHint,
    tags: ["Automation", "Strategy"],
    author: "Favour Alfred",
    date: "2024-08-10"
  },
  {
    title: "Scaling Securely: Cloud & AI Agent Security",
    slug: "scaling-securely-cloud-infrastructure",
    description: "Learn how to build a robust and secure cloud foundation that scales with your business needs, with a focus on AI agent and workplace automation security.",
    image: imageData.cloudSecurity.src,
    width: imageData.cloudSecurity.width,
    height: imageData.cloudSecurity.height,
    dataAiHint: imageData.cloudSecurity.dataAiHint,
    tags: ["Cloud", "Security"],
    author: "Oluwamayowa Logo",
    date: "2024-08-05"
  },
  {
    title: "The Rise of No-Code AI Agent Development in Nigeria",
    slug: "no-code-low-code-nigeria",
    description: "How visual development tools are empowering a new generation of creators in Nigeria to build and deploy AI agents without writing code.",
    image: imageData.visualProgramming.src,
    width: imageData.visualProgramming.width,
    height: imageData.visualProgramming.height,
    dataAiHint: imageData.visualProgramming.dataAiHint,
    tags: ["No-Code", "Innovation", "Nigeria"],
    author: "Favour Alfred",
    date: "2024-07-28"
  },
  {
    title: "Cybersecurity in the Age of Workplace AI: Threats and Opportunities",
    slug: "cybersecurity-ai-threats-opportunities",
    description: "An overview of how AI is being used to both perpetrate and prevent cyber attacks in the context of workplace automation.",
    image: imageData.cyberSecurityLock.src,
    width: imageData.cyberSecurityLock.width,
    height: imageData.cyberSecurityLock.height,
    dataAiHint: imageData.cyberSecurityLock.dataAiHint,
    tags: ["Cybersecurity", "AI"],
    author: "Oluwamayowa Logo",
    date: "2024-07-22"
  },
   {
    title: "Data-Driven Decisions for Workplace Automation",
    slug: "primer-on-business-analytics",
    description: "Learn how to leverage data to make smarter decisions about your workplace automation strategy and measure the impact of your AI agents.",
    image: imageData.dataAnalyticsDashboard.src,
    width: imageData.dataAnalyticsDashboard.width,
    height: imageData.dataAnalyticsDashboard.height,
    dataAiHint: imageData.dataAnalyticsDashboard.dataAiHint,
    tags: ["Data", "Analytics", "BI"],
    author: "Favour Alfred",
    date: "2024-07-15"
  }
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
