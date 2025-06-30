/**
 * Typography Utilities - WindFlow Framework
 * Font sizes, weights, text alignment, decoration, and spacing
 */

module.exports = function generateTypography(config) {
  let output = [];
  output.push('/* Typography Utilities */');
  
  // Font sizes
  const fontSizes = config.theme.fontSize;
  Object.entries(fontSizes).forEach(([key, [size, lineHeight]]) => {
    output.push(`.text-${key} {
  font-size: ${size};
  line-height: ${lineHeight};
}`);
  });

  // Font weights
  const fontWeights = config.theme.fontWeight;
  Object.entries(fontWeights).forEach(([key, value]) => {
    output.push(`.font-${key} { font-weight: ${value}; }`);
  });

  // Text alignment
  ['left', 'center', 'right', 'justify'].forEach(align => {
    output.push(`.text-${align} { text-align: ${align}; }`);
  });

  // Text decoration
  output.push('.underline { text-decoration-line: underline; }');
  output.push('.line-through { text-decoration-line: line-through; }');
  output.push('.no-underline { text-decoration-line: none; }');

  // Text transform
  output.push('.uppercase { text-transform: uppercase; }');
  output.push('.lowercase { text-transform: lowercase; }');
  output.push('.capitalize { text-transform: capitalize; }');
  output.push('.normal-case { text-transform: none; }');

  // Letter spacing
  const letterSpacing = config.theme.letterSpacing;
  Object.entries(letterSpacing).forEach(([key, value]) => {
    output.push(`.tracking-${key} { letter-spacing: ${value}; }`);
  });

  // Line height
  const lineHeight = config.theme.lineHeight;
  Object.entries(lineHeight).forEach(([key, value]) => {
    output.push(`.leading-${key} { line-height: ${value}; }`);
  });

  return output.join('\n\n');
};