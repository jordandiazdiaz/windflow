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

  return output.join('\n\n');
};