// ──────────────────────────────────────────────
// ProjectCard.jsx — Individual project display card
// Shows image (or "Coming Soon" placeholder), title, description,
// tech stack pills, GitHub/live links, and a featured badge.
// Props:
//   - project: object from projects.js data (includes img field)
// ──────────────────────────────────────────────

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaImage } from 'react-icons/fa';
import styles from './ProjectCard.module.scss';

function ProjectCard({ project }) {
  const { title, description, techStack, githubUrl, liveUrl, featured, img } = project;

  return (
    <motion.div
      className={styles.card}
      // Lift effect on hover
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Featured badge — only shown if project is featured */}
      {featured && <span className={styles.featured}>Featured</span>}

      {/* Project image or "Coming Soon" placeholder */}
      <div className={styles.imageWrapper}>
        {img ? (
          <img src={img} alt={`${title} screenshot`} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <FaImage size={24} />
            <span>Coming Soon</span>
          </div>
        )}
      </div>

      {/* Project title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Project description */}
      <p className={styles.description}>{description}</p>

      {/* Tech stack as pill badges */}
      <div className={styles.techStack}>
        {techStack.map((tech) => (
          <span key={tech} className={styles.techPill}>
            {tech}
          </span>
        ))}
      </div>

      {/* Action links — GitHub always, live demo only if URL exists */}
      <div className={styles.links}>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on GitHub`}
          className={styles.link}
        >
          <FaGithub size={18} />
          <span>Code</span>
        </a>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${title}`}
            className={styles.link}
          >
            <FaExternalLinkAlt size={16} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
