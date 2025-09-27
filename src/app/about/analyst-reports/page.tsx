
// This is a new file: /src/app/about/analyst-reports/page.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Analyst Reports',
  description: 'See why industry analysts recognize LOG_ON as a leader in AI and automation. Access reports from Gartner, Forrester, and more.',
};

const reports = [
    {
        firm: "Gartner®",
        title: "Magic Quadrant™ for Enterprise Conversational AI Platforms",
        date: "July 2024",
        excerpt: "LOG_ON recognized for its ability to execute and completeness of vision in the rapidly evolving AI landscape.",
        href: "#"
    },
    {
        firm: "Forrester™",
        title: "The Forrester Wave™: Robotic Process Automation, Q3 2024",
        date: "September 2024",
        excerpt: "LOG_ON named a Strong Performer in our evaluation of the top RPA vendors, cited for its ease of use and strong partner ecosystem.",
        href: "#"
    }
]

export default function AnalystReportsPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold font-headline">Industry Analyst Reports</h1>
        <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-3xl">
          Don't just take our word for it. See why leading industry analysts recognize LOG_ON for our innovation, market presence, and ability to deliver results for our customers.
        </p>
      </section>

      <section className="space-y-6">
        {reports.map((report) => (
            <Card key={report.title}>
                <CardHeader>
                    <p className="font-semibold text-primary">{report.firm}</p>
                    <CardTitle>{report.title}</CardTitle>
                    <CardDescription>{report.date}</CardDescription>
                </CardHeader>
                <CardContent>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                        "{report.excerpt}"
                    </blockquote>
                    <Button asChild variant="outline" className="mt-6">
                        <Link href={report.href}>
                            <Download className="mr-2 h-4 w-4"/>
                            Access Report
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
      </section>

    </div>
  );
}
