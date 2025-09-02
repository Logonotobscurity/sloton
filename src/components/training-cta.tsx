
import Link from 'next/link';
import { Button } from './ui/button';
import { GraduationCap, ArrowRight, Code, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';

const featuredCourses = [
    {
        icon: <Code className="h-6 w-6 text-primary" />,
        title: "Prompt Engineering for Developers",
        description: "Supercharge your coding skills and development processes with our expert-led AI training.",
        href: "/training"
    },
    {
        icon: <Share2 className="h-6 w-6 text-primary" />,
        title: "Applied AI: Recommendation Systems",
        description: "Learn to design, build, and deploy scalable recommendation models using Python and Pinecone.",
        href: "/training"
    }
]

export function TrainingCTA() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center bg-background p-8 md:p-12 rounded-lg">
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <GraduationCap className="h-8 w-8" />
              <h2 className="text-2xl md:text-3xl font-bold">Advance Your Career</h2>
            </div>
            <p className="text-md text-muted-foreground">
              Ready to master the most in-demand tech skills? Our expert-led training programs are designed to provide you with hands-on experience and a cutting-edge curriculum.
            </p>
             <Button asChild size="lg" className="w-full sm:w-auto mt-4">
              <Link href="/training">
                Explore All Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 mt-8 lg:mt-0">
             {featuredCourses.map((course) => (
                <Card key={course.title} className="bg-secondary/50 flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                    <CardHeader>
                        {course.icon}
                        <CardTitle className="pt-2 text-lg">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{course.description}</p>
                    </CardContent>
                     <CardFooter>
                         <Button asChild variant="secondary" className="w-full">
                            <Link href={course.href}>Learn More</Link>
                        </Button>
                    </CardFooter>
                </Card>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
