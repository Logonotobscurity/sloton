
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Database, DatabaseZap, ShieldCheck, Cloudy } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Database Solutions | Design, Migration, & Management',
  description: 'Robust database solutions including architecture, cloud migration, performance tuning, and security. We build and manage scalable SQL and NoSQL database systems.',
};

const databaseServices = [
  {
    icon: <Database className="h-8 w-8 text-primary" />,
    title: 'Database Architecture & Design',
    description: 'A solid foundation is key. We design scalable, efficient, and secure database schemas tailored to your specific application needs. Whether you need a relational (SQL) or non-relational (NoSQL) database, we build systems that grow with your business.',
  },
  {
    icon: <Cloudy className="h-8 w-8 text-primary" />,
    title: 'Cloud Data Migration & Integration',
    description: 'Seamlessly move your data to the cloud. We handle complex database migrations to platforms like AWS, Google Cloud, and Azure with minimal downtime. We also integrate disparate data sources into a unified, single source of truth.',
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: 'Performance Tuning & Optimization',
    description: 'Slow queries can kill user experience. We analyze and optimize your database performance, implementing indexing strategies, query refactoring, and caching mechanisms to ensure your applications run at peak speed.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Data Security & Compliance',
    description: 'Protect your most valuable asset. We implement robust security measures, including encryption, access control, and audit logging, to protect your data from threats and ensure you meet industry compliance standards like GDPR and PCI-DSS.',
  },
];

const benefits = [
    "Ensure data integrity and consistency across all applications",
    "Improve application speed and user experience",
    "Scale your infrastructure confidently as your data grows",
    "Protect sensitive information with robust security protocols",
    "Reduce downtime with reliable and well-managed systems"
]

export default function DatabaseSolutionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Database & Data Management Solutions</h1>
            <p className="text-lg text-muted-foreground">
              Your data is the backbone of your business. We design, build, and manage secure, scalable, and high-performance database systems that ensure your data is always available, consistent, and protected. From architecture to optimization, we provide end-to-end data solutions.
            </p>
             <div className="space-y-3 pt-4">
                {benefits.map(benefit => (
                    <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{benefit}</span>
                    </div>
                ))}
            </div>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Get a Database Consultation</Link>
            </Button>
          </div>
          <div className="relative h-96">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-3 transition-transform duration-300 ease-in-out hover:rotate-0"></div>
            <Card className="absolute inset-5 bg-background/80 backdrop-blur-lg rotate-2 transition-transform duration-300 ease-in-out hover:rotate-0 hover:scale-105">
                 <CardHeader>
                    <div className="flex justify-center mb-4">
                        <Database className="h-16 w-16 text-primary" />
                    </div>
                    <CardTitle className="text-center text-3xl">Secure & Scalable Data</CardTitle>
                    <CardDescription className="text-center">
                        The foundation for your digital operations.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    <p>We ensure your data infrastructure is robust, performant, and ready for growth.</p>
                </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Our Database Services</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    We offer a complete range of services to manage the entire lifecycle of your data.
                </p>
            </div>
             <div className="grid md:grid-cols-2 gap-8">
                {databaseServices.map((service) => (
                <Card key={service.title} className="bg-secondary/50 flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                    <CardHeader className="flex flex-row items-center gap-4">
                        {service.icon}
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
        </section>

         <section className="text-center py-16 bg-secondary/30 rounded-lg px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Is Your Data Working For You?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's discuss how our database expertise can improve your application performance and secure your data. Schedule a free consultation today.
            </p>
            <div className="mt-8 flex justify-center">
                <Button asChild size="lg">
                    <Link href="/contact">
                        Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
