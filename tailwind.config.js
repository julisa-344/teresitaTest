/** @type {import('tailwindcss').Config} */

// ========================================================================
// Archivo de Configuración de Tema para Teresita - v.Final con Degradados
// Filosofía: Limpio, profesional y lleno de sabor.
// Paleta con una base de grises neutros y colores de marca vibrantes,
// complementada con degradados sutiles para un toque premium.
// ========================================================================

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // -----------------------------------------------------------------
      // PALETA DE COLORES
      // -----------------------------------------------------------------
      colors: {
        // 🩶 GRIS NEUTRO (La Base de Todo)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        // ❤️ ROJO PRIMARIO (Rojo Teresita)
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#B91C1C', // 🟥 Rojo Principal
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // 💛 AMARILLO SECUNDARIO (Amarillo Legado)
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#F59E0B', // 🟨 Amarillo Principal
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // 🧡 NARANJA ACENTO (Naranja Páprika)
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#DD571C', // 🧡 Naranja Principal
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // 💚 VERDE ACENTO (Verde Hierba)
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d', // 💚 Verde Principal
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // 🍦 UTILIDADES
        cream: '#fefcf8',
        border: '#e5e7eb',
      },

      // -----------------------------------------------------------------
      // TIPOGRAFÍA
      // -----------------------------------------------------------------
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'Cambria', 'serif'],
        'display': ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },

      // -----------------------------------------------------------------
      // DEGRADADOS - NUEVO
      // -----------------------------------------------------------------
      backgroundImage: {
        // [NUEVO] Un degradado de marca suave y optimista, como un amanecer.
        'gradient-brand-light': 'linear-gradient(135deg, theme(colors.primary.200) 0%, theme(colors.secondary.100) 100%)',

        // [NUEVO] El fondo más sutil posible. Aporta una calidez casi imperceptible.
        'gradient-canvas-warm': 'linear-gradient(180deg, theme(colors.white) 0%, theme(colors.cream) 100%)',
        
        // [NUEVO] Un degradado que evoca calma, frescura y naturaleza orgánica.
        'gradient-calm': 'linear-gradient(135deg, theme(colors.green.100) 0%, theme(colors.secondary.100) 100%)',
        
        // [NUEVO] Un efecto de texto colorido pero suave, usando tonos medios.
        'gradient-text-soft': 'linear-gradient(90deg, theme(colors.primary.500) 0%, theme(colors.orange.500) 100%)',
      },


      // -----------------------------------------------------------------
      // ANIMACIONES Y EFECTOS
      // -----------------------------------------------------------------
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: { 'from': { opacity: '0' }, 'to': { opacity: '1' } },
        slideUp: { 'from': { transform: 'translateY(1rem)', opacity: '0' }, 'to': { transform: 'translateY(0)', opacity: '1' } },
      },
      backdropBlur: { 'xs': '2px' },
    },
  },
  plugins: [],
}