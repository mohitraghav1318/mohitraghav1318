import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Navbar from '../components/Navbar';
import HeroRing from '../components/HeroRing';
import ProjectArt from '../components/ProjectArt';
import CtaBand from '../components/CtaBand';
import { site, home, projects } from '../data/site';
import '../styles/home.scss';

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Page nav={false}>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <Navbar />

        <div className="hero-body wrap">
          <div className="hero-text">
            <p className="mono eyebrow">{home.eyebrow}</p>
            <h1>
              {home.titleLead} <span className="grad">{home.titleGrad}</span>
            </h1>
            <p className="hero-sub">{home.sub}</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/projects">View projects →</Link>
              <Link className="btn" to="/contact">Get in touch</Link>
              {site.resume && (
                <a className="btn" href={site.resume} download>Download resume</a>
              )}
            </div>
          </div>
          <div className="hero-art">
            <HeroRing />
          </div>
        </div>

        <div className="hero-strip wrap mono">
          <span>{site.location}</span>
          <span>{home.strip}</span>
          <a className="mono" href="#work">Scroll ↓</a>
        </div>
      </section>

      <section id="work" className="wrap section">
        <div className="work-head">
          <h2 className="h2">Selected work</h2>
          <Link className="btn" to="/projects">All projects →</Link>
        </div>
        <div className="work-grid">
          {featured.map((p) => (
            <Link key={p.slug} className="card" to="/projects">
              <div className="cover">
                {p.img ? <img src={p.img} alt="" loading="lazy" width="400" height="220" /> : <ProjectArt art={p.art} />}
              </div>
              <div className="meta">
                <div className="row">
                  <h3>{p.title}</h3>
                  <span className="mono">{p.tag}</span>
                </div>
                <p>{p.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap section explore">
        <p className="mono label">Explore</p>
        <div>
          {home.explore.map((item, i) => (
            <Link key={item.to} className="tile" to={item.to}>
              <span className="lead">
                <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="name">{item.label}</span>
              </span>
              <span className="go" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand title="Have something worth building?" label="Let's work together →" />
    </Page>
  );
}
