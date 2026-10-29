import { Link } from 'react-router-dom';
import { site, ui } from '../../data/site';
import Line from './Line';

// Green closing section shared by every page: big heading, links, round button, footer line.
// `cta` shape: { lines: [..], accent, button: [a, b], links: [{ label, href|to, cursor }] }
export default function FooterCta({ cta }) {
  const resolve = (href) => (href === 'github' ? site.github : href === 'email' ? `mailto:${site.email}` : href);
  const label = (link) => (link.href === 'github' ? link.label : link.href === 'email' ? site.email : link.label);

  return (
    <footer className="contact" id="contact">
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
            {cta.links.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to} data-cursor={link.cursor}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={resolve(link.href)} data-cursor={link.cursor}>
                  {label(link)}
                </a>
              ),
            )}
          </div>
          <Link className="c-btn mag" to="/contact" data-cursor="">
            {cta.button[0]}
            <br />
            {cta.button[1]}
          </Link>
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
