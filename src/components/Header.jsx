import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#" className="logo">
          <span className="text-gradient">&lt;Diovanio/&gt;</span>
        </a>

        <nav className="desktop-nav">
          <a href="#about">Sobre</a>
          <a href="#experience">Experiência</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contato</a>
        </nav>

        <div className="social-links desktop-only">
          <a href="https://github.com/diovaniomota" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/diovaniomota/?skipRedirect=true" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
        <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experiência</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projetos</a>
        <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Habilidades</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
        <div className="mobile-socials">
          <a href="https://github.com/diovaniomota" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/diovaniomota/?skipRedirect=true" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          <a href="mailto:email@example.com"><Mail size={24} /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
