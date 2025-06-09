# Hero Section Components

## Overview

The Hero section is built using a modular, scalable architecture that separates concerns and allows for easy customization and reusability.

## Architecture

### Components Structure

```
src/components/Hero/
├── HeroBrandPromise.jsx    # Brand tagline component
├── HeroHeadline.jsx        # Main headline with accent text
├── HeroCTAs.jsx           # Call-to-action buttons
├── QualityIndicators.jsx   # Quality/trust indicators
├── index.js               # Central exports
└── README.md              # This documentation
```

### Data Configuration

```
src/data/heroData.js       # Centralized hero content configuration
```

## Components

### HeroBrandPromise
Displays the brand promise/tagline in a styled badge.

**Props:**
- `className` (string): Additional CSS classes
- `text` (string): Promise text to display

### HeroHeadline  
Main headline component with support for accent text styling.

**Props:**
- `className` (string): Additional CSS classes
- `primaryText` (string): Main headline text
- `accentText` (string): Accented part of headline
- `secondaryText` (string): Secondary part of headline

### HeroCTAs
Dual navigation buttons for recipes and products with hover animations.

**Props:**
- `className` (string): Additional CSS classes
- `recipesButton` (object): Configuration for recipes button
- `productsButton` (object): Configuration for products button

### QualityIndicators
Shows brand quality attributes with animated indicator dots.

**Props:**
- `className` (string): Additional CSS classes
- `indicators` (array): Array of indicator objects with text and color

## Configuration

The hero content is centralized in `src/data/heroData.js` for easy management:

```javascript
import { heroConfig } from '../../data/heroData';

// Use default config
<HeroSection />

// Use custom config
<HeroSection config={customConfig} />
```

## Features

### Scalability
- **Modular Components**: Each piece can be used independently
- **Configuration-driven**: Content managed through data files
- **Reusable**: Components accept props for customization

### Performance
- **Lazy Loading**: Components only load when needed
- **Optimized Animations**: CSS-based animations with GPU acceleration
- **Responsive Images**: Background images optimized for different screen sizes

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Appropriate ARIA labels and descriptions

### SEO
- **Structured Data**: Proper heading structure for search engines
- **Meta Information**: Background image has proper alt text
- **Performance**: Fast loading with optimized assets

## Customization

### Seasonal Themes
Alternative configurations are available for special occasions:

```javascript
import { alternativeHeroConfigs } from '../../data/heroData';

// Festive theme
<HeroSection config={alternativeHeroConfigs.festive} />

// New Year theme  
<HeroSection config={alternativeHeroConfigs.newYear} />
```

### A/B Testing
Easy to implement A/B testing by switching configurations:

```javascript
const config = isTestVariant ? alternativeConfig : heroConfig;
<HeroSection config={config} />
```

## Best Practices

1. **Image Optimization**: Ensure hero.jpg is optimized for web (WebP format recommended)
2. **Content Length**: Keep headline under 60 characters for optimal display
3. **CTA Text**: Use action-oriented verbs for button text
4. **Accessibility**: Always provide meaningful alt text for background images
5. **Performance**: Test loading times and optimize animations for smooth experience

## Development Guidelines

### Adding New Components
1. Create component in `src/components/Hero/`
2. Export from `index.js`
3. Add to main HeroSection if needed
4. Update this README

### Modifying Content
1. Update `src/data/heroData.js` for content changes
2. Add new configurations for different scenarios
3. Test all variants before deployment

### Styling
- Follow existing Tailwind classes pattern
- Use design system colors from `tailwind.config.js`
- Maintain consistent spacing and typography