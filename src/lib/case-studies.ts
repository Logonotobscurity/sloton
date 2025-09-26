
import imageData from '@/lib/placeholder-images.json';

export interface CaseStudy {
    client: string;
    title: string;
    description: string;
    image: string;
    width: number;
    height: number;
    dataAiHint: string;
    tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    client: "Global E-Commerce Brand",
    title: "30% Reduction in Support Tickets via AI Chatbot",
    description: "We implemented an AI-powered chatbot using Google's Dialogflow that now handles over 60% of initial customer queries. This provides instant, 24/7 answers and has freed up human agents to focus on complex, high-value issues. The project involved integrating the chatbot with their existing CRM and inventory systems, leading to a 15% improvement in customer satisfaction scores.",
    image: imageData.supportChatbot.src,
    width: imageData.supportChatbot.width,
    height: imageData.supportChatbot.height,
    dataAiHint: imageData.supportChatbot.dataAiHint,
    tags: ["AI", "Chatbot", "E-Commerce", "Dialogflow"],
  },
  {
    client: "Nigerian Financial Services Firm",
    title: "Automated Compliance Reporting Saves 40+ Hours/Week",
    description: "Our team developed an RPA solution using UiPath to automate the generation of complex daily compliance reports required by Nigerian financial regulators. This solution eliminated manual data entry from multiple sources, reduced errors to near-zero, and allowed the finance team to shift their focus from data gathering to strategic analysis, significantly improving their operational efficiency.",
    image: imageData.financialData.src,
    width: imageData.financialData.width,
    height: imageData.financialData.height,
    dataAiHint: imageData.financialData.dataAiHint,
    tags: ["Automation", "RPA", "Finance", "UiPath", "Analytics"],
  },
  {
    client: "Healthcare Tech Startup",
    title: "Scalable Cloud Platform for 5x Growth in Users",
    description: "We architected and migrated their entire infrastructure to a scalable, HIPAA-compliant cloud environment on AWS. The new platform was designed for high availability and now handles rapid user growth with 99.99% uptime. The solution included setting up automated deployment pipelines (CI/CD) and robust security monitoring to protect sensitive patient data.",
    image: imageData.cloudInfrastructure.src,
    width: imageData.cloudInfrastructure.width,
    height: imageData.cloudInfrastructure.height,
    dataAiHint: imageData.cloudInfrastructure.dataAiHint,
    tags: ["Cloud", "AWS", "Scalability", "Healthcare", "Database"],
  },
  {
    client: "SAAS Provider",
    title: "Custom Analytics Dashboard Drives Product Strategy",
    description: "We developed a custom business intelligence dashboard using Power BI that consolidated data from their application database, CRM, and support tickets. This gave the product team a 360-degree view of user behavior, feature adoption, and churn indicators. The insights led to a data-driven roadmap that increased user retention by 20%.",
    image: imageData.analyticsDashboard.src,
    width: imageData.analyticsDashboard.width,
    height: imageData.analyticsDashboard.height,
    dataAiHint: imageData.analyticsDashboard.dataAiHint,
    tags: ["Analytics", "BI", "Power BI", "Database"],
  },
  {
    client: "Major Online Publisher",
    title: "Website Relaunch Leads to 50% Increase in Ad Revenue",
    description: "We executed a full-stack web development project to relaunch a high-traffic news portal. The new site, built on Next.js with a headless CMS, improved page load times by 70%, leading to better ad viewability and a significant boost in programmatic ad revenue. The modern architecture also streamlined the content creation process for their editorial team.",
    image: imageData.newsWebsite.src,
    width: imageData.newsWebsite.width,
    height: imageData.newsWebsite.height,
    dataAiHint: imageData.newsWebsite.dataAiHint,
    tags: ["Web Development", "Next.js", "Publisher"],
  },
];
