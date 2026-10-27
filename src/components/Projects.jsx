import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const featured = [
  {
    id: 'dartwork',
    title: 'DartWork ERP',
    result: 'ERP em uso na rotina de vendas, estoque, financeiro e gestão.',
    description: 'Sistema principal da DartSoft, com versão web. Cobre frente de caixa, estoque, financeiro e a administração do negócio.',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Web'],
    image: '/projects/dartwork.png',
    imageAlt: 'Ícone do DartWork',
    private: true,
    live: 'https://work.dartsistemas.com',
    liveLabel: 'Abrir o sistema',
    access: {
      host: 'work.dartsistemas.com',
      email: 'contato@dartsistemas.com',
      password: '123456',
    },
  },
  {
    id: 'dartchef',
    title: 'DartChef',
    result: 'Sistema de restaurante em uso no salão, no caixa e no autoatendimento.',
    description: 'Operação gastronômica da DartSoft, com versão web e o app de tablet ligado ao mesmo sistema.',
    tags: ['React', 'Next.js', 'Flutter', 'Web'],
    image: '/projects/dartchef.png',
    imageAlt: 'Ícone do DartChef',
    private: true,
    live: 'https://chef.dartsistemas.com',
    liveLabel: 'Abrir o sistema',
    access: {
      host: 'chef.dartsistemas.com',
      email: 'chef@dartsistemas.com',
      password: '123456',
    },
  },
  {
    id: 'futbol',
    title: 'FutbolTalent Pro',
    result: 'App de talentos do futebol para um cliente da Argentina, com feed de vídeos e validação de contas.',
    description: 'O aplicativo é privado. O portal em que o responsável autoriza a conta de um menor está no ar.',
    tags: ['Flutter', 'Dart', 'Supabase'],
    image: '/projects/futboltalent.png',
    imageAlt: 'Logo do FutbolTalent Pro',
    private: true,
    live: 'https://futboltalent-guardian-web.vercel.app',
    liveLabel: 'Portal do responsável',
  },
  {
    id: 'motocas',
    title: 'Motocas',
    result: 'Plataforma de locação de motos: site, app do cliente, frota, rastreamento e WhatsApp.',
    description: 'Cada parte tem repositório próprio. O conjunto cobre a vitrine, a operação da frota e o contato com o cliente.',
    tags: ['Next.js', 'Flutter', 'Supabase', 'Traccar'],
    image: '/projects/motocas.png',
    imageAlt: 'Logo da Motocas',
    private: true,
    wideImage: true,
  },
  {
    id: 'importasim',
    title: 'ImportaSim',
    result: 'SaaS da Bextor para simular o custo de importação em conta e ordem, direta e encomenda.',
    description: 'Inclui motor de regras, CRM comercial e os documentos da operação, como numerário e fechamento.',
    tags: ['React', 'TypeScript', 'Supabase'],
    wordmark: 'ImportaSim',
    private: true,
  },
];

const dartsoftModules = [
  {
    title: 'Kit DartSoft',
    description: 'Biblioteca @dartsoft/kit, compartilhada pelo DartWork, DartChef, Admin e Portal do Parceiro. Reúne filtros, cupom térmico, fiscal, offline e o instalador.',
  },
  {
    title: 'Portal do Parceiro',
    description: 'Parceiros revendem DartWork e DartChef em white label.',
  },
  {
    title: 'Painel Admin',
    description: 'Dashboard central do ecossistema.',
  },
  {
    title: 'Portal do Contador',
    description: 'Versão web para a contabilidade baixar XMLs e notas emitidas no DartWork ou no DartChef.',
    web: 'https://contador.dartsistemas.com',
    access: {
      email: 'financeiro@dartsistemas.com',
      password: '123456',
    },
  },
  {
    title: 'Migration Tool',
    description: 'Conversão de dados vindos de sistemas antigos.',
  },
  {
    title: 'Autoatendimento DartChef',
    description: 'App Flutter de tablet ligado ao DartChef.',
  },
  {
    title: 'Work ERP Mobile',
    description: 'Versão mobile do DartWork.',
  },
  {
    title: 'Site DartSoft',
    description: 'Site dos sistemas, com vendas, estoque e fiscal.',
  },
  {
    title: 'Disparo WhatsApp',
    description: 'Conecta o WhatsApp por QR Code, importa planilha e dispara mensagens.',
  },
];

const otherProjects = [
  {
    title: 'Pegada',
    description: 'App de luta de braço para atletas, treinos, campeonatos e ranking.',
    private: true,
  },
  {
    title: 'Meu Gestor Financeiro',
    description: 'Finanças pessoais e do estúdio, com lançamentos isolados por usuário.',
    private: true,
  },
  {
    title: 'Painel do Gestor Financeiro',
    description: 'Admin comercial: mensalidade, cortesia, bloqueio e preço.',
    private: true,
  },
  {
    title: 'Apple CI Platform',
    description: 'CI/CD para compilar, assinar e publicar apps iOS na App Store e no TestFlight.',
    private: true,
  },
  {
    title: 'CartórioHub',
    description: 'ERP administrativo para cartórios: financeiro, RH, documentos e auditoria.',
    github: 'https://github.com/diovaniomota/erpCartorio',
  },
  {
    title: 'TD Barbearia Web',
    description: 'Versão web do app de barbearia, com agendamento e painel.',
    github: 'https://github.com/diovaniomota/barbearia-react',
  },
  {
    title: 'Ultra Bank',
    description: 'Landing page de fintech, feita para conversão.',
    github: 'https://github.com/diovaniomota/Ultra-Bank-site',
  },
  {
    title: 'App Barbearia',
    description: 'App Flutter de agendamento entre cliente e barbearia.',
    private: true,
  },
  {
    title: 'App Sinateps',
    description: 'App de comunicação e serviços para associados do Sinateps.',
    github: 'https://github.com/diovaniomota/sinateps',
  },
  {
    title: 'Sistema de Ponto',
    description: 'Registro e controle de ponto de funcionários.',
    github: 'https://github.com/diovaniomota/ponto',
  },
];

const ProjectRow = ({ project }) => (
  <li className="project-row glass">
    <div>
      <div className="project-row-title">
        <h4>{project.title}</h4>
        {project.private && <span className="tag tag-private">Repositório privado</span>}
      </div>
      <p>{project.description}</p>
      {project.access && (
        <div className="demo-access">
          <p>Acesso para testar</p>
          <p>Login <strong>{project.access.email}</strong></p>
          <p>Senha <strong>{project.access.password}</strong></p>
        </div>
      )}
    </div>
    {(project.web || project.github) && (
      <div className="project-row-links">
        {project.web && (
          <a className="btn btn-primary" href={project.web} target="_blank" rel="noreferrer">
            Abrir o sistema
          </a>
        )}
        {project.github && (
          <a className="project-code" href={project.github} target="_blank" rel="noreferrer">
            <FaGithub size={16} /> Código
          </a>
        )}
      </div>
    )}
  </li>
);

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Meus Principais <span className="text-gradient">Projetos</span>
        </h2>
        <p className="projects-intro">
          Cinco trabalhos em destaque. Repositório privado aparece como etiqueta e não leva a um link fechado.
        </p>

        <div className="featured-grid">
          {featured.map(project => (
            <article key={project.id} className="featured-card glass">
              <div className={`featured-visual ${project.shot ? 'is-shot' : ''} ${project.wideImage ? 'is-wide' : ''}`}>
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt} />
                ) : (
                  <span className="featured-wordmark">{project.wordmark}</span>
                )}
              </div>
              <div className="featured-body">
                {project.private && <span className="tag tag-private">Repositório privado</span>}
                <h3>{project.title}</h3>
                <p className="featured-result">{project.result}</p>
                <p className="featured-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.access && (
                  <div className="demo-access">
                    <p>Acesso para testar</p>
                    <a href={project.live} target="_blank" rel="noreferrer">{project.access.host}</a>
                    <p>Login <strong>{project.access.email}</strong></p>
                    <p>Senha <strong>{project.access.password}</strong></p>
                  </div>
                )}
                {(project.live || project.github) && (
                  <div className="featured-actions">
                    {project.live && (
                      <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
                        {project.liveLabel || 'Ver ao vivo'}
                      </a>
                    )}
                    {project.github && (
                      <a className="btn glass" href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub size={16} /> Código
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="project-block">
          <div className="public-projects-header">
            <h3>Ecossistema DartSoft</h3>
            <p>Todo o ecossistema DartSoft foi feito por mim. O repositório de cada módulo é privado. DartWork, DartChef e o Portal do Contador também têm versão web.</p>
          </div>
          <ul className="project-list">
            {dartsoftModules.map(project => (
              <ProjectRow key={project.title} project={{ ...project, private: true }} />
            ))}
          </ul>
        </div>

        <div className="project-block">
          <div className="public-projects-header">
            <h3>Outros Projetos</h3>
            <p>O código público abre no GitHub. O privado fica só identificado.</p>
          </div>
          <ul className="project-list">
            {otherProjects.map(project => (
              <ProjectRow key={project.title} project={project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
