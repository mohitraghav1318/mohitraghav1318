import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import ProjectCard from '../../components/project/ProjectCard';
import projects from '../../data/projects';
import './Projects.scss';

function Projects() {
  return (
    <div className="projects-page">
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Portfolio builds crafted for performance and polish"
          subtitle="Each project focuses on thoughtful UX, reliable architecture, and scalable implementation."
        />

        <div className="projects-page__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
