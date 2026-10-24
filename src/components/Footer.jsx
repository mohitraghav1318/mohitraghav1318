import { Link } from 'react-router-dom';
import { site, nav } from '../data/site';

// variant "social" lists external links; "links" lists internal pages (Contact page).
export default function Footer({ variant = 'social' }) {
  return (
    <footer className="footer wrap mono">
      <span style={{ display: 'inline-flex', alignItems: 'center', minHeight: 44 }}>
        © {site.year} {site.name}
      </span>
      {variant === 'links' ? (
        <nav aria-label="Footer">
          {nav
            .filter((item) => item.to !== '/contact')
            .map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
        </nav>
      ) : (
        <nav aria-label="Social">
          <a href={site.github}>GitHub ↗</a>
          <a href={site.x}>X ↗</a>
          <a href={`mailto:${site.email}`}>Email ↗</a>
        </nav>
      )}
    </footer>
  );
}
