
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AuthorBio } from '@/components/author-bio';

// This is our mock database of articles. In a real application, this would come from a CMS or database.
const insights = [
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

// Placeholder article content
const placeholderContent = `
<p class="mb-6 text-lg text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">The Core Principles</h2>
<p class="mb-6">Proin clivida, nulla est varius marginalia, ut nisy erat,&nbsp; a lectus. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li><strong>Innovation at Speed:</strong> We leverage emerging technologies to give our clients a competitive edge.</li>
    <li><strong>Data-Driven Strategy:</strong> Our solutions are backed by data, ensuring they are effective and measurable.</li>
    <li><strong>User-Centric Design:</strong> We create intuitive and engaging experiences for end-users.</li>
</ul>

<h2 class="text-2xl font-bold mt-12 mb-4">Implementation in Practice</h2>
<p class="mb-6">Curabitur sodales, ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.</p>

<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
  "The key to unlocking true potential is not just adopting new technology, but integrating it seamlessly into the core of your business strategy."
</blockquote>

<p class="mb-6">Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscinia, a enim. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odi, consequa non, commodo ac, enim. </p>
`;


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = insights.find(p => p.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = insights.find(p => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="mb-4">
                 <Button asChild variant="ghost" className="pl-0 text-muted-foreground">
                    <Link href="/insights">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to all insights
                    </Link>
                </Button>
            </div>

            <div className="flex gap-2 mb-4">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold !leading-tight mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.description}</p>
            <div className="mt-6 text-sm text-muted-foreground">
                <span>By {article.author}</span> &middot; <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </header>
          
          <Image 
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full rounded-lg mb-12 shadow-lg"
            data-ai-hint={article.dataAiHint}
            priority
          />

          <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: placeholderContent }} />

          <footer className="mt-16 border-t pt-8">
            <AuthorBio authorName={article.author} />
          </footer>
        </article>
        
        <div className="text-center mt-24">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3"><BookOpen className="h-8 w-8 text-primary" /> Read More Articles</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore more insights from our team on AI, automation, and digital strategy.
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/insights">
                        View All Insights
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
