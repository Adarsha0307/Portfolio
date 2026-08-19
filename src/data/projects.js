// Project content — every claim below is verified against public evidence:
// live deployments, public repositories, or public LinkedIn posts.
//
// TODO(owner): drop real screenshots into public/images/{slug}-*.webp (1600x1000,
// WebP) — the Screenshot component picks them up automatically and falls back
// to a designed placeholder while absent.

export const projects = [
  {
    slug: 'nexnethra',
    name: 'Nexnethra',
    category: 'AI-powered cybersecurity platform',
    status: 'Live',
    featured: true,
    tagline:
      'Security analysis, threat awareness, and AI-assisted guidance in one full-stack platform.',
    problem:
      'Individuals and small teams face security threats — malicious URLs, phishing emails, weak passwords — but the tools to assess them are fragmented, technical, and rarely explain why something is risky.',
    why:
      'Most people only learn about a threat after it becomes an incident. Nexnethra gives users a single place to analyze inputs before they escalate.',
    approach:
      'Designed a full-stack platform around three analyzers (URL, email, password), a security score, incident reporting, a threat intelligence feed, and an AI assistant that explains guidance in plain language — all behind JWT authentication.',
    architecture: {
      summary:
        'React + Vite frontend consuming a Node.js + Express REST API, with PostgreSQL persistence. Authentication via JWT with bcrypt password hashing. Security middleware applied across every route.',
      diagram: [
        { title: 'React / Vite', sub: 'Frontend' },
        { title: 'Express API', sub: 'Auth · validation · rate limits' },
        { title: 'Analyzers', sub: 'URL · email · password' },
        { title: 'AI assistant', sub: 'OpenRouter · NVIDIA' },
        { title: 'PostgreSQL', sub: 'Persistence' },
      ],
    },
    stack: {
      frontend: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
      security: ['JWT', 'bcrypt', 'Secure headers', 'Rate limiting', 'Input validation'],
      ai: ['OpenRouter API', 'NVIDIA API'],
    },
    contribution:
      'Designed and developed the application architecture, frontend, backend/API functionality, security-related features, AI integration, and deployment — end to end.',
    decisions: [
      {
        title: 'AI-assisted analysis over rule-only heuristics',
        body: 'The platform explains risks in context using OpenRouter and NVIDIA APIs, so users understand not just that something is risky, but why.',
      },
      {
        title: 'Security by default',
        body: 'JWT authentication with bcrypt hashing, rate limiting, input validation, and secure headers were designed into the API from the start rather than bolted on.',
      },
      {
        title: 'A grounded AI assistant',
        body: 'The assistant supports the structured analyzers with plain-language guidance instead of replacing them with free-form responses.',
      },
    ],
    challenge:
      'Keeping the AI assistant grounded — its guidance must support, not replace, the structured analyzers. And the security layer had to protect every route from the first commit, not the last.',
    solution:
      'A live platform where URL, email, and password analysis, security scoring, incident reporting, and AI guidance work together from one dashboard.',
    securityNotes:
      'JWT-based authentication with bcrypt password hashing, secure headers, rate limiting, and input validation across the API.',
    aiNotes:
      'Real-time AI-assisted security guidance via OpenRouter and NVIDIA API integrations.',
    result: 'No verified metrics currently.',
    evidence: 'Live demo (public) · Repository: private — source is not exposed.',
    links: {
      demo: { href: 'https://nexnethra.vercel.app/', label: 'Live Demo', primary: true },
      source: { private: true, label: 'Source — Private Repository' },
    },
    seo: {
      title: 'Nexnethra — AI-Powered Cybersecurity Platform | Adarsha B U',
      description:
        'Case study: Nexnethra, a full-stack AI-powered cybersecurity platform with URL, email, and password analysis, security scoring, incident reporting, and AI-assisted guidance. Built with React, Node.js, Express, and PostgreSQL.',
    },
  },
  {
    slug: 'docuflow-ai',
    name: 'DocuFlow-AI',
    category: 'AI workflow / backend engineering',
    status: 'Public repo · Demo coming soon',
    featured: true,
    tagline:
      'Production-oriented AI video pipeline backend built around multi-stage workflow orchestration.',
    problem:
      'Long AI video pipelines are hard to run reliably: many stages, human approval points, provider-specific LLM calls, and metered usage that needs to be tracked and billed.',
    why:
      'Teams that ship AI video products need a pipeline where every stage is observable, approvable, and repeatable — not a chain of scripts.',
    approach:
      'Built a multi-tenant FastAPI backend with Celery workers executing a 20-stage workflow engine that includes human-approval gates, provider-agnostic LLM integration, credit billing, and RAG for grounding.',
    architecture: {
      summary:
        'FastAPI API layer; Celery workers for long-running pipeline stages; a 20-stage workflow engine with human-approval gates; provider-agnostic LLM layer with credit billing; RAG for document grounding; MCP server; Docker + docker-compose; Render deployment config; automated test suite.',
      diagram: [
        { title: 'FastAPI', sub: 'Multi-tenant API' },
        { title: 'Celery', sub: 'Async workers' },
        { title: '20-stage engine', sub: 'Human-approval gates' },
        { title: 'LLM layer', sub: 'Provider-agnostic · billing' },
        { title: 'RAG + MCP', sub: 'Grounding · tool access' },
      ],
    },
    stack: {
      backend: ['Python', 'FastAPI', 'Celery', 'REST APIs'],
      workflow: ['20-stage engine', 'Human-approval gates', 'Credit billing', 'RAG', 'MCP server'],
      devops: ['Docker', 'docker-compose', 'Render', 'Automated tests'],
    },
    contribution:
      'Designed and implemented the backend pipeline end to end — workflow engine, API, workers, billing, and deployment configuration. The public repository documents the full breakdown.',
    decisions: [
      {
        title: 'Human-approval gates',
        body: 'An LLM-driven pipeline cannot ship content without a human checkpoint. Approval gates are stages in the engine, not add-ons.',
      },
      {
        title: 'Provider-agnostic LLM layer with credit billing',
        body: 'Models can be swapped without rewriting the pipeline, and usage is metered per tenant.',
      },
      {
        title: 'Celery for long-running work',
        body: 'Pipeline stages run asynchronously with retry semantics instead of blocking the API.',
      },
    ],
    challenge:
      'Orchestrating 20 stages without losing state or blocking on long runs, while keeping the system multi-tenant safe and deployable on free-tier infrastructure.',
    solution:
      'A modular pipeline backend where stages stay decoupled, approvals are first-class workflow steps, and the whole system deploys with Docker on free-tier Render.',
    securityNotes:
      'Multi-tenant isolation and metered credit usage designed into the API layer.',
    aiNotes:
      'Provider-agnostic LLM integration, RAG for document grounding, and an MCP server for tool access.',
    result: 'No verified metrics currently. (Verified architectural scope: 20-stage workflow engine.)',
    evidence: 'Public GitHub repository · Automated test suite included.',
    links: {
      github: { href: 'https://github.com/Adarsha0307/DocuFlow-AI', label: 'GitHub Repository', primary: true },
      demo: { comingSoon: true, label: 'Demo — Coming Soon' },
    },
    seo: {
      title: 'DocuFlow-AI — AI Video Pipeline Backend | Adarsha B U',
      description:
        'Case study: DocuFlow-AI, a production-oriented AI video pipeline backend — FastAPI, Celery workers, 20-stage workflow engine with human-approval gates, provider-agnostic LLM billing, RAG, and MCP server.',
    },
  },
  {
    slug: 'taskapex',
    name: 'TaskApex',
    category: 'Full-stack productivity application',
    status: 'Live',
    featured: false,
    tagline:
      'A task manager with real authentication, cross-device sessions, and a dark responsive dashboard.',
    problem:
      'Simple task apps rarely persist across devices, and most personal ones have no real authentication at all.',
    why:
      'A task manager that logs you out of context on one device or exposes session state in client JavaScript is not production software.',
    approach:
      'Built a Next.js 14 application with a tasks API, JWT sessions stored in httpOnly cookies, per-device session tracking, and a responsive dark UI.',
    architecture: {
      summary:
        'Next.js 14 (App Router) + TypeScript. API routes for authentication (register/login, session, logout) and task CRUD. JWT via the jose library in httpOnly cookies with unique device IDs per session; bcryptjs password hashing. Tailwind CSS with a shadcn-style component structure. Deployed on Vercel.',
      diagram: [
        { title: 'Next.js 14', sub: 'App Router · TypeScript' },
        { title: 'Auth API', sub: 'JWT · httpOnly cookie' },
        { title: 'Tasks API', sub: 'CRUD' },
        { title: 'Dashboard', sub: 'Dark UI · responsive' },
      ],
    },
    stack: {
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn-style UI'],
      backend: ['API routes', 'JWT (jose)', 'bcryptjs', 'httpOnly sessions'],
      platform: ['Vercel', 'Git'],
    },
    contribution:
      'Built the application end to end — authentication flow, session handling, tasks API, and responsive dashboard.',
    decisions: [
      {
        title: 'httpOnly cookie sessions',
        body: 'JWTs never reach client JavaScript, which keeps session state out of XSS reach.',
      },
      {
        title: 'Per-device session tracking',
        body: 'Each device gets a unique ID in its session, so cross-device behavior stays consistent.',
      },
      {
        title: 'Hashed credentials',
        body: 'Passwords are stored with bcrypt rather than plaintext.',
      },
    ],
    challenge:
      'Getting session semantics right across devices — a logout on one device has to behave predictably without breaking sessions on another.',
    solution:
      'A working task manager where login, tasks, and session state behave like a production application.',
    securityNotes: 'JWT in httpOnly, secure, sameSite cookies; bcrypt password hashing; input validation on API endpoints.',
    aiNotes: null,
    result: 'No verified metrics currently.',
    evidence: 'Live demo · Public GitHub repository.',
    links: {
      demo: { href: 'https://taskapex.vercel.app/', label: 'Live Demo', primary: false },
      github: { href: 'https://github.com/Adarsha0307/TaskApex', label: 'GitHub Repository', primary: false },
    },
    seo: {
      title: 'TaskApex — Full-Stack Task Manager | Adarsha B U',
      description:
        'Case study: TaskApex, a Next.js 14 task manager with JWT authentication in httpOnly cookies, per-device sessions, task CRUD API, and a responsive dark dashboard.',
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const supportingProjects = projects.filter((p) => !p.featured)

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null
}