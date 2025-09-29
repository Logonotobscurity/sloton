
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Building, Users, Scale, Globe } from 'lucide-react';
import { GlowingCard } from '@/components/ui/glowing-card';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'About LOG_ON',
  description: 'Learn about LOG_ON, our mission, our values, and our commitment to driving business efficiency through smart technology and integrated solutions.',
};

const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Satisfied Clients' },
    { value: '10+', label: 'Technology Partners' },
    { value: '5+', label: 'Countries Served' }
]

export default function AboutPage() {
  return (
    <div>
        <PageHero 
            title="Driving Business Transformation"
            description="LOG_ON is more than a technology provider; we are your strategic partner in growth. Our mission is to empower businesses by building intelligent systems that drive efficiency, spark innovation, and create lasting competitive advantages. We believe in connecting the dots between technology and business goals to deliver integrated solutions that produce real-world results."
        />

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map(stat => (
                        <div key={stat.label}>
                            <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                            <p className="text-muted-foreground mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <GlowingCard>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold font-headline flex items-center gap-3"><Globe className="h-8 w-8 text-primary"/> Our Mission</h3>
                        <p className="text-muted-foreground mt-4">To empower businesses of all sizes with scalable, intelligent technology solutions that automate processes, reduce costs, and unlock new opportunities for growth and innovation.</p>
                    </div>
                </GlowingCard>
                <GlowingCard>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold font-headline flex items-center gap-3"><Scale className="h-8 w-8 text-primary"/> Our Values</h3>
                        <ul className="text-muted-foreground mt-4 space-y-2">
                            <li><strong>Innovation-Driven:</strong> We are constantly exploring new technologies to deliver cutting-edge solutions.</li>
                            <li><strong>Client-Centric:</strong> Your success is our ultimate metric. We build partnerships based on trust and transparency.</li>
                            <li><strong>Results-Oriented:</strong> We design solutions focused on delivering measurable, tangible business value.</li>
                        </ul>
                    </div>
                </GlowingCard>
            </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
            <div className="text-center py-12 md:py-16 bg-secondary/30 rounded-lg px-4">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">Meet the People Behind the Innovation</h2>
                <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Our team is a dynamic duo of technology experts dedicated to delivering exceptional service.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button asChild size="lg">
                        <Link href="/about/our-leadership">
                            Meet Our Team <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
