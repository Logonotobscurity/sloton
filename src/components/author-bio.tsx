
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Oluwamayowa Logo',
    role: 'Lead Developer & Automation Solution Architect',
    bio: 'Oluwamayowa is an expert in AI architecture and automation solutions with a focus on innovative technology implementation. He specializes in developing scalable solutions that drive business growth.',
    image: 'https://images.surferseo.art/bfd93c97-2b4c-44bd-a1f1-a46c0354f0fb.png',
    dataAiHint: 'male developer',
  },
  {
    name: 'Favour Alfred',
    role: 'Team Lead Sales & Business Process Automation',
    bio: 'Favour is a results-driven professional specializing in business process automation and digital marketing strategies. She is an expert in optimizing workflows and driving digital transformation.',
    image: 'https://images.surferseo.art/af18ff8e-9af7-47c5-aa6d-45c2e59a6094.png',
    dataAiHint: 'female professional',
  },
];

export function AuthorBio({ authorName }: { authorName: string }) {
  const author = teamMembers.find(member => member.name === authorName);

  if (!author) {
    return null;
  }

  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage asChild src={author.image} alt={author.name} data-ai-hint={author.dataAiHint}>
                <Image src={author.image} alt={author.name} data-ai-hint={author.dataAiHint} width={160} height={160} />
            </AvatarImage>
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold">{author.name}</h4>
            <p className="text-sm text-primary">{author.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{author.bio}</p>
      </CardContent>
    </Card>
  );
}
