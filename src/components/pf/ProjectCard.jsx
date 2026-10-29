import { ui } from '../../data/site';
import { tone } from './tones';

// Whole card is clickable through the arrow link (stretched with ::after); the
// GitHub / Live pills sit above it. Not nested anchors.
export default function ProjectCard({ project: p, index }) {
  const [bg, fg] = tone(index);
  const primary = p.live || p.github;
  const kind = p.tag.split(' · ')[0];

  return (
    <article className="pc rv tilt" data-lift="-10" data-cursor={ui.project.open} style={{ background: bg, color: fg }}>
      <div className="pc-top">
        <span className="lbl pc-n">
          {String(index + 1).padStart(2, '0')} / {kind}
        </span>
        <a
          className="pc-a"
          href={primary}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ui.project.openLabel} ${p.title}`}
        >
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 11h16M12 4l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div>
        <h3>{p.title}</h3>
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
