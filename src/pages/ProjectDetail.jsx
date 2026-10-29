import { Link, useParams } from 'react-router-dom';
import Line from '../components/pf/Line';
import Words from '../components/pf/Words';
import Shot from '../components/pf/Shot';
import FooterCta from '../components/pf/FooterCta';
import NotFound from './NotFound';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { projects, projectPage as t, ui } from '../data/site';
import { findProject, kindOf, nextProject, projectPath, projectShots } from '../data/projects';

// /projects/:slug. An unknown slug renders the 404 page. Every section is optional:
// it is only rendered when site.js has data for it (no placeholders).
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = findProject(slug);
  // key: a different project gets a fresh DOM, so the page motion rebuilds cleanly.
  return project ? <Detail key={slug} project={project} /> : <NotFound />;
}

function SectionHead({ index, title, accent }) {
  return (
    <div className="sec-top">
      <span className="lbl">({String(index).padStart(2, '0')})</span>
      <h2 className="hd">
        <Line>{title}</Line>
        {accent && (
          <>
            {' '}
            <Line>
              <em className="serif">{accent}</em>
            </Line>
          </>
        )}
      </h2>
    </div>
  );
}

function Detail({ project: p }) {
  useDocumentMeta(`${p.title} | Mohit Raghav`, p.blurb);

  const position = projects.indexOf(p) + 1;
  const shots = projectShots(p);
  const [cover, ...more] = shots;
  const next = projects.length > 1 ? nextProject(p) : null;
  const alt = (shot, i) => shot.alt || `${p.title} screenshot${shots.length > 1 ? ` ${i + 1}` : ''}`;

  // Section numbers count only the sections that are rendered.
  let n = 0;
  const num = () => ++n;

  return (
    <>
      <main id="main" tabIndex={-1}>
        <section className="phead">
          <div className="shell">
            <Link className="pd-back lbl" to="/projects" data-cursor="Back">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M19 11H3M10 4l-7 7 7 7" />
              </svg>
              <span>{t.back}</span>
            </Link>
            <div className="kick lbl intro-k" style={{ marginTop: 26 }}>
              <i />
              <span>
                {String(position).padStart(2, '0')} / {kindOf(p)}
              </span>
            </div>
            <h1 className="intro-h pgh">
              <Line>
                {p.title}
                <span className="dot">.</span>
              </Line>
            </h1>
            <p className="lede">{p.blurb}</p>

            <div className="pd-meta">
              <div className="rv">
                <span className="lbl">{t.meta.type}</span>
                <p>{p.tag}</p>
              </div>
              {p.chips?.length > 0 && (
                <div className="rv">
                  <span className="lbl">{t.meta.stack}</span>
                  <p>{p.chips.join(' · ')}</p>
                </div>
              )}
              {(p.live || p.github) && (
                <div className="rv">
                  <span className="lbl">{t.meta.links}</span>
                  <div className="pd-pills">
                    {p.live && (
                      <a className="pill solid mag" href={p.live} target="_blank" rel="noopener noreferrer" data-cursor={ui.project.open}>
                        {t.meta.live} ↗
                      </a>
                    )}
                    {p.github && (
                      <a className="pill line mag" href={p.github} target="_blank" rel="noopener noreferrer" data-cursor={ui.project.open}>
                        {t.meta.code} ↗
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {cover && (
          <section className="sec tight" aria-label={`${p.title} screenshot`}>
            <div className="shell">
              <div className="frame pd-cover" data-reveal="">
                <div className="par" data-par="6">
                  <Shot src={cover.src} alt={alt(cover, 0)} eager sizes="(max-width: 1320px) 100vw, 1240px" />
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="sec tight">
          <div className="shell">
            <div className="pd-two">
              <div className="l">
                <span className="lbl">
                  ({String(num()).padStart(2, '0')}) {t.overview}
                </span>
              </div>
              <div className="r">
                <p className="strong-p">
                  <Words text={p.overview || p.description} />
                </p>
              </div>
            </div>
          </div>
        </section>

        {p.built?.length > 0 && (
          <section className="sec tight">
            <div className="shell">
              <SectionHead index={num()} title={t.built.title} accent={t.built.accent} />
              <div className="pd-grid">
                {p.built.map((b) => (
                  <article className="pd-card rv" key={b.title}>
                    {b.label && <span className="lbl">{b.label}</span>}
                    <div>
                      <h3>{b.title}</h3>
                      <p>{b.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {p.chips?.length > 0 && (
          <section className="sec tight">
            <div className="shell">
              <SectionHead index={num()} title={t.stack.title} />
              <ul className="pd-stack rv">
                {p.chips.map((c) => (
                  <li className="pd-chip" key={c} data-cursor="">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.solved?.length > 0 && (
          <section className="sec tight">
            <div className="shell">
              <SectionHead index={num()} title={t.solved.title} accent={t.solved.accent} />
              <div className="path">
                {p.solved.map((s) => (
                  <article className="p-row rv" key={s.title}>
                    <h3>{s.title}</h3>
                    {s.tag && (
                      <p className="p-meta lbl">
                        <span>{s.tag}</span>
                      </p>
                    )}
                    <p>{s.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {more.length > 0 && (
          <section className="sec tight">
            <div className="shell">
              <SectionHead index={num()} title={t.screens.title} />
              <div className="pd-shots">
                {more.map((s, i) => (
                  <figure className="rv" key={s.src}>
                    <div className="frame tilt" data-lift="-6">
                      <Shot src={s.src} alt={alt(s, i + 1)} sizes="(max-width: 700px) 90vw, (max-width: 1320px) 45vw, 600px" />
                    </div>
                    {s.caption && <figcaption className="lbl">{s.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {next && (
          <section className="sec tight">
            <div className="shell">
              <div className="sec-top">
                <span className="lbl pd-next-l">{t.next}</span>
              </div>
              <div className="rows pd-next">
                <Link className="row row-big rv" to={projectPath(next)} data-cursor="Next">
                  <span className="row-n lbl">{String(projects.indexOf(next) + 1).padStart(2, '0')}</span>
                  <div className="row-t">
                    <h3>{next.title}</h3>
                    <p>{next.blurb}</p>
                  </div>
                  <span className="row-s lbl">{next.chips.slice(0, 4).join(' · ')}</span>
                  <span className="row-a" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 11h16M12 4l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <FooterCta cta={t.footer} />
    </>
  );
}
