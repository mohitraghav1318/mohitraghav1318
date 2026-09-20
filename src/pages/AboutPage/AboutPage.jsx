// ──────────────────────────────────────────────
// AboutPage.jsx — Full about page with extended bio
// Shows profile image placeholder, long bio, location,
// and availability badge. All content from about.js data.
// ──────────────────────────────────────────────

import { motion } from 'framer-motion';
import { about } from '../../data/about';
import styles from './AboutPage.module.scss';
import SEO from '../../components/SEO/SEO';

function AboutPage() {
  return (
    <>
      <SEO
        title="About Mohit Raghav | Full Stack Developer"
        description="Learn more about Mohit Raghav, a Full Stack Developer specializing in React, Node.js, Next.js, and AI/ML."
        path="/about"
      />

      <motion.div
        className="page-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <section className={styles.about}>
          <div className={styles.container}>
            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>

            <div className={styles.content}>
              <motion.div
                className={styles.imageWrapper}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {about.profileImage ? (
                  <img
                    src={about.profileImage}
                    alt={about.name}
                    className={styles.profileImage}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    {about.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                )}
              </motion.div>

              <motion.div
                className={styles.info}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className={styles.name}>{about.name}</h2>
                <p className={styles.role}>{about.role}</p>

                {about.available && (
                  <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    Open to work
                  </div>
                )}

                <p className={styles.location}>{about.location}</p>

                <p className={styles.longBio}>{about.longBio}</p>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default AboutPage;
