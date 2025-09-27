// This is a new file: /src/app/about/trust/page.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ShieldCheck, Lock, DatabaseZap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: {
  title: string;
  description: string;
} = {
  title: 'Trust & Compliance',
  description: 'Learn about LOG_ON\'s commitment to security, data privacy, and compliance. See how we keep your data safe.',
};

const trustPillars = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary"/>,
        title: "Security by Design",
        description: "We embed security into every stage of our development lifecycle. From architecture to deployment, we follow industry best practices to protect against threats and vulnerabilities."
    },
    {
        icon: <Lock className="h-8 w-8 text-primary"/>,
        title: "Data Privacy & Governance",
        description: "Your data is yours. We adhere to strict data privacy principles and comply with global regulations like GDPR. We provide you with the tools and transparency to control your data."
    },
    {
        icon: <DatabaseZap className="h-8 w-8 text-primary"/>,
        title: "Platform Reliability & Resilience",
        description: "We build our systems on world-class cloud infrastructure like AWS and Google Cloud, designing for high availability and disaster recovery to ensure your services remain online."
    }
];

export default function TrustPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Trust & Compliance</h1>
        <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl">
          Trust is the foundation of every partnership. We are deeply committed to protecting your data, respecting privacy, and maintaining the highest standards of security and compliance. This page outlines our approach to building a platform you can rely on.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-3 gap-8">
            {trustPillars.map(pillar => (
                <Card key={pillar.title}>
                    <CardHeader>
                        {pillar.icon}
                        <CardTitle className="pt-4">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{pillar.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
      
      <section>
          <h2 className="text-2xl font-bold font-headline mb-4">Compliance Certifications</h2>
          <p className="text-muted-foreground">While we are a agile consultancy, we build solutions capable of meeting stringent compliance standards as required by our clients, including SOC 2, ISO 27001, and HIPAA.</p>
      </section>

    </div>
  );
}
