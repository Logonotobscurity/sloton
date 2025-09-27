
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, Briefcase, Lightbulb, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Faq } from '@/components/faq';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Get in touch with the LOG_ON team. Have a project in mind or want to learn more about our automation and IT solutions? We'd love to hear from you.",
};

const contactReasons = [
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Project Inquiry",
    description: "Discuss your project requirements, goals, and timeline with our experts to get a detailed proposal."
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Service Questions",
    description: "Have questions about our AI solutions, automation services, or technology stack? We have answers."
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "General Inquiry",
    description: "For anything else, from partnership opportunities to media requests, don't hesitate to reach out."
  }
]

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">Get In Touch</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            We're here to help you navigate your digital transformation journey. Whether you have a specific project in mind, a question about our services, or just want to explore possibilities, our team is ready to connect. Let's start a conversation and build something great together.
          </p>
        </div>
        
        <div className="mt-12 md:mt-16 grid lg:grid-cols-2 gap-12 items-start">
           <div className="space-y-8">
              <Card className="bg-secondary/50">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
               <div className="border-t border-border pt-8">
                 <h3 className="text-xl font-semibold mb-4">Why Get In Touch?</h3>
                 <div className="space-y-4">
                    {contactReasons.map(reason => (
                        <div key={reason.title} className="flex items-start gap-3">
                            <div className="flex-shrink-0">{reason.icon}</div>
                            <div>
                                <h4 className="font-semibold">{reason.title}</h4>
                                <p className="text-muted-foreground text-sm">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
           </div>

          <div className="space-y-8">
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">Our inbox is always open for your questions and project details.</p>
                    <a href="mailto:logonthepage@gmail.com" className="text-primary hover:underline break-all">
                        logonthepage@gmail.com
                    </a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Give us a call to discuss your needs directly with a consultant.</p>
                    <a href="tel:+2348143066320" className="text-primary hover:underline">
                        +234 814 306 6320
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
}
