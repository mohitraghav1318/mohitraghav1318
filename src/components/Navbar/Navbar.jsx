// ──────────────────────────────────────────────
// Navbar.jsx — Fixed top navigation bar
// Shows logo/name from data, nav links with active state,
// transparent at top → solid on scroll, hamburger on mobile.
// ──────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { about } from '../../data/about';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.scss';

// Navigation link definitions — edit here to change nav items
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  // Tracks whether the user has scrolled down from the top
  const [scrolled, setScrolled] = useState(false);
  // Controls mobile menu open/close state
  const [mobileOpen, setMobileOpen] = useState(false);
  // Theme context
  const { theme, toggleTheme } = useTheme();

  // Listen to scroll events to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo / Name — pulled from about data */}
        <NavLink to="/" className={styles.logo}>
          {about.name}
        </NavLink>

        {/* Desktop navigation links */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Theme toggle button */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
        </button>

        {/* Mobile hamburger button */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu with Framer Motion animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${styles.mobileLink} ${isActive ? styles.active : ''}`
                  }
                  onClick={handleLinkClick}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {/* Theme toggle in mobile menu */}
            <li>
              <button
                className={styles.mobileThemeToggle}
                onClick={() => {
                  toggleTheme();
                  handleLinkClick();
                }}
              >
                {theme === 'dark' ? (
                  <>
                    <HiSun size={18} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <HiMoon size={18} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
