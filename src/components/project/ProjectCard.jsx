import Button from '../common/Button';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img alt={project.title} className="project-card__image" src={project.image} />
      </div>

      <div className="project-card__content">
        <p className="project-card__meta">{project.year}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tech">
          {project.tech.map((item) => (
            <li className="project-card__tech-item" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <div className="project-card__actions">
          <Button href={project.liveUrl} rel="noreferrer" target="_blank" variant="primary">
            Live Demo
          </Button>
          <Button href={project.repoUrl} rel="noreferrer" target="_blank" variant="ghost">
            Source
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
