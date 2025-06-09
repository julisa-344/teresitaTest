import React, { useState } from 'react';

/**
 * Testimonial Card Component
 */
const TestimonialCard = ({ testimonial, featured = false }) => (
  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
    featured ? 'lg:col-span-2 lg:row-span-2' : ''
  }`}>
    {/* Profile Header */}
    <div className={`bg-gradient-to-br from-orange-500 to-red-500 ${featured ? 'p-8' : 'p-6'} text-white`}>
      <div className="flex items-center gap-4">
        <div className={`${featured ? 'w-20 h-20' : 'w-16 h-16'} rounded-full overflow-hidden border-4 border-white/30`}>
          <img 
            src={testimonial.photo} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className={`font-bold ${featured ? 'text-2xl' : 'text-lg'}`}>{testimonial.name}</h3>
          <p className={`text-white/90 ${featured ? 'text-lg' : 'text-sm'}`}>{testimonial.role}</p>
          {testimonial.verified && (
            <div className="flex items-center gap-1 mt-1">
              <span className="text-yellow-300">✓</span>
              <span className="text-xs text-white/80">Verificado</span>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Testimonial Content */}
    <div className={`${featured ? 'p-8' : 'p-6'}`}>
      <div className="mb-4">
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}>⭐</span>
          ))}
        </div>
        <blockquote className={`text-neutral-700 italic ${featured ? 'text-lg leading-relaxed' : 'text-sm'}`}>
          "{testimonial.quote}"
        </blockquote>
      </div>

      {testimonial.productUsed && (
        <div className="bg-orange-50 rounded-lg p-3 mb-4">
          <p className="text-orange-700 text-xs font-medium mb-1">Producto usado:</p>
          <p className="text-orange-800 font-semibold">{testimonial.productUsed}</p>
        </div>
      )}

      {testimonial.videoUrl && (
        <button 
          onClick={() => window.openVideoModal(testimonial.videoUrl)}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>▶️</span>
          Ver video
        </button>
      )}
    </div>
  </div>
);

/**
 * Video Modal Component
 */
const VideoModal = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-bold text-neutral-800">Video de Susy Díaz</h3>
          <button 
            onClick={onClose}
            className="w-8 h-8 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Video Container */}
        <div className="aspect-video">
          <iframe
            src={videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
            title="Video de Susy Díaz con Teresita"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Community Section Component
 * Shows testimonials and celebrity endorsements
 */
const CommunitySection = ({ 
  className = "",
  title = "Amigos de Teresita",
  subtitle = "Conoce a las personas que confían en nosotros para crear momentos especiales en sus cocinas",
  testimonials = [
    {
      id: 'susy-diaz',
      name: 'Susy Díaz',
      role: 'Personalidad de la TV',
      photo: '/img/susy-diaz.jpg', // You'll need to add this image
      quote: '¡Con Teresita, mis comidas quedan riquísimas... y al toque! Es la marca que siempre uso en mi cocina.',
      rating: 5,
      verified: true,
      productUsed: 'Comino Teresita',
      videoUrl: 'https://youtu.be/2K8JezdwRIE',
      featured: true
    },
    {
      id: 'chef-maria',
      name: 'Chef María Gonzáles',
      role: 'Chef Profesional',
      photo: '/img/chef-placeholder.jpg',
      quote: 'La calidad de los productos Teresita es excepcional. Los uso en mi restaurante desde hace años.',
      rating: 5,
      verified: true,
      productUsed: 'Ají Molido Teresita'
    },
    {
      id: 'ana-lopez',
      name: 'Ana López',
      role: 'Madre de Familia',
      photo: '/img/customer-placeholder.jpg',
      quote: 'Mis hijos siempre me piden que cocine con los productos Teresita. ¡Les encanta el sabor!',
      rating: 5,
      verified: false,
      productUsed: 'Palillo Teresita'
    },
    {
      id: 'carlos-ruiz',
      name: 'Carlos Ruiz',
      role: 'Food Blogger',
      photo: '/img/blogger-placeholder.jpg',
      quote: 'Teresita mantiene viva la tradición culinaria peruana. Sus productos son auténticos.',
      rating: 5,
      verified: true,
      productUsed: 'Sillao Kino'
    }
  ]
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  // Make openVideoModal available globally for the testimonial cards
  React.useEffect(() => {
    window.openVideoModal = (videoUrl) => {
      setCurrentVideoUrl(videoUrl);
      setIsVideoModalOpen(true);
    };

    return () => {
      delete window.openVideoModal;
    };
  }, []);

  const featuredTestimonial = testimonials.find(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  return (
    <>
      <section className={`py-20 bg-gradient-to-br from-red-50 to-orange-50 ${className}`}>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              {title}
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Testimonial (Susy Díaz) */}
            {featuredTestimonial && (
              <TestimonialCard testimonial={featuredTestimonial} featured={true} />
            )}

            {/* Regular Testimonials */}
            {regularTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Community Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">10,000+</div>
                <p className="text-neutral-600 text-sm">Familias que confían</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-600">39</div>
                <p className="text-neutral-600 text-sm">Años de experiencia</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">4.9/5</div>
                <p className="text-neutral-600 text-sm">Calificación promedio</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <p className="text-neutral-600 text-sm">Recetas compartidas</p>
              </div>
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¡Únete a nuestra comunidad!</h3>
              <p className="text-lg mb-6 text-white/90">
                Comparte tus recetas y experiencias con productos Teresita
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  📸 Comparte tu receta
                </button>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  💬 Únete al grupo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        videoUrl={currentVideoUrl}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};

export default CommunitySection;