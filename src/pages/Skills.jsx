import PageHead from '../components/pf/PageHead';
import Line from '../components/pf/Line';
import Words from '../components/pf/Words';
import Marquee from '../components/pf/Marquee';
import FooterCta from '../components/pf/FooterCta';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { skills, skillsPage as page } from '../data/site';

export default function Skills() {
  useDocumentMeta('Skills | Mohit Raghav', 'The stack Mohit Raghav works with: Node.js, Django, React, Next.js, databases and AI tooling.');

  return (
    <>
      <main id="main">
        <PageHead kicker={page.kicker} title={page.title} lede={page.lede} />
        <Marquee tags={page.marquee} style={{ marginTop: 'clamp(40px, 6vw, 70px)' }} />

        <section className="sec tight">
          <div className="shell">
            <div className="sec-top">
              <span className="lbl">{page.strongest.index}</span>
              <h2 className="hd">
                <Line>{page.strongest.title}</Line> <Line><em className="serif">{page.strongest.accent}</em></Line>
              </h2>
            </div>
            <p className="strong-p">
              <Words text={page.strongest.text} />
            </p>
          </div>
        </section>

        <section className="sec tight">
          <div className="shell">
            <div className="sec-top">
              <span className="lbl">{page.all.index}</span>
              <h2 className="hd">
                <Line>{page.all.title}</Line> <Line><em className="serif">{page.all.accent}</em></Line>
              </h2>
            </div>
            <div className="sk">
              {skills.map((g, i) => (
                <div className="sk-row rv" key={g.title}>
                  <div className="sk-l">
                    <span className="lbl">
                      {String(i + 1).padStart(2, '0')} / {g.title}
                      {g.tag ? ` · ${g.tag}` : ''}
                    </span>
                    <p>{g.note}</p>
                  </div>
                  <ul className="sk-r">
                    {g.items.map((it) => (
                      <li className="sk-w" key={it} data-cursor="">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterCta cta={page.footer} />
    </>
  );
}
