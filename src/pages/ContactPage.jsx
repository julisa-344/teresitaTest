import React from 'react';
import ContactSection from '../components/Sections/ContactSection';
import { 
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  ShareIcon,
  MapPinIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              ¿Tienes preguntas sobre nuestros productos o recetas? Nos encanta escuchar de ti. 
              Estamos aquí para ayudarte en todo lo que necesites.
            </p>
          </div>

          {/* Contact Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-primary-50 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl lg:text-4xl font-bold text-red-700 mb-2">
                24h</div>
              <div className="text-gray-700">
                Tiempo de respuesta</div>
            </div>
            <div className="text-center bg-primary-50 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl lg:text-4xl font-bold text-red-700 mb-2">
                98%</div>
              <div className="text-gray-700">
                Satisfacción del cliente</div>
            </div>
            <div className="text-center bg-primary-50 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl lg:text-4xl font-bold text-red-700 mb-2">
                24/7</div>
              <div className="text-gray-700">
                WhatsApp disponible</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Extended Contact Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
              Más Formas de Contactarnos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Elige el canal que más te convenga para comunicarte con nosotros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* WhatsApp */}
    <div className="bg-white text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-700">
                <ChatBubbleLeftRightIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp Business</h3>
              <p className="text-gray-700 mb-4">
                Atención inmediata y personalizada las 24 horas del día
              </p>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Escribir al WhatsApp
              </button>
            </div>

            {/* Email */}
    <div className="bg-white text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-700">
                <EnvelopeIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Correo Electrónico</h3>
              <p className="text-gray-700 mb-4">
                Para consultas detalladas y soporte técnico
              </p>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Enviar Email
              </button>
            </div>

            {/* Teléfono */}
    <div className="bg-white text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-700">
                <PhoneIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Línea Directa</h3>
              <p className="text-gray-700 mb-4">
                Habla directamente con nuestro equipo de atención
              </p>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Llamar Ahora
              </button>
            </div>

            {/* Redes Sociales */}
    <div className="bg-white text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-700">
                <ShareIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Redes Sociales</h3>
              <p className="text-gray-700 mb-4">
                Síguenos y contáctanos en nuestras redes oficiales
              </p>
              <div className="flex justify-center space-x-3">
                <button className="bg-primary-700 hover:bg-primary-800 text-white p-3 rounded-lg transition-colors flex items-center justify-center group">
                  <Facebook size={20} />
                </button>
                <button className="bg-primary-700 hover:bg-primary-800 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
                  <Instagram size={20} />
                </button>
                <button className="bg-primary-700 hover:bg-primary-800 text-white p-3 rounded-lg transition-colors flex items-center justify-center">
                  <Youtube size={20} />
                </button>
              </div>
            </div>

            {/* Visítanos */}
    <div className="bg-white text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-700">
                <MapPinIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visítanos</h3>
              <p className="text-gray-700 mb-4">
                Ven a nuestras oficinas para una atención presencial
              </p>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Ver Ubicación
              </button>
            </div>

            {/* Centro de Ayuda */}
    <div className="bg-white text-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-700">
                <QuestionMarkCircleIcon />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Centro de Ayuda</h3>
              <p className="text-gray-700 mb-4">
                Preguntas frecuentes y tutoriales de productos
              </p>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Ver FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              ¿Necesitas ayuda urgente?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo de atención al cliente está listo para resolver 
              cualquier duda sobre productos, recetas o pedidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                WhatsApp Inmediato
              </button>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30">
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
