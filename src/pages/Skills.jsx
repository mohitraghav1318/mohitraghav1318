import Page from '../components/Page';
import CtaBand from '../components/CtaBand';
import { skills, skillsPage as t } from '../data/site';
import '../styles/pages.scss';

export default function Skills() {
  return (
    <Page
      title="Skills | Mohit Raghav"
      description="The stack Mohit Raghav works with: Node.js, MongoDB, React, Next.js and AI/ML tooling."
      glow="br"
    >
      <section className="wrap page-head">
        <p className="mono">{t.label}</p>
        <h1 className="page-h1">
          {t.titleLead} <span className="grad">{t.titleGrad}</span>
        </h1>
      </section>

      <section className="wrap skill-grid">
        {skills.map((s) => (
          <article key={s.title} className={`card${s.highlight ? ' hl' : ''}`}>
            <div className="top">
              <h2>{s.title}</h2>
              {s.tag && <span className={`mono${s.highlight ? ' tag' : ''}`}>{s.tag}</span>}
            </div>
            <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {s.items.map((i) => <li key={i} className="chip">{i}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <CtaBand title={t.cta.title} label={t.cta.label} />
    </Page>
  );
}
