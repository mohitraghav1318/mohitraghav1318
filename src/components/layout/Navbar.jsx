import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from '../common/Container';
import Button from '../common/Button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">
      <Container className="navbar__inner">
        <Link className="navbar__brand" to="/">
          <span className="navbar__brand-mark">MR</span>
          <span className="navbar__brand-text">Mohit Raghav</span>
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <nav className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li className="navbar__item" key={link.to}>
                <NavLink
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  end={link.to === '/'}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Button
            className="navbar__resume"
            href="/resume.pdf"
            rel="noreferrer"
            target="_blank"
            variant="secondary"
          >
            Download Resume
          </Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
