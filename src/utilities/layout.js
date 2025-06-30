/**
 * Layout Utilities - WindFlow Framework
 * Flexbox and Grid layout utilities
 */

module.exports = {
  generateFlexbox: function(config) {
    let output = [];
    output.push('/* Flexbox Utilities */');
    
    // Display
    output.push('.flex { display: flex; }');
    output.push('.inline-flex { display: inline-flex; }');

    // Direction
    output.push('.flex-row { flex-direction: row; }');
    output.push('.flex-row-reverse { flex-direction: row-reverse; }');
    output.push('.flex-col { flex-direction: column; }');
    output.push('.flex-col-reverse { flex-direction: column-reverse; }');

    // Wrap
    output.push('.flex-wrap { flex-wrap: wrap; }');
    output.push('.flex-wrap-reverse { flex-wrap: wrap-reverse; }');
    output.push('.flex-nowrap { flex-wrap: nowrap; }');

    // Flex
    output.push('.flex-1 { flex: 1 1 0%; }');
    output.push('.flex-auto { flex: 1 1 auto; }');
    output.push('.flex-initial { flex: 0 1 auto; }');
    output.push('.flex-none { flex: none; }');

    // Grow & Shrink
    output.push('.flex-grow-0 { flex-grow: 0; }');
    output.push('.flex-grow { flex-grow: 1; }');
    output.push('.flex-shrink-0 { flex-shrink: 0; }');
    output.push('.flex-shrink { flex-shrink: 1; }');

    // Justify
    const justifyValues = {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'between': 'space-between',
      'around': 'space-around',
      'evenly': 'space-evenly'
    };
    
    Object.entries(justifyValues).forEach(([key, value]) => {
      output.push(`.justify-${key} { justify-content: ${value}; }`);
    });

    // Align items
    const alignValues = {
      'start': 'flex-start',
      'end': 'flex-end',
      'center': 'center',
      'baseline': 'baseline',
      'stretch': 'stretch'
    };
    
    Object.entries(alignValues).forEach(([key, value]) => {
      output.push(`.items-${key} { align-items: ${value}; }`);
    });

    // Align self
    Object.entries(alignValues).forEach(([key, value]) => {
      output.push(`.self-${key} { align-self: ${value}; }`);
    });
    output.push('.self-auto { align-self: auto; }');

    // Order
    for (let i = 1; i <= 12; i++) {
      output.push(`.order-${i} { order: ${i}; }`);
    }
    output.push('.order-first { order: -9999; }');
    output.push('.order-last { order: 9999; }');
    output.push('.order-none { order: 0; }');

    return output.join('\n');
  },

  generateGrid: function(config) {
    let output = [];
    output.push('/* Grid Utilities */');
    
    // Display
    output.push('.grid { display: grid; }');
    output.push('.inline-grid { display: inline-grid; }');

    // Template columns
    for (let i = 1; i <= 12; i++) {
      output.push(`.grid-cols-${i} { grid-template-columns: repeat(${i}, minmax(0, 1fr)); }`);
    }
    output.push('.grid-cols-none { grid-template-columns: none; }');

    // Template rows
    for (let i = 1; i <= 6; i++) {
      output.push(`.grid-rows-${i} { grid-template-rows: repeat(${i}, minmax(0, 1fr)); }`);
    }
    output.push('.grid-rows-none { grid-template-rows: none; }');

    // Column span
    for (let i = 1; i <= 12; i++) {
      output.push(`.col-span-${i} { grid-column: span ${i} / span ${i}; }`);
    }
    output.push('.col-span-full { grid-column: 1 / -1; }');
    output.push('.col-auto { grid-column: auto; }');

    // Row span
    for (let i = 1; i <= 6; i++) {
      output.push(`.row-span-${i} { grid-row: span ${i} / span ${i}; }`);
    }
    output.push('.row-span-full { grid-row: 1 / -1; }');
    output.push('.row-auto { grid-row: auto; }');

    // Auto flow
    output.push('.grid-flow-row { grid-auto-flow: row; }');
    output.push('.grid-flow-col { grid-auto-flow: column; }');
    output.push('.grid-flow-row-dense { grid-auto-flow: row dense; }');
    output.push('.grid-flow-col-dense { grid-auto-flow: column dense; }');

    // Place items
    const placeValues = {
      'start': 'start',
      'end': 'end',
      'center': 'center',
      'stretch': 'stretch'
    };
    
    Object.entries(placeValues).forEach(([key, value]) => {
      output.push(`.place-items-${key} { place-items: ${value}; }`);
      output.push(`.place-content-${key} { place-content: ${value}; }`);
      output.push(`.place-self-${key} { place-self: ${value}; }`);
    });

    return output.join('\n');
  }
};