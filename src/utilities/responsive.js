/**
 * Responsive Utilities - WindFlow Framework
 * Responsive variants and dark mode utilities
 */

module.exports = {
  generateResponsiveVariants: function(config) {
    let output = [];
    output.push('/* Responsive Variants */');
    
    const breakpoints = config.theme.screens;
    
    Object.entries(breakpoints).forEach(([screen, size]) => {
      output.push(`@media (min-width: ${size}) {`);
      
      // Display utilities
      output.push(`  .${screen}\\:block { display: block; }`);
      output.push(`  .${screen}\\:inline-block { display: inline-block; }`);
      output.push(`  .${screen}\\:inline { display: inline; }`);
      output.push(`  .${screen}\\:flex { display: flex; }`);
      output.push(`  .${screen}\\:inline-flex { display: inline-flex; }`);
      output.push(`  .${screen}\\:grid { display: grid; }`);
      output.push(`  .${screen}\\:inline-grid { display: inline-grid; }`);
      output.push(`  .${screen}\\:hidden { display: none; }`);
      
      // Flexbox utilities
      output.push(`  .${screen}\\:flex-row { flex-direction: row; }`);
      output.push(`  .${screen}\\:flex-col { flex-direction: column; }`);
      output.push(`  .${screen}\\:flex-wrap { flex-wrap: wrap; }`);
      output.push(`  .${screen}\\:flex-nowrap { flex-wrap: nowrap; }`);
      
      // Grid utilities
      for (let i = 1; i <= 12; i++) {
        output.push(`  .${screen}\\:grid-cols-${i} { grid-template-columns: repeat(${i}, minmax(0, 1fr)); }`);
      }
      
      // Spacing utilities
      const spacing = config.theme.spacing;
      Object.entries(spacing).forEach(([key, value]) => {
        output.push(`  .${screen}\\:m-${key} { margin: ${value}; }`);
        output.push(`  .${screen}\\:p-${key} { padding: ${value}; }`);
        output.push(`  .${screen}\\:gap-${key} { gap: ${value}; }`);
      });
      
      // Width utilities
      output.push(`  .${screen}\\:w-full { width: 100%; }`);
      output.push(`  .${screen}\\:w-auto { width: auto; }`);
      output.push(`  .${screen}\\:w-screen { width: 100vw; }`);
      output.push(`  .${screen}\\:w-min { width: min-content; }`);
      output.push(`  .${screen}\\:w-max { width: max-content; }`);
      output.push(`  .${screen}\\:w-fit { width: fit-content; }`);
      
      // Text utilities
      const fontSizes = config.theme.fontSize;
      Object.entries(fontSizes).forEach(([size, [fontSize, lineHeight]]) => {
        output.push(`  .${screen}\\:text-${size} { font-size: ${fontSize}; line-height: ${lineHeight}; }`);
      });
      
      output.push('}');
    });

    return output.join('\n');
  },

  generateDarkModeVariants: function(config) {
    let output = [];
    output.push('/* Dark Mode Variants */');
    
    output.push('@media (prefers-color-scheme: dark) {');
    
    // Color utilities
    const colors = config.theme.colors;
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, hex]) => {
          output.push(`  .dark\\:text-${colorName}-${shade} { color: ${hex}; }`);
          output.push(`  .dark\\:bg-${colorName}-${shade} { background-color: ${hex}; }`);
          output.push(`  .dark\\:border-${colorName}-${shade} { border-color: ${hex}; }`);
        });
      }
    });
    
    // Opacity utilities
    const opacity = config.theme.opacity;
    Object.entries(opacity).forEach(([key, value]) => {
      output.push(`  .dark\\:opacity-${key} { opacity: ${value}; }`);
    });
    
    output.push('}');
    
    // Class-based dark mode
    output.push('.dark {');
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, hex]) => {
          output.push(`  .dark\\:text-${colorName}-${shade} { color: ${hex}; }`);
          output.push(`  .dark\\:bg-${colorName}-${shade} { background-color: ${hex}; }`);
          output.push(`  .dark\\:border-${colorName}-${shade} { border-color: ${hex}; }`);
        });
      }
    });
    output.push('}');

    return output.join('\n');
  }
};