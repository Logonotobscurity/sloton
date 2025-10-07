
export interface TeamMember {
    name: string;
    role: string;
    avatarUrl: string;
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
        name: "Alex Chen",
        role: "Founder & CEO",
        avatarUrl: "/avatars/alex-chen.jpg",
        dataAiHint: "alex chen, founder and ceo of log_on",
        bio: "Alex is a visionary leader with over 20 years of experience in the technology industry. He founded LOG_ON with the mission of making complex technology accessible and transformative for businesses of all sizes. A serial entrepreneur and a passionate advocate for AI ethics, Alex leads the company\'s strategic direction and is deeply involved in product innovation.",
        email: "alex.chen@log-on.ai",
        socials: {
            linkedin: "https://www.linkedin.com/in/alex-chen-ai/",
            twitter: "https://twitter.com/alexchen_ai",
        }
    },
    {
        name: "Dr. Evelyn Reed",
        role: "Chief Technology Officer (CT физика)",
        avatarUrl: "/avatars/evelyn-reed.jpg",
        dataAiHint: "dr evelyn reed, cto of log_on",
        bio: "Evelyn is the chief architect of our technology platform. With a Ph.D. in Computer Science and a specialization in Machine Learning, she leads our research and development teams. Her work has been published in numerous academic journals, and she is a frequent speaker at major tech conferences. Evelyn is committed to building robust, scalable, and secure AI systems.",
        email: "evelyn.reed@log-on.ai",
        socials: {
            linkedin: "https://www.linkedin.com/in/evelyn-reed-ai/",
            github: "https://github.com/evelyn-reed-ai"
        }
    }
];
