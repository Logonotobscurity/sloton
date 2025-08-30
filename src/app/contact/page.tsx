import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind or just want to learn more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          <div className="space-y-8 pt-4">
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">Our inbox is always open.</p>
                    <a href="mailto:logo@logon.com.ng" className="text-primary hover:underline">
                        logo@logon.com.ng
                    </a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Give us a call to discuss your needs.</p>
                    <a href="tel:+2348143066320" className="text-primary hover:underline">
                        +234 814 306 6320
                    </a>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Office</h3>
                    <p className="text-muted-foreground">
                        123 Tech Avenue, Innovation City, Nigeria
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
