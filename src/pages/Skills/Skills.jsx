import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import SkillCard from '../../components/skill/SkillCard';
import skills from '../../data/skills';
import './Skills.scss';

function Skills() {
  const groupedSkills = skills.reduce((accumulator, skill) => {
    if (!accumulator[skill.category]) {
      accumulator[skill.category] = [];
    }

    accumulator[skill.category].push(skill);
    return accumulator;
  }, {});

  return (
    <div className="skills-page">
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Capabilities across product engineering"
          subtitle="I combine frontend precision, backend reliability, and AI-driven experimentation."
        />

        <div className="skills-page__groups">
          {Object.entries(groupedSkills).map(([category, group]) => (
            <section className="skills-page__group" key={category}>
              <h3 className="skills-page__group-title">{category}</h3>
              <div className="skills-page__grid">
                {group.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Skills;
