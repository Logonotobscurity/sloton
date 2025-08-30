import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, BrainCircuit, Bot, Zap, TrendingUp, Check, Users, BarChart2, Clock } from 'lucide-react';
import Link from 'next/link';

const trainingFeatures = [
  { icon: <Award className="h-8 w-8 text-primary" />, title: 'Industry Expert Instructors', description: 'Learn from professionals with real-world experience.' },
  { icon: <BookOpen className="h-8 w-8 text-primary" />, title: 'Hands-on Projects', description: 'Apply your knowledge to real business scenarios.' },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: 'Career Support', description: 'Get guidance on career advancement and job opportunities.' },
  { icon: <BrainCircuit className="h-8 w-8 text-primary" />, title: 'AI-Powered Learning', description: 'Personalized learning experience with AI assistance.' },
  { icon: <Zap className="h-8 w-8 text-primary" />, title: 'Cutting-edge Curriculum', description: 'Stay updated with the latest industry trends.' },
  { icon: <Users className="h-8 w-8 text-primary" />, title: 'Networking Opportunities', description: 'Connect with industry professionals and peers.' },
  { icon: <BarChart2 className="h-8 w-8 text-primary" />, title: 'Performance Analytics', description: 'Track your progress with detailed analytics.' },
  { icon: <Clock className="h-8 w-8 text-primary" />, title: 'Flexible Learning', description: 'Learn at your own pace with flexible schedules.' },
];

const trainingPrograms = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI Solutions Development',
    description: 'Master the art of building intelligent systems and AI-powered applications.',
    duration: '12 Weeks',
    mode: 'Online',
    learnings: [
      'Machine Learning Fundamentals',
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Computer Vision Applications',
      'AI Model Deployment',
      'Real-world Project Implementation',
    ],
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Process Automation Mastery',
    description: 'Learn to automate business processes and workflows for maximum efficiency.',
    duration: '10 Weeks',
    mode: 'Online',
    learnings: [
      'RPA Fundamentals',
      'Business Process Analysis',
      'Workflow Optimization',
      'Integration Techniques',
      'Automation Tools Mastery',
      'Process Mining',
    ],
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Chatbot Development',
    description: 'Create intelligent conversational interfaces and AI-powered chatbots.',
    duration: '8 Weeks',
    mode: 'Online',
    learnings: [
      'Conversational AI',
      'NLP Integration',
      'Dialog Management',
      'Multi-platform Development',
      'Integration with Business Systems',
      'Analytics & Optimization',
    ],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: 'Digital Transformation Strategy',
    description: 'Lead organizational change through technology adoption and innovation.',
    duration: '12 Weeks',
    mode: 'Online',
    learnings: [
      'Digital Strategy Development',
      'Change Management',
      'Technology Assessment',
      'Innovation Frameworks',
      'Implementation Planning',
      'ROI Measurement',
    ],
  },
];

export default function TrainingPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Become a Tech Leader</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Master the technologies shaping the future with our comprehensive online training programs. Learn from industry experts and gain practical experience to accelerate your career.
          </p>
        </section>

        <section className="py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {trainingFeatures.map(feature => (
                    <div key={feature.title} className="text-center p-4">
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Our Training Programs</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Choose a program that aligns with your career goals and start your journey today.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                {trainingPrograms.map(program => (
                    <Card key={program.title} className="bg-secondary/50 flex flex-col h-full">
                        <CardHeader>
                            <div className="flex items-center gap-4 mb-4">
                                {program.icon}
                                <CardTitle className="text-2xl">{program.title}</CardTitle>
                            </div>
                            <p className="text-muted-foreground">{program.description}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
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
                        <CardFooter>
                            <Button className="w-full">Enroll Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>

        <section className="text-center mt-24 py-16 bg-secondary/30 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Learning Journey?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our training programs and gain the skills needed to excel in the digital age. Get personalized guidance and hands-on experience.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button size="lg">Enroll Now</Button>
                <Button asChild variant="secondary" size="lg">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
