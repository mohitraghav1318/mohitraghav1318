import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import './About.scss';

const highlights = [
  { label: 'Years Building', value: '3+' },
  { label: 'Projects Delivered', value: '12+' },
  { label: 'Core Stacks', value: '6' },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-page__hero">
        <Container>
          <SectionTitle
            eyebrow="About Me"
            title="Builder mindset with design taste and engineering discipline"
            subtitle="I focus on creating products that look sharp, perform fast, and remain easy to scale."
          />

          <div className="about-page__layout">
            <div className="about-page__story">
              <p className="about-page__paragraph">
                I&apos;m Mohit Raghav, a Computer Science AIML student and full stack developer. My work
                sits at the intersection of product strategy, frontend design, and backend reliability.
              </p>
              <p className="about-page__paragraph">
                I care about clean architecture, reusable systems, and design consistency. Whether it&apos;s
                shipping dashboards, SaaS features, or internal tools, I optimize for clarity,
                maintainability, and measurable results.
              </p>
            </div>

            <div className="about-page__panel">
              <img alt="Mohit Raghav profile" className="about-page__image" src="/images/profile/profile-main.jpeg" />
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
        </Container>
      </section>
    </div>
  );
}

export default About;
