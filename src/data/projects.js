export const projectTypeMeta = {
  personal: {
    title: 'Personal Builds',
    subtitle:
      'Self-initiated products focused on quality, experimentation, and long-term growth.',
  },
  team: {
    title: 'Team Collaborations',
    subtitle:
      'Projects delivered in coordinated environments with shared ownership and deadlines.',
  },
  freelance: {
    title: 'Client Work',
    subtitle:
      'Outcome-driven builds designed around real-world business requirements.',
  },
  other: {
    title: 'Other Projects',
    subtitle: 'Additional experiments and practical builds across stacks.',
  },
};

export const projectSectionOrder = ['personal', 'team', 'freelance', 'other'];

const projects = [
  {
    id: 'hikaricv',
    title: 'HikariCV',
    description:
      'A resume-building platform designed to help users create structured, visually appealing CVs quickly with customizable templates.',
    tech: ['React', 'Node.js', 'Database'],
    image: '',
    liveUrl: '',
    repoUrl: 'https://github.com/mohitraghav1318/gen-ai.git',
    year: '2026',
    type: 'personal',
  },
  {
    id: 'things-i-need',
    title: 'Things I Need',
    description:
      'A productivity-focused web application designed to organize tasks, ideas, and essential resources in one streamlined workspace.',
    tech: ['React', 'Node.js', 'Database'],
    image: '',
    liveUrl: '',
    repoUrl: '',
    year: '2026',
    type: 'personal',
  },
  {
    id: 'tomoshelf',
    title: 'TomoShelf',
    description:
      'A digital space for organizing and managing collections, allowing users to track, categorize, and revisit items efficiently.',
    tech: ['React', 'Node.js', 'Database', 'API Integration'],
    image: '../images/projects/tomoshelf.png',
    liveUrl: 'https://tomoshelf.vercel.app/',
    repoUrl: 'https://github.com/mohitraghav1318/tomoshelf.git',
    year: '2026',
    type: 'personal',
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    description:
      'A modern developer portfolio built to showcase projects, technical skills, and experience with a clean UI and scalable front-end architecture.',
    tech: ['React', 'Vite', 'SCSS'],
    image: '../images/projects/portfolio.png',
    liveUrl: 'https://mohitraghav1318.vercel.app/',
    repoUrl: 'https://github.com/mohitraghav1318/mohitraghav1318.git',
    year: '2026',
    type: 'personal',
  },
  {
    id: 'velora',
    title: 'Velora',
    description:
      'An Hotel Related software that has features like curd , jwt etc',
    tech: ['EJS', 'Node.js', 'MongoDB'],
    image: '../images/projects/velora.png',
    liveUrl: 'https://velora-pxkb.onrender.com',
    repoUrl: 'https://github.com/mohitraghav1318/velora.git',
    year: '2026',
    type: 'personal',
  },

  {
    id: 'digital-lifterz',
    title: 'Digital Lifterz Website',
    description:
      'A freelance client website developed to establish a professional digital presence with responsive design and optimized performance.',
    tech: ['React', 'CSS', 'JavaScript'],
    image: '../images/projects/digital-lifterz.png',
    liveUrl: '',
    repoUrl: 'https://github.com/mohitraghav1318/digital-lifterz.git',
    year: '2026',
    type: 'freelance',
  },

  {
    id: 'intellia-web',
    title: 'Intellia Organization Website',
    description:
      'A collaborative project to build the official website for the Intellia tech community, designed to showcase initiatives, events, and member activities.',
    tech: ['React', 'Node.js', 'Firebase'],
    image: '../images/projects/intellia.png',
    liveUrl: '',
    repoUrl: '',
    year: '2026',
    type: 'team',
  },

  {
    id: 'trikon-hackathon',
    title: 'Trikon Hackathon Platform',
    description:
      'A dedicated website built for the TRIKON hackathon to manage event information, registrations, and participant engagement.',
    tech: ['React', 'Node.js', 'Firebase'],
    image: '../images/projects/trikon.png',
    liveUrl: '',
    repoUrl: '',
    year: '2026',
    type: 'team',
  },

  {
    id: 'trix-chatbot',
    title: 'Trix AI Chatbot',
    description:
      'An AI-powered chatbot developed for the TRIKON event to assist participants with queries, event details, and hackathon guidance in real time.',
    tech: ['Python', 'LangChain', 'Gemini API', 'Groq API', 'Flask'],
    image: '../images/projects/trix.png',
    liveUrl: '',
    repoUrl: '',
    year: '2026',
    type: 'team',
  },
];

export default projects;
