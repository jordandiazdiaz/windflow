/**
 * Behavior Utilities - WindFlow Framework
 * Scroll behavior, user select, and interaction utilities
 */

module.exports = function generateBehavior(config) {
  let output = [];
  output.push('/* Behavior Utilities */');
  
  // Scroll behavior
  output.push('.scroll-auto { scroll-behavior: auto; }');
  output.push('.scroll-smooth { scroll-behavior: smooth; }');
  
  // Scroll snap type
  output.push('.snap-none { scroll-snap-type: none; }');
  output.push('.snap-x { scroll-snap-type: x var(--wf-scroll-snap-strictness, mandatory); }');
  output.push('.snap-y { scroll-snap-type: y var(--wf-scroll-snap-strictness, mandatory); }');
  output.push('.snap-both { scroll-snap-type: both var(--wf-scroll-snap-strictness, mandatory); }');
  output.push('.snap-mandatory { --wf-scroll-snap-strictness: mandatory; }');
  output.push('.snap-proximity { --wf-scroll-snap-strictness: proximity; }');
  
  // Scroll snap align
  output.push('.snap-start { scroll-snap-align: start; }');
  output.push('.snap-end { scroll-snap-align: end; }');
  output.push('.snap-center { scroll-snap-align: center; }');
  output.push('.snap-align-none { scroll-snap-align: none; }');
  
  // Scroll snap stop
  output.push('.snap-normal { scroll-snap-stop: normal; }');
  output.push('.snap-always { scroll-snap-stop: always; }');
  
  // Scroll margin
  const scrollMargins = {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
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
  
  Object.entries(scrollMargins).forEach(([key, value]) => {
    output.push(`.scroll-m-${key} { scroll-margin: ${value}; }`);
    output.push(`.scroll-mx-${key} { scroll-margin-left: ${value}; scroll-margin-right: ${value}; }`);
    output.push(`.scroll-my-${key} { scroll-margin-top: ${value}; scroll-margin-bottom: ${value}; }`);
    output.push(`.scroll-mt-${key} { scroll-margin-top: ${value}; }`);
    output.push(`.scroll-mr-${key} { scroll-margin-right: ${value}; }`);
    output.push(`.scroll-mb-${key} { scroll-margin-bottom: ${value}; }`);
    output.push(`.scroll-ml-${key} { scroll-margin-left: ${value}; }`);
  });
  
  // Scroll padding
  Object.entries(scrollMargins).forEach(([key, value]) => {
    output.push(`.scroll-p-${key} { scroll-padding: ${value}; }`);
    output.push(`.scroll-px-${key} { scroll-padding-left: ${value}; scroll-padding-right: ${value}; }`);
    output.push(`.scroll-py-${key} { scroll-padding-top: ${value}; scroll-padding-bottom: ${value}; }`);
    output.push(`.scroll-pt-${key} { scroll-padding-top: ${value}; }`);
    output.push(`.scroll-pr-${key} { scroll-padding-right: ${value}; }`);
    output.push(`.scroll-pb-${key} { scroll-padding-bottom: ${value}; }`);
    output.push(`.scroll-pl-${key} { scroll-padding-left: ${value}; }`);
  });
  
  // Touch action
  output.push('.touch-auto { touch-action: auto; }');
  output.push('.touch-none { touch-action: none; }');
  output.push('.touch-pan-x { touch-action: pan-x; }');
  output.push('.touch-pan-left { touch-action: pan-left; }');
  output.push('.touch-pan-right { touch-action: pan-right; }');
  output.push('.touch-pan-y { touch-action: pan-y; }');
  output.push('.touch-pan-up { touch-action: pan-up; }');
  output.push('.touch-pan-down { touch-action: pan-down; }');
  output.push('.touch-pinch-zoom { touch-action: pinch-zoom; }');
  output.push('.touch-manipulation { touch-action: manipulation; }');
  
  // User select
  output.push('.select-none { user-select: none; }');
  output.push('.select-text { user-select: text; }');
  output.push('.select-all { user-select: all; }');
  output.push('.select-auto { user-select: auto; }');
  
  // Resize
  output.push('.resize-none { resize: none; }');
  output.push('.resize { resize: both; }');
  output.push('.resize-y { resize: vertical; }');
  output.push('.resize-x { resize: horizontal; }');
  
  // Cursor
  const cursors = [
    'auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed',
    'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text',
    'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize',
    'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize',
    'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize',
    'nwse-resize', 'zoom-in', 'zoom-out'
  ];
  
  cursors.forEach(cursor => {
    output.push(`.cursor-${cursor} { cursor: ${cursor}; }`);
  });
  
  // Caret color
  const caretColors = {
    'transparent': 'transparent',
    'current': 'currentColor',
    'black': '#000000',
    'white': '#ffffff',
    'primary': 'var(--wf-color-primary)',
    'secondary': 'var(--wf-color-secondary)',
    'accent': 'var(--wf-color-accent)'
  };
  
  Object.entries(caretColors).forEach(([key, value]) => {
    output.push(`.caret-${key} { caret-color: ${value}; }`);
  });
  
  // Accent color
  Object.entries(caretColors).forEach(([key, value]) => {
    output.push(`.accent-${key} { accent-color: ${value}; }`);
  });
  
  // Appearance
  output.push('.appearance-none { appearance: none; }');
  output.push('.appearance-auto { appearance: auto; }');
  
  // Will change
  output.push('.will-change-auto { will-change: auto; }');
  output.push('.will-change-scroll { will-change: scroll-position; }');
  output.push('.will-change-contents { will-change: contents; }');
  output.push('.will-change-transform { will-change: transform; }');
  
  // Contain
  output.push('.contain-none { contain: none; }');
  output.push('.contain-strict { contain: strict; }');
  output.push('.contain-content { contain: content; }');
  output.push('.contain-size { contain: size; }');
  output.push('.contain-layout { contain: layout; }');
  output.push('.contain-style { contain: style; }');
  output.push('.contain-paint { contain: paint; }');
  
  // Forced color adjust
  output.push('.forced-color-adjust-auto { forced-color-adjust: auto; }');
  output.push('.forced-color-adjust-none { forced-color-adjust: none; }');
  
  return output.join('\n');
};