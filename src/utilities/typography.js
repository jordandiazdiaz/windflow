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
  output.push('.overline { text-decoration-line: overline; }');
  output.push('.line-through { text-decoration-line: line-through; }');
  output.push('.no-underline { text-decoration-line: none; }');
  
  // Text decoration style
  output.push('.decoration-solid { text-decoration-style: solid; }');
  output.push('.decoration-double { text-decoration-style: double; }');
  output.push('.decoration-dotted { text-decoration-style: dotted; }');
  output.push('.decoration-dashed { text-decoration-style: dashed; }');
  output.push('.decoration-wavy { text-decoration-style: wavy; }');
  
  // Text decoration thickness
  output.push('.decoration-auto { text-decoration-thickness: auto; }');
  output.push('.decoration-from-font { text-decoration-thickness: from-font; }');
  output.push('.decoration-0 { text-decoration-thickness: 0px; }');
  output.push('.decoration-1 { text-decoration-thickness: 1px; }');
  output.push('.decoration-2 { text-decoration-thickness: 2px; }');
  output.push('.decoration-4 { text-decoration-thickness: 4px; }');
  output.push('.decoration-8 { text-decoration-thickness: 8px; }');
  
  // Text underline offset
  output.push('.underline-offset-auto { text-underline-offset: auto; }');
  output.push('.underline-offset-0 { text-underline-offset: 0px; }');
  output.push('.underline-offset-1 { text-underline-offset: 1px; }');
  output.push('.underline-offset-2 { text-underline-offset: 2px; }');
  output.push('.underline-offset-4 { text-underline-offset: 4px; }');
  output.push('.underline-offset-8 { text-underline-offset: 8px; }');
  
  // Text decoration color
  const decorationColors = {
    'inherit': 'inherit',
    'current': 'currentColor',
    'transparent': 'transparent',
    'black': '#000',
    'white': '#fff',
    'primary': 'var(--wf-color-primary)',
    'secondary': 'var(--wf-color-secondary)',
    'accent': 'var(--wf-color-accent)'
  };
  
  Object.entries(decorationColors).forEach(([key, value]) => {
    output.push(`.decoration-${key} { text-decoration-color: ${value}; }`);
  });

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

  // Font style
  output.push('.italic { font-style: italic; }');
  output.push('.not-italic { font-style: normal; }');
  
  // Font variant numeric
  output.push('.normal-nums { font-variant-numeric: normal; }');
  output.push('.ordinal { font-variant-numeric: ordinal; }');
  output.push('.slashed-zero { font-variant-numeric: slashed-zero; }');
  output.push('.lining-nums { font-variant-numeric: lining-nums; }');
  output.push('.oldstyle-nums { font-variant-numeric: oldstyle-nums; }');
  output.push('.proportional-nums { font-variant-numeric: proportional-nums; }');
  output.push('.tabular-nums { font-variant-numeric: tabular-nums; }');
  output.push('.diagonal-fractions { font-variant-numeric: diagonal-fractions; }');
  output.push('.stacked-fractions { font-variant-numeric: stacked-fractions; }');
  
  // List style type
  output.push('.list-none { list-style-type: none; }');
  output.push('.list-disc { list-style-type: disc; }');
  output.push('.list-decimal { list-style-type: decimal; }');
  output.push('.list-decimal-leading-zero { list-style-type: decimal-leading-zero; }');
  output.push('.list-lower-roman { list-style-type: lower-roman; }');
  output.push('.list-upper-roman { list-style-type: upper-roman; }');
  output.push('.list-lower-greek { list-style-type: lower-greek; }');
  output.push('.list-lower-alpha { list-style-type: lower-alpha; }');
  output.push('.list-upper-alpha { list-style-type: upper-alpha; }');
  
  // List style position
  output.push('.list-inside { list-style-position: inside; }');
  output.push('.list-outside { list-style-position: outside; }');
  
  // Text overflow
  output.push('.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }');
  output.push('.overflow-ellipsis { text-overflow: ellipsis; }');
  output.push('.overflow-clip { text-overflow: clip; }');
  
  // Text indent
  const textIndents = {
    '0': '0px',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem'
  };
  
  Object.entries(textIndents).forEach(([key, value]) => {
    output.push(`.indent-${key} { text-indent: ${value}; }`);
  });
  
  // Vertical align
  output.push('.align-baseline { vertical-align: baseline; }');
  output.push('.align-top { vertical-align: top; }');
  output.push('.align-middle { vertical-align: middle; }');
  output.push('.align-bottom { vertical-align: bottom; }');
  output.push('.align-text-top { vertical-align: text-top; }');
  output.push('.align-text-bottom { vertical-align: text-bottom; }');
  output.push('.align-sub { vertical-align: sub; }');
  output.push('.align-super { vertical-align: super; }');
  
  // Whitespace
  output.push('.whitespace-normal { white-space: normal; }');
  output.push('.whitespace-nowrap { white-space: nowrap; }');
  output.push('.whitespace-pre { white-space: pre; }');
  output.push('.whitespace-pre-line { white-space: pre-line; }');
  output.push('.whitespace-pre-wrap { white-space: pre-wrap; }');
  output.push('.whitespace-break-spaces { white-space: break-spaces; }');
  
  // Word break
  output.push('.break-normal { overflow-wrap: normal; word-break: normal; }');
  output.push('.break-words { overflow-wrap: break-word; }');
  output.push('.break-all { word-break: break-all; }');
  output.push('.break-keep { word-break: keep-all; }');
  
  // Hyphens
  output.push('.hyphens-none { hyphens: none; }');
  output.push('.hyphens-manual { hyphens: manual; }');
  output.push('.hyphens-auto { hyphens: auto; }');
  
  // Content
  output.push('.content-none { content: none; }');

  return output.join('\n\n');
};