import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/project/ProjectCard';
import projects, {
  projectSectionOrder,
  projectTypeMeta,
} from '../../data/projects';
import { FaArrowTrendUp, FaGlobe, FaLayerGroup } from 'react-icons/fa6';
import './Projects.scss';

function Projects() {
  const liveProjects = projects.filter((project) => Boolean(project.liveUrl));
  const privateProjects = projects.filter((project) => !project.repoUrl);

  const groupedProjects = projects.reduce((accumulator, project) => {
    const key = project.type || 'other';

    if (!accumulator[key]) {
      accumulator[key] = [];
    }

    accumulator[key].push(project);
    return accumulator;
  }, {});

  const projectSections = projectSectionOrder
    .filter((section) => groupedProjects[section]?.length)
    .map((section) => ({
      key: section,
      projects: groupedProjects[section],
      ...projectTypeMeta[section],
    }));

  return (
    <div className="projects-page">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Portfolio builds crafted for performance and polish"
          subtitle="Each project focuses on thoughtful UX, reliable architecture, and scalable implementation."
        />

        <div className="projects-page__overview">
          <article className="projects-page__overview-item">
            <p className="projects-page__overview-label">
              <FaLayerGroup aria-hidden="true" />
              Total Projects
            </p>
            <p className="projects-page__overview-value">{projects.length}</p>
          </article>

          <article className="projects-page__overview-item">
            <p className="projects-page__overview-label">
              <FaGlobe aria-hidden="true" />
              Live Deployments
            </p>
            <p className="projects-page__overview-value">
              {liveProjects.length}
            </p>
          </article>

          <article className="projects-page__overview-item">
            <p className="projects-page__overview-label">
              <FaArrowTrendUp aria-hidden="true" />
              Private or Ongoing
            </p>
            <p className="projects-page__overview-value">
              {privateProjects.length}
            </p>
          </article>
        </div>

        <div className="projects-page__sections">
          {projectSections.map((section) => (
            <section className="projects-page__section" key={section.key}>
              <div className="projects-page__section-head">
                <h3 className="projects-page__section-title">
                  {section.title}
                </h3>
                <p className="projects-page__section-subtitle">
                  {section.subtitle}
                </p>
              </div>

              <div className="projects-page__grid">
                {section.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
