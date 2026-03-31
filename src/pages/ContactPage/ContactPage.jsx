// ──────────────────────────────────────────────
// ContactPage.jsx — Contact page with social links
// No form, no backend. Shows inviting message and large
// social icon buttons that open in new tabs.
// ──────────────────────────────────────────────

import { motion } from 'framer-motion';
import { socials } from '../../data/socials';
import { about } from '../../data/about';
import { getIcon } from '../../utils/iconMap';
import styles from './ContactPage.module.scss';

function ContactPage() {
  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className={styles.contact}>
        <div className={styles.container}>
          {/* Page heading */}
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h1>

          {/* Inviting message */}
          <motion.p
            className={styles.message}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the platforms below!
          </motion.p>

          {/* Availability status */}
          {about.available && (
            <motion.div
              className={styles.availability}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className={styles.dot} />
              Currently available for new opportunities
            </motion.div>
          )}

          {/* Social links as large icon buttons */}
          <motion.div
            className={styles.socialGrid}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {socials.map((social) => {
              const IconComponent = getIcon(social.icon);

              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: 'easeOut' },
                    },
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {IconComponent && <IconComponent size={28} />}
                  <span className={styles.socialLabel}>{social.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default ContactPage;
