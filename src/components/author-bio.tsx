
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Oluwamayowa Logo',
    role: 'Lead Developer & Automation Solution Architect',
    bio: 'Oluwamayowa is an expert in AI architecture and automation solutions with a focus on innovative technology implementation. He specializes in developing scalable solutions that drive business growth.',
    image: 'https://picsum.photos/200/200?random=1',
    dataAiHint: 'male software developer',
  },
  {
    name: 'Favour Alfred',
    role: 'Team Lead Sales & Business Process Automation',
    bio: 'Favour is a results-driven professional specializing in business process automation and digital marketing strategies. She is an expert in optimizing workflows and driving digital transformation.',
    image: 'https://picsum.photos/200/200?random=2',
    dataAiHint: 'female business professional',
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
            <AvatarImage src={author.image} alt={author.name} data-ai-hint={author.dataAiHint} />
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
