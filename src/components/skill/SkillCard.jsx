import {
  FaBolt,
  FaBrain,
  FaCode,
  FaDatabase,
  FaGear,
  FaLayerGroup,
  FaMedal,
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

function SkillCard({ skill }) {
  const CategoryIcon = getCategoryIcon(skill.category);

  return (
    <article className="skill-card">
      <p className="skill-card__category">
        <CategoryIcon
          className="skill-card__category-icon"
          aria-hidden="true"
        />
        <span>{skill.category}</span>
      </p>
      <h3 className="skill-card__title">{skill.name}</h3>
      <p className="skill-card__description">{skill.summary}</p>
      <p className="skill-card__level">
        <FaMedal aria-hidden="true" />
        <span>{skill.level}</span>
      </p>
    </article>
  );
}

export default SkillCard;
