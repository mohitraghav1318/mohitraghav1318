// ──────────────────────────────────────────────
// ProjectsPage.jsx — Full projects grid page with category filtering
// Renders all projects from projects.js as ProjectCard components.
// Filter buttons: All, Personal Projects, Team Work, Freelance.
// Responsive grid: 3 cols desktop, 2 tablet, 1 mobile.
// ──────────────────────────────────────────────

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.scss';
import SEO from '../../components/SEO/SEO';

// Category filter options — value matches the category field in projects.js
const categories = [
  { key: 'all', label: 'All' },
  { key: 'personal', label: 'Personal Projects' },
  { key: 'team', label: 'Team Work' },
  { key: 'freelance', label: 'Freelance' },
];

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <SEO
        title="Projects | Mohit Raghav"
        description="Explore web development and AI/ML projects built by Mohit Raghav using React, Node.js, Next.js, MongoDB, and modern web technologies."
        path="/projects"
      />

      <motion.div
        className="page-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <section className={styles.projects}>
          <div className={styles.container}>
            {/* Page heading */}
            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Projects
            </motion.h1>

            {/* Category filter buttons */}
            <div className={styles.filters}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`${styles.filterBtn} ${activeFilter === cat.key ? styles.active : ''
                    }`}
                  onClick={() => setActiveFilter(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Project cards grid with stagger animation */}
            <motion.div
              className={styles.grid}
              key={activeFilter}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: 'easeOut' },
                    },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );

}

export default ProjectsPage;
