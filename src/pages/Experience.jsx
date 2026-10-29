import PageHead from '../components/pf/PageHead';
import Line from '../components/pf/Line';
import Photo from '../components/pf/Photo';
import FooterCta from '../components/pf/FooterCta';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { experience, experiencePage as page, images } from '../data/site';

export default function Experience() {
  useDocumentMeta('Experience | Mohit Raghav', 'Roles and teams: Bexra, Intellia Society and a B.Tech in CSE (AI/ML) at MIET Meerut.');
  const roles = experience.filter((e) => !e.hidden);

  return (
    <>
      <main id="main" tabIndex={-1}>
        <PageHead kicker={page.kicker} title={page.title} lede={page.lede} />

        <section className="sec tight">
          <div className="shell">
            <div className="sec-top">
              <span className="lbl">{page.work.index}</span>
              <h2 className="hd">
                <Line>{page.work.title}</Line> <Line><em className="serif">{page.work.accent}</em></Line>
              </h2>
            </div>
            <div className="path">
              {roles.map((e) => (
                <article className="p-row rv" key={e.role + e.org}>
                  <h3>
                    {e.role}, <em className="serif">{e.org}</em>
                  </h3>
                  <p className="p-meta lbl">
                    <span className="p-when">{e.when}</span>
                    <span>{e.stack || e.chips.join(' · ')}</span>
                  </p>
                  <p>{e.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sec tight">
          <div className="shell">
            <div className="sec-top">
              <span className="lbl">{page.gallery.index}</span>
              <h2 className="hd">
                <Line>{page.gallery.title}</Line> <Line><em className="serif">{page.gallery.accent}</em></Line>
              </h2>
            </div>
            <div className="gal">
              {page.gallery.items.map((key) => {
                const img = images[key];
                return (
                  <figure className="rv" key={key}>
                    <div className="frame tilt" data-reveal="" data-lift="-6" data-cursor={img.cursor}>
                      <Photo image={img} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 400px" />
                    </div>
                    <figcaption className="lbl">{img.caption}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <FooterCta cta={page.footer} />
    </>
  );
}
