/**
 * Filter Utilities - WindFlow Framework
 * Standard filters and backdrop filters
 */

module.exports = {
  generateFilters: function(config) {
    let output = [];
    output.push('/* Filter Utilities */');
    
    // Blur
    const blurs = {
      'none': '0',
      'sm': '4px',
      '': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px'
    };
    
    Object.entries(blurs).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.blur${suffix} { filter: blur(${value}); }`);
    });

    // Brightness
    const brightness = {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(brightness).forEach(([key, value]) => {
      output.push(`.brightness-${key} { filter: brightness(${value}); }`);
    });

    // Contrast
    Object.entries(brightness).forEach(([key, value]) => {
      output.push(`.contrast-${key} { filter: contrast(${value}); }`);
    });

    // Grayscale
    const grayscale = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(grayscale).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.grayscale${suffix} { filter: grayscale(${value}); }`);
    });

    // Hue rotate
    const hueRotate = {
      '0': '0deg',
      '15': '15deg',
      '30': '30deg',
      '60': '60deg',
      '90': '90deg',
      '180': '180deg'
    };
    
    Object.entries(hueRotate).forEach(([key, value]) => {
      output.push(`.hue-rotate-${key} { filter: hue-rotate(${value}); }`);
      output.push(`.-hue-rotate-${key} { filter: hue-rotate(-${value}); }`);
    });

    // Invert
    const invert = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(invert).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.invert${suffix} { filter: invert(${value}); }`);
    });

    // Saturate
    const saturate = {
      '0': '0',
      '50': '.5',
      '100': '1',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(saturate).forEach(([key, value]) => {
      output.push(`.saturate-${key} { filter: saturate(${value}); }`);
    });

    // Sepia
    const sepia = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(sepia).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.sepia${suffix} { filter: sepia(${value}); }`);
    });

    // Drop shadow
    const dropShadows = {
      'sm': '0 1px 1px rgb(0 0 0 / 0.05)',
      '': '0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06)',
      'md': '0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06)',
      'lg': '0 10px 8px rgb(0 0 0 / 0.04), 0 4px 3px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 13px rgb(0 0 0 / 0.03), 0 8px 5px rgb(0 0 0 / 0.08)',
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      'none': '0 0 #0000'
    };
    
    Object.entries(dropShadows).forEach(([key, value]) => {
      const suffix = key === 'none' ? '-none' : key ? `-${key}` : '';
      output.push(`.drop-shadow${suffix} { filter: drop-shadow(${value}); }`);
    });

    return output.join('\n');
  },

  generateBackdropFilters: function(config) {
    let output = [];
    output.push('/* Backdrop Filter Utilities */');
    
    // Backdrop blur
    const blurs = {
      'none': '0',
      'sm': '4px',
      '': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px'
    };
    
    Object.entries(blurs).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.backdrop-blur${suffix} { backdrop-filter: blur(${value}); }`);
    });

    // Backdrop brightness
    const brightness = {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(brightness).forEach(([key, value]) => {
      output.push(`.backdrop-brightness-${key} { backdrop-filter: brightness(${value}); }`);
    });

    // Backdrop contrast
    Object.entries(brightness).forEach(([key, value]) => {
      output.push(`.backdrop-contrast-${key} { backdrop-filter: contrast(${value}); }`);
    });

    // Backdrop grayscale
    const grayscale = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(grayscale).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.backdrop-grayscale${suffix} { backdrop-filter: grayscale(${value}); }`);
    });

    // Backdrop hue rotate
    const hueRotate = {
      '0': '0deg',
      '15': '15deg',
      '30': '30deg',
      '60': '60deg',
      '90': '90deg',
      '180': '180deg'
    };
    
    Object.entries(hueRotate).forEach(([key, value]) => {
      output.push(`.backdrop-hue-rotate-${key} { backdrop-filter: hue-rotate(${value}); }`);
      output.push(`.-backdrop-hue-rotate-${key} { backdrop-filter: hue-rotate(-${value}); }`);
    });

    // Backdrop invert
    const invert = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(invert).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.backdrop-invert${suffix} { backdrop-filter: invert(${value}); }`);
    });

    // Backdrop opacity
    const opacity = config.theme.opacity;
    Object.entries(opacity).forEach(([key, value]) => {
      output.push(`.backdrop-opacity-${key} { backdrop-filter: opacity(${value}); }`);
    });

    // Backdrop saturate
    const saturate = {
      '0': '0',
      '50': '.5',
      '100': '1',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(saturate).forEach(([key, value]) => {
      output.push(`.backdrop-saturate-${key} { backdrop-filter: saturate(${value}); }`);
    });

    // Backdrop sepia
    const sepia = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(sepia).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      output.push(`.backdrop-sepia${suffix} { backdrop-filter: sepia(${value}); }`);
    });

    return output.join('\n');
  }
};