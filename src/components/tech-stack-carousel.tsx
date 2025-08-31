
"use client";

import Image from 'next/image';

const technologies = [
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2048px-React-icon.svg.png' },
  { name: 'Next.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg' },
  { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
  { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Node.js', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg' },
  { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png' },
  { name: 'AWS', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png' },
  { name: 'Google Cloud', icon: 'https://img.icons8.com/color/600/google-cloud.png' },
  { name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png' },
  { name: 'Firebase', icon: 'https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png' },
  { name: 'Docker', icon: 'https://img.icons8.com/fluent/512/docker.png' },
  { name: 'Kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png' },
  { name: 'Git', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
  { name: 'Figma', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/figma-color.png' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png' },
  { name: 'Automation Anywhere', icon: 'https://deepforgeai.com/static/media/AA_logo.5b01c0a0.svg' },
  { name: 'Ubisend', icon: 'https://deepforgeai.com/static/media/Ubisend.8d5fa480.svg' },
  { name: 'Blue Prism', icon: 'https://deepforgeai.com/static/media/Blueprism_logo.b3d0141a.svg' },
  { name: 'Microsoft', icon: 'https://deepforgeai.com/static/media/Microsoft_logo.8307ca44.svg' },
  { name: 'IBM', icon: 'https://deepforgeai.com/static/media/ibm.77e893f5.png' },
  { name: 'Dialogflow', icon: 'https://deepforgeai.com/static/media/Dialogflow_logo.a154f0af.svg' },
  { name: 'Ada', icon: 'https://deepforgeai.com/static/media/ada_logo.f7aa1984.svg' },
  { name: 'Nuacem', icon: 'https://deepforgeai.com/static/media/Nuacem.935254e0.png' },
  { name: 'OpenAI', icon: 'https://icon2.cleanpng.com/lnd/20250226/ug/59b6ea01cb9de15c20d252c096d2ee.webp' },
  { name: 'Anthropic', icon: 'https://iconlogovector.com/uploads/images/2024/06/lg-666474e766139-Anthropic.webp' },
  { name: 'Hugging Face', icon: 'https://cdn-uploads.huggingface.co/production/uploads/6349b36221f7b96c188e553c/kT-GBi2qYV7C7GUrc7vax.webp' },
  { name: 'Cohere', icon: 'https://logowik.com/content/uploads/images/cohere6480.logowik.com.webp' },
  { name: 'Stability AI', icon: 'https://static.stocktitan.net/company-logo/path-lg.webp' },
  { name: 'UiPath', icon: 'https://icon2.cleanpng.com/20180805/bxq/a36d343c4ded4032fb7f12c809ca1755.webp' },
  { name: 'Automation Anywhere', icon: 'https://logowik.com/content/uploads/images/automation-anywhere6480.logowik.com.webp' },
  { name: 'Blue Prism', icon: 'https://techgalaxy.business.blog/wp-content/uploads/2024/11/blue-prism-tutorial.webp' },
  { name: 'Microsoft Power Automate', icon: 'https://contauro.com/wp-content/uploads/2024/08/uipath-png.webp' },
  { name: 'WorkFusion', icon: 'https://www.primarymarkets.com/wp-content/uploads/2023/10/AutomationAnywhere-tp-circle.webp' },
  { name: 'Botpress', icon: 'https://www.clock-software.com/hubfs/integrations/guest%20technology%20and%20upselling/Botpress.webp' },
  { name: 'Zapier', icon: 'https://espysys.com/wp-content/uploads/2024/08/zapier-logo.webp' },
  { name: 'Bubble', icon: 'https://framerusercontent.com/images/7TcMknDIsXoJChZO9ArpTGE.webp' },
  { name: 'Webflow', icon: 'https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/651f2091caa28de325c11530_BlogHeader_Introducing-webflow-2-2400x1260.webp' },
  { name: 'Airtable', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/airtable.png' },
  { name: 'Salesforce', icon: 'https://ciberspring.com/_astro/06238f8955e49480293f6f5dbd31f85c6932dcbb-1208x1096_Z1PBML4.webp' },
  { name: 'Monday.com', icon: 'https://iconlogovector.com/uploads/images/2025/04/lg-67ecec97d9bcd-monday-com.webp' },
  { name: 'Notion', icon: 'https://iconlogovector.com/uploads/images/2024/12/lg-6763d9c3b0a77-Notion.webp' },
  { name: 'Asana', icon: 'https://media.tekpon.com/2022/03/Asana-logo-copy.webp' },
  { name: 'Trello', icon: 'https://icon2.cleanpng.com/lnd/20250227/ge/6b1e5458a8f61e8d2111df3f6d311f.webp' },
  { name: 'AWS Bedrock', icon: 'https://assets.bizclikmedia.net/668/846396c3fa21fb9f0c015b3783028e1f:19aa669e1f574af4e8aa04754691a795/blue-prism-abbyy-partnership-pr-com-resource-440x303-1-jpg.webp' },
  { name: 'Google Cloud AI', icon: 'https://cdn.prod.website-files.com/5c6acd483ca6bdd37537fd4c/6350d341ea7fa2c3c8047a53_Salesforce_logo_400x280.webp' },
  { name: 'Microsoft Azure AI', icon: 'https://atdev.do/img/technologies/webp/salesforce.webp' },
  { name: 'Mistral AI', icon: 'https://www.cosmico.org/content/images/2025/07/aws_to_launch_ai_agent_marketplace_with_anthropic_2025_cosmico_business_tech_Insights.webp' },
  { name: 'Meta AI', icon: 'https://futurumgroup.com/wp-content/uploads/2025/05/Salesforce-Q1-FY-2026-Results-Show-AI-Momentum-and-Strong-RPO-Growth.png.webp' },
  { name: 'Mendix', icon: 'https://cdn.prod.website-files.com/609414d10a55da213daa833c/6657913d256afedbe51e6fae_monday.webp' },
  { name: 'OutSystems', icon: 'https://media.tekpon.com/2021/06/Monday.com-logo.webp' },
  { name: 'FlutterFlow', icon: 'https://media.tekpon.com/2021/06/Notion-logo.webp' },
  { name: 'Glide', icon: 'https://www.pathrise.com/companies/logos/companies/asana.webp' },
  { name: 'Retool', icon: 'https://masteriyo.com/wp-content/uploads/2024/07/Masteriyo-Zapier-Integration.webp' },
  { name: 'Nintex', icon: 'https://cdn.prod.website-files.com/63405aed0eef878ae97819c8/655f727c2418776617289568_r6PsOlOsEdgIIxt8NSej2RpG2StjQLqTsxcLPUAVzpI.webp' },
  { name: 'ProcessMaker', icon: 'https://bucketwebebis.s3.eu-north-1.amazonaws.com/ebis-prod/ZeY0iwB7if63zOe3KNxX3t1ojQUtGv5KOD9Cey5q.webp' },
  { name: 'Pega', icon: 'https://veloarchia.odoo.com/web/image/683-5a2f617a/botpress-logo-png_seeklogo-339683.webp' },
  { name: 'Oracle BPM', icon: 'https://www.e-time.it/wp-content/uploads/2024/09/botpress-logo-480x208.webp' },
  { name: 'Appian', icon: 'https://business.feefo.com/hs-fs/hubfs/2024%20Website%20Assets/Features%20Content%20Type/Zapier%20assets/Zapier%20hero.webp?width=1080&height=720&name=Zapier%20hero.webp' },
];

export function TechStackCarousel() {
  const allTech = [...technologies, ...technologies, ...technologies];
  return (
    <section className="py-24 sm:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">The Technologies We Use</h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
          We leverage a modern, robust, and scalable tech stack to build solutions that stand the test of time.
        </p>
      </div>
      <div className="mt-16 relative flex flex-col gap-8 overflow-hidden">
        <div className="flex -translate-x-1/4 animate-scroll-x" style={{ animationDuration: '90s' }}>
          {allTech.map((tech, index) => (
            <div
              key={`top-${index}-${tech.name}`}
              className="flex-shrink-0 w-40 h-40 flex items-center justify-center rounded-lg bg-gradient-to-br from-background via-secondary/10 to-background border border-border/50 mx-4 p-4 shadow-lg"
            >
              <div className="relative w-full h-full">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex -translate-x-1/3 animate-scroll-x-reverse" style={{ animationDuration: '90s' }}>
          {allTech.map((tech, index) => (
            <div
              key={`bottom-${index}-${tech.name}`}
              className="flex-shrink-0 w-40 h-40 flex items-center justify-center rounded-lg bg-gradient-to-tr from-background via-secondary/10 to-background border border-border/50 mx-4 p-4 shadow-lg"
            >
               <div className="relative w-full h-full">
                 <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20 pointer-events-none"></div>
      </div>
    </section>
  );
}
