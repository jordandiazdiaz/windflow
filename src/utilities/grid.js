/**
 * Grid Utilities - WindFlow Framework
 * Enhanced CSS Grid utilities for modern layouts
 */

module.exports = function generateGrid(config) {
  let output = [];
  output.push('/* Grid Utilities - WindFlow Enhanced */');
  
  // Grid template columns
  const gridCols = {
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
    '7': 'repeat(7, minmax(0, 1fr))',
    '8': 'repeat(8, minmax(0, 1fr))',
    '9': 'repeat(9, minmax(0, 1fr))',
    '10': 'repeat(10, minmax(0, 1fr))',
    '11': 'repeat(11, minmax(0, 1fr))',
    '12': 'repeat(12, minmax(0, 1fr))',
    'none': 'none',
    'subgrid': 'subgrid',
    'auto': 'auto',
    'min': 'min-content',
    'max': 'max-content',
    'fr': '1fr'
  };
  
  Object.entries(gridCols).forEach(([key, value]) => {
    output.push(`.grid-cols-${key} { grid-template-columns: ${value}; }`);
  });
  
  // Grid template rows
  const gridRows = {
    '1': 'repeat(1, minmax(0, 1fr))',
    '2': 'repeat(2, minmax(0, 1fr))',
    '3': 'repeat(3, minmax(0, 1fr))',
    '4': 'repeat(4, minmax(0, 1fr))',
    '5': 'repeat(5, minmax(0, 1fr))',
    '6': 'repeat(6, minmax(0, 1fr))',
    'none': 'none',
    'subgrid': 'subgrid',
    'auto': 'auto',
    'min': 'min-content',
    'max': 'max-content',
    'fr': '1fr'
  };
  
  Object.entries(gridRows).forEach(([key, value]) => {
    output.push(`.grid-rows-${key} { grid-template-rows: ${value}; }`);
  });
  
  // Grid auto flow
  output.push('.grid-flow-row { grid-auto-flow: row; }');
  output.push('.grid-flow-col { grid-auto-flow: column; }');
  output.push('.grid-flow-row-dense { grid-auto-flow: row dense; }');
  output.push('.grid-flow-col-dense { grid-auto-flow: column dense; }');
  output.push('.grid-flow-dense { grid-auto-flow: dense; }');
  
  // Grid auto columns
  const autoSizes = {
    'auto': 'auto',
    'min': 'min-content',
    'max': 'max-content',
    'fr': 'minmax(0, 1fr)',
    '2fr': 'minmax(0, 2fr)',
    '3fr': 'minmax(0, 3fr)',
    '4fr': 'minmax(0, 4fr)'
  };
  
  Object.entries(autoSizes).forEach(([key, value]) => {
    output.push(`.auto-cols-${key} { grid-auto-columns: ${value}; }`);
    output.push(`.auto-rows-${key} { grid-auto-rows: ${value}; }`);
  });
  
  // Grid gap variations
  const gaps = {
    '0': '0',
    'px': '1px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
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
  
  Object.entries(gaps).forEach(([key, value]) => {
    output.push(`.gap-${key} { gap: ${value}; }`);
    output.push(`.gap-x-${key} { column-gap: ${value}; }`);
    output.push(`.gap-y-${key} { row-gap: ${value}; }`);
  });
  
  // Grid column/row span
  const spans = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  
  spans.forEach(span => {
    output.push(`.col-span-${span} { grid-column: span ${span} / span ${span}; }`);
    output.push(`.row-span-${span} { grid-row: span ${span} / span ${span}; }`);
  });
  
  output.push('.col-span-auto { grid-column: auto; }');
  output.push('.col-span-full { grid-column: 1 / -1; }');
  output.push('.row-span-auto { grid-row: auto; }');
  output.push('.row-span-full { grid-row: 1 / -1; }');
  
  // Grid column/row start/end
  const positions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  
  positions.forEach(pos => {
    output.push(`.col-start-${pos} { grid-column-start: ${pos}; }`);
    output.push(`.col-end-${pos} { grid-column-end: ${pos}; }`);
    output.push(`.row-start-${pos} { grid-row-start: ${pos}; }`);
    output.push(`.row-end-${pos} { grid-row-end: ${pos}; }`);
  });
  
  output.push('.col-start-auto { grid-column-start: auto; }');
  output.push('.col-end-auto { grid-column-end: auto; }');
  output.push('.row-start-auto { grid-row-start: auto; }');
  output.push('.row-end-auto { grid-row-end: auto; }');
  
  // Grid areas
  output.push(`.grid-areas-none { grid-template-areas: none; }`);
  
  // Common grid layouts
  output.push(`/* Common Grid Layouts */
.grid-layout-dashboard {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.grid-layout-holy-grail {
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
}

.grid-layout-magazine {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-auto-flow: dense;
}

.grid-layout-cards {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.grid-layout-masonry {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10px;
}`);
  
  // Grid alignment
  const justifyItems = ['start', 'end', 'center', 'stretch', 'baseline'];
  const alignItems = ['start', 'end', 'center', 'stretch', 'baseline'];
  
  justifyItems.forEach(value => {
    output.push(`.justify-items-${value} { justify-items: ${value}; }`);
  });
  
  alignItems.forEach(value => {
    output.push(`.items-${value} { align-items: ${value}; }`);
  });
  
  // Grid content alignment
  const justifyContent = ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'];
  const alignContent = ['start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly'];
  
  justifyContent.forEach(value => {
    output.push(`.justify-content-${value} { justify-content: ${value.replace(' ', '-')}; }`);
  });
  
  alignContent.forEach(value => {
    output.push(`.content-${value} { align-content: ${value.replace(' ', '-')}; }`);
  });
  
  // Self alignment
  const justifySelf = ['auto', 'start', 'end', 'center', 'stretch'];
  const alignSelf = ['auto', 'start', 'end', 'center', 'stretch'];
  
  justifySelf.forEach(value => {
    output.push(`.justify-self-${value} { justify-self: ${value}; }`);
  });
  
  alignSelf.forEach(value => {
    output.push(`.self-${value} { align-self: ${value}; }`);
  });
  
  // Place items/content/self shortcuts
  output.push('.place-items-start { place-items: start; }');
  output.push('.place-items-end { place-items: end; }');
  output.push('.place-items-center { place-items: center; }');
  output.push('.place-items-stretch { place-items: stretch; }');
  
  output.push('.place-content-start { place-content: start; }');
  output.push('.place-content-end { place-content: end; }');
  output.push('.place-content-center { place-content: center; }');
  output.push('.place-content-stretch { place-content: stretch; }');
  output.push('.place-content-between { place-content: space-between; }');
  output.push('.place-content-around { place-content: space-around; }');
  output.push('.place-content-evenly { place-content: space-evenly; }');
  
  output.push('.place-self-auto { place-self: auto; }');
  output.push('.place-self-start { place-self: start; }');
  output.push('.place-self-end { place-self: end; }');
  output.push('.place-self-center { place-self: center; }');
  output.push('.place-self-stretch { place-self: stretch; }');
  
  return output.join('\n');
};