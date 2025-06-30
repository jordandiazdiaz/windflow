/**
 * Spacing Utilities - WindFlow Framework
 * Margin, padding, gap utilities with responsive variants
 */

module.exports = function generateSpacing(config) {
  const spacing = config.theme.spacing;
  const properties = {
    'm': 'margin',
    'mt': 'margin-top',
    'mr': 'margin-right',
    'mb': 'margin-bottom',
    'ml': 'margin-left',
    'mx': ['margin-left', 'margin-right'],
    'my': ['margin-top', 'margin-bottom'],
    'p': 'padding',
    'pt': 'padding-top',
    'pr': 'padding-right',
    'pb': 'padding-bottom',
    'pl': 'padding-left',
    'px': ['padding-left', 'padding-right'],
    'py': ['padding-top', 'padding-bottom'],
    'gap': 'gap',
    'gap-x': 'column-gap',
    'gap-y': 'row-gap',
    'space-x': 'margin-left',
    'space-y': 'margin-top'
  };

  let output = [];
  output.push('/* Spacing Utilities */');
  
  // Generate main spacing utilities
  Object.entries(properties).forEach(([prefix, property]) => {
    Object.entries(spacing).forEach(([key, value]) => {
      if (prefix === 'space-x' || prefix === 'space-y') {
        output.push(`.${prefix}-${key} > * + * {
  ${property}: ${value};
}`);
      } else if (Array.isArray(property)) {
        output.push(`.${prefix}-${key} {
  ${property[0]}: ${value};
  ${property[1]}: ${value};
}`);
      } else {
        output.push(`.${prefix}-${key} {
  ${property}: ${value};
}`);
      }
    });
  });

  // Generate negative margins
  Object.entries(spacing).forEach(([key, value]) => {
    if (key !== '0') {
      ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'].forEach(prefix => {
        const props = properties[prefix];
        if (Array.isArray(props)) {
          output.push(`.-${prefix}-${key} {
  ${props[0]}: -${value};
  ${props[1]}: -${value};
}`);
        } else {
          output.push(`.-${prefix}-${key} {
  ${props}: -${value};
}`);
        }
      });
    }
  });

  return output.join('\n\n');
};