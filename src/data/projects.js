// ──────────────────────────────────────────────
// projects.js — Portfolio projects data
// Add, remove, or edit projects here. No component changes needed.
//
// img: path to project screenshot image.
//   - Place images in /public/images/projects/
//   - Set to a string like "/images/projects/hikaricv.png" to show the image
//   - Set to null to show a "Coming Soon" placeholder
//
// category: project category for filtering.
//   - "personal"  → Personal Projects
//   - "team"      → Team Work
//   - "freelance" → Freelance
// ──────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: 'HikariCV',
    description:
      'HIKARI_CV is a full-stack web app that helps users prepare for interviews by providing a curated list of interview questions, coding challenges, and mock interview sessions. It features a sleek, user-friendly interface built with React and a robust backend powered by Node.js and MongoDB.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Groq', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mohitraghav1318/hikaricv',
    liveUrl: 'https://hikaricv.vercel.app/login',
    featured: true,
    img: '/images/projects/hikaricv.png',
    category: 'personal',
  },

  {
    id: 2,
    title: 'TomoShelf',
    description:
      'A digital space for organizing and managing collections, allowing users to track, categorize, and revisit items efficiently.',
    techStack: ['React', 'Node.js', 'Database', 'API Integration'],
    githubUrl: 'https://github.com/mohitraghav1318/tomoshelf.git',
    liveUrl: 'https://tomoshelf.vercel.app/',
    featured: false,
    img: '/images/projects/tomoshelf.png',
    category: 'personal',
    year: '2026',
  },
  {
    id: 3,
    title: 'Developer Portfolio',
    description:
      'A modern developer portfolio built to showcase projects, technical skills, and experience with a clean UI and scalable front-end architecture.',
    techStack: ['React', 'Vite', 'SCSS'],
    githubUrl: 'https://github.com/mohitraghav1318/mohitraghav1318.git',
    liveUrl: 'https://mohitraghav1318.vercel.app/',
    featured: false,
    img: '/images/projects/portfolio.png',
    category: 'personal',
    year: '2026',
  },
  {
    id: 4,
    title: 'Velora',
    description:
      'A hotel-related software featuring CRUD operations, JWT authentication, and a full-stack architecture for managing hotel data. Built with EJS templating, Node.js backend, and MongoDB for data storage, Velora provides a seamless user experience for hotel management tasks.',
    techStack: ['EJS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/mohitraghav1318/velora.git',
    liveUrl: 'https://velora-pxkb.onrender.com',
    featured: false,
    img: '/images/projects/velora.png',
    category: 'personal',
    year: '2026',
  },
  {
    id: 5,
    title: 'Digital Lifterz Website',
    description:
      'A freelance client website developed to establish a professional digital presence with responsive design and optimized performance.',
    techStack: ['React', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mohitraghav1318/digital-lifterz.git',
    liveUrl: null,
    featured: false,
    img: null,
    category: 'freelance',
    year: '2026',
  },
  {
    id: 6,
    title: 'Intellia Organization Website',
    description:
      'A collaborative project to build the official website for the Intellia tech community, designed to showcase initiatives, events, and member activities.',
    techStack: ['React', 'Node.js', 'Firebase'],
    githubUrl: null,
    liveUrl: 'https://intelliamiet.in/',
    featured: false,
    img: '/images/projects/intellia.png',
    category: 'team',
    year: '2026',
  },
  {
    id: 7,
    title: 'Trikon Hackathon Platform',
    description:
      'A dedicated website built for the TRIKON hackathon to manage event information, registrations, and participant engagement.',
    techStack: ['React', 'Node.js', 'Firebase'],
    githubUrl: null,
    liveUrl: 'https://intelliamiet.in/trikon/trikon2026',
    featured: false,
    img: '/images/projects/trikon.png',
    category: 'team',
    year: '2026',
  },
  {
    id: 8,
    title: 'Trix AI Chatbot',
    description:
      'An AI-powered chatbot developed for the TRIKON event to assist participants with queries, event details, and hackathon guidance in real time.',
    techStack: ['Python', 'LangChain', 'Gemini API', 'Groq API', 'Flask'],
    githubUrl: null,
    liveUrl: 'https://intelliamiet.in/trikon/trikon2026',
    featured: false,
    img: '/images/projects/Trix.gif',
    category: 'team',
    year: '2026',
  },
  {
    id: 9,
    title: 'Things I Need',
    description:
      'A productivity-focused web application designed to organize tasks, ideas, and essential resources in one streamlined workspace.',
    techStack: ['React', 'Node.js', 'Database'],
    githubUrl: null,
    liveUrl: 'https://things-i-want.vercel.app/',
    featured: false,
    img: '/images/projects/things-i-want.png',
    category: 'personal',
    year: '2026',
  },
  {
    id: 10,
    title: 'SecurePiece',
    description:
      'A secure athentication system built with JWT and bcrypt to protect user data and ensure safe access to web applications. with otp authentication and email verification.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    githubUrl: 'https://github.com/mohitraghav1318/authentication',
    liveUrl: 'https://securepiece.vercel.app',
    featured: true,
    img: '/images/projects/securepiece.png',
    category: 'personal',
    year: '2026',
  },
];
