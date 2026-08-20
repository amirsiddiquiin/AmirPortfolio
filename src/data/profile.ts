export const profile = {
  name: "Amir Siddiqui",
  title: "Senior Full Stack Engineer",
  headline:
    "I build production web apps across the full stack, with deep expertise in Web3, DeFi, and AI-assisted workflows.",
  summary:
    "Senior Full Stack Engineer with 5+ years building production web apps in React, Next.js, TypeScript, and Node.js/Express. I own features end-to-end - architecture, API integration, UI delivery, performance, and production observability - with deep expertise in Web3/DeFi integrations and emerging AI-assisted workflows.",
  availability: "Open to senior full stack roles, product-minded teams, and high-ownership engineering work.",
  contact: {
    email: "amirsiddiqui.in@gmail.com",
    phone: "+91 8791986707",
    github: "https://github.com/amirsiddiquiin",
    linkedin: "https://www.linkedin.com/in/amirsiddiquiin/",
    website: "https://amirsiddiqui.in",
    location: "Remote / India",
    resume: "/amir_resume.pdf",
  },
  stats: [
    { label: "Years of experience", value: "5+" },
    { label: "Major product releases", value: "3+" },
    { label: "Winning hackathon project", value: "EthIndia 2024" },
    { label: "Recognitions earned", value: "5" },
  ],
};

export const highlights = [
  {
    title: "End-to-end engineering",
    description:
      "I own production features across architecture, APIs, interfaces, performance, and observability using React, Next.js, TypeScript, and Node.js.",
  },
  {
    title: "Web3 product thinking",
    description:
      "I translate smart-contract workflows into clear user journeys with wallet integrations, transaction states, and reliable on-chain feedback.",
  },
  {
    title: "AI-assisted workflows",
    description:
      "I use the OpenAI SDK and structured prompt engineering to turn machine-parseable strategy outputs into reliable product automation.",
  },
];

export const experience = [
  {
    company: "Alloc8",
    location: "Remote, United States",
    role: "Senior Full Stack Engineer",
    period: "03/2024 - Present",
    summary:
      "Own end-to-end DeFi workflows across Next.js, external APIs, and smart contracts.",
    bullets: [
      "Own quoting, slippage, gas estimation, transaction execution, and confirmation across EVM networks.",
      "Designed ZapIn/ZapOut and automated liquidity workflows that coordinate multi-step contract interactions behind a single user action, with resilient error handling and live state sync.",
      "Built real-time position monitoring and auto-rebalancing using tick data, fee analytics, and health-signal alerting for out-of-range liquidity positions.",
      "Integrated the OpenAI SDK with structured prompting to generate machine-parseable strategy outputs powering agent-driven automation in production.",
      "Led 3 major product releases and standardized the UI platform on Tailwind CSS and Shadcn/UI, cutting onboarding friction by 60%.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Uniswap V3 SDK",
      "Node.js",
      "OpenAI SDK",
    ],
  },
  {
    company: "MagpieXYZ",
    location: "Remote, Tortola, British Virgin Islands",
    role: "Full Stack Engineer",
    period: "03/2022 - 03/2024",
    summary:
      "Built a data-intensive cross-chain web app serving 5,000+ monthly active users.",
    bullets: [
      "Built the product with React, Next.js, TypeScript, Redux Toolkit, REST, and GraphQL.",
      "Engineered client-to-service data flows across microservices with optimistic updates, granular error handling, and fault-tolerant API behavior.",
      "Partnered with product and design on a conversion-focused redesign, lifting conversion 15% in 60 days while strengthening Core Web Vitals and accessibility.",
    ],
    stack: ["React", "Next.js", "Redux Toolkit", "GraphQL", "WCAG", "Vercel"],
  },
  {
    company: "PolkaBridge",
    location: "Remote, Singapore",
    role: "Full Stack / Software Engineer",
    period: "06/2022 - 02/2023",
    summary:
      "Delivered a high-traffic DeFi app supporting 50,000+ concurrent users.",
    bullets: [
      "Built real-time on-chain dashboards, WebSocket feeds, and wallet integrations.",
      "Cut JavaScript bundle size by 40% via code splitting, dynamic imports, and tree shaking; hardened the app with input sanitization and CSP headers.",
    ],
    stack: ["React", "Redux", "Web3", "Ethers.js", "Webpack", "Security"],
  },
];

export const projects = [
  {
    title: "Flow3",
    tag: "EthIndia 2024 Winner",
    period: "Hackathon build",
    description:
      "A full-stack dApp built with React.js, Next.js, TypeScript, Ethers.js, and Solidity, and shipped to production-quality within the hackathon timeline.",
    bullets: [
      "Built and shipped a full-stack dApp integrating a Next.js frontend with on-chain smart contracts, wallet flows, and real-time blockchain state sync.",
      "Delivered a production-ready app within the hackathon timeline with reusable components, type safety, and resilient transaction handling.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Ethers.js", "Solidity"],
  },
  {
    title: "Alloc8 AI DeFi Suite",
    tag: "Live product",
    period: "03/2024 - Present",
    description:
      "A DeFi automation interface with swaps, ZapIn/ZapOut, rebalancing, rewards, and protocol-fee claims.",
    bullets: [
      "Integrated the Uniswap V3 SDK for production-grade quoting and transaction flows.",
      "Turned dense protocol logic into a clean, first-class frontend experience.",
      "Shipped motion-friendly dashboards with live health and position data.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Uniswap V3"],
  },
  {
    title: "Magpie Cross-Chain Dashboard",
    tag: "Enterprise frontend",
    period: "03/2022 - 03/2024",
    description:
      "A modular dashboard for lending, staking, claiming, and cross-chain participation across a large DeFi surface area.",
    bullets: [
      "Built resilient data fetching with strong loading and error states.",
      "Helped redesign landing and product surfaces to improve conversion.",
      "Designed for scale across multiple protocol surfaces and network contexts.",
    ],
    stack: ["React", "Next.js", "Redux Toolkit", "GraphQL"],
  },
];

export const skills = [
  {
    title: "Languages & Frontend",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Shadcn/UI",
      "Redux Toolkit",
      "Zustand",
      "React Query",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Authentication Flows",
    ],
  },
  {
    title: "Web3 & AI",
    items: [
      "Uniswap V3 SDK",
      "Ethers.js",
      "Wagmi",
      "RainbowKit",
      "OpenAI SDK",
      "Prompt Engineering",
    ],
  },
  {
    title: "Performance, Testing & Accessibility",
    items: [
      "Core Web Vitals",
      "Code Splitting",
      "WCAG / a11y",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Data, Cloud & Tooling",
    items: [
      "Git",
      "GitHub",
      "MongoDB",
      "Vercel",
      "CI/CD",
      "AWS API Gateway",
      "AWS CloudWatch",
      "Postman",
    ],
  },
];

export const education = [
  {
    institution: "Aligarh Muslim University",
    location: "Aligarh, India",
    degree: "Master of Computer Applications (MCA)",
    period: "2019 - 2022",
  },
  {
    institution: "Aligarh Muslim University",
    location: "Aligarh, India",
    degree: "B.Sc. in Statistics",
    period: "2016 - 2019",
  },
];

export const achievements = [
  {
    title: "EthIndia Hackathon Winner",
    year: "2024",
    detail: "Flow3 won India's largest Web3 hackathon.",
  },
  {
    title: "1Inch Award Winner",
    year: "2023",
    detail: "Received 1st Prize at EthIndia among 2,000+ participants.",
  },
  {
    title: "Performance Award",
    year: "Alloc8",
    detail: "Recognized for shipping the V1 automation engine ahead of schedule.",
  },
  {
    title: "4-Star Coder",
    year: "CodeChef",
    detail: "Achieved 4-star rating through competitive programming performance.",
  },
  {
    title: "Knight on LeetCode",
    year: "LeetCode",
    detail: "Earned the Knight badge for a high contest rating.",
  },
];
