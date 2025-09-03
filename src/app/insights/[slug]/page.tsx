
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AuthorBio } from '@/components/author-bio';
import { insights as allInsights } from '@/lib/insights';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DialogFormWrapper } from '@/components/dialog-form-wrapper';
import { EnrollmentForm } from '@/components/enrollment-form';


// This is our mock database of articles. In a real application, this would come from a CMS or database.
export const insights = allInsights;

// Placeholder article content
const defaultArticleContent = `
<p class="mb-6 text-lg text-muted-foreground">The landscape of the modern workplace is undergoing a seismic shift, driven by the rapid advancements in Artificial Intelligence. AI is no longer a futuristic concept; it's a present-day reality that is fundamentally redefining roles, streamlining workflows, and unlocking unprecedented levels of productivity. For businesses in Nigeria and across the globe, understanding and embracing this transformation is not just an option—it's essential for survival and growth.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">Automating the Mundane to Unleash Human Potential</h2>
<p class="mb-6">One of the most immediate impacts of AI in the workplace is its ability to automate repetitive, time-consuming tasks. Think of the hours spent on data entry, scheduling, generating standard reports, or handling basic customer service queries. AI-powered tools, such as Robotic Process Automation (RPA), can execute these tasks with speed and accuracy far beyond human capability. This doesn't eliminate jobs; it redefines them. By freeing employees from mundane work, AI allows them to focus on what humans do best: strategic thinking, complex problem-solving, and creative innovation.</p>

<h3 class="text-xl font-semibold mt-8 mb-4">Key Areas for AI-Powered Automation:</h3>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li><strong>Administrative Tasks:</strong> AI can manage calendars, filter emails, and automate data entry into CRM systems, saving countless hours.</li>
    <li><strong>Customer Support:</strong> Intelligent chatbots can handle a majority of initial customer inquiries 24/7, escalating only the most complex issues to human agents.</li>
    <li><strong>Finance & Accounting:</strong> Automation can streamline invoice processing, expense reporting, and financial auditing, reducing errors and ensuring compliance.</li>
</ul>

<h2 class="text-2xl font-bold mt-12 mb-4">Augmenting Decision-Making with Data Intelligence</h2>
<p class="mb-6">Beyond automation, AI serves as a powerful engine for data analysis, providing insights that were previously inaccessible. Machine learning models can analyze vast datasets to identify trends, predict future outcomes, and offer data-driven recommendations. This empowers leaders to make smarter, more informed decisions with confidence.</p>

<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
  "The goal is to turn data into information, and information into insight. AI is the most powerful tool we have ever had to achieve this at scale."
</blockquote>

<p class="mb-6">For instance, marketing teams can use AI to analyze customer behavior and personalize campaigns for maximum impact. Operations managers can use predictive analytics to anticipate supply chain disruptions before they happen. In essence, AI augments human intelligence, turning it into a significant competitive advantage.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">How to Prepare Your Business for the AI Revolution</h2>
<p class="mb-6">Adopting AI is a strategic journey, not a single step. Here's how businesses can prepare:</p>
<ol class="list-decimal pl-6 space-y-2 mb-6">
  <li><strong>Start with a Clear Business Problem:</strong> Don't adopt AI for the sake of technology. Identify a specific, high-impact business challenge that AI can solve, whether it's reducing operational costs, improving customer satisfaction, or accelerating product development.</li>
  <li><strong>Invest in Data Infrastructure:</strong> AI is only as good as the data it's trained on. Ensure your data is clean, accessible, and well-organized. Investing in a robust data infrastructure is a critical first step.</li>
  <li><strong>Foster a Culture of Learning:</strong> The integration of AI will require new skills. Encourage a culture of continuous learning and upskilling within your team. Provide training to help employees work effectively alongside new AI systems.</li>
  <li><strong>Partner with Experts:</strong> Navigating the complexities of AI implementation can be daunting. Partnering with technology experts, like LOG_ON, can provide the strategic guidance and technical expertise needed to ensure a successful digital transformation.</li>
</ol>

<p class="mb-6">The future of work is not about humans versus machines, but humans *with* machines. By strategically integrating AI into your operations, you can create a more efficient, innovative, and resilient business, poised to thrive in the digital age.</p>
`;

const investmentArticleContent = `
<p class="mb-6 text-lg text-muted-foreground">I've been doubling down on AI stocks lately, and honestly, it's been a wild ride, but the good kind. AI is literally taking over everything: your phone, your doctor's office, even your coffee maker (okay, maybe not yet, but give it time). So I'm putting my money where my mouth is. Here's exactly what I'm holding and why.</p>

<h3 class="text-xl font-semibold mt-8 mb-4">AI in Everyday Life</h3>
<p class="mb-6">AI isn't just for tech geeks anymore. It's embedded in our daily lives, from smartphones to smart homes. Here's where I'm betting my portfolio.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">🧠 The Big Picture: Why AI Stocks Now?</h2>
<p class="mb-6">Look, I get it. Everyone's talking about AI, and it feels like we might be in bubble territory. But here's the thing: unlike the dot-com bubble where companies had websites but no revenue, AI companies are actually solving real problems and making real money.</p>
<p class="mb-6">The AI market is projected to hit <a href="https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-market" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1.8 trillion by 2030</a>, and we're still in the early innings. Some projections go even higher. PwC estimates AI could contribute <a href="https://www.pwc.com/gx/en/issues/data-and-analytics/publications/artificial-intelligence-study.html" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$15.7 trillion to the global economy by 2030</a>. Think about it: every company needs AI infrastructure, just like every company needed websites in the 2000s. The difference? This time, the infrastructure players are already profitable.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">💎 My Core Holdings: The Infrastructure Play</h2>

<h3 class="text-xl font-semibold mt-8 mb-4">1. Micron Technology (MU): The Memory Goldmine 🧠</h3>
<p class="mb-6">Micron's memory chips are literally the fuel for AI's brain, and demand is going through the roof.</p>
<p class="mb-6"><b>Why I'm Bullish:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>AI models need insane amounts of memory. We're talking 10x more than traditional computing.</li>
    <li>Every ChatGPT query, every self-driving car scan, every AI recommendation: it all needs high-bandwidth memory (HBM).</li>
    <li>Micron is one of only three companies globally that can make HBM3 chips (SK Hynix leads with 62%, Micron has 21% market share).</li>
    <li>They're sitting on a multi-year supply shortage with pricing power.</li>
</ul>
<p class="mb-6"><b>The Numbers:</b> Micron's data center revenue jumped over 400% year-over-year in their latest quarter. They're projecting record revenue of $10.7 billion for Q4 with 15% sequential growth.</p>
<p class="mb-6"><b>Risk Factor:</b> Memory is cyclical, but AI demand seems to be breaking the traditional cycle patterns. HBM suppliers are essentially sold out through 2024.</p>

<h3 class="text-xl font-semibold mt-8 mb-4">2. Canadian Solar (CSIQ): The Power Behind the Power ⚡</h3>
<p class="mb-6">Data centers are power-hungry beasts, and solar is becoming the cheapest way to feed them.</p>
<p class="mb-6"><b>The Indirect Play That Makes Sense:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>AI data centers use massive amounts of electricity. Google's data centers alone consumed <a href="https://www.techcrunch.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">30.8 million megawatt-hours in 2024</a>, double their 2020 consumption.</li>
    <li>U.S. data centers consumed about 4.4% of total U.S. electricity in 2023 and could reach <a href="https://www.energy.gov/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">580 TWh annually by 2028</a>.</li>
    <li>Solar is now the cheapest form of new electricity generation in most markets.</li>
    <li>Major tech companies are signing massive solar contracts to power their AI infrastructure.</li>
</ul>
<p class="mb-6"><b>Why CSIQ Specifically:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Strong presence in the U.S. market despite being Canadian-Chinese.</li>
    <li>Vertically integrated from manufacturing to project development.</li>
    <li>Completed development of approximately <a href="https://www.recurrentenergy.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">12 GWp of utility-scale solar projects</a>.</li>
    <li>Trading at attractive valuations compared to pure AI plays.</li>
</ul>
<p class="mb-6"><b>Recent Catalyst:</b> Microsoft signed a $10+ billion deal with Brookfield for over 10.5 GW of renewable energy, the <a href="https://www.cnbc.com/2024/05/01/microsoft-brookfield-ink-10-billion-plus-renewable-power-deal.html" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">largest corporate renewable energy deal in history</a>.</p>

<h3 class="text-xl font-semibold mt-8 mb-4">3. ASML & SCIA: The Picks and Shovels 🔧</h3>
<p class="mb-6">ASML's $200+ million EUV machines are the only way to make the most advanced AI chips. Talk about a moat.</p>
<p class="mb-6"><b>ASML - The Monopoly:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Only company in the world that makes EUV lithography machines.</li>
    <li>These machines are required to make chips smaller than 7nm (all advanced AI chips).</li>
    <li>Costs <a href="https://www.reuters.com/technology/asmls-new-500-mln-euv-machine-is-size-double-decker-bus-2023-12-21/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$200+ million per machine</a> for standard EUV, $350-400 million for High-NA EUV.</li>
    <li>12-18 month delivery times and a multi-year waiting list.</li>
    <li>Even if AI demand slows, they have a bulletproof backlog.</li>
</ul>
<p class="mb-6"><b>SCIA - The Under-the-Radar Play:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Makes specialized equipment for semiconductor manufacturing.</li>
    <li>Much smaller than ASML but growing faster.</li>
    <li>Higher beta play on the semiconductor equipment cycle.</li>
</ul>

<h3 class="text-xl font-semibold mt-8 mb-4">4. NVIDIA (NVDA): The Obvious King 👑</h3>
<p class="mb-6">Yeah, I know. Everyone owns NVIDIA. But sometimes the obvious play is obvious for a reason. Here's why I'm still holding despite the massive run-up:</p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li><b>Moat Strength:</b> The CUDA software ecosystem is incredibly sticky. 90% of AI developers use CUDA, creating a massive switching cost.</li>
    <li><b>Scale Advantages:</b> The bigger they get, the more R&D they can fund.</li>
    <li><b>Next-Gen Catalyst:</b> The <a href="https://developer.nvidia.com/blog/nvidia-blackwell-platform-arrives-to-power-a-new-era-of-computing/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Blackwell chips are delivering a 2.5x performance improvement</a> over the previous generation.</li>
    <li><b>Market Expansion:</b> Moving beyond training into inference, robotics, and autonomous vehicles.</li>
</ul>
<p class="mb-6"><b>Position Size:</b> This is my largest single holding, but I'm not adding more at current levels.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">📊 My Portfolio Breakdown</h2>
<!-- This will be replaced by a proper table component -->
<div id="portfolio-table"></div>

<h2 class="text-2xl font-bold mt-12 mb-4">⚠️ My Biggest Risks (And How I'm Hedging)</h2>
<p class="mb-6">Diversification isn't just about different stocks. It's about different risk factors.</p>

<h3 class="text-xl font-semibold mt-8 mb-4">Risk #1: The AI Bubble Burst (40% Probability)</h3>
<p class="mb-6"><b>What Keeps Me Up:</b> Valuations are getting stretched, and we've seen this movie before.<br><b>My Hedge:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Position sizing: AI is only 30% of my total portfolio.</li>
    <li>Shorting QQQ as a partial hedge against tech selloffs.</li>
    <li>Setting stop-losses at 25% drawdowns for momentum names.</li>
</ul>

<h3 class="text-xl font-semibold mt-8 mb-4">Risk #2: China Tariffs & Trade Wars (30% Probability)</h3>
<p class="mb-6"><b>The Problem:</b> Most of my plays have China exposure or supply chain risks.<br><b>My Protection:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Diversified across different geographies (ASML in Netherlands, MU in U.S.).</li>
    <li>Avoiding pure China plays.</li>
    <li>Monitoring trade headlines closely.</li>
</ul>

<h3 class="text-xl font-semibold mt-8 mb-4">Risk #3: Periodic AI Scares (30% Probability)</h3>
<p class="mb-6"><b>Recent Example:</b> The DeepSeek panic in January 2025 that wiped out over $1 trillion in market cap overnight (<a href="https://edition.cnn.com/business" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">CNN Business</a>, <a href="https://www.businessinsider.com/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">Business Insider</a>).<br><b>My Approach:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>These are buying opportunities, not selling moments.</li>
    <li>Keeping 20% cash to deploy during panics.</li>
    <li>Focusing on infrastructure players who benefit regardless of which AI model wins.</li>
</ul>

<h2 class="text-2xl font-bold mt-12 mb-4">🎯 My Investment Thesis: Infrastructure Over Applications</h2>
<p class="mb-6">Here's my core belief: I'd rather own the roads than try to pick which cars will drive on them.</p>
<p class="mb-6"><b>Why Infrastructure Wins:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li><b>Model Agnostic:</b> My stocks benefit whether it's OpenAI, Anthropic, Google, or some unknown startup that wins.</li>
    <li><b>Higher Barriers to Entry:</b> It's easier to build a new AI app than a new chip fab.</li>
    <li><b>Pricing Power:</b> When you control essential infrastructure, you can raise prices.</li>
    <li><b>Longer Investment Cycles:</b> These aren't consumer fads; they're multi-decade infrastructure buildouts.</li>
</ul>

<h2 class="text-2xl font-bold mt-12 mb-4">📈 What I'm Watching: Key Catalysts Ahead</h2>
<p class="mb-6"><b>Q1 2025:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>NVIDIA Blackwell chip production ramp and <a href="https://www.bitget.com/news/articles/12560603808409" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">2.5x performance improvements</a>.</li>
    <li>Micron's HBM3E pricing announcements amid continued supply shortages.</li>
    <li>Data center CapEx guidance from hyperscalers.</li>
</ul>
<p class="mb-6"><b>2025 Full Year:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>AI inference market development (where the real money is long-term).</li>
    <li>Energy infrastructure investments by tech giants: data centers could consume <a href="https://www.eesi.org/articles/view/fact-sheet-the-growth-in-data-center-electricity-use" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">580 TWh by 2028</a>.</li>
    <li>China's response to semiconductor restrictions.</li>
</ul>
<p class="mb-6"><b>Long-term (2026+):</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Edge AI deployment (brings manufacturing back to U.S./Europe).</li>
    <li>Autonomous vehicle mass production.</li>
    <li>AI robotics commercialization.</li>
</ul>

<h2 class="text-2xl font-bold mt-12 mb-4">💡 Final Thoughts: Playing the Long Game</h2>
<p class="mb-6">Look, I'm not going to sugarcoat it. This is a volatile sector, and I've had plenty of sleepless nights. But I genuinely believe we're witnessing the biggest technological shift since the internet, and I want to be positioned for it.</p>
<p class="mb-6"><b>My Rules:</b></p>
<ul class="list-disc pl-6 space-y-2 mb-6">
    <li>Infrastructure over applications (roads, not cars).</li>
    <li>Companies with moats, not just growth (defensibility matters).</li>
    <li>Position sizing that lets me sleep at night (never bet the farm).</li>
    <li>Long-term thinking with short-term risk management (stop losses exist for a reason).</li>
</ul>
<p class="mb-6">The AI revolution is just getting started, but the infrastructure to support it needs to be built now. That's where the money is.</p>

<div id="download-guide"></div>
`;

const llmsTxtArticleContent = `
<p class="mb-6 text-lg text-muted-foreground">As AI-driven search engines gain prominence, a new file type is emerging as a critical tool for website optimization: <code>llms.txt</code>. This simple file is becoming essential for helping websites communicate more effectively with large language models (LLMs). Here’s a breakdown of why <code>llms.txt</code> is increasingly important for modern SEO strategies.</p>

<h2 class="text-2xl font-bold mt-12 mb-4">Why LLM Optimization Matters for SEO</h2>

<div class="my-8 flex justify-center">
    <Image src="https://storage.googleapis.com/project-a-public-images/benefits-of-llms-txt.png" alt="A diagram showing the benefits of llms.txt for SEO, including better visibility, accurate citations, and driving more traffic." width={800} height={450} data-ai-hint="llm seo benefits diagram" class="rounded-lg shadow-lg" />
</div>

<ul class="list-disc pl-6 space-y-3 mb-6">
    <li><strong>Better AI Search Visibility:</strong> An <code>llms.txt</code> file guides AI models to prioritize your most important content, increasing the likelihood of being featured in AI-generated search answers.</li>
    <li><strong>Ensure Accurate AI Citations:</strong> It allows you to control how AI interprets and summarizes your business by highlighting the most relevant information for both machines and humans.</li>
    <li><strong>Complement Traditional SEO:</strong> This file works alongside <code>robots.txt</code> and sitemaps, providing AI models with an additional, machine-readable index of your most valuable pages.</li>
    <li><strong>Simple Implementation:</strong> It's just a straightforward Markdown file that you can upload to your site’s root directory, and you can even include links for additional context.</li>
    <li><strong>Drive More Referral Traffic:</strong> By improving AI citations, you can drive more organic traffic from users who discover your site through AI-powered answers.</li>
    <li><strong>Future-Proof Your Website:</strong> Adopting <code>llms.txt</code> prepares your site for the next wave of AI-powered search, giving you a competitive advantage.</li>
</ul>

<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
  <p><strong>Read Also:</strong> <a href="/insights/future-of-work-ai" class="text-primary hover:underline">LLMs vs SEO: What’s Changing in Search Discovery</a></p>
</blockquote>


<h2 class="text-2xl font-bold mt-12 mb-4">How Large Language Models (LLMs) Work</h2>
<p class="mb-6">An <code>llms.txt</code> file provides AI models with a simplified, structured version of your site's most important content. It highlights key pages and offers brief descriptions for each, helping the models utilize your content more effectively, much like how search engines crawl a sitemap. Here's a simplified look at how LLMs operate:</p>

<div class="my-8 flex justify-center">
    <Image src="https://storage.googleapis.com/project-a-public-images/llm-diagram.png" alt="Diagram explaining how Large Language Models work" width={800} height={600} data-ai-hint="llm diagram" class="rounded-lg shadow-lg" />
</div>

<ul class="list-disc pl-6 space-y-3 mb-6">
    <li><strong>Trained on Massive Datasets:</strong> LLMs are trained on vast amounts of text from books, websites, and other sources to learn language patterns and relationships.</li>
    <li><strong>Use Deep Learning & Neural Networks:</strong> They rely on complex architectures like the Generative Pre-trained Transformer (GPT) to predict and generate text based on context.</li>
    <li><strong>Understand Context and Meaning:</strong> By analyzing sentence structures and word relationships, LLMs can generate highly relevant responses, especially when guided by a well-formatted <code>llms.txt</code> file.</li>
    <li><strong>Have Limitations & Token Constraints:</strong> LLMs have a fixed memory (token limit), meaning they can't process unlimited data at once. This makes it crucial to highlight your most important content.</li>
    <li><strong>Continuously Improve with Human Feedback:</strong> Models refine their outputs through techniques like Reinforcement Learning from Human Feedback (RLHF) and ongoing training.</li>
    <li><strong>Generate, Summarize, and Analyze:</strong> LLMs can create human-like text, answer questions, translate languages, and extract key insights, which is changing business processes and adding new dimensions to SEO.</li>
</ul>
<p class="mb-6">Understanding these mechanics helps you optimize your web content for AI-driven search, ensuring models generate relevant responses and extract the correct context from your site.</p>

<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
  <p><strong>Related:</strong> <a href="/insights/ai-investment-playbook" class="text-primary hover:underline">SEO vs GEO: Why Your Content Might Be Invisible in AI Search (And How to Fix It)</a></p>
</blockquote>

<h2 class="text-2xl font-bold mt-12 mb-4">How to Optimize Your Content for AI Readability</h2>
<p class="mb-6">AI search tools like Google and ChatGPT extract, summarize, and display content based on its structure and clarity. To improve your visibility, you must optimize your website for AI readability. Here are some key tips:</p>
<ul class="list-disc pl-6 space-y-3 mb-6">
    <li><strong>Clear Headings & Structure:</strong> Use logical headings (H1, H2, H3) and bullet points to organize your content. This helps AI assistants navigate and interpret your pages.</li>
    <li><strong>AI-Readable Tables:</strong> Use structured tables for comparisons, as they provide clear context and make it easy for AI to extract key information.</li>
    <li><strong>FAQ Sections & Schema Markup:</strong> Include FAQ sections and apply schema markup to improve your chances of being featured in search results and help AI index your site more effectively.</li>
    <li><strong>Simple, Direct Language:</strong> Use clear and direct language instead of jargon to improve AI comprehension and boost SEO performance.</li>
    <li><strong>Internal Linking:</strong> Strong internal linking helps AI understand the relationships between different pages on your site, enhancing its ability to rank your content accurately.</li>
    <li><strong>Optimized Metadata:</strong> Your page titles and meta descriptions significantly influence how AI algorithms rank and display your content.</li>
</ul>

<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
  <p><strong>See also:</strong> <a href="/insights/prompt-engineering-for-developers" class="text-primary hover:underline">Structuring Web Pages for AI-First Indexing</a></p>
</blockquote>

<h2 class="text-2xl font-bold mt-12 mb-4">What’s Inside an LLMs.txt File</h2>
<p class="mb-6">Here’s what a basic structure looks like:</p>
<pre class="bg-secondary/50 p-4 rounded-md overflow-x-auto"><code>
# AcmeCorp

> AcmeCorp builds privacy-first analytics tools for SaaS businesses.

## Docs
– [Getting Started Guide](https://acmecorp.com/docs/start): Intro for developers
– [API Reference](https://acmecorp.com/docs/api): Complete API documentation

## Tutorials
– [Build a dashboard in 5 minutes](https://acmecorp.com/tutorials/dashboard): Step-by-step walkthrough
– [Analytics for non-technical teams](https://acmecorp.com/tutorials/non-tech): Explains key metrics and terms

## Blog
– [Why privacy matters](https://acmecorp.com/blog/privacy): A thought leadership piece
– [Case study: How we scaled to 1M users](https://acmecorp.com/blog/scaling): Lessons from our growth story

## Optional
– [Terms of Service](https://acmecorp.com/terms): Legal information
– [Community Forum](https://acmecorp.com/forum): Peer support and discussion
</code></pre>

<h2 class="text-2xl font-bold mt-12 mb-4">How to Create Your Own LLMs.txt File</h2>
<p class="mb-6">Setting up an <code>llms.txt</code> file is simple, but doing it right ensures AI models recognize and prioritize your most important information. Follow these steps:</p>
<ol class="list-decimal pl-6 space-y-3 mb-6">
    <li><strong>Define Your Objective:</strong> Decide which content you want AI to focus on. A SaaS platform might highlight onboarding guides, while a blog might spotlight cornerstone articles.</li>
    <li><strong>Map Your Content:</strong> Categorize your content into logical sections (e.g., "Product Information," "Case Studies"). Make a list of your most valuable URLs and skip pages like login, cart, or privacy policy.</li>
    <li><strong>Write it in Markdown:</strong> Use a simple Markdown format with links, short descriptions, and clear section headings.</li>
    <li><strong>Save and Upload:</strong> Save the file as <code>llms.txt</code> and upload it to your site's root directory (e.g., <code>https://yourwebsite.com/llms.txt</code>).</li>
    <li><strong>Test It:</strong> Open your <code>llms.txt</code> URL to check the formatting. You can then copy the contents into ChatGPT or Claude and ask, “What does this company do?” to see how accurately the AI understands your business.</li>
</ol>
<p class="mb-6">By creating an <code>llms.txt</code> file, you make it easier for AI models to understand your content, improving your visibility in AI-generated search results.</p>
`;


const PortfolioTable = () => (
    <div className="my-8 overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Stock</TableHead>
                    <TableHead>% of AI Portfolio</TableHead>
                    <TableHead>Role in AI</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Time Horizon</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-bold">NVDA</TableCell>
                    <TableCell>35%</TableCell>
                    <TableCell>GPU Computing</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>3-5 years</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-bold">MU</TableCell>
                    <TableCell>25%</TableCell>
                    <TableCell>Memory Chips</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>2-4 years</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-bold">ASML</TableCell>
                    <TableCell>20%</TableCell>
                    <TableCell>Manufacturing Equipment</TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>5+ years</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-bold">CSIQ</TableCell>
                    <TableCell>15%</TableCell>
                    <TableCell>Power Infrastructure</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>3-5 years</TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell className="font-bold">SCIA</TableCell>
                    <TableCell>5%</TableCell>
                    <TableCell>Specialized Equipment</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>2-3 years</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
)

const DownloadGuideCTA = () => (
    <div className="mt-12 text-center bg-secondary/50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">🎁 Want More? Download My Complete AI Investment Guide</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I've put together a comprehensive guide with my complete financial analysis, sector rotation strategies, risk management frameworks, and monthly watchlist updates.
        </p>
        <DialogFormWrapper
            trigger={
                <Button size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Download the Free Guide Here
                </Button>
            }
            title="Download the AI Investment Guide"
            description="Enter your details below to get instant access to the guide. No spam, just actionable insights."
            form={<EnrollmentForm programName="AI Investment Guide" />}
        />
    </div>
)

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = insights.find(p => p.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = insights.find(p => p.slug === params.slug);

  if (!article) {
    notFound();
  }
  
  const isInvestmentArticle = article.slug === 'ai-investment-playbook';
  const isLlmsTxtArticle = article.slug === '10-content-formats-that-get-picked-up-by-llms';

  let content = defaultArticleContent;
  if (isInvestmentArticle) {
      content = investmentArticleContent;
  } else if (isLlmsTxtArticle) {
      content = llmsTxtArticleContent;
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="mb-4">
                 <Button asChild variant="ghost" className="pl-0 text-muted-foreground">
                    <Link href="/insights">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to all insights
                    </Link>
                </Button>
            </div>

            <div className="flex gap-2 mb-4">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold !leading-tight mb-4">{article.title}</h1>
            <p className="text-xl text-muted-foreground">{article.description}</p>
            <div className="mt-6 text-sm text-muted-foreground">
                <span>By {article.author}</span> &middot; <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </header>
          
          <Image 
            src={article.image}
            alt={article.title}
            width={1200}
            height={600}
            className="w-full rounded-lg mb-12 shadow-lg"
            data-ai-hint={article.dataAiHint}
            priority
          />

          {isInvestmentArticle ? (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: content.split('<div id="portfolio-table"></div>')[0] }} />
                  <PortfolioTable />
                  <div dangerouslySetInnerHTML={{ __html: content.split('<div id="portfolio-table"></div>')[1].split('<div id="download-guide"></div>')[0] }} />
                  <DownloadGuideCTA />
                   <div dangerouslySetInnerHTML={{ __html: content.split('<div id="download-guide"></div>')[1] }} />
              </div>
          ) : (
             <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          )}


          <footer className="mt-16 border-t pt-8">
            <AuthorBio authorName={article.author} />
          </footer>
        </article>
        
        <div className="text-center mt-24">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3"><BookOpen className="h-8 w-8 text-primary" /> Read More Articles</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore more insights from our team on AI, automation, and digital strategy.
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/insights">
                        View All Insights
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
