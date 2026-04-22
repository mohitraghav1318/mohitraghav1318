// ──────────────────────────────────────────────
// HomePage.jsx — Landing page with Hero + About preview
// Hero: full-viewport Three.js particle background with
// staggered text animations. About preview below with
// a "Read more" link to the full /about page.
// ──────────────────────────────────────────────

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { initHeroScene } from '../../three/HeroScene';
import { about } from '../../data/about';
import styles from './HomePage.module.scss';

// Stagger animation variants for hero text elements
const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Each child fades in and slides up
const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function HomePage() {
  // Ref for the Three.js canvas element
  const canvasRef = useRef(null);
  // Ref to store the cleanup function from Three.js
  const cleanupRef = useRef(null);

  // Initialize Three.js scene on mount, cleanup on unmount
  useEffect(() => {
    if (canvasRef.current) {
      const { cleanup } = initHeroScene(canvasRef.current);
      cleanupRef.current = cleanup;
    }

    // Cleanup Three.js renderer to prevent memory leaks
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* ─── Hero Section ─── */}
      <section className={styles.hero}>
        {/* Three.js particle canvas background */}
        <canvas ref={canvasRef} className={styles.canvas} />

        {/* Hero content overlaid on canvas */}
        <motion.div
          className={styles.heroContent}
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.greeting} variants={childVariants}>
            Hi, I'm
          </motion.p>

          <motion.h1 className={styles.name} variants={childVariants}>
            {about.name}
          </motion.h1>

          <motion.p className={styles.tagline} variants={childVariants}>
            {about.tagline}
          </motion.p>

          <motion.div className={styles.ctas} variants={childVariants}>
            <Link to="/projects" className={styles.ctaPrimary}>
              View Projects
            </Link>
            <Link to="/contact" className={styles.ctaSecondary}>
              Contact Me
            </Link>
            <a
              href="/resume/mohit-raghav-resume.pdf"
              download
              className={styles.ctaSecondary}
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── About Preview Section ─── */}
      <section className={styles.aboutPreview}>
        <motion.div
          className={styles.aboutInner}
          // Fade in when scrolled into view
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.bio}>{about.bio}</p>
          <Link to="/about" className={styles.readMore}>
            Read more &rarr;
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default HomePage;
