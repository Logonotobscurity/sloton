
export interface CaseStudy {
    client: string;
    title: string;
    description: string;
    image: string;
    dataAiHint: string;
    tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    client: "Global E-Commerce Brand",
    title: "30% Reduction in Support Tickets via AI Chatbot",
    description: "We implemented an AI-powered chatbot using Google's Dialogflow that now handles over 60% of initial customer queries. This provides instant, 24/7 answers and has freed up human agents to focus on complex, high-value issues. The project involved integrating the chatbot with their existing CRM and inventory systems, leading to a 15% improvement in customer satisfaction scores.",
    image: "https://images.surferseo.art/12d21d90-9031-44b3-983c-b64ff2905901.png",
    dataAiHint: "support chatbot",
    tags: ["AI", "Chatbot", "E-Commerce", "Dialogflow"],
  },
  {
    client: "Nigerian Financial Services Firm",
    title: "Automated Compliance Reporting Saves 40+ Hours/Week",
    description: "Our team developed an RPA solution using UiPath to automate the generation of complex daily compliance reports required by Nigerian financial regulators. This solution eliminated manual data entry from multiple sources, reduced errors to near-zero, and allowed the finance team to shift their focus from data gathering to strategic analysis, significantly improving their operational efficiency.",
    image: "https://www.quoleady.com/wp-content/uploads/2025/07/a-photograph-of-a-meticulously-crafted-c_uS-LcVIBTrieDESlLIYHMA_Qwt8ezinQVubColkHeraMA-300x168.png",
    dataAiHint: "financial data",
    tags: ["Automation", "RPA", "Finance", "UiPath", "Analytics"],
  },
  {
    client: "Healthcare Tech Startup",
    title: "Scalable Cloud Platform for 5x Growth in Users",
    description: "We architected and migrated their entire infrastructure to a scalable, HIPAA-compliant cloud environment on AWS. The new platform was designed for high availability and now handles rapid user growth with 99.99% uptime. The solution included setting up automated deployment pipelines (CI/CD) and robust security monitoring to protect sensitive patient data.",
    image: "https://images.surferseo.art/55b1ef9c-e060-49b7-8031-2b33b2c83bfd.png",
    dataAiHint: "cloud infrastructure",
    tags: ["Cloud", "AWS", "Scalability", "Healthcare", "Database"],
  },
  {
    client: "SAAS Provider",
    title: "Custom Analytics Dashboard Drives Product Strategy",
    description: "We developed a custom business intelligence dashboard using Power BI that consolidated data from their application database, CRM, and support tickets. This gave the product team a 360-degree view of user behavior, feature adoption, and churn indicators. The insights led to a data-driven roadmap that increased user retention by 20%.",
    image: "https://images.surferseo.art/af18ff8e-9af7-47c5-aa6d-45c2e59a6094.png",
    dataAiHint: "analytics dashboard",
    tags: ["Analytics", "BI", "Power BI", "Database"],
  },
  {
    client: "Major Online Publisher",
    title: "Website Relaunch Leads to 50% Increase in Ad Revenue",
    description: "We executed a full-stack web development project to relaunch a high-traffic news portal. The new site, built on Next.js with a headless CMS, improved page load times by 70%, leading to better ad viewability and a significant boost in programmatic ad revenue. The modern architecture also streamlined the content creation process for their editorial team.",
    image: "https://images.surferseo.art/7352a56a-7547-4589-9f0c-1fccf99e2b8e.png",
    dataAiHint: "news website",
    tags: ["Web Development", "Next.js", "Publisher"],
  },
];
