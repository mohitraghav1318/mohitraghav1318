import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaFigma,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from 'react-icons/fa';

import {
  SiSpringboot,
} from 'react-icons/si';

import {
  FaJava,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiThreedotjs,
  SiNextdotjs,
  SiGraphql,
  SiFirebase,
  SiEjs,
  SiFlask,
  SiTailwindcss,
  SiPrisma,
} from 'react-icons/si';

// Central icon map: string name → React icon component
const iconMap = {
  // Font Awesome
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaFigma,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaJava,

  // Simple Icons
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiThreedotjs,
  SiNextdotjs,
  SiGraphql,
  SiFirebase,
  SiEjs,
  SiFlask,
  SiTailwindcss,
  SiPrisma,
  SiSpringboot,

};

export const getIcon = (iconName) => {
  return iconMap[iconName] || null;
};

export default iconMap;