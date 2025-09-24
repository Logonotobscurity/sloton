
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { templates } from '@/lib/workflow-templates';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Share2, ArrowLeft, CheckCircle, Lightbulb, Workflow, Send } from 'lucide-react';
import { ShareModal } from '@/components/share-modal';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const template = templates.find((template) => template.slug === params.slug);
  if (!template) {
    return { title: 'Template Not Found' };
  }
  return {
    title: `${template.name} | Workflow Template`,
    description: template.description,
  };
}

export default function TemplatePreviewPage({ params }: { params: { slug: string } }) {
  const template = templates.find((template) => template.slug === params.slug);

  if (!template) {
    notFound();
  }

  const relatedTemplates = templates
    .filter(t => t.category === template.category && t.slug !== template.slug)
    .slice(0, 3);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/automation" className="text-primary hover:underline flex items-center gap-2 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Template Library
          </Link>

          <header className="mb-8 md:mb-12">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-5xl font-bold">{template.name}</h1>
                <ShareModal title={template.name} />
            </div>
            <p className="mt-4 text-md md:text-lg text-muted-foreground">{template.description}</p>
          </header>

          {template.steps && (
            <section className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-2"><Workflow className="h-6 w-6 text-primary" /> Workflow Steps</h2>
                {template.steps.map((step, index) => (
                    <Card key={index} className="bg-secondary/50">
                        <CardHeader>
                            <CardTitle>Step {index + 1} - {step.name}</CardTitle>
                            <CardDescription>{step.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </section>
          )}

          {template.purpose && (
             <section className="mt-12">
                <h2 className="text-2xl font-bold">The Purpose of {template.name}</h2>
                <div className="prose dark:prose-invert max-w-none mt-4 text-muted-foreground" dangerouslySetInnerHTML={{ __html: template.purpose.replace(/\n/g, '<br />') }} />
            </section>
          )}

           <section className="mt-12 text-center bg-primary/10 p-8 rounded-lg">
                <h2 className="text-2xl font-bold">Ready to use this template?</h2>
                <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Streamline your business process by deploying our library workflow template and then customizing it to best meet your needs.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                    <Button size="lg">Use Template</Button>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="https://calendly.com/" target="_blank">Book a Demo</Link>
                    </Button>
                </div>
           </section>

           <section className="mt-16 py-12 border-t">
                 <h2 className="text-2xl font-bold text-center">View other {template.category} templates</h2>
                 <div className="mt-8 grid md:grid-cols-3 gap-6">
                    {relatedTemplates.map(related => (
                        <Link key={related.slug} href={`/automation/${related.slug}`} className="block">
                            <Card className="h-full hover:border-primary transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-lg">{related.name}</CardTitle>
                                    <CardDescription className="line-clamp-2">{related.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                 </div>
                 {relatedTemplates.length > 0 && (
                     <div className="text-center mt-8">
                         <Button variant="outline" asChild>
                             <Link href="/automation">View all templates</Link>
                         </Button>
                     </div>
                 )}
           </section>

           <section className="mt-12 bg-secondary/50 p-8 rounded-lg text-center">
                <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold">Need a unique template?</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Our AI-powered workflow template generator can create a bespoke template based on your prompt in minutes.</p>
                <div className="mt-6">
                     <Button asChild>
                        <Link href="/automation">
                            <Send className="mr-2 h-4 w-4"/>
                            Go to Workflow Generator
                        </Link>
                    </Button>
                </div>
           </section>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}
