
import { Award, BookOpen, BrainCircuit, Bot, Zap, TrendingUp, Check, Users, BarChart2, Clock, ShieldQuestion, Code, Briefcase, Share2, Lightbulb, HeartHandshake, Globe, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DialogFormWrapper } from '@/components/dialog-form-wrapper';
import type { Metadata } from 'next';
import { CommunityLeadForm } from '@/components/community-lead-form';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { GlowingCard } from '@/components/ui/glowing-card';


export const metadata: Metadata = {
  title: 'Community & Training | AI, Automation, & Leadership Programs',
  description: 'Advance your career with our expert-led online training programs and explore our community impact initiatives in ethical AI and digital skill development.',
};

const trainingPrograms = [
    {
        icon: <ShieldQuestion className="h-8 w-8 text-primary"/>,
        title: "Transforming Customer Support with AI",
        description: "Learn to build, train, and deploy private AI assistants using your own company documents to revolutionize support systems.",
        tags: ["AI", "Customer Support", "Intermediate"],
        href: "/training"
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-primary"/>,
        title: "AI Insights: A Practical Guide",
        description: "A comprehensive overview of AI types and their practical applications. Gain foundational knowledge for strategic AI adoption.",
        tags: ["AI", "Strategy", "Beginner"],
        href: "/training"
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary"/>,
        title: "Applied AI: Building Recommendation Systems",
        description: "A deep dive into building and deploying scalable recommendation models using Python, Pandas, and Pinecone.",
        tags: ["Data Science", "Python", "Advanced"],
        href: "/training"
    }
];

const communityProjects = [
    {
        icon: <HeartHandshake className="h-8 w-8 text-primary"/>,
        title: "Community Impact: LISTNER AI",
        description: "An AI mental health chatbot designed to provide compassionate, accessible, and confidential support.",
        href: "/training#impact",
    },
    {
        icon: <Globe className="h-8 w-8 text-primary"/>,
        title: "Ethical AI: Cultural Bridge Tech",
        description: "A research project and toolkit for identifying and mitigating cultural bias in large language models (LLMs).",
        href: "/training#impact",
    },
    {
        icon: <Zap className="h-8 w-8 text-primary"/>,
        title: "Gigpilot: AI Gig Economy Assistant",
        description: "An AI-powered tool to convert job seekers into engaged users through intelligent job matching and automated nurturing.",
        href: "/training#impact",
    }
]

const trainingBenefits = [
    { icon: <Award className="h-5 w-5 text-primary" />, text: 'Industry Expert Instructors' },
    { icon: <BookOpen className="h-5 w-5 text-primary" />, text: 'Hands-on, Project-Based Learning' },
    { icon: <TrendingUp className="h-5 w-5 text-primary" />, text: 'Career Advancement Support' },
    { icon: <Users className="h-5 w-5 text-primary" />, text: 'Access to a Professional Community' },
];

export default function TrainingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">Community &amp; Innovation</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            We believe in building more than just technology; we're dedicated to building skills, fostering leadership, and making a positive community impact. Explore our training programs and our commitment to ethical innovation.
          </p>
        </section>

        <section id="programs" className="py-16 md:py-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">Our Training Programs</h2>
                <p className="mt-4 text-md md:text-lg text-muted-foreground">Master in-demand skills with our hands-on curriculum in AI, Automation, and Prompt Engineering. Elevate your career with industry-relevant knowledge.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainingPrograms.map(program => (
                    <GlowingCard key={program.title}>
                        <div className="p-6 h-full flex flex-col">
                            <CardHeader className="p-0">
                                {program.icon}
                                <CardTitle className="pt-4 text-xl">{program.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 pt-4 flex-grow">
                                <p className="text-muted-foreground">{program.description}</p>
                            </CardContent>
                            <CardFooter className="p-0 pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {program.tags.map(tag => (
                                        <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </div>
                    </GlowingCard>
                ))}
            </div>
        </section>

        <section id="impact" className="py-16 md:py-24 bg-secondary/20 -mx-4 px-4 sm:-mx-6 md:-mx-8 sm:px-6 md:px-8 sm:rounded-2xl">
             <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold font-headline">Our Commitment to Community</h2>
                    <p className="mt-4 text-md md:text-lg text-muted-foreground">We actively invest in projects that use technology to create a positive social impact, from promoting mental health accessibility to ensuring ethical AI development.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                     {communityProjects.map(project => (
                        <Card key={project.title} className="bg-background/50">
                            <CardHeader>
                                {project.icon}
                                <CardTitle className="pt-4">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{project.description}</p>
                            </CardContent>
                        </Card>
                     ))}
                </div>
             </div>
        </section>

        <section className="py-16 md:py-24">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline">Why Train with LOG_ON?</h2>
                    <p className="text-muted-foreground text-lg">We provide more than just courses. We offer a comprehensive learning experience designed for career growth.</p>
                     <ul className="space-y-4 pt-4">
                        {trainingBenefits.map(item => (
                            <li key={item.text} className="flex items-center gap-4">
                                {item.icon}
                                <span className="text-lg text-muted-foreground">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Card className="bg-primary/10">
                        <CardHeader>
                            <CardTitle>Become a Certified Professional</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">Validate your expertise and stand out in the job market with a LOG_ON certification. Our programs are designed to provide you with the credentials to prove your skills.</p>
                             <DialogFormWrapper
                                trigger={<Button>Explore Certifications</Button>}
                                className="bg-background"
                            >
                                <DialogHeader>
                                    <DialogTitle>Explore Certifications</DialogTitle>
                                    <DialogDescription>
                                        Let's connect you with our training advisor to discuss your certification path. Fill out your details below.
                                    </DialogDescription>
                                </DialogHeader>
                                <CommunityLeadForm interest="Certification Inquiry" />
                            </DialogFormWrapper>
                        </CardContent>
                    </Card>
                </div>
             </div>
        </section>


        <section className="text-center mt-16 md:mt-24 py-12 md:py-16 bg-background rounded-lg px-4">
            <h2 className="text-2xl md:text-4xl font-bold font-headline">Ready to Start a Conversation?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're interested in a training program or want to collaborate on an impact project, we'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <DialogFormWrapper
                    trigger={<Button size="lg">Get In Touch</Button>}
                    className="bg-background"
                >
                    <DialogHeader>
                        <DialogTitle>Let's Connect</DialogTitle>
                        <DialogDescription>
                            Please fill out your details below to start a conversation with our team.
                        </DialogDescription>
                    </DialogHeader>
                    <CommunityLeadForm />
                </DialogFormWrapper>
            </div>
        </section>

      </div>
    </div>
  );
}
