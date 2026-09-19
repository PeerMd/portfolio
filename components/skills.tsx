import { skills } from '@/lib/data';
import { Reveal } from './reveal';

export function Skills() {
  return (
    <section id="skills" className="section section-skills">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MY SKILLS</span>
            <h2>Technologies I Work With</h2>
          </div>
          <span className="section-link">Always learning something new →</span>
        </div>
        <div className="skills-grid">
          {skills.map(([skill, icon], index) => (
            <Reveal key={skill} delay={Math.min(index * 0.02, 0.2)}>
              <div className="skill-card">
                <span className={`skill-icon skill-${index}`}>{icon}</span>
                <span>{skill}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
