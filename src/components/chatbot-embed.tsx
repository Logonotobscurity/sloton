"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { ShareModal } from "./share-modal";

export function ChatbotEmbed() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle>Try Our AI Assistant</CardTitle>
                <CardDescription>Ask it about our services, pricing, or technology.</CardDescription>
              </div>
              <ShareModal title="Try Our AI Assistant" />
            </CardHeader>
            <CardContent>
              <div className="aspect-w-16 aspect-h-9 md:aspect-h-12 lg:aspect-h-10 rounded-lg overflow-hidden border">
                <iframe
                    src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/03/00/20250903000320-ROVZPK8F.json"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="Botpress Chatbot"
                ></iframe>
              </div>
            </CardContent>
            <CardFooter className="bg-secondary/20 p-4 justify-between items-center text-sm">
                <p className="text-muted-foreground">Curious how we built this? See our <Link href="/insights" className="text-primary underline">A/B Testing</Link> capabilities.</p>
                <Link href="/ab-testing" className="text-primary font-semibold hover:underline">Learn more</Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
