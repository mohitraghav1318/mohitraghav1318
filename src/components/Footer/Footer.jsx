// ──────────────────────────────────────────────
// Footer.jsx — Site footer with copyright and social icons
// All text is pulled from data files — no hardcoded content.
// ──────────────────────────────────────────────

import { about } from '../../data/about';
import { socials } from '../../data/socials';
import { getIcon } from '../../utils/iconMap';
import styles from './Footer.module.scss';

function Footer() {
  // Dynamically compute the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Social icon links */}
        <div className={styles.socials}>
          {socials.map((social) => {
            const IconComponent = getIcon(social.icon);
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={styles.socialLink}
              >
                {IconComponent && <IconComponent size={20} />}
              </a>
            );
          })}
        </div>

        {/* Copyright text — name and year from data/computed */}
        <p className={styles.copyright}>
          &copy; {currentYear} {about.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
