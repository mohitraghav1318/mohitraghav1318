// ──────────────────────────────────────────────
// ExperiencePage.jsx — Work experience page
// Renders timeline cards from experience.js data.
// ──────────────────────────────────────────────

import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import styles from './ExperiencePage.module.scss';

function ExperiencePage() {
  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className={styles.experience}>
        <div className={styles.container}>
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h1>

          <motion.div
            className={styles.timeline}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
          >
            {experiences.map((item, index) => (
              <motion.article
                key={item.id ?? index}
                className={styles.card}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              >
                {(item.role || item.company) && (
                  <div className={styles.cardHeader}>
                    {item.role && <h2 className={styles.role}>{item.role}</h2>}
                    {item.company && <p className={styles.company}>{item.company}</p>}
                  </div>
                )}

                {(item.duration || item.location) && (
                  <div className={styles.meta}>
                    {item.duration && <span>{item.duration}</span>}
                    {item.location && <span>{item.location}</span>}
                  </div>
                )}

                {item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}

                {Array.isArray(item.techStack) && item.techStack.length > 0 && (
                  <div className={styles.stack}>
                    {item.techStack.map((tech) => (
                      <span key={tech} className={styles.badge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ExperiencePage;
