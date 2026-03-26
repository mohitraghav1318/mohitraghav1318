import Button from '../common/Button';
import {
  FaArrowUpRightFromSquare,
  FaBrain,
  FaCode,
  FaDatabase,
  FaFlask,
  FaFolderOpen,
  FaGem,
  FaGithub,
  FaGlobe,
  FaPeopleGroup,
  FaServer,
  FaUser,
} from 'react-icons/fa6';

const TECH_ICON_MAP = {
  react: FaCode,
  vite: FaCode,
  javascript: FaCode,
  html: FaCode,
  css: FaCode,
  scss: FaCode,
  node: FaServer,
  'node.js': FaServer,
  express: FaServer,
  python: FaFlask,
  flask: FaFlask,
  database: FaDatabase,
  mongodb: FaDatabase,
  firebase: FaDatabase,
  langchain: FaBrain,
  gemini: FaBrain,
  api: FaBrain,
};

const PROJECT_TYPE_ICON_MAP = {
  personal: FaUser,
  team: FaPeopleGroup,
  freelance: FaGem,
};

const getTechIcon = (tech) => {
  const normalized = tech.toLowerCase();
  const match = Object.entries(TECH_ICON_MAP).find(([key]) =>
    normalized.includes(key),
  );
  return match ? match[1] : FaCode;
};

const getTypeIcon = (type) =>
  PROJECT_TYPE_ICON_MAP[type?.toLowerCase()] || FaFolderOpen;

function ProjectCard({ project }) {
  const TypeIcon = getTypeIcon(project.type);

  return (
    <article className="project-card">
      <div className="project-card__media">
        {project.image ? (
          <img
            alt={project.title}
            className="project-card__image"
            src={project.image}
          />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <FaGem className="project-card__placeholder-icon" />
            <span className="project-card__placeholder-text">
              Premium Build
            </span>
          </div>
        )}
      </div>

      <div className="project-card__content">
        <div className="project-card__meta-row">
          <p className="project-card__meta">{project.year}</p>
          <p className="project-card__type">
            <TypeIcon className="project-card__type-icon" />
            <span>{project.type || 'Project'}</span>
          </p>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tech">
          {project.tech.map((item) => {
            const TechIcon = getTechIcon(item);

            return (
              <li className="project-card__tech-item" key={item}>
                <TechIcon
                  className="project-card__tech-icon"
                  aria-hidden="true"
                />
                {item}
              </li>
            );
          })}
        </ul>

        <div className="project-card__actions">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              rel="noreferrer"
              target="_blank"
              variant="primary"
            >
              <FaArrowUpRightFromSquare aria-hidden="true" />
              Live Demo
            </Button>
          ) : (
            <span className="project-card__badge project-card__badge--muted">
              <FaGlobe aria-hidden="true" />
              Launching Soon
            </span>
          )}

          {project.repoUrl ? (
            <Button
              href={project.repoUrl}
              rel="noreferrer"
              target="_blank"
              variant="ghost"
            >
              <FaGithub aria-hidden="true" />
              Source
            </Button>
          ) : (
            <span className="project-card__badge project-card__badge--muted">
              <FaGithub aria-hidden="true" />
              Private Repo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
