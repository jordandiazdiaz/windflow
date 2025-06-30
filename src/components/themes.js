/**
 * Theme System - WindFlow Framework
 * Predefined themes and theme-specific components
 */

const themes = require('../themes/themes.js');

module.exports = function generateThemes(config) {
  let output = [];
  output.push('/* WindFlow Predefined Themes */');
  
  // Generate CSS custom properties for each theme
  Object.entries(themes).forEach(([themeName, theme]) => {
    output.push(`
/* Theme: ${theme.name} - ${theme.description} */
.theme-${themeName} {
  /* Color Variables */`);
    
    Object.entries(theme.colors).forEach(([colorName, colorValue]) => {
      output.push(`  --wf-${colorName}: ${colorValue};`);
    });
    
    output.push(`  /* Gradient Variables */`);
    Object.entries(theme.gradients).forEach(([gradientName, gradientValue]) => {
      output.push(`  --wf-gradient-${gradientName}: ${gradientValue};`);
    });
    
    output.push(`}`);
    
    // Generate utility classes for theme colors
    Object.entries(theme.colors).forEach(([colorName, colorValue]) => {
      output.push(`.theme-${themeName} .text-theme-${colorName} { color: var(--wf-${colorName}); }`);
      output.push(`.theme-${themeName} .bg-theme-${colorName} { background-color: var(--wf-${colorName}); }`);
      output.push(`.theme-${themeName} .border-theme-${colorName} { border-color: var(--wf-${colorName}); }`);
    });
    
    // Generate gradient utilities for themes
    Object.entries(theme.gradients).forEach(([gradientName, gradientValue]) => {
      output.push(`.theme-${themeName} .bg-gradient-theme-${gradientName} { background: var(--wf-gradient-${gradientName}); }`);
    });
  });

  // Theme-specific components
  output.push(`
/* Theme-specific Components */

/* Cyberpunk Neon Effects */
.theme-cyberpunk .neon-text {
  color: var(--wf-primary);
  text-shadow: 
    0 0 5px var(--wf-primary),
    0 0 10px var(--wf-primary),
    0 0 15px var(--wf-primary),
    0 0 20px var(--wf-primary);
  animation: wf-neon 1.5s ease-in-out infinite alternate;
}

.theme-cyberpunk .neon-border {
  border: 2px solid var(--wf-primary);
  box-shadow: 
    0 0 5px var(--wf-primary),
    inset 0 0 5px var(--wf-primary);
}

.theme-cyberpunk .cyber-grid {
  background-image: 
    linear-gradient(rgba(255, 0, 128, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 128, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Glassmorphism Effects */
.theme-glassmorphism .glass-card {
  background: var(--wf-surface);
  backdrop-filter: blur(20px);
  border: 1px solid var(--wf-border);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.theme-glassmorphism .glass-nav {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Retro Effects */
.theme-retro .retro-text {
  font-family: 'Courier New', monospace;
  color: var(--wf-primary);
  text-shadow: 
    3px 3px 0px var(--wf-secondary),
    6px 6px 0px var(--wf-accent);
}

.theme-retro .retro-border {
  border: 3px solid var(--wf-primary);
  border-style: double;
}

.theme-retro .scanlines::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent 50%, rgba(0, 255, 0, 0.1) 50%);
  background-size: 100% 4px;
  pointer-events: none;
}

/* Dark Theme Enhancements */
.theme-dark .dark-glow {
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
}

.theme-dark .dark-card {
  background: var(--wf-surface);
  border: 1px solid var(--wf-border);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

/* Nature Theme Effects */
.theme-nature .leaf-shadow {
  box-shadow: 
    0 4px 8px rgba(34, 197, 94, 0.2),
    0 2px 4px rgba(34, 197, 94, 0.1);
}

.theme-nature .nature-gradient {
  background: linear-gradient(135deg, 
    rgba(34, 197, 94, 0.1),
    rgba(132, 204, 22, 0.1),
    rgba(234, 179, 8, 0.1));
}

/* Ocean Theme Effects */
.theme-ocean .wave-animation {
  background: linear-gradient(45deg, 
    rgba(14, 165, 233, 0.1),
    rgba(2, 132, 199, 0.2),
    rgba(6, 182, 212, 0.1));
  animation: wf-float 3s ease-in-out infinite;
}

.theme-ocean .ocean-depth {
  box-shadow: 
    0 8px 16px rgba(14, 165, 233, 0.2),
    0 4px 8px rgba(2, 132, 199, 0.1);
}

/* Sunset Theme Effects */
.theme-sunset .sunset-glow {
  background: var(--wf-gradient-sunset);
  background-size: 200% 200%;
  animation: wf-aurora 10s ease infinite;
}

.theme-sunset .warm-shadow {
  box-shadow: 
    0 4px 8px rgba(249, 115, 22, 0.3),
    0 2px 4px rgba(234, 88, 12, 0.2);
}

/* Theme Toggle Utilities */
.theme-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.05);
}

.theme-selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.theme-card {
  padding: 1rem;
  border-radius: 0.75rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.theme-card.active {
  border-color: var(--wf-primary);
}

.theme-preview {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.theme-preview-color {
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
}`);

  return output.join('\n\n');
};