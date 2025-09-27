
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Heart, Brain, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers at LOG_ON',
  description: 'Join our team of innovators and help us build the future of business efficiency. Explore open positions and learn about our culture at LOG_ON.',
};

const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health insurance",
    "Flexible remote work options",
    "Generous professional development budget",
    "A collaborative and innovative work culture"
];

const openPositions = [
    {
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "Remote",
        href: "#"
    },
    {
        title: "Business Process Automation Consultant",
        department: "Professional Services",
        location: "Lagos, Nigeria",
        href: "#"
    },
    {
        title: "Next.js Full-Stack Developer",
        department: "Engineering",
        location: "Remote",
        href: "#"
    }
]

export default function CareersPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Join Our Team</h1>
        <p className="mt-4 text-md md:text-lg text-muted-foreground">
          We're looking for passionate, innovative thinkers to join us on our mission to redefine business efficiency. At LOG_ON, you'll work on challenging projects that have a real impact, collaborate with a team of experts, and have opportunities for continuous growth.
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
                <CardHeader>
                    <Heart className="h-10 w-10 mx-auto text-primary"/>
                    <CardTitle className="pt-4">Passionate Culture</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Join a team that loves what they do and is driven by a shared vision of innovation.</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                    <Brain className="h-10 w-10 mx-auto text-primary"/>
                    <CardTitle className="pt-4">Meaningful Work</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Solve complex problems and build solutions that have a measurable impact on our clients' success.</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                    <Users className="h-10 w-10 mx-auto text-primary"/>
                    <CardTitle className="pt-4">Growth Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">We invest in our people with training, mentorship, and clear paths for career advancement.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Our Benefits</h2>
        <div className="p-8 bg-secondary/50 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {benefits.map(benefit => (
                <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                </div>
            ))}
            </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Open Positions</h2>
        <div className="space-y-4">
            {openPositions.map(pos => (
                 <Card key={pos.title} className="hover:bg-secondary/50 transition-colors">
                    <Link href={pos.href} className="block p-6">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-primary">{pos.title}</h3>
                                <p className="text-muted-foreground text-sm">{pos.department} &middot; {pos.location}</p>
                            </div>
                            <div className="flex items-center text-muted-foreground mt-2 sm:mt-0">
                                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                    </Link>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
