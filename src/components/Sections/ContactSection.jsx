import React, { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PlayIcon,
  CameraIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Dirección',
      details: ['Av. Industrial 123', 'Lima, Perú']
    },
    {
      icon: PhoneIcon,
      title: 'Teléfono',
      details: ['+51 1 234-5678', '+51 987 654 321']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['info@teresita.com.pe', 'ventas@teresita.com.pe']
    },
    {
      icon: ClockIcon,
      title: 'Horarios',
      details: ['Lun - Vie: 8:00 AM - 6:00 PM', 'Sáb: 9:00 AM - 1:00 PM']
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Contáctanos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros productos o recetas? No dudes en contactarnos. 
            Nuestro equipo estará encantado de atenderte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-8">
              Información de contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-800 mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-neutral-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-neutral-800 mb-4">
                Síguenos en redes sociales
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: UserGroupIcon, color: 'hover:bg-blue-500' },
                  { name: 'Instagram', icon: CameraIcon, color: 'hover:bg-pink-500' },
                  { name: 'YouTube', icon: PlayIcon, color: 'hover:bg-red-500' },
                  { name: 'WhatsApp', icon: ChatBubbleLeftRightIcon, color: 'hover:bg-green-500' }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.name}
                      className={`w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center hover:text-white transition-all duration-300 transform hover:scale-105 ${social.color}`}
                      title={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6">
              Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona un tema</option>
                  <option value="productos">Consulta sobre productos</option>
                  <option value="recetas">Ayuda con recetas</option>
                  <option value="distribucion">Distribución y ventas</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-700 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
