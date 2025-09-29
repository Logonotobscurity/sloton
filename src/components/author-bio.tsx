
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import imageData from '@/lib/placeholder-images.json';

export const teamMembers = [
  {
    name: 'Oluwamayowa Logo',
    role: 'Lead Developer & Automation Solution Architect',
    bio: 'Oluwamayowa is an expert in AI architecture and automation solutions with a focus on innovative technology implementation. He specializes in developing scalable solutions that drive business growth.',
    image: imageData.authorOluwamayowa.src,
    width: imageData.authorOluwamayowa.width,
    height: imageData.authorOluwamayowa.height,
    dataAiHint: imageData.authorOluwamayowa.dataAiHint,
    description: 'Expert in AI architecture and automation solutions with a focus on innovative technology implementation. Specializes in developing scalable solutions for business growth.',
    expertise: ['AI Architecture', 'Strategy', 'Innovation', 'Web Development', 'IT Support', 'Solution Design'],
  },
  {
    name: 'Favour Alfred',
    role: 'Team Lead Sales & Business Process Automation',
    bio: 'Favour is a results-driven professional specializing in business process automation and digital marketing strategies. She is an expert in optimizing workflows and driving digital transformation.',
    image: imageData.authorFavour.src,
    width: imageData.authorFavour.width,
    height: imageData.authorFavour.height,
    dataAiHint: imageData.authorFavour.dataAiHint,
    description: 'Results-driven professional specializing in business process automation and digital marketing strategies. Expert in optimizing workflows and driving digital transformation.',
    expertise: ['Process Automation', 'Workflow Design', 'Integration', 'Digital Marketing', 'Sales Strategy', 'Business Development'],
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
                <Image src={author.image} alt={author.name} data-ai-hint={author.dataAiHint} width={author.width} height={author.height} />
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
