import React from 'react';
import './TechMarquee.css';

const techStack = [
  'React', 'Next.js', 'Flutter', 'Dart', 'Node.js', 
  'TypeScript', 'JavaScript', 'Supabase', 'PostgreSQL', 
  'Firebase', 'TailwindCSS', 'HTML5', 'CSS3', 'Git', 'GitHub'
];

const TechMarquee = () => {
  return (
    <div className="tech-marquee-container">
      <div className="tech-marquee">
        {[...techStack, ...techStack].map((tech, index) => (
          <div key={index} className="tech-item glass">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
