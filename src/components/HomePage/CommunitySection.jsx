import React, { useState } from 'react';
import { PlayIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

/**
 * Testimonial Card Component
 */
const TestimonialCard = ({ testimonial, featured = false }) => (
  <div className={`testimonial-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 ${
    featured ? 'lg:col-span-2 lg:row-span-2' : ''
  }`}>
    {/* Profile Header */}
    <div className={`bg-primary-700 ${featured ? 'p-4' : 'p-3'} text-white`}>
      <div className="flex items-center gap-3">
        <div className={`${featured ? 'w-12 h-12' : 'w-10 h-10'} rounded-full overflow-hidden border-2 border-white/30`}>
          <img 
            src={testimonial.photo} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className={`font-display font-bold ${featured ? 'text-lg' : 'text-sm'}`}>{testimonial.name}</h3>
          <p className={`text-white/90 ${featured ? 'text-sm' : 'text-xs'}`}>{testimonial.role}</p>
          {testimonial.verified && (
            <div className="flex items-center gap-1 mt-1">
              <CheckIcon className="w-4 h-4 text-secondary-300" />
              <span className="text-xs text-white/80">Verificado</span>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Video Preview Section */}
    {testimonial.videoUrl && (
      <div className="relative">
        <div className="aspect-[16/5] relative overflow-hidden group cursor-pointer"
             style={{
               backgroundImage: 'url(/img/image.jpg)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
             }}
             onClick={() => window.openVideoModal(testimonial.videoUrl)}>
          
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
              <PlayIcon className="w-6 h-6 text-primary-700" />
            </div>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute top-2 right-2">
            <div className="bg-primary-700 text-white px-2 py-1 rounded text-xs font-medium">
              ▶ Video
            </div>
          </div>
          
          {/* Bottom text overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-12"></div>
          <div className="absolute bottom-1 left-2 text-white">
            <p className="text-xs font-medium">Ver experiencia completa</p>
          </div>
        </div>
      </div>
    )}

    {/* Testimonial Content */}
    <div className={`${featured ? 'p-4' : 'p-3'}`}>
      <div className="mb-3">
        <div className="flex text-secondary-500 mb-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xs ${i < testimonial.rating ? 'text-secondary-500' : 'text-gray-300'}`}>⭐</span>
          ))}
        </div>
        <blockquote className={`text-gray-700 italic ${featured ? 'text-sm leading-relaxed' : 'text-xs'}`}>
          "{testimonial.quote}"
        </blockquote>
      </div>

      {testimonial.productUsed && (
        <div className="bg-secondary-50 rounded-lg p-2 border border-secondary-200">
          <p className="text-secondary-700 text-xs font-medium mb-1">Producto usado:</p>
          <p className="text-secondary-800 font-semibold text-xs">{testimonial.productUsed}</p>
        </div>
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
      <div className="rounded-2xl bg-neutral-100 overflow-hidden max-w-4xl w-full max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <h3 className="text-xl font-display font-bold text-gray-800">Video de Susy Díaz</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative p-6">
          {/* Inner video container with rounded corners */}
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
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
      photo: '/img/susy-diaz.jpg',
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
      <section className={`mb-20 ${className}`}>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-4 mb-10">
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
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary-700">10,000+</div>
                <p className="text-gray-600 text-xs">Familias que confían</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-secondary-600">39</div>
                <p className="text-gray-600 text-xs">Años de experiencia</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-600">4.9/5</div>
                <p className="text-gray-600 text-xs">Calificación promedio</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-orange-600">500+</div>
                <p className="text-gray-600 text-xs">Recetas compartidas</p>
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