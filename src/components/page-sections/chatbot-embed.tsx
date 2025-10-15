
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ShareModal } from '@/components/share-modal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ChatbotEmbed() {
  const botpressUrl = "https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/03/00/20250903000320-ROVZPK8F.json";

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">GIGPILOT: Your AI Assistant</CardTitle>
                  <CardDescription>Ask questions, get workflow ideas, and explore automation possibilities.</CardDescription>
                </div>
                <div className="mt-4 sm:mt-0">
                  <ShareModal title="Check out the GIGPILOT AI Assistant" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 md:aspect-h-12 lg:aspect-h-10 border rounded-lg overflow-hidden">
                <iframe
                  src={botpressUrl}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  title="GIGPILOT Chatbot"
                  style={{ border: 'none' }}
                />
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                This AI assistant is part of our Ideas Lab. <Button variant="link" asChild className="p-0 h-auto"><Link href="/ab-testing">Learn more about our A/B testing approach.</Link></Button>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
