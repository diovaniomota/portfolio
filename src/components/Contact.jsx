import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          Vamos <span className="text-gradient">Conversar</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info glass">
            <h3>Informações de Contato</h3>
            <p className="contact-desc">
              Sinta-se à vontade para entrar em contato para projetos, 
              oportunidades de trabalho ou apenas para dizer um olá.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>diovaniomotaa@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Telefone</h4>
                  <p>(48) 98858-3186</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Localização</h4>
                  <p>Garuva, SC - Brasil</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome completo" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="seu@email.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" rows="5" placeholder="Como posso ajudar?"></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Enviar Mensagem <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
