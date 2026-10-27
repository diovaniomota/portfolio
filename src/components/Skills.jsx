import React from 'react';
import './Skills.css';

const groups = [
  {
    title: 'Web',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML e CSS', 'Tailwind'],
  },
  {
    title: 'Mobile',
    items: ['Flutter', 'Dart', 'React Native', 'Play Store e App Store'],
  },
  {
    title: 'Backend e dados',
    items: ['Node.js', 'Supabase', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    title: 'Entrega',
    items: ['Git e GitHub', 'Vercel', 'CI/CD para iOS'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          Minhas <span className="text-gradient">Habilidades</span>
        </h2>
        <p className="skills-intro">Ferramentas que uso nos sistemas e aplicativos em produção.</p>

        <div className="skills-groups">
          {groups.map(group => (
            <div key={group.title} className="skill-group glass">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
