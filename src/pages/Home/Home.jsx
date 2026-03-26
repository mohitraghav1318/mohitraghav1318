import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/project/ProjectCard';
import SkillCard from '../../components/skill/SkillCard';
import projects from '../../data/projects';
import skills from '../../data/skills';
import './Home.scss';

function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredSkills = skills.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero">
        <Container className="hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">AI/ML Student · Full Stack Developer</p>
            <h1 className="hero__title">Designing premium digital products with code that scales.</h1>
            <p className="hero__description">
              I build modern web experiences with a sharp product eye, strong engineering discipline,
              and performance-first execution from concept to deployment.
            </p>

            <div className="hero__actions">
              <Button to="/projects" variant="primary">
                Explore Projects
              </Button>
              <Button to="/contact" variant="ghost">
                Let&apos;s Collaborate
              </Button>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__photo-wrap">
              <img alt="Mohit Raghav" className="hero__photo" src="/images/profile/profile-main.jpeg" />
            </div>
            <div className="hero__stat hero__stat--primary">
              <span className="hero__stat-value">12+</span>
              <span className="hero__stat-label">Projects Delivered</span>
            </div>
            <div className="hero__stat hero__stat--secondary">
              <span className="hero__stat-value">99%</span>
              <span className="hero__stat-label">Delivery Reliability</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="home-preview home-preview--skills">
        <Container>
          <SectionTitle
            eyebrow="Core Skills"
            title="Engineering strengths that turn ideas into products"
            subtitle="From polished interfaces to robust APIs, I focus on production-quality outcomes."
          />

          <div className="home-preview__grid">
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>

          <div className="home-preview__action">
            <Button to="/skills" variant="secondary">
              View All Skills
            </Button>
          </div>
        </Container>
      </section>

      <section className="home-preview home-preview--projects">
        <Container>
          <SectionTitle
            eyebrow="Selected Work"
            title="Recent builds with real business impact"
            subtitle="A mix of SaaS, analytics, and workflow systems engineered for speed and reliability."
          />

          <div className="home-preview__grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="home-preview__action">
            <Button to="/projects" variant="secondary">
              Browse Portfolio
            </Button>
          </div>
        </Container>
      </section>

      <section className="contact-cta">
        <Container className="contact-cta__inner">
          <SectionTitle
            align="center"
            eyebrow="Let&apos;s Build"
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
