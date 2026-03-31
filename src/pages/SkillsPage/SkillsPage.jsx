// ──────────────────────────────────────────────
// SkillsPage.jsx — Skills grid with category filtering
// Renders filter buttons and a grid of skill cards.
// Icons are resolved dynamically via iconMap.js.
// ──────────────────────────────────────────────

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { getIcon } from '../../utils/iconMap';
import styles from './SkillsPage.module.scss';

// Category filter options — derived from skill categories
const categories = ['all', 'frontend', 'backend', 'language', 'database', 'tool'];

// Capitalize helper for filter button labels
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function SkillsPage() {
  // Currently active filter
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter skills based on selected category
  const filteredSkills =
    activeFilter === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <motion.div
      className="page-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className={styles.skills}>
        <div className={styles.container}>
          {/* Page heading */}
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.h1>

          {/* Category filter buttons */}
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeFilter === cat ? styles.active : ''
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {capitalize(cat)}
              </button>
            ))}
          </div>

          {/* Skills grid with stagger animation */}
          <motion.div
            className={styles.grid}
            key={activeFilter}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
          >
            {filteredSkills.map((skill) => {
              const IconComponent = getIcon(skill.icon);

              return (
                <motion.div
                  key={skill.name}
                  className={styles.skillCard}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    },
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Skill icon */}
                  <div className={styles.icon}>
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  {/* Skill name */}
                  <span className={styles.name}>{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default SkillsPage;
