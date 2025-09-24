
import { Award, BookOpen, BrainCircuit, Bot, Zap, TrendingUp, Check, Users, BarChart2, Clock, ShieldQuestion, Code, Briefcase, Share2, Lightbulb, HeartHandshake, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DialogFormWrapper } from '@/components/dialog-form-wrapper';
import type { Metadata } from 'next';
import { CommunityLeadForm } from '@/components/community-lead-form';
import { GlowingCard } from '@/components/ui/glowing-card';

export const metadata: Metadata = {
  title: 'Community & Training | AI, Automation, & Leadership Programs',
  description: 'Advance your career with our expert-led online training programs and explore our community impact initiatives in ethical AI and digital skill development.',
};


const trainingFeatures = [
  { icon: <Award className="h-8 w-8 text-primary" />, title: 'Industry Expert Instructors', description: 'Learn from professionals with real-world experience.' },
  { icon: <BookOpen className="h-8 w-8 text-primary" />, title: 'Hands-on Projects', description: 'Apply your knowledge to real business scenarios.' },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: 'Career Support', description: 'Get guidance on career advancement and job opportunities.' },
  { icon: <Users className="h-8 w-8 text-primary" />, title: 'Community-Driven Learning', description: 'Collaborate with peers and build your network.' },
];

const trainingPrograms = [
  {
    icon: <ShieldQuestion className="h-8 w-8 text-primary" />,
    title: 'Transforming Customer Support with AI',
    description: 'Learn to build, train, and deploy private AI assistants using your own company documents to revolutionize your support systems.',
    duration: 'Half-Day Workshop',
    mode: 'Online / On-site',
    learnings: [
      'Leveraging GenAI for Enterprise Support',
      'Training Models on Internal SOPs & Docs',
      'Building Interactive, Conversational Tools',
      'Deploying AI Assistants Securely',
      'Measuring Support Efficiency Gains',
      'Hands-on Project: Build Your First Support Bot',
    ],
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'AI Insights: A Practical Guide',
    description: "A comprehensive overview of AI types, principles, and their practical applications, enhancing participants' ability to leverage AI in their fields.",
    duration: 'Half-Day Workshop',
    mode: 'Online',
    learnings: [
        'Understand different AI types (ANI, AGI, ASI)',
        'Explore real-world applications across various sectors',
        'Discuss ethical considerations and reliability',
        'Gain foundational knowledge for strategic AI adoption',
        'Interactive Q&A with AI experts'
    ],
  },
   {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: 'Applied AI: Building Recommendation Systems',
    description: 'Quick Start to Designing, Building and Deploying Scalable Recommendation Models using Python, Pandas, Pinecone and More.',
    duration: '2-Day Intensive',
    mode: 'Online',
    learnings: [
        'Core concepts of recommendation systems',
        'Data manipulation with Pandas',
        'Building content-based recommenders',
        'Hands-on labs with Pinecone',
        'Deploying and scaling models',
        'Optimizing for user engagement'
    ],
  },
   {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Quick Start to Prompt Engineering for Developers',
    description: 'Supercharge your coding skills, development efforts, and processes with AI. Learn to automate tasks, generate code, and build more effective AI-driven solutions.',
    duration: '1-Day Course',
    mode: 'Online',
    learnings: [
        'Advanced prompt design for GPT-4',
        'Text preprocessing and data cleansing for AI',
        'Automating coding tasks with OpenAI Codex',
        'Implementing multi-turn conversations',
        'Ethical considerations in prompt engineering',
        'Hands-on labs with the OpenAI API'
    ],
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Quick Start to Prompt Engineering for Business Users',
    description: 'Harness Prompt Engineering skills for OpenAI, ChatGPT / GPT-4 to boost productivity, supercharge your communications and revolutionize your business processes.',
    duration: '1-Day Workshop',
    mode: 'Online',
    learnings: [
        'Crafting effective prompts for business tasks',
        'Integrating prompt solutions into existing workflows',
        'Enhancing customer support and sales pitches',
        'Automating content creation and internal communications',
        'Best practices from our expert instructors',
        'Hands-on experimentation with innovative tools'
    ],
  },
];

const communityProjects = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: 'Community Skill Synchronization Initiative',
        description: 'Designed and launched a behavior-based learning curriculum that trained over 50 individuals in high-demand digital skills (Digital Marketing, Cybersecurity, Data Science, RPA), culminating in multiple career placements. Pioneered a "Seek and Ye Shall Find" pedagogical model that empowers learners to direct their own skill acquisition, resulting in an estimated 30% reduction in traditional instruction time.'
    },
    {
        icon: <HeartHandshake className="h-8 w-8 text-primary" />,
        title: 'LISTNER: AI Mental Health Chatbot',
        description: 'A multilingual NLP AI mental health chatbot designed to provide compassionate, accessible, and confidential support to users in need. This project focuses on leveraging technology to destigmatize mental health conversations.'
    },
    {
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: 'Cultural Bridge Tech: Ethical AI',
        description: 'A research project and toolkit for identifying and mitigating cultural bias in large language models (LLMs). This initiative demonstrates our commitment to building more equitable and ethical AI systems for a global audience.'
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: 'Gigpilot: AI Gig Economy Assistant',
        description: 'An AI-powered gig economy assistant designed to convert job seekers into engaged users through intelligent job matching, progressive data capture, and automated lead nurturing. This tool empowers independent workers to find opportunities more efficiently.'
    }
]

export default function TrainingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-24">
        
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold font-headline">Community &amp; Innovation</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            We believe in building more than just technology; we're dedicated to building skills, fostering leadership, and making a positive community impact. Explore our training programs and our commitment to ethical innovation.
          </p>
        </section>

        <section id="training" className="scroll-mt-20">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">Our Training Programs</h2>
                <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">Choose a program that aligns with your career goals and start your journey today.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {trainingFeatures.map(feature => (
                    <div key={feature.title} className="text-center p-4">
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {trainingPrograms.map(program => (
                    <GlowingCard key={program.title}>
                      <div className="flex flex-col h-full p-6">
                        <CardHeader className="p-0">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                                {program.icon}
                                <CardTitle className="text-xl md:text-2xl">{program.title}</CardTitle>
                            </div>
                            <p className="text-muted-foreground">{program.description}</p>
                        </CardHeader>
                        <CardContent className="p-0 pt-4 flex-grow">
                             <div className="flex items-center gap-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-accent" />
                                    <span className="text-sm">{program.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                     <Badge variant="outline" className="border-primary text-primary">{program.mode}</Badge>
                                </div>
                             </div>
                             <h4 className="font-semibold mb-4">What You'll Learn:</h4>
                             <ul className="space-y-3">
                                {program.learnings.map(item => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                             </ul>
                        </CardContent>
                        <CardFooter className="p-0 pt-6 mt-auto">
                           <DialogFormWrapper
                                trigger={
                                    <Button className="w-full">Start a Conversation</Button>
                                }
                                title="Start Your Learning Journey"
                                description={`Let's talk about the "${program.title}" program. Fill out your details below to connect with us.`}
                                form={<CommunityLeadForm interest={program.title} />}
                            />
                        </CardFooter>
                      </div>
                    </GlowingCard>
                ))}
            </div>
        </section>

        <section id="impact" className="py-16 md:py-24 border-t scroll-mt-20">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold font-headline">Leadership &amp; Community Impact</h2>
                <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">Our commitment to innovation extends beyond our client work. We actively lead and contribute to projects that drive positive change.</p>
            </div>
             <div className="grid lg:grid-cols-2 gap-8">
                {communityProjects.map((project) => (
                <GlowingCard key={project.title}>
                  <div className="p-6 h-full flex flex-col">
                    <CardHeader className="p-0 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        {project.icon}
                        <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                        <p className="text-muted-foreground text-sm md:text-base">{project.description}</p>
                    </CardContent>
                  </div>
                </GlowingCard>
                ))}
            </div>
        </section>

        <section className="text-center mt-16 md:mt-24 py-12 md:py-16 bg-secondary/30 rounded-lg px-4">
            <h2 className="text-2xl md:text-4xl font-bold font-headline">Ready to Start a Conversation?</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're interested in a training program or want to collaborate on an impact project, we'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <DialogFormWrapper
                    trigger={<Button size="lg" className="w-full sm:w-auto">Get In Touch</Button>}
                    title="Let's Connect"
                    description="Please fill out your details below to start a conversation with our team."
                    form={<CommunityLeadForm />}
                />
            </div>
        </section>

      </div>
    </div>
  );
}
