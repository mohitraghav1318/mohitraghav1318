// ──────────────────────────────────────────────
// site.js — All site copy and content lives here.
// Components read from this file; edit content in one place.
// Anything marked TODO is unknown and must be filled in by the owner.
// ──────────────────────────────────────────────

export const site = {
  name: 'Mohit Raghav',
  alias: 'Mr. Zero',
  email: 'mohitraghav1318@gmail.com',
  github: 'https://github.com/mohitraghav1318',
  githubHandle: '@mohitraghav1318',
  x: 'https://x.com/mohitraghav1318',
  xHandle: '@mohitraghav1318',
  linkedin: null, // TODO: add the LinkedIn URL when you want it shown
  location: 'Meerut, India',
  year: 2026,
};

export const nav = [
  { label: 'Home', to: '/', hint: 'Where it starts' },
  { label: 'Projects', to: '/projects', hint: "Things I've built" },
  { label: 'Skills', to: '/skills', hint: 'The toolbox' },
  { label: 'Experience', to: '/experience', hint: 'Roles and teams' },
  { label: 'Contact', to: '/contact', hint: 'Start a project', pill: true },
];

// Short UI strings (cursor labels, aria labels) so no copy lives in components.
export const ui = {
  skip: 'Skip to content',
  backToTop: 'Back to top',
  cursor: { go: 'Go', hi: 'Hi', open: 'Open', write: 'Write', up: 'Up' },
  navLabel: 'Main',
  menu: { open: 'Menu', close: 'Close', label: 'Site menu', status: 'Open to projects and internships' },
  project: { open: 'Open', live: 'Live site', code: 'GitHub', openLabel: 'Open project:' },
};

// Photos in public/images/Me (originals). `npm run images` writes resized WebP
// copies to public/images/optimized/<name>-<width>.webp, which <Photo> uses.
export const images = {
  portrait: {
    src: 'public/images/Me/64584092-9a18-45db-878c-edee92f1c902-copied-media~2.jpg.jpg',
    name: 'portrait',
    widths: [480, 704],
    width: 704,
    height: 938,
    position: '50% 34%',
    alt: 'Portrait of Mohit Raghav in a white football shirt, looking to the side',
  },
  laptop: {
    src: 'public/images/Me/DSC_0736.JPG',
    name: 'laptop',
    widths: [640, 1000, 1407],
    width: 1407,
    height: 938,
    position: '56% 40%',
    alt: 'Mohit working on a laptop at an event',
    caption: 'At Trikon 3.0',
    cursor: 'Live',
  },
  posterTechnical: {
    src: 'public/images/Me/file_0000000021e482469a0b3314d0e54a6e.png',
    name: 'poster-technical',
    widths: [480, 704],
    width: 704,
    height: 938,
    position: '50% 50%',
    alt: 'Technical Head poster of Mohit Raghav',
    caption: 'Technical Head · Eureka',
    cursor: 'Poster',
  },
  posterCctv: {
    src: 'public/images/Me/IMG-20261022-WA0005.jpg',
    name: 'poster-cctv',
    widths: [480, 704],
    width: 704,
    height: 938,
    position: '50% 50%',
    alt: 'CCTV style poster of Mohit Raghav, designed by Intellia',
    caption: 'Technical Head · Intellia',
    cursor: 'Poster',
  },
  train: {
    src: 'public/me.jpeg',
    name: 'train',
    widths: [540, 1080],
    width: 1080,
    height: 1440,
    position: '40% 30%',
    alt: 'Mohit on a train, wearing headphones and looking out of the window',
    cursor: 'Friday, 8:20',
  },
};

export const home = {
  kicker: 'Full-stack developer · AI/ML · Meerut, India',
  nameLines: ['Mohit', 'Raghav'],
  lead: {
    before: 'I build fast, production-ready web platforms — ',
    strong: 'databases and auth at the back, motion and detail up front.',
    after: ' Also known online as Mr. Zero.',
  },
  ctas: [
    { label: 'See my work', to: '/projects', cursor: 'Go', solid: true },
    { label: 'Say hello', to: '/contact', cursor: 'Hi' },
  ],
  marquee: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL', 'MongoDB', 'Supabase', 'GSAP', 'LangChain'],
  badge: 'MR · MR. ZERO · BUILDS · THINGS ·',
  about: {
    index: '(01)',
    title: 'About',
    text: "I'm a B.Tech CSE (AI/ML) student at MIET Meerut who builds full-stack products. Backend and databases are where I'm strongest, but I care just as much about how a page feels when you move through it. MERN at the core, Next.js and Python AI tooling around it.",
    imageCursor: 'Debugging',
    facts: [
      { label: 'Studying', text: 'B.Tech CSE (AI/ML) at MIET Meerut, 2024–2028.' },
      { label: 'Working', text: 'Software development intern at Bexra, and Technical Head at Intellia Society.' },
      { label: 'Strongest at', text: 'Backend, databases and authentication — then making the frontend feel alive.' },
    ],
  },
  work: { index: '(02)', title: 'Selected', accent: 'work', all: 'All projects', count: 4 },
  cta: {
    lines: ["Let's build", 'something'],
    accent: 'that moves.',
    button: ['Say', 'hello'],
    links: [
      { label: 'github.com/mohitraghav1318', href: 'github', cursor: 'Open' },
      { label: 'Email', href: 'email', cursor: 'Write' },
      { label: 'Experience', to: '/experience', cursor: 'Open' },
    ],
  },
  // legacy (old dark design, removed with the old Home)
  eyebrow: 'Mohit Raghav · aka Mr. Zero',
  titleLead: 'I build things for the web,',
  titleGrad: 'fast, functional, production-ready.',
  sub: 'Full stack developer and AI & ML undergrad from Meerut. MERN, Next.js and backend-heavy products, shipped end to end.',
  strip: 'JavaScript · TypeScript · React · Next.js · Node.js · PostgreSQL · MongoDB',
  card: { role: 'Full Stack Dev', stack: 'MERN + Next', focus: 'AI / ML' },
  explore: [
    { label: 'Experience', to: '/experience' },
    { label: 'Skills', to: '/skills' },
    { label: 'Contact', to: '/contact' },
  ],
};

// Project fields. The page URL (/projects/<slug>) is derived from `title`.
//   required: title, tag, blurb, description, chips
//   links:    github, live (null when there is none)
//   media:    img (cover screenshot) and/or screenshots: [{ src, alt?, caption? }] (first = cover)
//   optional detail-page sections (a section is only rendered when its data exists):
//     overview: 'One paragraph. Falls back to `description`.'
//     built:    [{ label: 'Frontend', title: '...', text: '...' }]
//     solved:   [{ title: '...', tag: 'Security', text: '...' }]
// After adding screenshots run `npm run images` to generate the WebP variants.
// art: "rays" | "wave" | "receipt" | "aperture" (legacy fallback when img is null)
export const projects = [
  {
    title: 'HikariCV',
    tag: 'Full-stack · AI',
    blurb: 'AI-powered resume analysis and interview coaching platform.',
    description:
      'AI-powered resume analysis and interview coaching platform. React and Vite frontend with GSAP scroll animations, a Node and Express backend hardened with input validation and access checks, containerised with Docker.',
    chips: ['React', 'Vite', 'GSAP', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/mohitraghav1318/hikaricv',
    live: 'https://hikari-cv.vercel.app/login',
    overview:
      'HikariCV is an AI-powered platform that analyses resumes and coaches you through interviews. I built it full-stack: the landing site, the API, the database and the Docker setup that runs all three.',
    built: [
      { label: 'Frontend', title: 'Animated landing site', text: 'Hero, features, how it works, testimonials, FAQ, CTA, footer and a 404 page, each animated with GSAP and ScrollTrigger. React and Vite, styled with SCSS modules on a shared token file.' },
      { label: 'Backend', title: 'Node and Express API', text: 'Controller-based API with security hardening, input sanitisation and error handling on every route.' },
      { label: 'Data', title: 'MongoDB models', text: 'Mongoose schemas, with the AI response shape aligned to the models so nothing is stored in the wrong form.' },
      // { label: 'Shipping', title: 'Dockerised stack', text: 'Frontend, backend and MongoDB run together in Docker. The backend image is Puppeteer-aware, built on node:20-slim with system Chromium.' },
    ],
    solved: [
      { title: 'IDOR vulnerabilities', tag: 'Security', text: 'Reviewed the backend and closed insecure direct object references so users can only reach their own records.' },
      { title: 'Validation and errors', tag: 'Reliability', text: 'Added missing try/catch blocks, file validation and input sanitisation across controllers.' },
      { title: 'Schema mismatches', tag: 'Data', text: 'Aligned the AI response schema with the Mongoose models.' },
      { title: 'The AuthLayout blink', tag: 'Frontend', text: 'Fixed a persistent flicker using React Router’s Outlet pattern and GSAP’s useGSAP hook, working around React 18 Strict Mode.' },
    ],
    img: '/images/projects/hikaricv/hero.png',
    screenshots: [
      { src: '/images/projects/hikaricv/hero.png', alt: 'HikariCV landing page hero' },
      { src: '/images/projects/hikaricv/dashboard.png', alt: 'HikariCV dashboard' },
    ],
    art: 'rays',
    featured: true,
  },
  {
    title: 'NiriSeek',
    tag: 'Linux · Tooling',
    blurb: 'Keyboard-first window switcher for the Niri Wayland compositor.',
    description:
      'A native, keyboard-first window switcher built for the Niri Wayland compositor. Real-time window search, MRU-based ranking, cross-workspace focusing, automatic app metadata resolution and a custom GTK4 interface, with direct Niri IPC integration.',
    chips: ['JavaScript', 'GJS', 'GTK4', 'Niri IPC', 'Wayland'],
    github: 'https://github.com/mohitraghav1318/niriseek',
    live: null,
    img: '/images/projects/niriseek.png',
    art: 'wave',
    featured: true,
  },
  {
    title: 'Broke Together',
    tag: 'Full-stack · Finance',
    blurb: 'Expense tracking app to log, categorise and visualise spending.',
    description:
      'A full-stack expense tracking application that lets users log, categorise and visualise their expenses. React frontend and a Node.js backend, with an interface built for managing personal finances.',
    chips: ['React', 'Node.js', 'Firebase'],
    github: 'https://github.com/mohitraghav1318/Broke-Together',
    live: 'https://broketogether.vercel.app/',
    img: '/images/projects/broketogether.png',
    art: 'receipt',
    featured: true,
  },
  {
    title: 'TomoShelf',
    tag: 'Full-stack · Web',
    blurb: 'A digital shelf for tracking and organising collections.',
    description:
      'A digital space for organising and managing collections, letting users track, categorise and revisit items efficiently.',
    chips: ['React', 'Node.js', 'Database', 'API integration'],
    github: 'https://github.com/mohitraghav1318/tomoshelf.git',
    live: 'https://tomoshelf.vercel.app/',
    img: '/images/projects/tomoshelf.png',
    art: 'aperture',
    featured: true,
  },
  {
    title: 'SecurePiece',
    tag: 'Backend · Auth',
    blurb: 'Authentication system with JWT, bcrypt, OTP and email verification.',
    description:
      'A secure authentication system built with JWT and bcrypt to protect user data and keep web applications safe, with OTP authentication and email verification.',
    chips: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/mohitraghav1318/authentication',
    live: 'https://securepiece.vercel.app',
    img: '/images/projects/securepiece.png',
    art: 'rays',
    featured: true,
  },
  {
    title: 'Velora',
    tag: 'Full-stack · Hotel',
    blurb: 'Hotel management software with CRUD and JWT authentication.',
    description:
      'Hotel-related software featuring CRUD operations, JWT authentication and a full-stack architecture for managing hotel data, built with EJS templating, a Node.js backend and MongoDB.',
    chips: ['EJS', 'Node.js', 'MongoDB'],
    github: 'https://github.com/mohitraghav1318/velora.git',
    live: 'https://velora-pxkb.onrender.com',
    img: '/images/projects/velora.png',
    art: 'wave',
  },
  {
    title: 'Trix AI Chatbot',
    tag: 'AI · Team work',
    blurb: 'AI chatbot that answered participant queries at TRIKON.',
    description:
      'An AI-powered chatbot built for the TRIKON event to help participants with queries, event details and hackathon guidance in real time.',
    chips: ['Python', 'LangChain', 'Gemini API', 'Groq API', 'Flask'],
    github: null,
    live: 'https://intelliamiet.in/trikon/trikon2026',
    img: '/images/projects/Trix.gif',
    art: 'aperture',
  },
  {
    title: 'Trikon Hackathon Platform',
    tag: 'Web · Team work',
    blurb: 'Event site for the TRIKON hackathon: info, registrations, engagement.',
    description:
      'A dedicated website for the TRIKON hackathon to manage event information, registrations and participant engagement.',
    chips: ['React', 'Node.js', 'Firebase'],
    github: null,
    live: 'https://intelliamiet.in/trikon/trikon2026',
    img: '/images/projects/trikon.png',
    art: 'receipt',
  },
  {
    title: 'Intellia',
    tag: 'Web · Teamwork',
    blurb: 'Official website of the Intellia tech community.',
    description:
      'A collaborative web development project for the Intellia tech community, built to establish its online presence and showcase community initiatives, events and member activities.',
    chips: ['React', 'Node.js', 'Firebase'],
    github: null,
    live: 'https://intelliamiet.in/',
    overview:
      'Intellia is the official website of a technology community. Developed as a team project, it brings the community’s online presence into one place, helping visitors explore its initiatives, events and activities.',
    built: [
      {
        label: 'Frontend',
        title: 'Community website',
        text: 'Built the user-facing website with React to present the Intellia community, its initiatives and activities through an accessible web experience.'
      },
      {
        label: 'Backend',
        title: 'Application services',
        text: 'Used Node.js to support the application’s backend functionality and connect the frontend with its supporting services.'
      },
      {
        label: 'Data',
        title: 'Firebase integration',
        text: 'Integrated Firebase into the project’s technology stack to support application data and related backend services.'
      },
      {
        label: 'Collaboration',
        title: 'Team-based development',
        text: 'Contributed to a collaborative project focused on building and maintaining the official online presence of the Intellia tech community.'
      }
    ],
    img: '/images/projects/intellia.png',
    art: 'rays',
  },
  {
    title: 'Eureka Society',
    tag: 'Full-stack · Platform',
    blurb: 'A full-stack platform powering community operations, recruitment and bulk communication.',
    description:
      'A feature-rich community management platform built with Next.js, JavaScript and Firebase. Designed to streamline organizational workflows through a hiring portal, role-based access control, approval workflows and a bulk mailing system with recipient-specific attachments, campaign tracking and audit logs.',
    chips: [
      'Next.js',
      'JavaScript',
      'Firebase',
      'Firestore',
      'Firebase Auth',
      'Firebase Storage',
      'Vercel'
    ],
    github: null,
    live: 'https://eurekasociety.vercel.app/',
    overview:
      'Eureka is a full-stack platform designed to bring community operations into one place. Beyond its public-facing website, it includes recruitment workflows, organization and membership management, and a bulk mailing system built around controlled access, approvals and accountability. The platform combines user-facing experiences with administrative tools to simplify how a technical community operates.',
    built: [
      {
        label: 'Recruitment',
        title: 'Hiring portal',
        text: 'Built recruitment-focused functionality to support hiring workflows and provide a centralized digital experience for applicants and administrators.'
      },
      {
        label: 'Communication',
        title: 'Bulk mailing system',
        text: 'Developed a bulk email workflow supporting CSV-based recipient lists, shared and recipient-specific PDF attachments, controlled sending, campaign progress and delivery logs.'
      },
      {
        label: 'Access control',
        title: 'Role-based organization management',
        text: 'Implemented a multi-level authorization model with platform ownership, organization-scoped mail administrators and member memberships, alongside account states and approval workflows.'
      },
      {
        label: 'Security',
        title: 'Authentication and private storage',
        text: 'Integrated Firebase Authentication with server-side token verification and HTTP-only mail-session cookies. Designed protected attachment storage and authorization-aware access to sensitive operations.'
      },
      {
        label: 'Accountability',
        title: 'Audit trails and operational controls',
        text: 'Designed administrative logging, organization-level and member-level sending quotas, invitation workflows and approval controls to improve traceability and operational oversight.'
      },
      {
        label: 'Infrastructure',
        title: 'Firebase and Vercel integration',
        text: 'Built on Next.js and Firebase, with Firestore-backed application data, Firebase Storage for private files and Vercel for deployment.'
      }
    ],
    img: '/images/projects/eureka/hero.png',
    art: 'rays',
  },
  {
    title: 'Digital Lifterz Website',
    tag: 'Web · Freelance',
    blurb: 'Freelance client website with a responsive, fast build.',
    description:
      'A freelance client website developed to establish a professional digital presence with responsive design and optimised performance.',
    chips: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/mohitraghav1318/digital-lifterz.git',
    live: null,
    img: null,
    art: 'wave',
  },
  {
    title: 'Developer Portfolio',
    tag: 'Web · Personal',
    blurb: 'This site: a minimal, dark, multi-page portfolio.',
    description:
      'A developer portfolio built to showcase projects, technical skills and experience with a clean UI and a scalable front-end architecture.',
    chips: ['React', 'Vite', 'Gsap'],
    github: 'https://github.com/mohitraghav1318/mohitraghav1318.git',
    live: 'https://mohitraghav1318.vercel.app/',
    img: '/images/projects/portfolio.png',
    art: 'aperture',
  },
];

export const projectPage = {
  back: 'All projects',
  meta: { type: 'Type', stack: 'Built with', links: 'Links', live: 'Live site', code: 'GitHub' },
  overview: 'Overview',
  built: { title: 'What I', accent: 'built' },
  stack: { title: 'Stack' },
  solved: { title: 'Problems I', accent: 'solved' },
  screens: { title: 'Screens' },
  next: 'Next project',
  footer: {
    lines: ['Want something', 'like'],
    accent: 'this?',
    button: ['Say', 'hello'],
    links: [
      { label: 'All projects', to: '/projects', cursor: 'Open' },
      { label: 'See the toolbox', to: '/skills', cursor: 'Open' },
      { label: 'github.com/mohitraghav1318', href: 'github', cursor: 'Open' },
    ],
  },
};

export const projectsPage = {
  title: 'Projects',
  kicker: "Things I've built and am building",
  lede: {
    before: 'Full-stack products, tooling and client sites. ',
    strong: 'Scroll-driven frontends on top of real backends.',
  },
  footer: {
    lines: ['Have an idea', 'for'],
    accent: 'the next one?',
    button: ['Say', 'hello'],
    links: [
      { label: 'github.com/mohitraghav1318', href: 'github', cursor: 'Open' },
      { label: 'See the toolbox', to: '/skills', cursor: 'Open' },
      { label: "Where I've worked", to: '/experience', cursor: 'Open' },
    ],
  },
  // legacy (old dark design)
  label: 'Projects',
  titleLead: "Things I've",
  titleGrad: 'built.',
  cta: { title: 'Want something like this built?', label: 'Start a conversation →' },
};

export const experience = [
  {
    when: 'Aug 2026 - Present',
    kind: 'Internship',
    role: 'Software Development Intern',
    org: 'Bexra',
    text: 'Built backend and frontend features for an AI business-analysis product: a credits and ledger system, editable reports with version history and restore, and AI regeneration of single report sections that charges only on success and is idempotent. Backed by 949 automated backend tests. Django on the backend, Next.js, React and TypeScript on the frontend, Supabase for the database.',
    stack: 'Django · Next.js · Supabase',
    chips: ['Databases', 'Authentication', 'Credits & ledger', 'Versioned editing', 'AI integration', 'Testing', 'Django', 'Next.js', 'Supabase'],
    // TODO: add exact dates for the Bexra internship
  },

{
  when: 'Sep 2026 – Present',
  kind: 'College society',
  role: 'Technical Head',
  org: 'Eureka Society, MIET',
  stack: 'Full-stack Development · Platform Engineering',
  text: 'Technical Head and full-stack developer for Eureka Society, building and maintaining its digital infrastructure. Developed a feature-rich community platform with a hiring portal, bulk mailing system, role-based access control, organization management, approval workflows and administrative audit logs using Next.js and Firebase.',
  chips: [
    'Technical Leadership',
    'Next.js',
    'JavaScript',
    'Firebase',
    'Full-stack Development',
    'System Design'
  ],
},

  {
    when: 'Aug 2025 – Present',
    kind: 'College society',
    role: 'Technical Head',
    org: 'Intellia Society, MIET',
    stack: 'AI & ML society',
    text: 'Technical Head and web developer for Intellia, the AI & ML departmental society at the college. Sole technical contributor for the TRIKON 3.0 hackathon platform: registration with per-participant QR codes, a real-time admin panel, bulk email delivery and the Trix AI chatbot.',
    chips: ['Web development', 'AI & ML community', 'Next.js', 'LangChain'],
  },
  {
    when: '2024 – 2028',
    kind: 'Education',
    role: 'B.Tech, Computer Science (AI/ML)',
    org: 'MIET Meerut',
    text: 'Specialising in AI & ML, building DSA foundations alongside coursework and hands-on projects.',
    chips: ['DSA', 'Operating Systems', 'Java', 'AI / ML'],
  },
  {
    when: '2024',
    hidden: true, // not shown on the new Experience page; remove this line to show it
    kind: 'Self-directed',
    role: 'Building projects',
    org: 'MERN, Next.js, Python',
    text: 'Shipping full-stack and backend-heavy web apps since early 2024, from AI products to Linux tooling.',
    chips: [],
    button: { label: 'See the projects →', to: '/projects' },
  },
];

export const experiencePage = {
  title: 'Experience',
  kicker: 'Roles, teams and the learning around them',
  lede: { before: 'An internship, a society I help run, and a degree in progress. ', strong: 'All of it hands-on.' },
  work: { index: '(01)', title: 'Where I', accent: 'work' },
  gallery: { index: '(02)', title: 'Behind the', accent: 'screen', items: ['posterTechnical', 'posterCctv', 'laptop'] },
  footer: {
    lines: ['Want me', 'on'],
    accent: 'your team?',
    button: ['Say', 'hello'],
    links: [
      { label: 'See the projects', to: '/projects', cursor: 'Open' },
      { label: 'See the toolbox', to: '/skills', cursor: 'Open' },
      { label: 'github.com/mohitraghav1318', href: 'github', cursor: 'Open' },
    ],
  },
  // legacy (old dark design)
  label: 'Experience',
  titleLead: "Where I've",
  titleGrad: 'worked.',
  cta: { title: 'Next, see what I work with.', label: 'Skills →', to: '/skills' },
};

export const skills = [
  {
    title: 'Backend & databases',
    note: 'APIs, auth and the data layer.',
    tag: 'Strongest',
    highlight: true,
    items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Supabase', 'Mongoose', 'Authentication', 'REST APIs'],
  },
  { title: 'Frontend',
    note: 'Interfaces with motion and detail.', items: ['React', 'Next.js', 'Vite', 'GSAP', 'SCSS', 'HTML / CSS'] },
  { title: 'Languages',
    note: 'What everything else is written in.', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
  { title: 'AI & ML tooling',
    note: 'Putting models inside products.', items: ['LangChain', 'FAISS', 'Groq', 'Gemini', 'faster-whisper'] },
  { title: 'Tools & workflow',
    note: 'How the work ships.', items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code'] },
  { title: 'Learning now',
    note: 'What I\'m picking up next.', tag: 'In progress', items: ['DSA in Java', 'AWS basics', 'Cloud fundamentals'] },
];

export const skillsPage = {
  title: 'Skills',
  kicker: 'The toolbox',
  lede: { before: 'MERN at the core, Next.js and Python AI tooling around it. ', strong: 'Hover a skill, it moves.' },
  marquee: ['JavaScript', 'TypeScript', 'Python', 'React', 'Next.js', 'Node.js', 'Django', 'PostgreSQL', 'MongoDB', 'Supabase'],
  strongest: {
    index: '(01)',
    title: 'Strongest',
    accent: 'at',
    text: 'Backend and databases are my strongest side: authentication, schemas and APIs. Then I wrap them in frontends that actually move.',
  },
  all: { index: '(02)', title: 'Everything', accent: 'I use' },
  footer: {
    lines: ['Need these', 'on'],
    accent: 'your project?',
    button: ['Say', 'hello'],
    links: [
      { label: "See what I've built", to: '/projects', cursor: 'Open' },
      { label: "Where I've worked", to: '/experience', cursor: 'Open' },
      { label: 'github.com/mohitraghav1318', href: 'github', cursor: 'Open' },
    ],
  },
  // legacy (old dark design)
  label: 'Skills',
  titleLead: 'What I',
  titleGrad: 'work with.',
  cta: { title: 'Need this stack on your project?', label: 'Get in touch →' },
};

export const contactPage = {
  head: {
    kicker: 'Open to projects and internships',
    lines: ['Say'],
    accent: 'hello',
    lede: {
      before: 'Got a website that needs motion, a backend that needs building, or just a question? ',
      strong: 'Write to me.',
    },
    ctas: [
      { label: 'Where to find me', href: '#reach', cursor: 'Go', solid: true },
      { label: 'See my work', to: '/projects', cursor: '' },
    ],
  },
  // Only real values: LinkedIn is added when site.linkedin is set, never as a placeholder.
  footer: {
    id: 'reach',
    tight: true, // sits right under the hero, so less space above it
    lines: ['Find me'],
    accent: 'here',
    button: ['Send', 'email'],
    buttonHref: `mailto:${site.email}`,
    links: [
      { label: `Email — ${site.email}`, href: `mailto:${site.email}`, cursor: 'Write' },
      { label: `GitHub — ${site.githubHandle}`, href: site.github, cursor: 'Open' },
      { label: `X — ${site.xHandle}`, href: site.x, cursor: 'Open' },
      ...(site.linkedin ? [{ label: 'LinkedIn', href: site.linkedin, cursor: 'Open' }] : []),
      { label: `Based in ${site.location}`, text: true },
    ],
  },
  // legacy (old dark design)
  label: 'Contact',
  titleLead: "Let's build",
  titleGrad: 'something.',
  links: [
    { label: 'GitHub', value: site.githubHandle, href: site.github },
    { label: 'X', value: site.xHandle, href: site.x },
    { label: 'Based in', value: site.location, href: null },
  ],
};

export const notFound = {
  title: 'Page not found',
  kicker: '404',
  lede: { before: 'That page does not exist, or it has moved. ', strong: 'Head back home.' },
  // legacy (old dark design)
  label: '404',
  titleLead: 'Page not',
  titleGrad: 'found.',
  button: 'Back home →',
};


