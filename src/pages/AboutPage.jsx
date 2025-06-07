import React from 'react';
import AboutSection from '../components/Sections/AboutSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutSection />
      
      {/* Extended Company History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-12 text-center">
              Nuestra Historia
            </h2>
            
            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏭</div>
                      <div className="text-2xl font-bold text-neutral-800">1985</div>
                      <div className="text-neutral-600">Fundación</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Los Primeros Pasos</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    En 1985, con una visión clara de preservar los sabores tradicionales del Perú, 
                    nació Teresita. Comenzamos como una pequeña empresa familiar con el sueño de 
                    llevar los condimentos más auténticos a cada hogar peruano.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-secondary-100 to-primary-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📈</div>
                      <div className="text-2xl font-bold text-neutral-800">1995-2005</div>
                      <div className="text-neutral-600">Expansión</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Crecimiento Nacional</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Durante esta década, expandimos nuestra presencia a nivel nacional. 
                    Nuestros productos comenzaron a llegar a más hogares, conquistando 
                    paladares y convirtiéndose en ingredientes esenciales de la cocina peruana.
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌟</div>
                      <div className="text-2xl font-bold text-neutral-800">2005-2025</div>
                      <div className="text-neutral-600">Innovación</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Era Digital y Sostenibilidad</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Hoy en día, Teresita no solo mantiene su compromiso con la calidad tradicional, 
                    sino que también abraza la innovación y la sostenibilidad. Nuestro recetario 
                    digital y nuestros procesos eco-amigables reflejan nuestro compromiso con las 
                    nuevas generaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Detrás de cada producto Teresita hay un equipo apasionado por la calidad y la tradición culinaria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'María González', role: 'Directora General', icon: '👩‍💼', description: 'Lidera la visión estratégica de la empresa' },
              { name: 'Carlos Mendoza', role: 'Chef Maestro', icon: '👨‍🍳', description: 'Desarrolla y perfecciona nuestras recetas' },
              { name: 'Ana Ruiz', role: 'Control de Calidad', icon: '🔬', description: 'Garantiza la excelencia en cada producto' },
              { name: 'Luis Torres', role: 'Producción', icon: '🏭', description: 'Supervisa todos los procesos productivos' },
              { name: 'Elena Vargas', role: 'Innovación', icon: '💡', description: 'Investiga nuevos sabores y productos' },
              { name: 'Roberto Silva', role: 'Sostenibilidad', icon: '🌱', description: 'Lidera nuestras iniciativas eco-amigables' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{member.icon}</div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">{member.name}</h3>
                  <div className="text-primary-600 font-semibold mb-3">{member.role}</div>
                  <p className="text-neutral-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
