/**
 * Gradient Utilities - WindFlow Framework
 * Linear, radial, conic, and animated gradients
 */

module.exports = function generateGradients(config) {
  let output = [];
  output.push('/* Gradient Utilities - WindFlow Advanced Gradients */');
  
  // Gradient directions
  const directions = {
    't': 'to top',
    'tr': 'to top right',
    'r': 'to right',
    'br': 'to bottom right',
    'b': 'to bottom',
    'bl': 'to bottom left',
    'l': 'to left',
    'tl': 'to top left'
  };

  // Linear gradients
  Object.entries(directions).forEach(([key, value]) => {
    output.push(`.bg-gradient-to-${key} {
  background-image: linear-gradient(${value}, var(--wf-gradient-stops));
}`);
  });

  // Radial gradients
  output.push(`.bg-gradient-radial {
  background-image: radial-gradient(circle, var(--wf-gradient-stops));
}`);

  const radialPositions = {
    't': 'top',
    'tr': 'top right',
    'r': 'right',
    'br': 'bottom right',
    'b': 'bottom',
    'bl': 'bottom left',
    'l': 'left',
    'tl': 'top left'
  };

  Object.entries(radialPositions).forEach(([key, value]) => {
    output.push(`.bg-gradient-radial-at-${key} {
  background-image: radial-gradient(circle at ${value}, var(--wf-gradient-stops));
}`);
  });

  // Conic gradients
  output.push(`.bg-gradient-conic {
  background-image: conic-gradient(var(--wf-gradient-stops));
}`);

  const conicAngles = {
    't': '0deg',
    'tr': '45deg',
    'r': '90deg',
    'br': '135deg',
    'b': '180deg',
    'bl': '225deg',
    'l': '270deg',
    'tl': '315deg'
  };

  Object.entries(conicAngles).forEach(([key, value]) => {
    output.push(`.bg-gradient-conic-from-${key} {
  background-image: conic-gradient(from ${value}, var(--wf-gradient-stops));
}`);
  });

  // Gradient color stops
  const colors = config.theme.colors;
  
  Object.entries(colors).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === 'string') {
      output.push(`.from-${colorName} { --wf-gradient-from: ${colorValue}; --wf-gradient-stops: var(--wf-gradient-from), var(--wf-gradient-to, transparent); }`);
      output.push(`.via-${colorName} { --wf-gradient-stops: var(--wf-gradient-from), ${colorValue}, var(--wf-gradient-to, transparent); }`);
      output.push(`.to-${colorName} { --wf-gradient-to: ${colorValue}; }`);
    } else if (typeof colorValue === 'object') {
      Object.entries(colorValue).forEach(([shade, hex]) => {
        output.push(`.from-${colorName}-${shade} { --wf-gradient-from: ${hex}; --wf-gradient-stops: var(--wf-gradient-from), var(--wf-gradient-to, transparent); }`);
        output.push(`.via-${colorName}-${shade} { --wf-gradient-stops: var(--wf-gradient-from), ${hex}, var(--wf-gradient-to, transparent); }`);
        output.push(`.to-${colorName}-${shade} { --wf-gradient-to: ${hex}; }`);
      });
    }
  });

  // Mesh gradients (simulated)
  output.push(`.bg-mesh-gradient {
  background: 
    radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 0.8) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 0.8) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 0.8) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 0.8) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 0.8) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 0.8) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 0.8) 0px, transparent 50%);
}`);

  // Aurora gradient
  output.push(`.bg-aurora {
  background: linear-gradient(to bottom right, #f87171, #dc2626, #7c3aed, #2563eb, #0891b2, #059669);
  background-size: 200% 200%;
  animation: wf-aurora 15s ease infinite;
}

@keyframes wf-aurora {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`);

  return output.join('\n\n');
};