import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="about" className="hero section">
      <div className="hero-bg">
        <div className="glow-circle top"></div>
        <div className="glow-circle bottom"></div>
      </div>

      <div className="container hero-layout animate-fade-in">
        <div className="hero-copy">
          <div className="hero-badge glass">
            <span className="pulse-dot"></span>
            Disponível para novas oportunidades
          </div>

          <h1 className="hero-title">
            Diovanio <span className="text-gradient">Mota</span>
          </h1>
          <p className="hero-lead">
            Desenvolvo ERP e aplicativos Flutter para empresas.
          </p>
          <p className="hero-description">
            Em Garuva, SC, construo sistemas web e mobile que entram na operação do cliente.
            O principal é o ecossistema DartSoft, com ERP, restaurante, portais e apps.
            Também entrego aplicativos e painéis para outras empresas. Curso Análise e
            Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Ver Projetos <ArrowRight size={20} />
            </a>
            <a href="/curriculo.pdf?v=2" download="Currículo Diovanio.pdf" className="btn glass btn-glow" target="_blank" rel="noreferrer">
              Baixar Currículo <Download size={20} />
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <img src="/portrait.png?v=3" alt="Diovanio Mota" className="hero-portrait" />
          <ul className="hero-facts">
            <li>Garuva, Santa Catarina</li>
            <li>DartSoft Sistemas, desde maio de 2023</li>
            <li>ADS · Universidade Cruzeiro do Sul</li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
