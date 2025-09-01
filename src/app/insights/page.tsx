
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technology Insights & Articles',
  description: 'Stay ahead of the curve with our expert analysis on the latest trends in technology, automation, and AI. Explore articles on the future of work, business automation, and more.',
};

const insights = [
  {
    title: "The Future of Work: How AI is Redefining Productivity",
    slug: "future-of-work-ai",
    description: "Explore the transformative impact of artificial intelligence on modern workplaces and how businesses can adapt.",
    image: "https://picsum.photos/600/400?random=5",
    dataAiHint: "AI technology",
    tags: ["AI", "Future of Work"],
    author: "Oluwamayowa Logo",
    date: "2024-08-15"
  },
  {
    title: "Unlocking Efficiency: A Guide to Business Process Automation",
    slug: "guide-to-business-process-automation",
    description: "A deep dive into the strategies and technologies behind successful automation implementation.",
    image: "https://picsum.photos/600/400?random=6",
    dataAiHint: "workflow automation",
    tags: ["Automation", "Strategy"],
    author: "Favour Alfred",
    date: "2024-08-10"
  },
  {
    title: "Scaling Securely: Best Practices for Cloud Infrastructure",
    slug: "scaling-securely-cloud-infrastructure",
    description: "Learn how to build a robust and secure cloud foundation that scales with your business needs.",
    image: "https://picsum.photos/600/400?random=7",
    dataAiHint: "cloud computing",
    tags: ["Cloud", "Security"],
    author: "Oluwamayowa Logo",
    date: "2024-08-05"
  },
  {
    title: "The Rise of No-Code/Low-Code Platforms in Nigeria",
    slug: "no-code-low-code-nigeria",
    description: "How visual development tools are empowering a new generation of creators and entrepreneurs.",
    image: "https://picsum.photos/600/400?random=8",
    dataAiHint: "visual programming",
    tags: ["No-Code", "Innovation", "Nigeria"],
    author: "Favour Alfred",
    date: "2024-07-28"
  },
  {
    title: "Cybersecurity in the Age of AI: Threats and Opportunities",
    slug: "cybersecurity-ai-threats-opportunities",
    description: "An overview of how AI is being used to both perpetrate and prevent cyber attacks.",
    image: "https://picsum.photos/600/400?random=9",
    dataAiHint: "cyber security",
    tags: ["Cybersecurity", "AI"],
    author: "Oluwamayowa Logo",
    date: "2024-07-22"
  },
   {
    title: "Data-Driven Decisions: A Primer on Business Analytics",
    slug: "primer-on-business-analytics",
    description: "Learn how to leverage data to make smarter, faster, and more effective business decisions.",
    image: "https://picsum.photos/600/400?random=10",
    dataAiHint: "data dashboard",
    tags: ["Data", "Analytics", "BI"],
    author: "Favour Alfred",
    date: "2024-07-15"
  }
];

const topics = [
    "Artificial Intelligence and Machine Learning",
    "Business Process Automation (BPA)",
    "Digital Transformation Strategies",
    "Cloud Computing and DevOps",
    "Web and Mobile Development Trends",
    "Cybersecurity Best Practices"
]

export default function InsightsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Insights & Articles</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Welcome to our hub for expert analysis and thought leadership. Here, we delve into the technologies and strategies that are shaping the future of business. Stay ahead of the curve with our in-depth articles on everything from artificial intelligence to digital transformation.
          </p>
        </div>
        
        <div className="my-24 max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-center mb-8">Topics We Cover</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {topics.map(topic => (
                    <div key={topic} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{topic}</span>
                    </div>
                ))}
             </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Card key={insight.title} className="bg-secondary/50 flex flex-col group overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <CardHeader className="p-0">
                <Link href={`/insights/${insight.slug}`}>
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={insight.dataAiHint}
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="flex gap-2 mb-2">
                   {insight.tags.map(tag => (
                     <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>
                   ))}
                </div>
                <CardTitle className="text-xl">
                    <Link href={`/insights/${insight.slug}`} className="hover:text-primary transition-colors">
                        {insight.title}
                    </Link>
                </CardTitle>
                <CardDescription className="mt-2">{insight.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/insights/${insight.slug}`} className="text-primary font-semibold flex items-center group">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
