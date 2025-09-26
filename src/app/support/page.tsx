import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { LifeBuoy, Book, Users, MessageSquare, Search, ArrowRight, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Faq } from '@/components/faq';
import { GlowingCard } from '@/components/ui/glowing-card';

export const metadata: Metadata = {
  title: 'Support Center | LOG_ON',
  description: 'Welcome to the LOG_ON Support Center. Find help articles, product documentation, get in touch with our support team, and explore community resources.',
};

const supportCategories = [
  {
    icon: <Book className="h-8 w-8 text-primary" />,
    title: 'Knowledge Base',
    description: 'Find detailed articles, how-to guides, and product documentation to get the most out of our platform.',
    href: '#',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Community Forums',
    description: 'Connect with other LOG_ON users, ask questions, and share best practices and solutions.',
    href: '#',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Submit a Ticket',
    description: 'Can\'t find what you\'re looking for? Our support team is here to help. Submit a ticket for personalized assistance.',
    href: '/contact',
  },
   {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Training & Certification',
    description: 'Advance your skills with our expert-led training programs and become a certified LOG_ON professional.',
    href: '/training',
  },
];

export default function SupportPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <section className="text-center max-w-3xl mx-auto">
           <div className="flex justify-center mb-4">
              <LifeBuoy className="h-12 w-12 md:h-16 md:w-16 text-primary" />
            </div>
          <h1 className="text-3xl md:text-5xl font-bold font-headline">LOG_ON Support Center</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            Welcome! We're here to help you succeed. Find answers, connect with the community, or get in touch with our expert support team.
          </p>
           <div className="relative max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search our knowledge base..."
              className="w-full h-12 pl-12 pr-4 rounded-lg bg-secondary/50 border-border/50 shadow-sm"
            />
          </div>
        </section>

        <section className="py-16 md:py-24">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportCategories.map((category) => (
                <GlowingCard key={category.title}>
                    <Link href={category.href} className="block h-full">
                        <div className="p-6 h-full flex flex-col">
                            <CardHeader className="p-0">
                                {category.icon}
                                <CardTitle className="pt-4 text-lg md:text-xl">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 pt-4 flex-grow">
                                <p className="text-muted-foreground text-sm md:text-base">{category.description}</p>
                            </CardContent>
                             <CardContent className="p-0 pt-4 mt-auto">
                                <div className="text-primary font-semibold flex items-center group-hover:text-accent-gold transition-colors">
                                    Go to {category.title} <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </div>
                    </Link>
                </GlowingCard>
                ))}
            </div>
        </section>
        
        <Faq />

      </div>
    </div>
  );
}
