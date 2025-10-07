
import imageData from '@/lib/placeholder-images.json';

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    width: number;
    height: number;
    bio: string;
    email: string;
    dataAiHint?: string;
    socials: {
        linkedin: string;
        twitter?: string;
        github?: string;
    }
}

export const teamMembers: TeamMember[] = [
    {
        name: "Oluwamayowa Logo",
        role: "Lead Developer & Automation Solution Architect",
        image: imageData.authorOluwamayowa.src,
        width: imageData.authorOluwamayowa.width,
        height: imageData.authorOluwamayowa.height,
        dataAiHint: imageData.authorOluwamayowa.dataAiHint,
        bio: "Oluwamayowa is a seasoned developer and automation expert with a passion for building elegant, efficient systems. With over a decade of experience, he specializes in translating complex business requirements into robust, scalable technology solutions. His expertise in AI and process automation helps clients unlock new levels of productivity and innovation.",
        email: "logonthepage@gmail.com",
        socials: {
            linkedin: "https://www.linkedin.com/in/oluwamayowa-logo-2a1594197/",
            twitter: "https://x.com/log_onthepage",
            github: "https://github.com/Log-base"
        }
    },
    {
        name: "Favour Alfred",
        role: "Team Lead Sales & Business Process Automation",
        image: imageData.authorFavour.src,
        width: imageData.authorFavour.width,
        height: imageData.authorFavour.height,
        dataAiHint: imageData.authorFavour.dataAiHint,
        bio: "Favour is a dynamic leader with a talent for understanding customer needs and architecting solutions that drive growth. She bridges the gap between technology and business, ensuring that every automation strategy is perfectly aligned with our clients' goals. Her focus on building strong relationships and delivering measurable results makes her an invaluable partner to the businesses we serve.",
        email: "favvyalfred@gmail.com",
        socials: {
            linkedin: "https://www.linkedin.com/in/favour-alfred/",
            twitter: "https://twitter.com/FavourAlfred_01"
        }
    }
];
