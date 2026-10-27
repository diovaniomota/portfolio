import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'QA Automation Engineer',
    company: 'Bextor · Terceirizado',
    period: 'jul. 2026 — hoje',
    meta: 'Itajaí, SC · Remoto',
    description: 'Automação de testes no ImportaSim, o SaaS de simulação de importação da Bextor.'
  },
  {
    id: 2,
    role: 'Fundador e Sócio · Desenvolvedor Full Stack',
    company: 'DartSoft Sistemas · Tempo integral',
    period: 'mai. 2023 — hoje',
    meta: 'Garuva, SC · Remoto',
    description: 'Mantenho o ecossistema em produção: DartWork, DartChef, a biblioteca compartilhada, os portais e os apps. A stack é React.js, Next.js, Flutter, PostgreSQL e Supabase.'
  },
  {
    id: 3,
    role: 'Desenvolvedor Mobile',
    company: 'FutbolTalent.Pro · Temporário',
    period: 'dez. 2025 — hoje',
    meta: 'Província de Buenos Aires, Argentina · Remoto',
    description: 'Aplicativo de talentos do futebol em Flutter, com PostgreSQL no Supabase, feed de vídeos e validação de contas.'
  },
  {
    id: 4,
    role: 'Desenvolvedor React.js e PostgreSQL',
    company: 'Destrave · Temporário',
    period: 'out. 2025 — abr. 2026',
    meta: 'São Paulo, SP · Remoto',
    description: 'Desenvolvimento com React.js e PostgreSQL no Supabase, em contrato temporário.'
  },
  {
    id: 5,
    role: 'Desenvolvedor Flutter e FlutterFlow PJ',
    company: 'Fraktal Softwares · Temporário',
    period: 'jan. 2025 — jun. 2025',
    meta: 'São Paulo, SP · Remoto',
    description: 'Aplicativos em Flutter e FlutterFlow, em contrato PJ de seis meses.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          Experiência <span className="text-gradient">Profissional</span>
        </h2>
        
        <div className="experience-timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item glass">
              <div className="timeline-icon">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                {exp.meta && <p className="timeline-meta">{exp.meta}</p>}
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
