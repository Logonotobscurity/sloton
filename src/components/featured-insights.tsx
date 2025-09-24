
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { insights } from '@/lib/insights';
import { Button } from './ui/button';

export function FeaturedInsights() {
  const featuredInsights = insights.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">From Our Insights Desk</h2>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            Explore our latest articles on AI, automation, and the strategies shaping the future of technology and business.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredInsights.map((insight) => (
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
                <div className="flex flex-wrap gap-2 mb-2">
                   {insight.tags.map(tag => (
                     <Badge key={tag} variant="outline" className="border-primary text-primary">{tag}</Badge>
                   ))}
                </div>
                <CardTitle className="text-lg md:text-xl">
                    <Link href={`/insights/${insight.slug}`} className="hover:text-primary transition-colors">
                        {insight.title}
                    </Link>
                </CardTitle>
                <CardDescription className="mt-2 text-sm line-clamp-3">{insight.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Link href={`/insights/${insight.slug}`} className="text-primary font-semibold flex items-center group">
                  Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Button asChild size="lg">
                <Link href="/insights">
                    View All Articles
                </Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
