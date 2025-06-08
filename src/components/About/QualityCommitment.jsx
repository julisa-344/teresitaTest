import React from 'react';
import { qualityCommitments, teamMembers } from '../../data/aboutData';

const QualityCard = ({ commitment, index }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">{commitment.icon}</span>
        </div>
        <h3 className="text-xl font-bold text-neutral-800 mb-4">
          {commitment.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">
          {commitment.description}
        </p>
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member, index }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{member.icon}</span>
        </div>
        <h3 className="text-lg font-bold text-neutral-800 mb-2">
          {member.name}
        </h3>
        <div className="text-primary-600 font-semibold mb-3 text-sm">
          {member.role}
        </div>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
};

const QualityCommitment = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Quality Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
              Nuestro Compromiso
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-800 mb-6 leading-tight">
            Del Origen a tu Mesa
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Cada producto Teresita es el resultado de un proceso cuidadoso que respeta 
            la tradición mientras abraza la innovación para garantizar la mejor calidad.
          </p>
        </div>

        {/* Quality Commitments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {qualityCommitments.map((commitment, index) => (
            <QualityCard key={index} commitment={commitment} index={index} />
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-neutral-800 mb-4">
              La familia que lleva el mejor sabor a la tuya
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Conoce a las personas apasionadas que día a día trabajan para mantener 
              la calidad y autenticidad que caracteriza a todos nuestros productos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Team Values */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-neutral-800 mb-4">
                Nuestros Valores Compartidos
              </h4>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">❤️</span>
                </div>
                <span className="font-semibold text-neutral-700">Pasión</span>
                <p className="text-sm text-neutral-600 mt-1">Por la calidad</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <span className="font-semibold text-neutral-700">Confianza</span>
                <p className="text-sm text-neutral-600 mt-1">En cada producto</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌱</span>
                </div>
                <span className="font-semibold text-neutral-700">Tradición</span>
                <p className="text-sm text-neutral-600 mt-1">Con innovación</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <span className="font-semibold text-neutral-700">Familia</span>
                <p className="text-sm text-neutral-600 mt-1">En cada mesa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;