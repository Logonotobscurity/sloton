
export interface Insight {
    title: string;
    slug: string;
    description: string;
    image: string;
    dataAiHint: string;
    tags: string[];
    author: string;
    date: string;
}

export const insights: Insight[] = [
  {
    title: "Transforming Customer Support with AI: Crafting Custom Assistants",
    slug: "transforming-customer-support-with-ai",
    description: "Learn how to leverage your organization's existing documents and SOPs to build private AI support tools that revolutionize your internal support systems.",
    image: "https://picsum.photos/1200/600?random=15",
    dataAiHint: "AI support assistant",
    tags: ["AI", "Training", "Customer Support"],
    author: "Oluwamayowa Logo",
    date: "2024-08-20"
  },
  {
    title: "The Future of Work: How AI is Redefining Productivity",
    slug: "future-of-work-ai",
    description: "Explore the transformative impact of artificial intelligence on modern workplaces and how businesses can adapt.",
    image: "https://picsum.photos/1200/600?random=5",
    dataAiHint: "AI technology",
    tags: ["AI", "Future of Work"],
    author: "Oluwamayowa Logo",
    date: "2024-08-15"
  },
  {
    title: "Unlocking Efficiency: A Guide to Business Process Automation",
    slug: "guide-to-business-process-automation",
    description: "A deep dive into the strategies and technologies behind successful automation implementation.",
    image: "https://picsum.photos/1200/600?random=6",
    dataAiHint: "workflow automation",
    tags: ["Automation", "Strategy"],
    author: "Favour Alfred",
    date: "2024-08-10"
  },
  {
    title: "Scaling Securely: Best Practices for Cloud Infrastructure",
    slug: "scaling-securely-cloud-infrastructure",
    description: "Learn how to build a robust and secure cloud foundation that scales with your business needs.",
    image: "https://picsum.photos/1200/600?random=7",
    dataAiHint: "cloud computing",
    tags: ["Cloud", "Security"],
    author: "Oluwamayowa Logo",
    date: "2024-08-05"
  },
  {
    title: "The Rise of No-Code/Low-Code Platforms in Nigeria",
    slug: "no-code-low-code-nigeria",
    description: "How visual development tools are empowering a new generation of creators and entrepreneurs.",
    image: "https://picsum.photos/1200/600?random=8",
    dataAiHint: "visual programming",
    tags: ["No-Code", "Innovation", "Nigeria"],
    author: "Favour Alfred",
    date: "2024-07-28"
  },
  {
    title: "Cybersecurity in the Age of AI: Threats and Opportunities",
    slug: "cybersecurity-ai-threats-opportunities",
    description: "An overview of how AI is being used to both perpetrate and prevent cyber attacks.",
    image: "https://picsum.photos/1200/600?random=9",
    dataAiHint: "cyber security",
    tags: ["Cybersecurity", "AI"],
    author: "Oluwamayowa Logo",
    date: "2024-07-22"
  },
   {
    title: "Data-Driven Decisions: A Primer on Business Analytics",
    slug: "primer-on-business-analytics",
    description: "Learn how to leverage data to make smarter, faster, and more effective business decisions.",
    image: "https://picsum.photos/1200/600?random=10",
    dataAiHint: "data dashboard",
    tags: ["Data", "Analytics", "BI"],
    author: "Favour Alfred",
    date: "2024-07-15"
  }
];
