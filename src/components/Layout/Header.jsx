import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      name: 'INICIO', 
      href: '/'
    },
    { 
      name: 'NOSOTROS', 
      href: '/nosotros',
      // dropdown: [
      //   { name: 'Nuestra Historia', href: '/nosotros#historia' },
      //   { name: 'Nuestro Equipo', href: '/nosotros#equipo' },
      //   { name: 'Valores', href: '/nosotros#valores' }
      // ]
    },
    { 
      name: 'PRODUCTOS', 
      href: '/productos',
      // dropdown: [
      //   { name: 'Condimentos', href: '/productos#condimentos' },
      //   { name: 'Sazonadores', href: '/productos#sazonadores' },
      //   { name: 'Línea Premium', href: '/productos#premium' }
      // ]
    },
    { 
      name: 'RECETAS', 
      href: '/recetas', 
      highlight: true,
      // dropdown: [
      //   { name: 'Recetas Tradicionales', href: '/recetas#tradicionales' },
      //   { name: 'Cocina Rápida', href: '/recetas#rapida' },
      //   { name: 'Especiales', href: '/recetas#especiales' }
      // ]
    },
    { 
      name: 'CONTÁCTANOS', 
      href: '/contacto'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-neutral-50/95 backdrop-blur-sm shadow-md'
        : 'bg-neutral-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Teresita"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative dropdown-container"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                    location.pathname === item.href
                      ? 'bg-primary-100 text-primary-700'
                      : item.highlight
                      ? 'text-primary-700 hover:bg-primary-50'
                      : 'text-text-primary hover:bg-neutral-100 hover:text-text-primary'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="inline ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-neutral-50 rounded-md shadow-lg border border-neutral-200 p-2 z-50">
                    <div className="space-y-1">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-text-primary hover:bg-neutral-100 hover:text-primary-700 rounded-md transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-text-primary hover:text-primary-700 hover:bg-neutral-100 rounded-md transition-colors"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            
            {/* Mobile Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-text-primary hover:text-primary-700 hover:bg-neutral-100 rounded-md transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-neutral-50">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.href
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-text-primary hover:bg-neutral-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 pl-2 border-l border-neutral-200 space-y-1">
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-text-secondary hover:text-primary-700 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-neutral-50/95 z-50 p-4 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos o recetas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 px-4 pl-10 border border-neutral-300 rounded-md bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary h-5 w-5" />
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-neutral-100 rounded"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5 text-text-secondary" />
              </button>
            </div>
            
            {searchQuery && (
              <div className="mt-4 p-4 bg-neutral-100 rounded-md border border-neutral-200">
                <div className="font-medium mb-2 text-text-primary">Resultados para "{searchQuery}"</div>
                <Link
                  to={`/recetas?search=${encodeURIComponent(searchQuery)}`}
                  className="inline-block bg-primary-700 text-neutral-50 px-4 py-2 rounded-md hover:bg-primary-800 transition-colors font-medium"
                  onClick={() => setIsSearchOpen(false)}
                >
                  Ver todos los resultados
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Promotional Banner - Simplified */}
      {!isScrolled && (
        <div className="bg-primary-700 text-neutral-50">
          <div className="container mx-auto px-4">
            <div className="py-2 text-center text-sm font-medium">
              ¡Nuevo recetario digital! 
              <Link to="/recetas" className="underline ml-2 font-bold hover:text-primary-100">
                Ver recetas →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
