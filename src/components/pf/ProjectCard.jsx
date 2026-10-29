import { Link } from 'react-router-dom';
import { ui } from '../../data/site';
import { kindOf, projectPath } from '../../data/projects';
import { tone } from './tones';

// The title link covers the whole card (stretched with ::after) and opens the detail
// page. The GitHub / Live pills sit above it as separate links. No nested anchors.
export default function ProjectCard({ project: p, index }) {
  const [bg, fg] = tone(index);

  return (
    <article className="pc rv tilt" data-lift="-10" data-cursor={ui.project.open} style={{ background: bg, color: fg }}>
      <div className="pc-top">
        <span className="lbl pc-n">
          {String(index + 1).padStart(2, '0')} / {kindOf(p)}
        </span>
        <span className="pc-a" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 11h16M12 4l7 7-7 7" />
          </svg>
        </span>
      </div>
      <div>
        <h3>
          <Link className="pc-link" to={projectPath(p)}>
            {p.title}
          </Link>
        </h3>
        <p>{p.description}</p>
        <ul className="tgs">
          {p.chips.map((c) => (
            <li className="tg" key={c}>
              {c}
            </li>
          ))}
        </ul>
        <div className="pc-acts">
          {p.live && (
            <a className="pc-act" href={p.live} target="_blank" rel="noopener noreferrer">
              {ui.project.live} ↗
            </a>
          )}
          {p.github && (
            <a className="pc-act" href={p.github} target="_blank" rel="noopener noreferrer">
              {ui.project.code} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
