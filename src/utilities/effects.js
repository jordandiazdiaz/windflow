/**
 * Effects Utilities - WindFlow Framework
 * Box shadows, opacity, and mix blend modes
 */

module.exports = function generateEffects(config) {
  let output = [];
  output.push('/* Effects Utilities */');
  
  // Box shadow
  const boxShadow = config.theme.boxShadow;
  Object.entries(boxShadow).forEach(([key, value]) => {
    output.push(`.shadow${key ? `-${key}` : ''} {
  --wf-shadow: ${value};
  box-shadow: var(--wf-ring-offset-shadow, 0 0 #0000), var(--wf-ring-shadow, 0 0 #0000), var(--wf-shadow);
}`);
  });

  // Opacity
  const opacity = config.theme.opacity;
  Object.entries(opacity).forEach(([key, value]) => {
    output.push(`.opacity-${key} { opacity: ${value}; }`);
  });

  // Mix blend mode
  const blendModes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  blendModes.forEach(mode => {
    output.push(`.mix-blend-${mode} { mix-blend-mode: ${mode}; }`);
  });

  // Background blend modes
  blendModes.forEach(mode => {
    output.push(`.bg-blend-${mode} { background-blend-mode: ${mode}; }`);
  });

  // Backdrop blur utilities
  const backdropBlur = {
    'none': '0',
    'sm': '4px',
    'DEFAULT': '8px',
    'md': '12px',
    'lg': '16px',
    'xl': '24px',
    '2xl': '40px',
    '3xl': '64px'
  };

  Object.entries(backdropBlur).forEach(([key, value]) => {
    const className = key === 'DEFAULT' ? 'backdrop-blur' : `backdrop-blur-${key}`;
    output.push(`.${className} { --wf-backdrop-blur: blur(${value}); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }`);
  });

  // Backdrop brightness
  const backdropBrightness = {
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

  Object.entries(backdropBrightness).forEach(([key, value]) => {
    output.push(`.backdrop-brightness-${key} { --wf-backdrop-brightness: brightness(${value}); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }`);
  });

  // Backdrop contrast
  const backdropContrast = {
    '0': '0',
    '50': '.5',
    '75': '.75',
    '100': '1',
    '125': '1.25',
    '150': '1.5',
    '200': '2'
  };

  Object.entries(backdropContrast).forEach(([key, value]) => {
    output.push(`.backdrop-contrast-${key} { --wf-backdrop-contrast: contrast(${value}); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }`);
  });

  // Backdrop saturate
  const backdropSaturate = {
    '0': '0',
    '50': '.5',
    '100': '1',
    '150': '1.5',
    '200': '2'
  };

  Object.entries(backdropSaturate).forEach(([key, value]) => {
    output.push(`.backdrop-saturate-${key} { --wf-backdrop-saturate: saturate(${value}); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }`);
  });

  // Other backdrop filters
  output.push('.backdrop-grayscale-0 { --wf-backdrop-grayscale: grayscale(0); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }');
  output.push('.backdrop-grayscale { --wf-backdrop-grayscale: grayscale(100%); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }');
  
  output.push('.backdrop-invert-0 { --wf-backdrop-invert: invert(0); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }');
  output.push('.backdrop-invert { --wf-backdrop-invert: invert(100%); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }');
  
  output.push('.backdrop-sepia-0 { --wf-backdrop-sepia: sepia(0); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }');
  output.push('.backdrop-sepia { --wf-backdrop-sepia: sepia(100%); backdrop-filter: var(--wf-backdrop-blur) var(--wf-backdrop-brightness) var(--wf-backdrop-contrast) var(--wf-backdrop-grayscale) var(--wf-backdrop-hue-rotate) var(--wf-backdrop-invert) var(--wf-backdrop-opacity) var(--wf-backdrop-saturate) var(--wf-backdrop-sepia); }');

  // Initialize backdrop filter CSS variables
  output.push(`/* Initialize backdrop filter variables */
:root {
  --wf-backdrop-blur: ;
  --wf-backdrop-brightness: ;
  --wf-backdrop-contrast: ;
  --wf-backdrop-grayscale: ;
  --wf-backdrop-hue-rotate: ;
  --wf-backdrop-invert: ;
  --wf-backdrop-opacity: ;
  --wf-backdrop-saturate: ;
  --wf-backdrop-sepia: ;
}`);

  return output.join('\n\n');
};