/**
 * Color Utilities - WindFlow Framework
 * Text, background, border, and ring color utilities
 */

module.exports = function generateColors(config) {
  const colors = config.theme.colors;
  let output = [];
  
  output.push('/* Color Utilities */');
  
  Object.entries(colors).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === 'string') {
      output.push(`.text-${colorName} { color: ${colorValue}; }`);
      output.push(`.bg-${colorName} { background-color: ${colorValue}; }`);
      output.push(`.border-${colorName} { border-color: ${colorValue}; }`);
      output.push(`.ring-${colorName} { --wf-ring-color: ${colorValue}; }`);
    } else if (typeof colorValue === 'object') {
      Object.entries(colorValue).forEach(([shade, hex]) => {
        output.push(`.text-${colorName}-${shade} { color: ${hex}; }`);
        output.push(`.bg-${colorName}-${shade} { background-color: ${hex}; }`);
        output.push(`.border-${colorName}-${shade} { border-color: ${hex}; }`);
        output.push(`.ring-${colorName}-${shade} { --wf-ring-color: ${hex}; }`);
      });
    }
  });

  return output.join('\n');
};