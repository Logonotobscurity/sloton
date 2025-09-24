
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { MessageCircle, Share2, Beaker } from 'lucide-react';
import { ShareModal } from './share-modal';
import { Button } from './ui/button';
import Link from 'next/link';

export function ChatbotEmbed() {
  return (
    <section id="gigpilot-chat" className="py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-headline">Chat with GIGPILOT</h2>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            It's one of our AI Agents we are currently testing. Its capabilities are still being tested, so feel free to enjoy it!
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-background shadow-2xl">
             <CardHeader className="bg-secondary/50 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                        <CardTitle>GIGPILOT Assistant</CardTitle>
                        <CardDescription>Your personal guide to LOG_ON solutions.</CardDescription>
                    </div>
                </div>
                 <ShareModal 
                    title="Check out GIGPILOT - An AI Assistant from LOG_ON"
                 />
             </CardHeader>
            <CardContent className="p-0">
              <iframe 
                src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/03/00/20250903000320-ROVZPK8F.json"
                width="100%"
                height="600"
                style={{ border: 'none' }}
                title="Botpress Chatbot"
              ></iframe>
            </CardContent>
            <CardFooter className="bg-secondary/50 p-4 flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <p className="text-sm text-muted-foreground">Want to run your own tests?</p>
                <Button asChild variant="outline">
                    <Link href="/ab-testing">
                        <Beaker className="mr-2 h-4 w-4" />
                        Go to our A/B Testing Tool
                    </Link>
                </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
