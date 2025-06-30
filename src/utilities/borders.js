/**
 * Border Utilities - WindFlow Framework
 * Border width, style, radius, and ring utilities
 */

module.exports = function generateBorders(config) {
  let output = [];
  output.push('/* Border Utilities */');
  
  // Border width
  const borderWidths = {
    '0': '0px',
    '': '1px',
    '2': '2px',
    '4': '4px',
    '8': '8px'
  };
  
  Object.entries(borderWidths).forEach(([key, value]) => {
    const suffix = key ? `-${key}` : '';
    output.push(`.border${suffix} { border-width: ${value}; }`);
    output.push(`.border-t${suffix} { border-top-width: ${value}; }`);
    output.push(`.border-r${suffix} { border-right-width: ${value}; }`);
    output.push(`.border-b${suffix} { border-bottom-width: ${value}; }`);
    output.push(`.border-l${suffix} { border-left-width: ${value}; }`);
    output.push(`.border-x${suffix} { border-left-width: ${value}; border-right-width: ${value}; }`);
    output.push(`.border-y${suffix} { border-top-width: ${value}; border-bottom-width: ${value}; }`);
  });

  // Border style
  ['solid', 'dashed', 'dotted', 'double', 'none'].forEach(style => {
    output.push(`.border-${style} { border-style: ${style}; }`);
  });

  // Border radius
  const borderRadius = config.theme.borderRadius;
  Object.entries(borderRadius).forEach(([key, value]) => {
    output.push(`.rounded${key ? `-${key}` : ''} { border-radius: ${value}; }`);
    output.push(`.rounded-t${key ? `-${key}` : ''} { border-top-left-radius: ${value}; border-top-right-radius: ${value}; }`);
    output.push(`.rounded-r${key ? `-${key}` : ''} { border-top-right-radius: ${value}; border-bottom-right-radius: ${value}; }`);
    output.push(`.rounded-b${key ? `-${key}` : ''} { border-bottom-right-radius: ${value}; border-bottom-left-radius: ${value}; }`);
    output.push(`.rounded-l${key ? `-${key}` : ''} { border-top-left-radius: ${value}; border-bottom-left-radius: ${value}; }`);
  });

  // Ring
  const ringWidths = {
    '0': '0px',
    '1': '1px',
    '2': '2px',
    '': '3px',
    '4': '4px',
    '8': '8px'
  };
  
  Object.entries(ringWidths).forEach(([key, value]) => {
    const suffix = key ? `-${key}` : '';
    output.push(`.ring${suffix} {
  --wf-ring-offset-shadow: var(--wf-ring-inset) 0 0 0 var(--wf-ring-offset-width) var(--wf-ring-offset-color);
  --wf-ring-shadow: var(--wf-ring-inset) 0 0 0 calc(${value} + var(--wf-ring-offset-width)) var(--wf-ring-color);
  box-shadow: var(--wf-ring-offset-shadow), var(--wf-ring-shadow), var(--wf-shadow, 0 0 #0000);
}`);
  });

  // Ring offset
  Object.entries(ringWidths).forEach(([key, value]) => {
    const suffix = key ? `-${key}` : '';
    output.push(`.ring-offset${suffix} { --wf-ring-offset-width: ${value}; }`);
  });

  return output.join('\n\n');
};