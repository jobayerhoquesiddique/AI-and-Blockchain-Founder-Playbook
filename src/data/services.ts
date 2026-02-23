export type ServiceCategory =
  | "AI Automation"
  | "AI Agents"
  | "AI SaaS"
  | "Software Dev"
  | "Blockchain"
  | "NFT & Web3"
  | "Smart Contracts"
  | "B2B Automation"
  | "Templates & Kits"
  | "Personal Brand"
  | "Data & Analytics"
  | "Integrations";

export interface Service {
  id: number;
  emoji: string;
  title: string;
  description: string;
  deliverables: string[];
  targetAudience: string;
  priceRange: string;
  category: ServiceCategory;
}

export const categories: ServiceCategory[] = [
  "AI Automation",
  "AI Agents",
  "AI SaaS",
  "Software Dev",
  "Blockchain",
  "NFT & Web3",
  "Smart Contracts",
  "B2B Automation",
  "Templates & Kits",
  "Personal Brand",
  "Data & Analytics",
  "Integrations",
];

export const services: Service[] = [
  // AI Automation
  { id: 1, emoji: "🤖", title: "AI Email Outreach Automator", description: "Automated cold-email system powered by GPT for personalized outreach at scale.", deliverables: ["Custom GPT prompt chains", "Email sequencing setup", "CRM integration", "Analytics dashboard"], targetAudience: "Sales teams, agencies, B2B founders", priceRange: "$800–$1,500", category: "AI Automation" },
  { id: 2, emoji: "📄", title: "AI Document Processing Pipeline", description: "Extract, classify, and route data from PDFs, invoices, and forms using AI.", deliverables: ["OCR + AI extraction engine", "Data validation rules", "Output to spreadsheet/DB", "Error handling system"], targetAudience: "Legal firms, accounting, logistics", priceRange: "$1,000–$2,000", category: "AI Automation" },
  { id: 3, emoji: "💬", title: "AI Customer Support Chatbot", description: "Deploy a trained chatbot on your site that handles FAQs and routes tickets.", deliverables: ["Custom-trained bot", "Widget integration", "Escalation workflows", "Monthly training updates"], targetAudience: "E-commerce, SaaS companies", priceRange: "$900–$1,800", category: "AI Automation" },
  { id: 4, emoji: "📊", title: "AI Social Media Content Engine", description: "Auto-generate branded social posts, captions, and hashtags using AI.", deliverables: ["Content generation pipeline", "Brand voice training", "Scheduling integration", "30-day content calendar"], targetAudience: "Creators, marketing agencies", priceRange: "$700–$1,200", category: "AI Automation" },
  { id: 5, emoji: "🎯", title: "AI Lead Scoring System", description: "Machine-learning powered lead qualification that integrates with your CRM.", deliverables: ["Scoring model", "CRM webhook integration", "Dashboard", "Model retraining docs"], targetAudience: "B2B sales teams, growth agencies", priceRange: "$1,200–$2,000", category: "AI Automation" },

  // AI Agents
  { id: 6, emoji: "🧠", title: "Custom AI Research Agent", description: "Autonomous agent that researches topics, summarizes findings, and delivers reports.", deliverables: ["Multi-source research agent", "Summarization pipeline", "Scheduled reports", "Source citation system"], targetAudience: "Consultants, VCs, analysts", priceRange: "$1,000–$2,000", category: "AI Agents" },
  { id: 7, emoji: "📞", title: "AI Voice Agent for Appointments", description: "Phone-based AI agent that books, confirms, and manages appointments.", deliverables: ["Voice AI setup", "Calendar integration", "Call scripts", "Analytics dashboard"], targetAudience: "Clinics, salons, service businesses", priceRange: "$1,200–$2,000+", category: "AI Agents" },
  { id: 8, emoji: "🔍", title: "AI Competitor Analysis Agent", description: "Agent that monitors competitors' pricing, features, and marketing moves.", deliverables: ["Competitor tracking bot", "Weekly digest reports", "Alert system", "Comparison dashboard"], targetAudience: "Startups, product teams", priceRange: "$900–$1,600", category: "AI Agents" },
  { id: 9, emoji: "📝", title: "AI Meeting Notes & Action Items Agent", description: "Joins calls, transcribes, and extracts action items automatically.", deliverables: ["Meeting bot integration", "Transcript processing", "Task extraction", "Slack/email delivery"], targetAudience: "Remote teams, executives", priceRange: "$800–$1,400", category: "AI Agents" },
  { id: 10, emoji: "🛒", title: "AI Shopping Assistant Agent", description: "Conversational agent that helps customers find and compare products.", deliverables: ["Product knowledge base", "Conversational UI", "Cart integration", "Recommendation engine"], targetAudience: "E-commerce stores", priceRange: "$1,000–$1,800", category: "AI Agents" },

  // AI SaaS
  { id: 11, emoji: "🚀", title: "Micro-SaaS MVP Build", description: "Full MVP of an AI-powered SaaS product with auth, billing, and core feature.", deliverables: ["React/Next.js app", "Auth + Stripe billing", "AI core feature", "Admin dashboard", "Deployment"], targetAudience: "Indie hackers, technical founders", priceRange: "$1,500–$2,500+", category: "AI SaaS" },
  { id: 12, emoji: "✍️", title: "AI Writing Tool SaaS", description: "White-label AI writing assistant with templates, tone control, and history.", deliverables: ["Full web app", "Template system", "User management", "API integration", "Usage analytics"], targetAudience: "Content agencies, marketers", priceRange: "$1,200–$2,000", category: "AI SaaS" },
  { id: 13, emoji: "🖼️", title: "AI Image Generation Platform", description: "Branded image generation tool with style presets and batch processing.", deliverables: ["Generation UI", "Style preset system", "Gallery/history", "API credits management"], targetAudience: "Design agencies, marketers", priceRange: "$1,000–$1,800", category: "AI SaaS" },
  { id: 14, emoji: "📈", title: "AI Analytics Dashboard SaaS", description: "Connect data sources and get AI-powered insights and anomaly detection.", deliverables: ["Data connectors", "AI insight engine", "Custom dashboards", "Alert system", "Export tools"], targetAudience: "Data-driven businesses", priceRange: "$1,500–$2,500", category: "AI SaaS" },

  // Software Dev
  { id: 15, emoji: "🌐", title: "Custom Web Application", description: "Full-stack web app tailored to your business logic and workflows.", deliverables: ["React frontend", "API backend", "Database design", "Auth system", "Deployment"], targetAudience: "Startups, SMBs", priceRange: "$1,500–$3,000+", category: "Software Dev" },
  { id: 16, emoji: "📱", title: "Progressive Web App (PWA)", description: "Mobile-optimized web app with offline capabilities and push notifications.", deliverables: ["PWA architecture", "Offline sync", "Push notifications", "App store guidance"], targetAudience: "Mobile-first startups", priceRange: "$1,200–$2,000", category: "Software Dev" },
  { id: 17, emoji: "🔌", title: "REST API Development", description: "Scalable API with documentation, auth, and rate limiting.", deliverables: ["API endpoints", "Auth middleware", "Rate limiting", "Swagger docs", "Testing suite"], targetAudience: "SaaS companies, developers", priceRange: "$800–$1,500", category: "Software Dev" },
  { id: 18, emoji: "⚡", title: "Performance Optimization Sprint", description: "Audit and optimize your web app for speed, SEO, and Core Web Vitals.", deliverables: ["Performance audit", "Code splitting", "Image optimization", "Caching strategy", "Before/after report"], targetAudience: "Any web business", priceRange: "$700–$1,200", category: "Software Dev" },

  // Blockchain
  { id: 19, emoji: "⛓️", title: "Custom Token Launch (ERC-20/BEP-20)", description: "Deploy your own token with tokenomics, vesting, and liquidity setup.", deliverables: ["Smart contract", "Tokenomics design", "Deployment", "Verification", "Liquidity guide"], targetAudience: "Crypto projects, DAOs", priceRange: "$1,000–$2,000", category: "Blockchain" },
  { id: 20, emoji: "🏦", title: "DeFi Yield Dashboard", description: "Track yields, APRs, and portfolio performance across DeFi protocols.", deliverables: ["Multi-chain dashboard", "Yield tracking", "Portfolio analytics", "Alert system"], targetAudience: "DeFi investors, funds", priceRange: "$1,200–$2,000", category: "Blockchain" },
  { id: 21, emoji: "🗳️", title: "DAO Governance Platform", description: "On-chain voting, proposal creation, and treasury management for DAOs.", deliverables: ["Voting smart contracts", "Proposal UI", "Treasury dashboard", "Member management"], targetAudience: "DAOs, Web3 communities", priceRange: "$1,500–$2,500", category: "Blockchain" },
  { id: 22, emoji: "🔐", title: "Blockchain Identity Verification", description: "Decentralized identity solution with verifiable credentials.", deliverables: ["DID smart contracts", "Credential issuance", "Verification portal", "SDK"], targetAudience: "KYC providers, enterprises", priceRange: "$1,500–$2,500+", category: "Blockchain" },

  // NFT & Web3
  { id: 23, emoji: "🎨", title: "NFT Collection Launch Kit", description: "End-to-end NFT collection with art generation, minting site, and metadata.", deliverables: ["Smart contract (ERC-721/1155)", "Minting dApp", "Metadata/IPFS", "Rarity system", "Launch guide"], targetAudience: "Artists, brands, creators", priceRange: "$1,200–$2,500", category: "NFT & Web3" },
  { id: 24, emoji: "🏪", title: "NFT Marketplace MVP", description: "Custom marketplace for buying, selling, and auctioning NFTs.", deliverables: ["Marketplace smart contracts", "Frontend UI", "Wallet integration", "Search & filters"], targetAudience: "Web3 startups, communities", priceRange: "$1,500–$3,000", category: "NFT & Web3" },
  { id: 25, emoji: "🎟️", title: "NFT-Gated Access System", description: "Token-gate content, communities, or features based on NFT ownership.", deliverables: ["Verification contracts", "Gate middleware", "Dashboard", "Integration docs"], targetAudience: "Creators, membership platforms", priceRange: "$800–$1,500", category: "NFT & Web3" },
  { id: 26, emoji: "🌍", title: "Web3 Portfolio & Profile dApp", description: "On-chain portfolio showcasing NFTs, tokens, activity, and achievements.", deliverables: ["Multi-chain support", "NFT gallery", "Activity feed", "Social sharing"], targetAudience: "Web3 users, influencers", priceRange: "$900–$1,600", category: "NFT & Web3" },

  // Smart Contracts
  { id: 27, emoji: "📜", title: "Custom Smart Contract Development", description: "Bespoke Solidity contracts for any on-chain logic.", deliverables: ["Smart contract code", "Unit tests", "Gas optimization", "Audit-ready docs", "Deployment"], targetAudience: "Crypto startups, DAOs", priceRange: "$1,000–$2,000", category: "Smart Contracts" },
  { id: 28, emoji: "🔒", title: "Smart Contract Security Audit", description: "Manual + automated audit of your smart contracts for vulnerabilities.", deliverables: ["Vulnerability report", "Fix recommendations", "Re-audit", "Certification badge"], targetAudience: "DeFi protocols, token projects", priceRange: "$1,500–$3,000", category: "Smart Contracts" },
  { id: 29, emoji: "💰", title: "Staking Contract System", description: "Token staking with flexible lock periods, rewards, and admin controls.", deliverables: ["Staking contract", "Admin dashboard", "Reward calculations", "Frontend integration"], targetAudience: "Token projects", priceRange: "$1,000–$1,800", category: "Smart Contracts" },
  { id: 30, emoji: "🤝", title: "Escrow & Payment Contracts", description: "Trustless escrow for freelance work, sales, or service agreements.", deliverables: ["Escrow contract", "Dispute resolution", "Release conditions", "UI integration"], targetAudience: "Freelance platforms, marketplaces", priceRange: "$800–$1,500", category: "Smart Contracts" },

  // B2B Automation
  { id: 31, emoji: "⚙️", title: "Zapier/Make.com Automation Suite", description: "Custom automation workflows connecting your business tools.", deliverables: ["5-10 automated workflows", "Error handling", "Documentation", "Training session"], targetAudience: "SMBs, agencies", priceRange: "$700–$1,200", category: "B2B Automation" },
  { id: 32, emoji: "📋", title: "Client Onboarding Automation", description: "Automated pipeline from lead capture to project kickoff.", deliverables: ["Form builder", "Auto-contracts", "Welcome sequences", "Task creation", "CRM sync"], targetAudience: "Agencies, consultants", priceRange: "$800–$1,400", category: "B2B Automation" },
  { id: 33, emoji: "💳", title: "Invoice & Payment Automation", description: "Auto-generate invoices, send reminders, and track payments.", deliverables: ["Invoice templates", "Payment gateway", "Reminder sequences", "Reporting dashboard"], targetAudience: "Freelancers, agencies", priceRange: "$700–$1,200", category: "B2B Automation" },
  { id: 34, emoji: "📦", title: "Inventory & Order Management Bot", description: "AI-assisted inventory tracking with reorder alerts and supplier management.", deliverables: ["Inventory system", "Alert rules", "Supplier database", "Order tracking"], targetAudience: "E-commerce, retail", priceRange: "$900–$1,600", category: "B2B Automation" },

  // Templates & Kits
  { id: 35, emoji: "📓", title: "Ultimate Notion Business OS", description: "Complete Notion workspace for running a freelance or agency business.", deliverables: ["CRM template", "Project tracker", "Finance dashboard", "SOPs library", "Client portal"], targetAudience: "Freelancers, solopreneurs", priceRange: "$97–$297 (digital product)", category: "Templates & Kits" },
  { id: 36, emoji: "🛠️", title: "Developer Starter Kit", description: "Boilerplate repo with auth, payments, DB, and deployment pre-configured.", deliverables: ["Full-stack boilerplate", "Auth + Stripe", "CI/CD config", "Documentation", "Video walkthrough"], targetAudience: "Developers, indie hackers", priceRange: "$149–$499 (digital product)", category: "Templates & Kits" },
  { id: 37, emoji: "📐", title: "SaaS Landing Page Template Pack", description: "5 conversion-optimized landing page templates with animations.", deliverables: ["5 React templates", "Responsive design", "Dark/light modes", "CMS integration guide"], targetAudience: "SaaS founders, marketers", priceRange: "$99–$299 (digital product)", category: "Templates & Kits" },
  { id: 38, emoji: "🧩", title: "AI Prompt Engineering Toolkit", description: "Curated prompt library for business, coding, marketing, and creative tasks.", deliverables: ["500+ prompts", "Category system", "Use-case guides", "Notion/Airtable DB"], targetAudience: "AI enthusiasts, marketers", priceRange: "$49–$149 (digital product)", category: "Templates & Kits" },

  // Personal Brand
  { id: 39, emoji: "🌟", title: "Personal Brand Website", description: "Stunning portfolio site with blog, case studies, and contact system.", deliverables: ["Custom design", "CMS integration", "SEO optimization", "Analytics", "Domain setup"], targetAudience: "Founders, creators, freelancers", priceRange: "$800–$1,500", category: "Personal Brand" },
  { id: 40, emoji: "🎬", title: "Content Creator Launch Package", description: "Everything needed to launch a creator brand: site, socials, templates.", deliverables: ["Landing page", "Social templates", "Email sequence", "Media kit", "Link-in-bio"], targetAudience: "Aspiring creators", priceRange: "$700–$1,200", category: "Personal Brand" },
  { id: 41, emoji: "📧", title: "Newsletter System Setup", description: "Full newsletter infrastructure with automation and monetization.", deliverables: ["Platform setup", "Template design", "Automation flows", "Growth strategy", "Monetization plan"], targetAudience: "Writers, thought leaders", priceRange: "$700–$1,000", category: "Personal Brand" },

  // Data & Analytics
  { id: 42, emoji: "📉", title: "Business Intelligence Dashboard", description: "Custom BI dashboard connecting all your data sources in one view.", deliverables: ["Data connectors", "Custom visualizations", "KPI tracking", "Automated reports", "Access controls"], targetAudience: "SMBs, executives", priceRange: "$1,200–$2,000", category: "Data & Analytics" },
  { id: 43, emoji: "🔮", title: "Predictive Analytics Model", description: "ML model for churn prediction, demand forecasting, or trend analysis.", deliverables: ["Trained model", "API endpoint", "Dashboard", "Retraining pipeline", "Documentation"], targetAudience: "Data-driven companies", priceRange: "$1,500–$2,500", category: "Data & Analytics" },
  { id: 44, emoji: "🕷️", title: "Web Scraping & Data Pipeline", description: "Automated data collection from any website with cleaning and storage.", deliverables: ["Scraping scripts", "Data cleaning", "Storage setup", "Scheduling", "Monitoring"], targetAudience: "Researchers, marketers, analysts", priceRange: "$800–$1,500", category: "Data & Analytics" },

  // Integrations
  { id: 45, emoji: "🔗", title: "API Integration Service", description: "Connect any two (or more) platforms with custom API integrations.", deliverables: ["API mapping", "Integration code", "Error handling", "Monitoring", "Documentation"], targetAudience: "Any business with multiple tools", priceRange: "$700–$1,400", category: "Integrations" },
  { id: 46, emoji: "💬", title: "Slack/Discord Bot Development", description: "Custom bot for team productivity, notifications, or community management.", deliverables: ["Bot development", "Command system", "Integrations", "Hosting", "Admin panel"], targetAudience: "Teams, communities, DAOs", priceRange: "$800–$1,400", category: "Integrations" },
  { id: 47, emoji: "🏗️", title: "Headless CMS Integration", description: "Set up Strapi, Sanity, or Contentful with your frontend.", deliverables: ["CMS configuration", "Content modeling", "API integration", "Migration", "Training"], targetAudience: "Marketing teams, agencies", priceRange: "$700–$1,200", category: "Integrations" },
  { id: 48, emoji: "💸", title: "Stripe Payment Integration", description: "Full payment system with subscriptions, invoices, and webhooks.", deliverables: ["Stripe setup", "Checkout flow", "Subscription management", "Webhook handlers", "Admin dashboard"], targetAudience: "SaaS, e-commerce", priceRange: "$800–$1,500", category: "Integrations" },
  { id: 49, emoji: "🤖", title: "WhatsApp Business AI Bot", description: "AI-powered WhatsApp bot for customer service and lead generation.", deliverables: ["Bot development", "AI training", "Quick replies", "CRM integration", "Analytics"], targetAudience: "Retail, service businesses", priceRange: "$1,000–$1,800", category: "Integrations" },
  { id: 50, emoji: "🛡️", title: "Auth & SSO Implementation", description: "Secure authentication with social login, MFA, and single sign-on.", deliverables: ["Auth system", "Social providers", "MFA setup", "SSO integration", "Security audit"], targetAudience: "SaaS, enterprise apps", priceRange: "$900–$1,600", category: "Integrations" },
];
