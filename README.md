# Teresita - React + Tailwind CSS

Una aplicación web moderna construida con React y Tailwind CSS.

## 🚀 Inicio Rápido

### Opción 1: Setup automático (recomendado)
```bash
npm run setup
npm run dev
```

### Opción 2: Script de inicio rápido
```bash
chmod +x start.sh
./start.sh
```

### Opción 3: Paso a paso
```bash
# 1. Dar permisos al script de configuración
chmod +x setup-react-tailwind.sh

# 2. Ejecutar configuración
./setup-react-tailwind.sh

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

## 📋 Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run setup` - Configura el proyecto desde cero

## 🛠️ Tecnologías

- **React** - Biblioteca de JavaScript para interfaces de usuario
- **Tailwind CSS** - Framework de CSS utility-first
- **Vite** - Herramienta de build rápida
- **PostCSS** - Procesador de CSS

## 📁 Estructura del Proyecto

```
Teresita/
├── index.html              # Archivo HTML principal
├── vite.config.js          # Configuración de Vite
├── tailwind.config.js      # Configuración de Tailwind
├── package.json            # Dependencias y scripts
├── src/
│   ├── main.jsx           # Punto de entrada de React
│   ├── App.jsx            # Componente principal
│   ├── index.css          # Estilos globales con Tailwind
│   └── components/        # Componentes reutilizables
└── public/                # Archivos estáticos
```

## 🎨 Personalización

### Tailwind CSS
Edita `tailwind.config.js` para personalizar colores, tipografías y más.

### Componentes
Agrega nuevos componentes en la carpeta `src/components/`.

## 🌐 Desarrollo

El servidor de desarrollo se ejecuta en `http://localhost:3000` por defecto.

---

¡Feliz codificación! 🎉
