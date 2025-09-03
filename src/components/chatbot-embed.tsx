
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageCircle, Share2 } from 'lucide-react';
import { ShareModal } from './share-modal';

export function ChatbotEmbed() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">Chat with GIGPILOT</h2>
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
          </Card>
        </div>
      </div>
    </section>
  );
}
