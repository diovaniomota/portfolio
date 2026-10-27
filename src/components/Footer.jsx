import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Diovanio Mota Mendes. Todos os direitos reservados.</p>
          <p className="footer-made-with">
            Feito com <span className="text-gradient">React</span> & <span className="text-gradient">Vanilla CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
