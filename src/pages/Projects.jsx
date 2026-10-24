import Page from '../components/Page';
import ProjectArt from '../components/ProjectArt';
import CtaBand from '../components/CtaBand';
import { projects, projectsPage as t } from '../data/site';
import '../styles/pages.scss';

export default function Projects() {
  return (
    <Page
      title="Projects | Mohit Raghav"
      description="Projects by Mohit Raghav: full-stack apps, AI products and Linux tooling."
      glow="tl"
    >
      <section className="wrap page-head">
        <p className="mono">{t.label} · {String(projects.length).padStart(2, '0')}</p>
        <h1 className="page-h1">
          {t.titleLead} <span className="grad">{t.titleGrad}</span>
        </h1>
      </section>

      <section className="wrap">
        {projects.map((p, i) => (
          <article key={p.slug} className="proj">
            <div className="cover">
              {p.img ? (
                <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" width="640" height="320" />
              ) : (
                <ProjectArt art={p.art} />
              )}
            </div>
            <div className="info">
              <span className="mono">{String(i + 1).padStart(2, '0')} · {p.tag}</span>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div className="chips">
                {p.chips.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
              {(p.github || p.live) && (
                <div className="links">
                  {p.github && <a className="btn" href={p.github}>View on GitHub ↗</a>}
                  {p.live && <a className="btn" href={p.live}>Live site ↗</a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <CtaBand title={t.cta.title} label={t.cta.label} />
    </Page>
  );
}
