import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/project/ProjectCard';
import SkillCard from '../../components/skill/SkillCard';
import projects from '../../data/projects';
import {
  FaBrain,
  FaCode,
  FaRocket,
  FaShield,
  FaWandMagicSparkles,
} from 'react-icons/fa6';
import skills from '../../data/skills';
import './Home.scss';

const capabilityPillars = [
  {
    title: 'Product-First Frontend',
    detail:
      'Interfaces designed for clarity, responsiveness, and conversion-focused user flows.',
    icon: FaWandMagicSparkles,
  },
  {
    title: 'Reliable Backend Systems',
    detail:
      'APIs and server architecture built with maintainability, security, and scale in mind.',
    icon: FaShield,
  },
  {
    title: 'AI-Augmented Delivery',
    detail:
      'Practical AI integrations and automation that speed up execution without sacrificing quality.',
    icon: FaBrain,
  },
];
function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredSkills = skills.slice(0, 4);

  return (
    <div className="home-page">
      <section className="home-hero">
        <Container>
          <div className="home-hero__shell">
            <div className="home-hero__content">
              <p className="home-hero__eyebrow">
                mr zero · AI/ML Student · Full Stack Developer
              </p>
              <h1 className="home-hero__title">
                Premium digital products designed with product taste and
                engineering depth.
              </h1>
              <p className="home-hero__description">
                I build fast, elegant, and scalable web products from first
                concept to production. My approach combines clean frontend
                execution, reliable backend systems, and AI-powered workflows.
              </p>

              <div className="home-hero__actions">
                <Button to="/projects" variant="primary">
                  <FaRocket aria-hidden="true" />
                  Explore Projects
                </Button>
                <Button to="/contact" variant="ghost">
                  <FaCode aria-hidden="true" />
                  Let&apos;s Collaborate
                </Button>
              </div>

              <ul className="home-hero__highlights">
                <li>
                  12+ projects shipped across personal, team, and client work.
                </li>
                <li>
                  Focused on premium UI quality and scalable code architecture.
                </li>
                <li>
                  Strong execution in React, Node.js, APIs, and AI integrations.
                </li>
              </ul>
            </div>

            <div className="home-hero__visual" aria-hidden="true">
              <div className="home-hero__photo-wrap">
                <img
                  alt="Mohit Raghav"
                  className="home-hero__photo"
                  src="/images/profile/profile-main.jpeg"
                />
              </div>
              <article className="home-hero__stat home-hero__stat--primary">
                <p className="home-hero__stat-value">12+</p>
                <p className="home-hero__stat-label">Projects Delivered</p>
              </article>
              <article className="home-hero__stat home-hero__stat--secondary">
                <p className="home-hero__stat-value">3+</p>
                <p className="home-hero__stat-label">Years Building</p>
              </article>
            </div>
          </div>

          <div className="home-hero__pillars">
            {capabilityPillars.map((item) => {
              const Icon = item.icon;

              return (
                <article className="home-hero__pillar" key={item.title}>
                  <span className="home-hero__pillar-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className="home-hero__pillar-title">{item.title}</h3>
                  <p className="home-hero__pillar-text">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="home-preview home-preview--skills">
        <Container>
          <div className="home-preview__head">
            <SectionTitle
              eyebrow="Core Skills"
              title="Engineering strengths that turn ideas into products"
              subtitle="A focused toolkit across frontend, backend, and modern AI-driven development."
            />
            <Button to="/skills" variant="secondary">
              View All Skills
            </Button>
          </div>

          <div className="home-preview__grid">
            {featuredSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.id}-${index}`}
                showCategory={false}
                skill={skill}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="home-preview home-preview--projects">
        <Container>
          <div className="home-preview__head">
            <SectionTitle
              eyebrow="Selected Work"
              title="Recent builds with real business impact"
              subtitle="SaaS, productivity, and event-focused builds engineered for speed and reliability."
            />
            <Button to="/projects" variant="secondary">
              Browse Portfolio
            </Button>
          </div>

          <div className="home-preview__grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="contact-cta">
        <Container className="contact-cta__inner">
          <SectionTitle
            align="center"
            eyebrow="Let's Build"
            title="Need a high-quality product with premium UI and clean architecture?"
            subtitle="I can help you move from concept to production with speed, clarity, and strong execution."
          />

          <Button to="/contact" variant="primary">
            Start a Conversation
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;
