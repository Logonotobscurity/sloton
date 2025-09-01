
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
const fullArticleContent = `
<p class="mb-6 text-lg text-muted-foreground">The landscape of the modern workplace is undergoing a seismic shift, driven by the rapid advancements in Artificial Intelligence. AI is no longer a futuristic concept; it's a present-day reality that is fundamentally redefining roles, streamlining workflows, and unlocking unprecedented levels of productivity. For businesses in Nigeria and across the globe, understanding and embracing this transformation is not just an option—it's essential for survival and growth.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">Automating the Mundane to Unleash Human Potential</h2>
<p class="mb-6">One of the most immediate impacts of AI in the workplace is its ability to automate repetitive, time-consuming tasks. Think of the hours spent on data entry, scheduling, generating standard reports, or handling basic customer service queries. AI-powered tools, such as Robotic Process Automation (RPA), can execute these tasks with speed and accuracy far beyond human capability. This doesn't eliminate jobs; it redefines them. By freeing employees from mundane work, AI allows them to focus on what humans do best: strategic thinking, complex problem-solving, and creative innovation.</p>

<h3 class="text-xl font-semibold mt-8 mb-4">Key Areas for AI-Powered Automation:</h3>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li><strong>Administrative Tasks:</strong> AI can manage calendars, filter emails, and automate data entry into CRM systems, saving countless hours.</li>
    <li><strong>Customer Support:</strong> Intelligent chatbots can handle a majority of initial customer inquiries 24/7, escalating only the most complex issues to human agents.</li>
    <li><strong>Finance & Accounting:</strong> Automation can streamline invoice processing, expense reporting, and financial auditing, reducing errors and ensuring compliance.</li>
</ul>

<h2 class="text-2xl font-bold mt-12 mb-4">Augmenting Decision-Making with Data Intelligence</h2>
<p class="mb-6">Beyond automation, AI serves as a powerful engine for data analysis, providing insights that were previously inaccessible. Machine learning models can analyze vast datasets to identify trends, predict future outcomes, and offer data-driven recommendations. This empowers leaders to make smarter, more informed decisions with confidence.</p>

<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
  "The goal is to turn data into information, and information into insight. AI is the most powerful tool we have ever had to achieve this at scale."
</blockquote>

<p class="mb-6">For instance, marketing teams can use AI to analyze customer behavior and personalize campaigns for maximum impact. Operations managers can use predictive analytics to anticipate supply chain disruptions before they happen. In essence, AI augments human intelligence, turning it into a significant competitive advantage.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">How to Prepare Your Business for the AI Revolution</h2>
<p class="mb-6">Adopting AI is a strategic journey, not a single step. Here's how businesses can prepare:</p>
<ol class="list-decimal pl-6 space-y-2 mb-6">
  <li><strong>Start with a Clear Business Problem:</strong> Don't adopt AI for the sake of technology. Identify a specific, high-impact business challenge that AI can solve, whether it's reducing operational costs, improving customer satisfaction, or accelerating product development.</li>
  <li><strong>Invest in Data Infrastructure:</strong> AI is only as good as the data it's trained on. Ensure your data is clean, accessible, and well-organized. Investing in a robust data infrastructure is a critical first step.</li>
  <li><strong>Foster a Culture of Learning:</strong> The integration of AI will require new skills. Encourage a culture of continuous learning and upskilling within your team. Provide training to help employees work effectively alongside new AI systems.</li>
  <li><strong>Partner with Experts:</strong> Navigating the complexities of AI implementation can be daunting. Partnering with technology experts, like LOG_ON, can provide the strategic guidance and technical expertise needed to ensure a successful digital transformation.</li>
</ol>

<p class="mb-6">The future of work is not about humans versus machines, but humans *with* machines. By strategically integrating AI into your operations, you can create a more efficient, innovative, and resilient business, poised to thrive in the digital age.</p>
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

          <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: fullArticleContent }} />

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
