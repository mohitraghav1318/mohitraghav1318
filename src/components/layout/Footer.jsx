import { Link } from 'react-router-dom';
import Container from '../common/Container';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__top">
          <div className="footer__branding">
            <p className="footer__eyebrow">Available for freelance & full-time</p>
            <h3 className="footer__title">Let&apos;s build something excellent.</h3>
          </div>

          <div className="footer__social">
            <a className="footer__social-link" href="https://github.com/mohitraghav1318" rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/mohit-raghav-45b434288"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a className="footer__social-link" href="mailto:mohitraghav1318@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <nav className="footer__nav" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link className="footer__nav-link" key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="footer__copy">&copy; {year} Mohit Raghav. Crafted with React and SCSS.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
