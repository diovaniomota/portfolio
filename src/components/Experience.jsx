import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor ReactJS/Next.js/Flutter',
    company: 'Autônomo - DartSoft Sistemas',
    period: '2020 - Presente',
    description: 'Desenvolvimento e manutenção de sistema próprio da DartSoft Sistemas, utilizado por clientes reais em rotinas de gestão, vendas, estoque, financeiro e administração. Atuação com dashboards, interfaces responsivas, integrações com APIs, banco de dados, autenticação, automações e publicação de aplicações.'
  },
  {
    id: 2,
    role: 'Desenvolvedor Flutter PJ',
    company: 'Fraktal Softwares',
    period: '2025 - 2025',
    description: 'Atuação como desenvolvedor Flutter em uma software house, participando do desenvolvimento e manutenção de diferentes projetos mobile para clientes. Trabalho com criação de telas, ajustes de interface, implementação de funcionalidades, correção de bugs e integração com APIs.'
  },
  {
    id: 3,
    role: 'Desenvolvedor Flutter PJ',
    company: 'Pico Spark Solutions',
    period: '2025 - 2025',
    description: 'Atuação no desenvolvimento e manutenção de um produto próprio da empresa, com foco em aplicativo mobile desenvolvido em Flutter. Participação na criação de telas, implementação de funcionalidades, ajustes de layout, correção de bugs, integração com APIs e melhorias na experiência do usuário.'
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
