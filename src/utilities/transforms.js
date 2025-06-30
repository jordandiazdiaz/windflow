/**
 * Transform Utilities - WindFlow Framework
 * 2D and 3D transforms, perspective, and advanced effects
 */

module.exports = function generateTransforms(config) {
  let output = [];
  output.push('/* Transform Utilities - WindFlow 3D Transforms */');
  
  // Transform origin
  const origins = {
    'center': 'center',
    'top': 'top',
    'top-right': 'top right',
    'right': 'right',
    'bottom-right': 'bottom right',
    'bottom': 'bottom',
    'bottom-left': 'bottom left',
    'left': 'left',
    'top-left': 'top left'
  };
  
  Object.entries(origins).forEach(([key, value]) => {
    output.push(`.origin-${key} { transform-origin: ${value}; }`);
  });

  // Scale
  const scales = {
    '0': '0',
    '50': '.5',
    '75': '.75',
    '90': '.9',
    '95': '.95',
    '100': '1',
    '105': '1.05',
    '110': '1.1',
    '125': '1.25',
    '150': '1.5'
  };
  
  Object.entries(scales).forEach(([key, value]) => {
    output.push(`.scale-${key} { transform: scale(${value}); }`);
    output.push(`.scale-x-${key} { transform: scaleX(${value}); }`);
    output.push(`.scale-y-${key} { transform: scaleY(${value}); }`);
  });

  // Rotate
  const rotations = {
    '0': '0deg',
    '1': '1deg',
    '2': '2deg',
    '3': '3deg',
    '6': '6deg',
    '12': '12deg',
    '45': '45deg',
    '90': '90deg',
    '180': '180deg'
  };
  
  Object.entries(rotations).forEach(([key, value]) => {
    output.push(`.rotate-${key} { transform: rotate(${value}); }`);
    output.push(`.-rotate-${key} { transform: rotate(-${value}); }`);
  });

  // 3D Rotations
  Object.entries(rotations).forEach(([key, value]) => {
    output.push(`.rotate-x-${key} { transform: rotateX(${value}); }`);
    output.push(`.rotate-y-${key} { transform: rotateY(${value}); }`);
    output.push(`.rotate-z-${key} { transform: rotateZ(${value}); }`);
    output.push(`.-rotate-x-${key} { transform: rotateX(-${value}); }`);
    output.push(`.-rotate-y-${key} { transform: rotateY(-${value}); }`);
    output.push(`.-rotate-z-${key} { transform: rotateZ(-${value}); }`);
  });

  // Translate
  const spacing = config.theme.spacing;
  Object.entries(spacing).forEach(([key, value]) => {
    output.push(`.translate-x-${key} { transform: translateX(${value}); }`);
    output.push(`.translate-y-${key} { transform: translateY(${value}); }`);
    output.push(`.-translate-x-${key} { transform: translateX(-${value}); }`);
    output.push(`.-translate-y-${key} { transform: translateY(-${value}); }`);
  });

  // 3D Translate
  Object.entries(spacing).forEach(([key, value]) => {
    output.push(`.translate-z-${key} { transform: translateZ(${value}); }`);
    output.push(`.-translate-z-${key} { transform: translateZ(-${value}); }`);
  });

  // Skew
  const skews = {
    '0': '0deg',
    '1': '1deg',
    '2': '2deg',
    '3': '3deg',
    '6': '6deg',
    '12': '12deg'
  };
  
  Object.entries(skews).forEach(([key, value]) => {
    output.push(`.skew-x-${key} { transform: skewX(${value}); }`);
    output.push(`.skew-y-${key} { transform: skewY(${value}); }`);
    output.push(`.-skew-x-${key} { transform: skewX(-${value}); }`);
    output.push(`.-skew-y-${key} { transform: skewY(-${value}); }`);
  });

  // Perspective
  output.push('.perspective-none { transform: perspective(none); }');
  output.push('.perspective-sm { perspective: 500px; }');
  output.push('.perspective-md { perspective: 1000px; }');
  output.push('.perspective-lg { perspective: 1500px; }');
  output.push('.perspective-xl { perspective: 2000px; }');

  // Transform style
  output.push('.transform-flat { transform-style: flat; }');
  output.push('.transform-3d { transform-style: preserve-3d; }');

  // Backface visibility
  output.push('.backface-visible { backface-visibility: visible; }');
  output.push('.backface-hidden { backface-visibility: hidden; }');

  return output.join('\n');
};