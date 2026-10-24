import Page from '../components/Page';
import { site, contactPage as t } from '../data/site';
import '../styles/pages.scss';

export default function Contact() {
  return (
    <Page
      title="Contact | Mohit Raghav"
      description="Get in touch with Mohit Raghav for full-stack and AI/ML work."
      glow="br"
      footer="links"
    >
      <section className="wrap page-head contact-main">
        <p className="mono">{t.label}</p>
        <h1 className="page-h1" style={{ fontSize: 'clamp(48px, 9vw, 148px)' }}>
          {t.titleLead} <span className="grad">{t.titleGrad}</span>
        </h1>
        <a className="email" href={`mailto:${site.email}`}>{site.email}</a>

        <div className="rows">
          {t.links.map((l) =>
            l.href ? (
              <a key={l.label} className="crow" href={l.href}>
                <span className="mono">{l.label}</span>
                <span className="val">{l.value}</span>
                <span className="go" aria-hidden="true">↗</span>
              </a>
            ) : (
              <div key={l.label} className="crow">
                <span className="mono">{l.label}</span>
                <span className="val">{l.value}</span>
                <span aria-hidden="true" />
              </div>
            ),
          )}
        </div>
      </section>
    </Page>
  );
}
