// ──────────────────────────────────────────────
// App.jsx — Root application component
// Sets up routing, navbar, footer, and page transitions.
// ──────────────────────────────────────────────

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  // useLocation enables AnimatePresence to detect route changes
  const location = useLocation();

  return (
    <>
      {/* Navbar persists across all pages */}
      <Navbar />

      {/* AnimatePresence wraps Routes for page transition animations */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>

      {/* Footer persists across all pages */}
      <Footer />
    </>
  );
}

export default App;
