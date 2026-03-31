// ──────────────────────────────────────────────
// iconMap.js — Maps icon string names to react-icons components
// Import all icons used in skills.js and socials.js here.
// Add new icons to this map when adding new skills/socials.
// ──────────────────────────────────────────────

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
} from 'react-icons/si';

// Central icon map: string name → React icon component
const iconMap = {
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
};

/**
 * Resolves an icon string name to its React component.
 * @param {string} iconName - The icon name string (e.g., "FaReact")
 * @returns {React.ComponentType|null} The icon component, or null if not found
 */
export const getIcon = (iconName) => {
  return iconMap[iconName] || null;
};

export default iconMap;
