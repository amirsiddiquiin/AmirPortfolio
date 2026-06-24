export const profile = {
  name: "Amir Siddiqui",
  title: "Senior Frontend Engineer",
  headline:
    "I build polished, production-grade frontend systems for Web3, DeFi, and data-heavy products.",
  summary:
    "Senior Frontend Engineer with 4+ years of experience shipping high-performance Web3 and DeFi interfaces across multi-chain products. Strong in React, TypeScript, Tailwind CSS, shadcn/ui, and motion-led product design, with a track record of turning complex protocol logic into clean, conversion-friendly experiences.",
  availability: "Open to senior frontend roles, product-minded teams, and high-ownership UI work.",
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
    { label: "Years of experience", value: "4+" },
    { label: "Major product releases", value: "3+" },
    { label: "Winning hackathon project", value: "EthIndia 2024" },
    { label: "Recognitions earned", value: "4" },
  ],
};

export const highlights = [
  {
    title: "Frontend systems",
    description:
      "I design responsive, scalable interfaces with a strong focus on component architecture, state management, and real-world performance.",
  },
  {
    title: "Web3 product thinking",
    description:
      "I translate smart-contract workflows into clear user journeys with wallet integrations, transaction states, and reliable on-chain feedback.",
  },
  {
    title: "Design polish",
    description:
      "I care about the finish line: spacing, motion, hierarchy, micro-interactions, and a visual system that feels expensive without feeling loud.",
  },
];

export const experience = [
  {
    company: "Alloc8",
    location: "Remote, United States",
    role: "Senior Frontend Engineer",
    period: "03/2024 - Present",
    summary:
      "Built the frontend layer for an AI-powered DeFi liquidity automation platform.",
    bullets: [
      "Architected and shipped the end-to-end swap interface on top of the Uniswap V3 SDK, covering price quoting, slippage tolerance, gas estimation, and transaction confirmation flows.",
      "Designed and implemented ZapIn and ZapOut functionality to abstract multi-step smart contract interactions into a single-click experience.",
      "Built the auto-rebalancing dashboard with real-time tick data, fee tier analytics, and position health metrics.",
      "Developed a rewards and claim flow that aggregates accrued protocol fees into a single transaction with live balance updates and resilient retry handling.",
      "Used the OpenAI SDK and structured prompt engineering to power AI-assisted automation features for strategy generation.",
      "Served as the sole frontend engineer across 3 major product releases and reduced onboarding friction by 60% through redesigned flows.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Uniswap V3 SDK",
      "OpenAI SDK",
    ],
  },
  {
    company: "MagpieXYZ",
    location: "Remote, Tortola, British Virgin Islands",
    role: "Frontend Engineer",
    period: "03/2022 - 03/2024",
    summary:
      "Built frontend systems for a data-intensive cross-chain dashboard used by thousands of monthly active users.",
    bullets: [
      "Architected the frontend from the ground up using React.js, Next.js, and Redux Toolkit with a modular, scalable component structure.",
      "Engineered resilient data layers for REST and GraphQL APIs, including optimistic updates, granular error boundaries, and skeleton loading states.",
      "Collaborated on a complete landing page redesign that improved conversion by 15% within 60 days.",
      "Enforced WCAG accessibility standards and cross-browser compatibility across Chrome, Firefox, Safari, and Edge.",
    ],
    stack: ["React", "Next.js", "Redux Toolkit", "GraphQL", "WCAG", "Vercel"],
  },
  {
    company: "PolkaBridge",
    location: "Remote, Singapore",
    role: "Frontend Engineer",
    period: "06/2022 - 02/2023",
    summary:
      "Delivered responsive UI for a high-traffic DeFi platform with real-time on-chain dashboards.",
    bullets: [
      "Built pixel-perfect frontend experiences for staking, IDO, farming, and NFT marketplace flows.",
      "Reduced JavaScript bundle size by 40% through code splitting, dynamic imports, and tree shaking.",
      "Implemented frontend security practices including input sanitization, CSP usage, and safe handling of wallet data.",
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
      "Built wallet integration and transaction confirmation flows with real-time on-chain state synchronization.",
      "Used optimistic UI updates and resilient error handling for failed or reverted transactions.",
      "Balanced rapid iteration with type safety and a polished, demo-ready user experience.",
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
    title: "Languages & Frameworks",
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
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "State, APIs & Web3",
    items: [
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "React Query",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Uniswap V3 SDK",
      "Ethers.js",
      "Wagmi",
      "RainbowKit",
      "Wallet integrations",
    ],
  },
  {
    title: "Performance, Testing & Accessibility",
    items: [
      "Core Web Vitals",
      "SSR/SSG",
      "Code Splitting",
      "Lazy Loading",
      "PWA",
      "WCAG / a11y",
      "Jest",
      "React Testing Library",
      "Postman",
      "Tenderly",
    ],
  },
  {
    title: "Tooling & Infrastructure",
    items: [
      "Git",
      "GitHub",
      "Webpack",
      "Vite",
      "Vercel",
      "CI/CD",
      "AWS API Gateway",
      "AWS CloudWatch",
      "Jira",
      "Figma",
      "OpenAI SDK",
      "Prompt Engineering",
      "Google Analytics",
      "Mixpanel",
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
