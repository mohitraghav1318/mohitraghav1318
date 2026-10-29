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
  resume: '/resume/mohit_raghav_resume.pdf',
  year: 2026,
};

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact', pill: true },
];

// Short UI strings (cursor labels, aria labels) so no copy lives in components.
export const ui = {
  skip: 'Skip to content',
  backToTop: 'Back to top',
  cursor: { go: 'Go', hi: 'Hi', open: 'Open', write: 'Write', up: 'Up' },
  navLabel: 'Main',
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
  },
  posterTechnical: {
    src: 'public/images/Me/file_0000000021e482469a0b3314d0e54a6e.png',
    name: 'poster-technical',
    widths: [480, 704],
    width: 704,
    height: 938,
    position: '50% 50%',
    alt: 'Technical Head poster of Mohit Raghav',
    caption: 'Technical Head · Intellia',
  },
  posterCctv: {
    src: 'public/images/Me/IMG-20261022-WA0005.jpg',
    name: 'poster-cctv',
    widths: [480, 704],
    width: 704,
    height: 938,
    position: '50% 50%',
    alt: 'CCTV style poster of Mohit Raghav, designed by Intellia',
    caption: 'Design by Intellia',
  },
  train: {
    src: 'public/me.jpeg',
    name: 'train',
    widths: [540, 1080],
    width: 1080,
    height: 1440,
    position: '40% 30%',
    alt: 'Mohit on a train, wearing headphones and looking out of the window',
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

// art: "rays" | "wave" | "receipt" | "aperture" (fallback cover when img is null)
export const projects = [
  {
    slug: 'hikaricv',
    title: 'HikariCV',
    tag: 'Full-stack · AI',
    blurb: 'AI-powered resume analysis and interview coaching platform.',
    description:
      'AI-powered resume analysis and interview coaching platform. React and Vite frontend with GSAP scroll animations, a Node and Express backend hardened with input validation and access checks, containerised with Docker.',
    chips: ['React', 'Vite', 'GSAP', 'SCSS', 'Node.js', 'Express', 'MongoDB', 'Docker'],
    github: 'https://github.com/mohitraghav1318/hikaricv',
    live: 'https://hikari-cv.vercel.app/login',
    img: '/images/projects/HikariCv.png',
    art: 'rays',
    featured: true,
  },
  {
    slug: 'niriseek',
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
    slug: 'broke-together',
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
    slug: 'tomoshelf',
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
    slug: 'securepiece',
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
    slug: 'velora',
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
    slug: 'trix',
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
    slug: 'trikon',
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
    slug: 'intellia',
    title: 'Intellia Organization Website',
    tag: 'Web · Team work',
    blurb: 'Official website of the Intellia tech community.',
    description:
      'A collaborative project to build the official website for the Intellia tech community, showcasing initiatives, events and member activities.',
    chips: ['React', 'Node.js', 'Firebase'],
    github: null,
    live: 'https://intelliamiet.in/',
    img: '/images/projects/intellia.png',
    art: 'rays',
  },
  {
    slug: 'digital-lifterz',
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
    slug: 'portfolio',
    title: 'Developer Portfolio',
    tag: 'Web · Personal',
    blurb: 'This site: a minimal, dark, multi-page portfolio.',
    description:
      'A developer portfolio built to showcase projects, technical skills and experience with a clean UI and a scalable front-end architecture.',
    chips: ['React', 'Vite', 'SCSS'],
    github: 'https://github.com/mohitraghav1318/mohitraghav1318.git',
    live: 'https://mohitraghav1318.vercel.app/',
    img: '/images/projects/portfolio.png',
    art: 'aperture',
  },
];

export const projectsPage = {
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
    text: 'Database management, authentication and frontend development. Django on the backend, Next.js, React and TypeScript on the frontend, Supabase for the database.',
    stack: 'Django · Next.js · Supabase',
    chips: ['Databases', 'Authentication', 'Frontend', 'Django', 'Next.js', 'Supabase'],
    // TODO: add exact dates for the Bexra internship
    // todo: 'TODO: add exact dates',
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
    kind: 'Self-directed',
    role: 'Building projects',
    org: 'MERN, Next.js, Python',
    text: 'Shipping full-stack and backend-heavy web apps since early 2024, from AI products to Linux tooling.',
    chips: [],
    button: { label: 'See the projects →', to: '/projects' },
  },
];

export const experiencePage = {
  label: 'Experience',
  titleLead: "Where I've",
  titleGrad: 'worked.',
  cta: { title: 'Next, see what I work with.', label: 'Skills →', to: '/skills' },
};

export const skills = [
  {
    title: 'Backend & databases',
    tag: 'Strongest',
    highlight: true,
    items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'Supabase', 'Mongoose', 'Authentication', 'REST APIs'],
  },
  { title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'GSAP', 'SCSS', 'HTML / CSS'] },
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java'] },
  { title: 'AI & ML tooling', items: ['LangChain', 'FAISS', 'Groq', 'Gemini', 'faster-whisper'] },
  { title: 'Tools & workflow', items: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code'] },
  { title: 'Learning now', tag: 'In progress', items: ['DSA in Java', 'AWS basics', 'Cloud fundamentals'] },
];

export const skillsPage = {
  label: 'Skills',
  titleLead: 'What I',
  titleGrad: 'work with.',
  cta: { title: 'Need this stack on your project?', label: 'Get in touch →' },
};

export const contactPage = {
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
  label: '404',
  titleLead: 'Page not',
  titleGrad: 'found.',
  button: 'Back home →',
};


