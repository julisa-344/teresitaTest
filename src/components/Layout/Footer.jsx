import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Productos',
      links: [
        { name: 'Condimentos', href: '/productos#condimentos' },
        { name: 'Especias', href: '/productos#especias' },
        { name: 'Sazonadores', href: '/productos#sazonadores' },
        { name: 'Mezclas especiales', href: '/productos#especiales' },
        { name: 'Nuevos productos', href: '/productos#nuevos' }
      ]
    },
    {
      title: 'Recetas',
      links: [
        { name: 'Platos principales', href: '/recetas#principales' },
        { name: 'Sopas y cremas', href: '/recetas#sopas' },
        { name: 'Acompañamientos', href: '/recetas#acompañamientos' },
        { name: 'Postres', href: '/recetas#postres' },
        { name: 'Recetas rápidas', href: '/recetas#rapidas' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Historia', href: '/nosotros#historia' },
        { name: 'Calidad', href: '/nosotros#calidad' },
        { name: 'Sostenibilidad', href: '/nosotros#sostenibilidad' },
        { name: 'Trabaja con nosotros', href: '/contacto#trabajo' }
      ]
    },
    {
      title: 'Soporte',
      links: [
        { name: 'Centro de ayuda', href: '/contacto#ayuda' },
        { name: 'Contacto', href: '/contacto' },
        { name: 'FAQ', href: '/contacto#faq' },
        { name: 'Distribuidores', href: '/contacto#distribuidores' },
        { name: 'Términos y condiciones', href: '/contacto#terminos' }
      ]
    }
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Teresita"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            
            <p className="text-neutral-300 mb-6 leading-relaxed max-w-md">
              Más de 40 años llevando los sabores auténticos del Perú a tu mesa. 
              Tradición, calidad y confianza en cada producto.
            </p>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Síguenos</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: '📘', color: 'hover:bg-blue-600' },
                  { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-600' },
                  { name: 'YouTube', icon: '📺', color: 'hover:bg-red-600' },
                  { name: 'WhatsApp', icon: '💬', color: 'hover:bg-green-600' }
                ].map((social) => (
                  <button
                    key={social.name}
                    className={`w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-lg hover:text-white transition-all duration-300 transform hover:scale-105 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-neutral-400 text-sm">
              © {currentYear} Teresita. Todos los derechos reservados.
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-neutral-400">
                <Link to="/contacto#privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
                <Link to="/contacto#terminos" className="hover:text-white transition-colors">
                  Términos de Uso
                </Link>
                <Link to="/contacto#cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
