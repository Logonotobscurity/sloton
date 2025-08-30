import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/100/100?random=1',
    dataAiHint: 'professional portrait',
  },
  {
    name: 'Brenda Smith',
    role: 'Lead AI Engineer',
    image: 'https://picsum.photos/100/100?random=2',
    dataAiHint: 'tech professional',
  },
  {
    name: 'Carlos Gomez',
    role: 'Head of Automation',
    image: 'https://picsum.photos/100/100?random=3',
    dataAiHint: 'smiling person',
  },
   {
    name: 'Diana Rose',
    role: 'Cloud Solutions Architect',
    image: 'https://picsum.photos/100/100?random=4',
    dataAiHint: 'architect woman',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32 space-y-20">
        
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">About LOG_ON</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We are a team of technologists, strategists, and innovators passionate about using technology to solve real-world business problems. Our mission is to empower organizations with intelligent automation and scalable IT solutions that drive growth and create lasting value.
          </p>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3"><Users className="h-8 w-8 text-primary" /> Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">The architects of your technological advantage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center bg-secondary/50 p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                 <div>
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-4"><GraduationCap className="h-8 w-8 text-primary" /> Trainings & Empowerment</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>We believe that technology is most powerful when people know how to use it. That's why we offer comprehensive training programs designed to empower your team with the skills they need to excel.</p>
                        <p>Our hands-on workshops and tailored courses cover everything from foundational IT skills to advanced AI and automation techniques, ensuring your organization maximizes its return on technology investment.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Card className="p-6 bg-secondary/50">
                        <CardContent className="p-0 flex flex-col items-center text-center gap-2">
                            <Briefcase className="h-10 w-10 text-accent" />
                            <h3 className="font-semibold">Corporate Workshops</h3>
                            <p className="text-sm text-muted-foreground">Customized for your team's specific needs.</p>
                        </CardContent>
                    </Card>
                    <Card className="p-6 bg-secondary/50">
                        <CardContent className="p-0 flex flex-col items-center text-center gap-2">
                            <Users className="h-10 w-10 text-accent" />
                            <h3 className="font-semibold">Public Courses</h3>
                            <p className="text-sm text-muted-foreground">Open-enrollment classes on the latest tech.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
}
