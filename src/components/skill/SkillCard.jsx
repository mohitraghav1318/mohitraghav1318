import {
  FaBolt,
  FaBrain,
  FaCodeBranch,
  FaCode,
  FaDatabase,
  FaFire,
  FaGear,
  FaGitAlt,
  FaLaptopCode,
  FaLayerGroup,
  FaLeaf,
  FaMedal,
  FaPalette,
  FaRoute,
  FaServer,
  FaShield,
  FaTerminal,
  FaWandMagicSparkles,
} from 'react-icons/fa6';

const CATEGORY_ICON_MAP = {
  frontend: FaCode,
  backend: FaLayerGroup,
  database: FaDatabase,
  cloud: FaDatabase,
  ai: FaBrain,
  automation: FaBrain,
  tools: FaGear,
};

const getCategoryIcon = (category) => {
  const normalized = category.toLowerCase();
  const match = Object.entries(CATEGORY_ICON_MAP).find(([key]) =>
    normalized.includes(key),
  );
  return match ? match[1] : FaBolt;
};

const SKILL_ICON_MAP = {
  react: FaCode,
  vite: FaBolt,
  javascript: FaCode,
  html: FaCodeBranch,
  css: FaPalette,
  scss: FaPalette,
  tailwind: FaWandMagicSparkles,
  bootstrap: FaLaptopCode,
  router: FaRoute,
  node: FaServer,
  express: FaServer,
  rest: FaShield,
  crud: FaLayerGroup,
  flask: FaFire,
  mongodb: FaDatabase,
  firebase: FaFire,
  python: FaBrain,
  llm: FaBrain,
  git: FaGitAlt,
  github: FaGitAlt,
  linux: FaTerminal,
  ubuntu: FaLeaf,
};

const getSkillIcon = (name) => {
  const normalized = name.toLowerCase();
  const match = Object.entries(SKILL_ICON_MAP).find(([key]) =>
    normalized.includes(key),
  );
  return match ? match[1] : FaBolt;
};

function SkillCard({ skill, showCategory = true }) {
  const CategoryIcon = getCategoryIcon(skill.category);
  const SkillIcon = getSkillIcon(skill.name);

  return (
    <article className="skill-card">
      {showCategory && (
        <p className="skill-card__category">
          <CategoryIcon
            className="skill-card__category-icon"
            aria-hidden="true"
          />
          <span>{skill.category}</span>
        </p>
      )}
      <div className="skill-card__heading">
        <span className="skill-card__icon" aria-hidden="true">
          <SkillIcon />
        </span>
        <h3 className="skill-card__title">{skill.name}</h3>
      </div>
      <p className="skill-card__description">{skill.summary}</p>
      <p className="skill-card__level">
        <FaMedal aria-hidden="true" />
        <span>{skill.level}</span>
      </p>
    </article>
  );
}

export default SkillCard;
