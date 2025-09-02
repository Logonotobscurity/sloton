
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Users, CheckCircle, Lightbulb, Zap, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | LOG_ON connecting Advantages',
  description: 'Meet the expert team at LOG_ON, a dynamic duo of technology experts dedicated to delivering innovative solutions and exceptional service to drive your business forward.',
};

const teamMembers = [
  {
    name: 'Oluwamayowa Logo',
    role: 'Lead Developer & Automation Solution Architect',
    description: 'Expert in AI architecture and automation solutions with a focus on innovative technology implementation. Specializes in developing scalable solutions for business growth.',
    expertise: ['AI Architecture', 'Strategy', 'Innovation', 'Web Development', 'IT Support', 'Solution Design'],
    image: 'https://picsum.photos/200/200',
    dataAiHint: 'male developer',
  },
  {
    name: 'Favour Alfred',
    role: 'Team Lead Sales & Business Process Automation',
    description: 'Results-driven professional specializing in business process automation and digital marketing strategies. Expert in optimizing workflows and driving digital transformation.',
    expertise: ['Process Automation', 'Workflow Design', 'Integration', 'Digital Marketing', 'Sales Strategy', 'Business Development'],
    image: 'https://picsum.photos/200/200',
    dataAiHint: 'female professional',
  },
];

const philosophies = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: 'Innovation-Driven',
    description: 'We are committed to staying at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions that provide a competitive edge.'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Client-Centric',
    description: 'Your success is our success. We take the time to understand your unique challenges and goals, building relationships based on trust, transparency, and mutual respect.'
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: 'Strategic Partnerships',
    description: 'We believe in collaboration and work as an extension of your team. Our goal is to build long-term partnerships that foster growth and continuous improvement.'
  },
   {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Results-Oriented',
    description: 'Our solutions are designed to deliver measurable results. We focus on creating tangible business value, whether it\'s increasing efficiency, reducing costs, or driving revenue.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 space-y-16 md:space-y-20">
        
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">About LOG_ON</h1>
          <p className="mt-4 text-md md:text-lg text-muted-foreground">
            WE ARE GENERALISTS. Our expertise isn't confined to a single niche. We are technologists with a broad and deep understanding of the entire digital ecosystem. This allows us to connect dots that specialists might miss, creating integrated solutions that are more robust, efficient, and innovative. We architect, build, and manage systems that drive real-world results, from AI-powered automation to scalable cloud infrastructures and custom web applications. Our holistic view ensures every component works in harmony to achieve your strategic goals.
          </p>
        </section>
        
        <section>
          <div className="text-center mb-12">
             <h2 className="text-2xl md:text-4xl font-bold">Our Philosophy</h2>
             <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">Our core values guide every decision we make and every solution we build.</p>
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {philosophies.map((item) => (
              <div key={item.title} className="text-center p-4">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-center gap-3"><Users className="h-8 w-8 text-primary" /> Meet Our Team</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">A dynamic duo of technology experts dedicated to delivering innovative solutions and exceptional service to our clients.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {teamMembers.map((member) => (
              <Card key={member.name} className="bg-secondary/50 border-border/50 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                   <div className="p-6 flex justify-center md:justify-start">
                     <Avatar className="w-32 h-32 border-4 border-primary">
                       <AvatarImage asChild src={member.image} alt={member.name} data-ai-hint={member.dataAiHint}>
                          <Image src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} width={200} height={200} />
                       </AvatarImage>
                       <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                     </Avatar>
                   </div>
                   <div className="md:col-span-2 p-6 text-center md:text-left">
                      <h3 className="font-bold text-2xl">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                   </div>
                </div>
                 <div className="bg-background/50 p-6">
                    <h4 className="font-semibold mb-4 text-primary">Areas of Expertise</h4>
                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
                        {member.expertise.map(skill => (
                            <div key={skill} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-accent" />
                                <span className="text-sm text-muted-foreground">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
        
        <section className="text-center max-w-3xl mx-auto border-t border-border pt-16">
            <h2 className="text-2xl md:text-4xl font-bold flex items-center justify-center gap-3"><Briefcase className="h-8 w-8 text-primary" /> Join Our Team</h2>
            <p className="mt-4 text-md md:text-lg text-muted-foreground">
                We're always looking for talented individuals who are passionate about technology and innovation. Join us in shaping the future of digital transformation in Nigeria.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild>
                    <Link href="#">View Open Positions</Link>
                </Button>
                <Button asChild variant="secondary">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
