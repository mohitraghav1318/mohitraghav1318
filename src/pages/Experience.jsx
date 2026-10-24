import { Link } from 'react-router-dom';
import Page from '../components/Page';
import CtaBand from '../components/CtaBand';
import { experience, experiencePage as t } from '../data/site';
import '../styles/pages.scss';

export default function Experience() {
  return (
    <Page
      title="Experience | Mohit Raghav"
      description="Internship, college society work and education of Mohit Raghav."
      glow="tr"
    >
      <section className="wrap page-head">
        <p className="mono">{t.label}</p>
        <h1 className="page-h1">
          {t.titleLead} <span className="grad">{t.titleGrad}</span>
        </h1>
      </section>

      <section className="wrap">
        {experience.map((x) => (
          <article key={x.role} className="xp">
            <div className="when">
              <span className="mono date">{x.when}</span>
              <span className="mono">{x.kind}</span>
            </div>
            <div className="card">
              <h2>{x.role}, {x.org}</h2>
              <p>{x.text}</p>
              {x.todo && <p className="mono todo">{x.todo}</p>}
              {x.chips.length > 0 && (
                <div className="chips">
                  {x.chips.map((c) => <span key={c} className="chip">{c}</span>)}
                </div>
              )}
              {x.button && (
                <div><Link className="btn" to={x.button.to}>{x.button.label}</Link></div>
              )}
            </div>
          </article>
        ))}
      </section>

      <CtaBand title={t.cta.title} label={t.cta.label} to={t.cta.to} />
    </Page>
  );
}
