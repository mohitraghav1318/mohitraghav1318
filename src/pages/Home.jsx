import { useId } from 'react';
import { Link } from 'react-router-dom';
import Line from '../components/pf/Line';
import Words from '../components/pf/Words';
import Photo from '../components/pf/Photo';
import FooterCta from '../components/pf/FooterCta';
import Marquee from '../components/pf/Marquee';
import { tone } from '../components/pf/tones';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { site, home, images, projects, ui } from '../data/site';

export default function Home() {
  useDocumentMeta();
  const circleId = useId();
  const featured = projects.filter((p) => p.featured).slice(0, home.work.count);
  const kind = (p) => p.tag.split(' · ')[0];

  return (
    <>
      <div className="peek" aria-hidden="true">
        {featured.map((p, i) => (
          <div className="peek-i" key={p.slug}>
            {p.img && <img src={p.img} alt="" width="400" height="250" loading="lazy" />}
            <span className="peek-t" style={{ background: tone(i)[0], color: tone(i)[1] }}>
              <span>{p.title}</span>
              <span className="lbl">{kind(p)}</span>
            </span>
          </div>
        ))}
      </div>

      <main id="main" tabIndex={-1}>
      <section className="intro">
        <div className="shell">
          <div className="intro-grid">
            <div className="intro-l">
              <div className="kick lbl intro-k">
                <i />
                <span>{home.kicker}</span>
              </div>
                <h1 className="intro-h">
                  {home.nameLines.map((line, i) => (
                    <Line key={line}>
                      {line}
                      {i === home.nameLines.length - 1 && <span className="dot">.</span>}
                    </Line>
                  ))}
                </h1>
                <p className="lede">
                  {home.lead.before}
                  <b>{home.lead.strong}</b>
                  {home.lead.after}
                </p>
                <div className="intro-cta">
                  {home.ctas.map((c) => (
                    <Link key={c.to} className={`pill mag ${c.solid ? 'solid' : 'line'}`} to={c.to} data-cursor={c.cursor}>
                      {c.label}
                    </Link>
                  ))}
                </div>
            </div>

            <div className="intro-r">
              <div className="disc" aria-hidden="true" />
              <div className="frame photo" data-cursor={ui.cursor.hi}>
                <div className="par" data-par="5">
                  <Photo image={images.portrait} eager sizes="(max-width: 900px) 90vw, 470px" />
                </div>
              </div>
              <div className="badge" aria-hidden="true">
                <svg viewBox="0 0 132 132">
                  <defs>
                    <path id={circleId} d="M66,66 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
                  </defs>
                  <text fontFamily="DM Mono, monospace" fontSize="11.5" letterSpacing="2.6" fill="#EEE8DC">
                    <textPath href={`#${circleId}`}>{home.badge}</textPath>
                  </text>
                </svg>
                <div className="badge-c" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee tags={home.marquee} />

      <section className="sec" id="about">
        <div className="shell">
          <div className="sec-top">
            <span className="lbl">{home.about.index}</span>
            <h2 className="hd">
              <Line>{home.about.title}</Line>
            </h2>
          </div>
          <div className="about-wrap">
            <p className="about-p">
              <Words text={home.about.text} />
            </p>
            <div className="frame about-img" data-reveal="" data-cursor={home.about.imageCursor}>
              <div className="par" data-par="8">
                <Photo image={images.laptop} sizes="(max-width: 900px) 90vw, 460px" />
              </div>
            </div>
          </div>
          <div className="facts">
            {home.about.facts.map((f) => (
              <div className="fact rv" key={f.label}>
                <span className="lbl">{f.label}</span>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="work">
        <div className="shell">
          <div className="sec-top">
            <span className="lbl">{home.work.index}</span>
            <h2 className="hd">
              <Line>{home.work.title}</Line> <Line><em className="serif">{home.work.accent}</em></Line>
            </h2>
          </div>
          <div className="rows">
            {featured.map((p, i) => (
              <Link className="row rv" to="/projects" key={p.slug} data-cursor={ui.cursor.open}>
                <span className="row-n lbl">{String(i + 1).padStart(2, '0')}</span>
                <div className="row-t">
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                </div>
                <span className="row-s lbl">{p.chips.slice(0, 4).join(' · ')}</span>
                <span className="row-a" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11h16M12 4l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="more">
            <Link className="pill line mag" to="/projects" data-cursor="">
              {home.work.all}
            </Link>
          </div>
        </div>
      </section>

      </main>

      <FooterCta cta={home.cta} />
    </>
  );
}
