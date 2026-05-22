import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const dartsoftProjects = [
  {
    id: 1,
    title: 'DartWork ERP',
    description: 'ERP principal com módulos para gestão, financeiro e controle de negócios.',
    tags: ['React', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/diovaniomota/next-dashboard',
  },
  {
    id: 2,
    title: 'DartChef',
    description: 'Sistema especializado para o setor gastronômico e restaurantes.',
    tags: ['React', 'Next.js', 'Web'],
    github: 'https://github.com/diovaniomota/next-food',
  },
  {
    id: 3,
    title: 'Portal do Parceiro',
    description: 'Plataforma para parceiros revenderem e utilizarem os sistemas DartWork e DartChef no formato White Label.',
    tags: ['React', 'TypeScript', 'Dashboard'],
    github: 'https://github.com/diovaniomota/partner-portal',
  },
  {
    id: 4,
    title: 'Painel Admin',
    description: 'Dashboard central para controle do ecossistema DartSoft.',
    tags: ['React', 'Next.js', 'Admin'],
    github: 'https://github.com/diovaniomota/admin-dashboard',
  },
  {
    id: 5,
    title: 'Portal do Contador',
    description: 'Portal para as contabilidades dos clientes extraírem XMLs e notas fiscais emitidas pelo DartWork ou DartChef.',
    tags: ['React', 'Next.js', 'Finanças'],
    github: 'https://github.com/diovaniomota/portalpcontador',
  },
  {
    id: 6,
    title: 'Migration Tool',
    description: 'Ferramenta para conversão e migração de dados de sistemas antigos.',
    tags: ['Node.js', 'Database', 'ETL'],
    github: 'https://github.com/diovaniomota/migration-tool',
  },
  {
    id: 12,
    title: 'Autoatendimento DartChef',
    description: 'Aplicativo Flutter para tablet de autoatendimento, totalmente integrado ao sistema DartChef.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/diovaniomota/next-food-tablet-app',
  },
  {
    id: 13,
    title: 'Work ERP Mobile',
    description: 'Sistema de gestão empresarial (Mobile) vinculado ao DartWork ERP.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/diovaniomota/work_erp_mobile',
  }
];

const publicProjects = [
  {
    id: 7,
    title: 'Ultra Bank',
    description: 'Landing page moderna e responsiva para uma fintech (Ultra Bank), com design focado em conversão e experiência de usuário.',
    tags: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/diovaniomota/Ultra-Bank-site',
  },
  {
    id: 8,
    title: 'FutbolTalent Pro (Cliente da Argentina)',
    description: 'Aplicativo mobile esportivo focado em talentos do futebol. Conta com feed de vídeos, fluxos complexos de validação e integrações com APIs.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/diovaniomota/futboltalent_pro',
  },
  {
    id: 9,
    title: 'App Barbearia',
    description: 'Aplicativo mobile para agendamento de horários e gestão de barbearias, facilitando a interação entre clientes e profissionais.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/diovaniomota/barbearia',
  },
  {
    id: 10,
    title: 'App Sinateps',
    description: 'Aplicativo desenvolvido para instituição/sindicato (Sinateps) para comunicação e serviços aos associados.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/diovaniomota/sinateps',
  },
  {
    id: 11,
    title: 'Sistema de Ponto',
    description: 'Aplicativo para registro e controle de ponto de funcionários.',
    tags: ['Flutter', 'Dart'],
    github: 'https://github.com/diovaniomota/ponto',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Meus Principais <span className="text-gradient">Projetos</span>
        </h2>
        
        {/* Ecossistema DartSoft */}
        <div className="dartsoft-ecosystem glass">
          <div className="ecosystem-header">
            <h3>Ecossistema DartSoft</h3>
            <p>Sistemas privados corporativos e módulos que compõem o ERP principal.</p>
          </div>
          
          <div className="ecosystem-grid">
            {dartsoftProjects.map(project => (
              <a key={project.id} href={project.github} target="_blank" rel="noreferrer" className="ecosystem-card">
                <div className="ecosystem-card-top">
                  <h4>{project.title}</h4>
                  <FaGithub size={18} className="ecosystem-icon" />
                </div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Projetos Públicos e Aplicativos */}
        <div className="public-projects-header">
          <h3>Outros Projetos</h3>
          <p>Aplicativos e sistemas diversos desenvolvidos por mim.</p>
        </div>

        <div className="ecosystem-grid">
          {publicProjects.map(project => (
            <a key={project.id} href={project.github} target="_blank" rel="noreferrer" className="ecosystem-card">
              <div className="ecosystem-card-top">
                <h4>{project.title}</h4>
                <FaGithub size={18} className="ecosystem-icon" />
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
