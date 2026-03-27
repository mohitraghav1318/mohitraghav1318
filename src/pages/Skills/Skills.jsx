import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import SkillCard from '../../components/skill/SkillCard';
import skills from '../../data/skills';
import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaGear,
  FaLayerGroup,
  FaRocket,
  FaWandMagicSparkles,
} from 'react-icons/fa6';
import './Skills.scss';

const CATEGORY_META_MAP = [
  {
    match: 'frontend',
    icon: FaCode,
    label: 'UI & Interaction',
    blurb:
      'Accessible, responsive interfaces with modern component architecture.',
  },
  {
    match: 'backend',
    icon: FaLayerGroup,
    label: 'APIs & Services',
    blurb:
      'Reliable server logic, endpoint design, and application architecture.',
  },
  {
    match: 'database',
    icon: FaDatabase,
    label: 'Data Layer',
    blurb: 'Flexible schemas and production-ready persistence patterns.',
  },
  {
    match: 'cloud',
    icon: FaRocket,
    label: 'Platform Services',
    blurb: 'Managed tools for auth, hosting, and rapid deployment workflows.',
  },
  {
    match: 'ai',
    icon: FaBrain,
    label: 'AI Integrations',
    blurb: 'LLM-powered features and automation-focused backend integrations.',
  },
  {
    match: 'automation',
    icon: FaWandMagicSparkles,
    label: 'Automation',
    blurb: 'Scripting and intelligent workflows that speed up delivery.',
  },
  {
    match: 'tools',
    icon: FaGear,
    label: 'Engineering Workflow',
    blurb: 'Version control, CLI fluency, and efficient developer tooling.',
  },
];

const getCategoryMeta = (category) => {
  const normalized = category.toLowerCase();
  return (
    CATEGORY_META_MAP.find((item) => normalized.includes(item.match)) ?? {
      icon: FaLayerGroup,
      label: 'Engineering',
      blurb: 'Core capabilities spanning product development and delivery.',
    }
  );
};

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
              {(() => {
                const categoryMeta = getCategoryMeta(category);
                const CategoryIcon = categoryMeta.icon;

                return (
                  <div className="skills-page__group-header">
                    <div className="skills-page__group-heading-wrap">
                      <span
                        className="skills-page__group-icon"
                        aria-hidden="true"
                      >
                        <CategoryIcon />
                      </span>
                      <div>
                        <h3 className="skills-page__group-title">{category}</h3>
                        <p className="skills-page__group-description">
                          {categoryMeta.blurb}
                        </p>
                      </div>
                    </div>
                    <p className="skills-page__group-count">
                      <FaLayerGroup aria-hidden="true" />
                      <span>{group.length} skills</span>
                    </p>
                  </div>
                );
              })()}
              <div className="skills-page__grid">
                {group.map((skill, index) => (
                  <SkillCard
                    key={`${skill.id}-${index}`}
                    skill={skill}
                    showCategory={false}
                  />
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
