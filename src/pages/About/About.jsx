import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import './About.scss';

const highlights = [
  { label: 'Years Building', value: 'Still Building' },
  { label: 'Projects Delivered', value: '9+' },
  { label: 'Core Stacks', value: '5' },
];

const focusAreas = [
  {
    title: 'Frontend Engineering',
    detail:
      'Design-driven React interfaces with reusable component systems, smooth UX states, and responsive layouts.',
  },
  {
    title: 'Backend Systems',
    detail:
      'Reliable APIs with Node.js and Express, validation-first architecture, and clean service boundaries.',
  },
  {
    title: 'AI Integrations',
    detail:
      'LLM features and Python-powered automation to deliver practical product intelligence.',
  },
];

const principles = [
  'Plan for scale before complexity appears.',
  'Prefer readable systems over clever shortcuts.',
  'Ship consistently with measurable outcomes.',
];

function About() {
  return (
    <div className="about-page">
      <section className="about-page__hero">
        <Container>
          <SectionTitle
            eyebrow="About Me"
            title="Builder mindset with design taste and engineering discipline"
            subtitle="I'm Mohit Raghav (aka mr zero). I focus on creating products that look sharp, perform fast, and remain easy to scale."
          />

          <div className="about-page__layout">
            <div className="about-page__story">
              <p className="about-page__paragraph">
                I&apos;m Mohit Raghav, a Computer Science AIML student and full
                stack developer. My work sits at the intersection of product
                strategy, frontend design, and backend reliability.
              </p>
              <p className="about-page__paragraph">
                I care about clean architecture, reusable systems, and design
                consistency. Whether it&apos;s shipping dashboards, SaaS
                features, or internal tools, I optimize for clarity,
                maintainability, and measurable results.
              </p>
              <div className="about-page__principles">
                <h3 className="about-page__section-title">How I work</h3>
                <ul className="about-page__list">
                  {principles.map((item) => (
                    <li className="about-page__list-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-page__panel">
              <img
                alt="Mohit Raghav profile"
                className="about-page__image"
                src="/images/profile/profile-main.jpeg"
              />
            </div>
          </div>

          <div className="about-page__metrics">
            {highlights.map((item) => (
              <article className="about-page__metric" key={item.label}>
                <p className="about-page__metric-value">{item.value}</p>
                <p className="about-page__metric-label">{item.label}</p>
              </article>
            ))}
          </div>

          <div className="about-page__details">
            <section className="about-page__detail-panel">
              <h3 className="about-page__section-title">Focus Areas</h3>
              <div className="about-page__focus-grid">
                {focusAreas.map((item) => (
                  <article className="about-page__focus-card" key={item.title}>
                    <h4 className="about-page__focus-title">{item.title}</h4>
                    <p className="about-page__focus-text">{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="about-page__detail-panel">
              <h3 className="about-page__section-title">Impact Snapshot</h3>
              <p className="about-page__paragraph">
                Across academic and freelance-style product work, I have
                delivered modern portfolio systems, analytics-style dashboards,
                and full-stack CRUD products with production-ready structure. My
                goal is to keep the user journey simple while engineering
                quality stays high.
              </p>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;
