import React from 'react';
import TechMarquee from './TechMarquee';
import './Skills.css';

const skills = [
  { name: 'Flutter', level: 95 },
  { name: 'ReactJS / Next.js', level: 90 },
  { name: 'JavaScript / TypeScript', level: 85 },
  { name: 'Supabase / Firebase', level: 85 },
  { name: 'PostgreSQL / MySQL', level: 80 },
  { name: 'HTML / CSS / Tailwind', level: 90 },
  { name: 'Git & GitHub', level: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Minhas <span className="text-gradient">Habilidades</span>
        </h2>
        
        <TechMarquee />
        
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-item glass">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
