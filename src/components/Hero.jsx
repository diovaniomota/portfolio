import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="typewriter-text">
      {`${words[index].substring(0, subIndex)}`}
      <span className={blink ? "typewriter-cursor blink" : "typewriter-cursor"}>_</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="about" className="hero section">
      <div className="hero-bg">
        <div className="glow-circle top"></div>
        <div className="glow-circle bottom"></div>
      </div>
      
      <div className="container hero-content animate-fade-in">
        <div className="hero-badge glass">
          <span className="pulse-dot"></span>
          Disponível para novas oportunidades
        </div>
        
        <h1 className="hero-title">
          Olá, eu sou <span className="text-gradient">Diovanio Mota</span><br />
          <TypeWriter words={[
            'Criador do DartWork ERP e DartChef.',
            'Desenvolvo Apps Mobile com Flutter.',
            'Sistemas Web escaláveis com React e Next.js.',
            'Backend robusto com Node.js e Supabase.',
            'Transformo ideias em produtos reais.'
          ]} />
        </h1>
        
        <p className="hero-description">
          Desenvolvedor com experiência na criação de soluções web e mobile,
          atuando no desenvolvimento de sistemas para negócios, aplicativos,
          dashboards, integrações com APIs e banco de dados.
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            Ver Projetos <ArrowRight size={20} />
          </a>
          <a href="/curriculo.pdf" download="Currículo Diovanio.pdf" className="btn glass btn-glow" target="_blank" rel="noreferrer">
            Baixar Currículo <Download size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
