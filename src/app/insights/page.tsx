
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Articles | LOG_ON connecting Advantages',
  description: 'Stay ahead of the curve with our expert analysis on the latest trends in technology, automation, and AI. Explore articles on the future of work, business automation, and more.',
};

const insights = [
  {
    title: "The Future of Work: How AI is Redefining Productivity",
    description: "Explore the transformative impact of artificial intelligence on modern workplaces and how businesses can adapt.",
    image: "https://picsum.photos/600/400?random=5",
    dataAiHint: "AI technology",
    tags: ["AI", "Future of Work"],
    href: "#"
  },
  {
    title: "Unlocking Efficiency: A Guide to Business Process Automation",
    description: "A deep dive into the strategies and technologies behind successful automation implementation.",
    image: "https://picsum.photos/600/400?random=6",
    dataAiHint: "workflow automation",
    tags: ["Automation", "Strategy"],
    href: "#"
  },
  {
    title: "Scaling Securely: Best Practices for Cloud Infrastructure",
    description: "Learn how to build a robust and secure cloud foundation that scales with your business needs.",
    image: "https://picsum.photos/600/400?random=7",
    dataAiHint: "cloud computing",
    tags: ["Cloud", "Security"],
    href: "#"
  }
];

export default function InsightsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Insights & Articles</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay ahead of the curve with our expert analysis on the latest trends in technology, automation, and AI.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Card key={insight.title} className="bg-secondary/50 flex flex-col group overflow-hidden">
              <CardHeader className="p-0">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={insight.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <div className="flex gap-2 mb-2">
                   {insight.tags.map(tag => (
                     <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>
                   ))}
                </div>
                <CardTitle className="text-xl">{insight.title}</CardTitle>
                <CardDescription className="mt-2">{insight.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={insight.href} className="text-primary font-semibold flex items-center group">
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
