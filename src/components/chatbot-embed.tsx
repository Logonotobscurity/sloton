
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export function ChatbotEmbed() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold">Chat With Our AI Assistant</h2>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            Have a question? Our AI-powered assistant, GIGPILOT, is here to provide instant answers about our services, pricing, and technology. Give it a try!
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-background shadow-2xl">
             <CardHeader className="bg-secondary/50">
                <div className="flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <CardTitle>GIGPILOT Assistant</CardTitle>
                </div>
                <CardDescription>Your personal guide to LOG_ON solutions.</CardDescription>
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
