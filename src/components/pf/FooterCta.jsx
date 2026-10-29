import { Link } from 'react-router-dom';
import { site, ui } from '../../data/site';
import Line from './Line';

// Green closing section shared by every page: big heading, links, round button, footer line.
// cta: { id?, tight?, lines, accent, button: [a, b], buttonHref?, links: [{ label, href | to | text, cursor }] }
// `href: 'github' | 'email'` are shortcuts to site.js values; any other href is used as given.
const resolve = (href) => (href === 'github' ? site.github : href === 'email' ? `mailto:${site.email}` : href);
const labelOf = (link) => (link.href === 'email' ? site.email : link.label);
const external = (href) => /^https?:/.test(href);

export default function FooterCta({ cta }) {
  const button = (
    <>
      {cta.button[0]}
      <br />
      {cta.button[1]}
    </>
  );

  return (
    <footer className={`contact${cta.tight ? ' tight' : ''}`} id={cta.id || 'contact'}>
      <div className="shell">
        <h2 className="hd">
          {cta.lines.map((line, i) => (
            <span key={line}>
              <Line>
                {line}
                {i === cta.lines.length - 1 && cta.accent ? (
                  <>
                    {' '}
                    <em className="serif">{cta.accent}</em>
                  </>
                ) : null}
              </Line>{' '}
            </span>
          ))}
        </h2>
        <div className="c-row">
          <div className="c-links rv">
            {cta.links.map((link) => {
              if (link.text) return <span className="c-line" key={link.label}>{link.label}</span>;
              if (link.to)
                return (
                  <Link key={link.label} to={link.to} data-cursor={link.cursor}>
                    {link.label}
                  </Link>
                );
              const href = resolve(link.href);
              return (
                <a
                  key={link.label}
                  href={href}
                  data-cursor={link.cursor}
                  {...(external(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {labelOf(link)}
                </a>
              );
            })}
          </div>
          {cta.buttonHref ? (
            <a className="c-btn mag" href={cta.buttonHref} data-cursor="">
              {button}
            </a>
          ) : (
            <Link className="c-btn mag" to="/contact" data-cursor="">
              {button}
            </Link>
          )}
        </div>
        <div className="foot lbl">
          <span>
            © {site.year} {site.name} · {site.location}
          </span>
          <a href="#top" data-cursor={ui.cursor.up}>
            {ui.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
