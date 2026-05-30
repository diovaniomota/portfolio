import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user types
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const phoneNumber = '5547988078816';
      
      const text = `Olá! Meu nome é ${formData.name} (${formData.email}).\n\nMensagem:\n${formData.message}`;
      const encodedText = encodeURIComponent(text);
      
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;
      
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setSubmitStatus('success');
      setSubmitMessage('Redirecionando para o WhatsApp... Sua mensagem está pronta para ser enviada!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Ocorreu um erro ao abrir o WhatsApp. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <p><a href="mailto:diovaniomotaa@gmail.com">diovaniomotaa@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Telefone</h4>
                  <p><a href="tel:+5547988078816">(47) 98807-8816</a></p>
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
          
          <form onSubmit={handleSubmit} className="contact-form glass">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Seu nome completo" 
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="seu@email.com" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Como posso ajudar?"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {submitStatus !== 'idle' && (
              <div className={`form-feedback ${submitStatus} glass`}>
                {submitMessage}
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
