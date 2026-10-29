import { Link } from 'react-router-dom';
import Line from '../components/pf/Line';
import Photo from '../components/pf/Photo';
import FooterCta from '../components/pf/FooterCta';
import useDocumentMeta from '../hooks/useDocumentMeta';
import { contactPage as page, images } from '../data/site';

export default function Contact() {
  useDocumentMeta('Contact | Mohit Raghav', 'Get in touch with Mohit Raghav: email, GitHub and X.');
  const { head } = page;

  return (
    <>
      <main id="main" tabIndex={-1}>
        <section className="intro">
          <div className="shell">
            <div className="intro-grid">
              <div className="intro-l">
                <div className="kick lbl intro-k">
                  <i />
                  <span>{head.kicker}</span>
                </div>
                <h1 className="intro-h pgh">
                  {head.lines.map((line) => (
                    <Line key={line}>{line}</Line>
                  ))}
                  <Line>
                    <em className="serif">{head.accent}</em>
                    <span className="dot">.</span>
                  </Line>
                </h1>
                <p className="lede">
                  {head.lede.before}
                  <b>{head.lede.strong}</b>
                </p>
                <div className="intro-cta">
                  {head.ctas.map((c) => {
                    const cls = `pill mag ${c.solid ? 'solid' : 'line'}`;
                    return c.to ? (
                      <Link key={c.label} className={cls} to={c.to} data-cursor={c.cursor}>
                        {c.label}
                      </Link>
                    ) : (
                      <a key={c.label} className={cls} href={c.href} data-cursor={c.cursor}>
                        {c.label}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="intro-r">
                <div className="disc" aria-hidden="true" />
                <div className="frame photo" data-cursor={images.train.cursor}>
                  <div className="par" data-par="5">
                    <Photo image={images.train} eager sizes="(max-width: 900px) 90vw, 470px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterCta cta={page.footer} />
    </>
  );
}
