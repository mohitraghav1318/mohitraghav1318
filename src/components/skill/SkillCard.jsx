function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <p className="skill-card__category">{skill.category}</p>
      <h3 className="skill-card__title">{skill.name}</h3>
      <p className="skill-card__description">{skill.summary}</p>
      <p className="skill-card__level">{skill.level}</p>
    </article>
  );
}

export default SkillCard;
