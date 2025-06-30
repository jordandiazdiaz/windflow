const fs = require('fs');
const path = require('path');

// Try to load chokidar only if --watch flag is present
let chokidar;
if (process.argv.includes('--watch')) {
  try {
    chokidar = require('chokidar');
  } catch (e) {
    console.log('⚠️  Watch mode requires chokidar. Install with: npm install chokidar');
    process.exit(1);
  }
}

const config = require('../windflow.config.js');

class WindFlowBuilder {
  constructor() {
    this.output = [];
    this.config = config;
  }

  generateCSS() {
    this.output = [];
    
    // Reset and base styles
    this.addReset();
    this.addBase();
    
    // Generate utilities
    this.generateSpacing();
    this.generateColors();
    this.generateTypography();
    this.generateFlexbox();
    this.generateGrid();
    this.generateBorders();
    this.generateEffects();
    this.generateAnimations();
    this.generateTransforms();
    this.generateGradients();
    this.generateFilters();
    this.generateBackdropFilters();
    this.generateClipPath();
    this.generateMixBlendMode();
    this.generateAspectRatio();
    this.generateScrollSnap();
    this.generateContainerQueries();
    
    // Responsive variants
    this.generateResponsiveVariants();
    
    // Dark mode variants
    this.generateDarkModeVariants();
    
    return this.output.join('\n\n');
  }

  addReset() {
    this.output.push(`/* WindFlow CSS Reset */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ${this.config.theme.fontFamily.sans.join(', ')};
}

body {
  margin: 0;
  line-height: inherit;
}

hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

b, strong {
  font-weight: bolder;
}

code, kbd, samp, pre {
  font-family: ${this.config.theme.fontFamily.mono.join(', ')};
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button, select {
  text-transform: none;
}

button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}

:-moz-focusring {
  outline: auto;
}

:-moz-ui-invalid {
  box-shadow: none;
}

progress {
  vertical-align: baseline;
}

::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

textarea {
  resize: vertical;
}

input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}

button, [role="button"] {
  cursor: pointer;
}

:disabled {
  cursor: default;
}

img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}

[hidden] {
  display: none;
}`);
  }

  addBase() {
    this.output.push(`/* Base Styles */
.wf-container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
}

@media (min-width: 640px) {
  .wf-container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .wf-container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .wf-container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .wf-container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .wf-container {
    max-width: 1536px;
  }
}`);
  }

  generateSpacing() {
    const spacing = this.config.theme.spacing;
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

    this.output.push('/* Spacing Utilities */');
    
    Object.entries(properties).forEach(([prefix, property]) => {
      Object.entries(spacing).forEach(([key, value]) => {
        if (prefix === 'space-x' || prefix === 'space-y') {
          const direction = prefix === 'space-x' ? 'horizontal' : 'vertical';
          this.output.push(`.${prefix}-${key} > * + * {
  ${property}: ${value};
}`);
        } else if (Array.isArray(property)) {
          this.output.push(`.${prefix}-${key} {
  ${property[0]}: ${value};
  ${property[1]}: ${value};
}`);
        } else {
          this.output.push(`.${prefix}-${key} {
  ${property}: ${value};
}`);
        }
      });
    });

    // Negative margins
    Object.entries(spacing).forEach(([key, value]) => {
      if (key !== '0') {
        ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my'].forEach(prefix => {
          const props = properties[prefix];
          if (Array.isArray(props)) {
            this.output.push(`.-${prefix}-${key} {
  ${props[0]}: -${value};
  ${props[1]}: -${value};
}`);
          } else {
            this.output.push(`.-${prefix}-${key} {
  ${props}: -${value};
}`);
          }
        });
      }
    });
  }

  generateColors() {
    const colors = this.config.theme.colors;
    
    this.output.push('/* Color Utilities */');
    
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'string') {
        this.output.push(`.text-${colorName} { color: ${colorValue}; }`);
        this.output.push(`.bg-${colorName} { background-color: ${colorValue}; }`);
        this.output.push(`.border-${colorName} { border-color: ${colorValue}; }`);
        this.output.push(`.ring-${colorName} { --wf-ring-color: ${colorValue}; }`);
      } else if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, hex]) => {
          this.output.push(`.text-${colorName}-${shade} { color: ${hex}; }`);
          this.output.push(`.bg-${colorName}-${shade} { background-color: ${hex}; }`);
          this.output.push(`.border-${colorName}-${shade} { border-color: ${hex}; }`);
          this.output.push(`.ring-${colorName}-${shade} { --wf-ring-color: ${hex}; }`);
        });
      }
    });
  }

  generateTypography() {
    this.output.push('/* Typography Utilities */');
    
    // Font sizes
    const fontSizes = this.config.theme.fontSize;
    Object.entries(fontSizes).forEach(([key, [size, lineHeight]]) => {
      this.output.push(`.text-${key} {
  font-size: ${size};
  line-height: ${lineHeight};
}`);
    });

    // Font weights
    const fontWeights = this.config.theme.fontWeight;
    Object.entries(fontWeights).forEach(([key, value]) => {
      this.output.push(`.font-${key} { font-weight: ${value}; }`);
    });

    // Text alignment
    ['left', 'center', 'right', 'justify'].forEach(align => {
      this.output.push(`.text-${align} { text-align: ${align}; }`);
    });

    // Text decoration
    this.output.push('.underline { text-decoration-line: underline; }');
    this.output.push('.line-through { text-decoration-line: line-through; }');
    this.output.push('.no-underline { text-decoration-line: none; }');

    // Text transform
    this.output.push('.uppercase { text-transform: uppercase; }');
    this.output.push('.lowercase { text-transform: lowercase; }');
    this.output.push('.capitalize { text-transform: capitalize; }');
    this.output.push('.normal-case { text-transform: none; }');

    // Letter spacing
    const letterSpacing = this.config.theme.letterSpacing;
    Object.entries(letterSpacing).forEach(([key, value]) => {
      this.output.push(`.tracking-${key} { letter-spacing: ${value}; }`);
    });

    // Line height
    const lineHeight = this.config.theme.lineHeight;
    Object.entries(lineHeight).forEach(([key, value]) => {
      this.output.push(`.leading-${key} { line-height: ${value}; }`);
    });
  }

  generateFlexbox() {
    this.output.push('/* Flexbox Utilities */');
    
    // Display
    this.output.push('.flex { display: flex; }');
    this.output.push('.inline-flex { display: inline-flex; }');

    // Direction
    this.output.push('.flex-row { flex-direction: row; }');
    this.output.push('.flex-row-reverse { flex-direction: row-reverse; }');
    this.output.push('.flex-col { flex-direction: column; }');
    this.output.push('.flex-col-reverse { flex-direction: column-reverse; }');

    // Wrap
    this.output.push('.flex-wrap { flex-wrap: wrap; }');
    this.output.push('.flex-wrap-reverse { flex-wrap: wrap-reverse; }');
    this.output.push('.flex-nowrap { flex-wrap: nowrap; }');

    // Flex
    this.output.push('.flex-1 { flex: 1 1 0%; }');
    this.output.push('.flex-auto { flex: 1 1 auto; }');
    this.output.push('.flex-initial { flex: 0 1 auto; }');
    this.output.push('.flex-none { flex: none; }');

    // Grow & Shrink
    this.output.push('.flex-grow-0 { flex-grow: 0; }');
    this.output.push('.flex-grow { flex-grow: 1; }');
    this.output.push('.flex-shrink-0 { flex-shrink: 0; }');
    this.output.push('.flex-shrink { flex-shrink: 1; }');

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
      this.output.push(`.justify-${key} { justify-content: ${value}; }`);
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
      this.output.push(`.items-${key} { align-items: ${value}; }`);
    });

    // Align self
    Object.entries(alignValues).forEach(([key, value]) => {
      this.output.push(`.self-${key} { align-self: ${value}; }`);
    });
    this.output.push('.self-auto { align-self: auto; }');

    // Order
    for (let i = 1; i <= 12; i++) {
      this.output.push(`.order-${i} { order: ${i}; }`);
    }
    this.output.push('.order-first { order: -9999; }');
    this.output.push('.order-last { order: 9999; }');
    this.output.push('.order-none { order: 0; }');
  }

  generateGrid() {
    this.output.push('/* Grid Utilities */');
    
    // Display
    this.output.push('.grid { display: grid; }');
    this.output.push('.inline-grid { display: inline-grid; }');

    // Template columns
    for (let i = 1; i <= 12; i++) {
      this.output.push(`.grid-cols-${i} { grid-template-columns: repeat(${i}, minmax(0, 1fr)); }`);
    }
    this.output.push('.grid-cols-none { grid-template-columns: none; }');

    // Template rows
    for (let i = 1; i <= 6; i++) {
      this.output.push(`.grid-rows-${i} { grid-template-rows: repeat(${i}, minmax(0, 1fr)); }`);
    }
    this.output.push('.grid-rows-none { grid-template-rows: none; }');

    // Column span
    for (let i = 1; i <= 12; i++) {
      this.output.push(`.col-span-${i} { grid-column: span ${i} / span ${i}; }`);
    }
    this.output.push('.col-span-full { grid-column: 1 / -1; }');
    this.output.push('.col-auto { grid-column: auto; }');

    // Row span
    for (let i = 1; i <= 6; i++) {
      this.output.push(`.row-span-${i} { grid-row: span ${i} / span ${i}; }`);
    }
    this.output.push('.row-span-full { grid-row: 1 / -1; }');
    this.output.push('.row-auto { grid-row: auto; }');

    // Auto flow
    this.output.push('.grid-flow-row { grid-auto-flow: row; }');
    this.output.push('.grid-flow-col { grid-auto-flow: column; }');
    this.output.push('.grid-flow-row-dense { grid-auto-flow: row dense; }');
    this.output.push('.grid-flow-col-dense { grid-auto-flow: column dense; }');

    // Place items
    const placeValues = {
      'start': 'start',
      'end': 'end',
      'center': 'center',
      'stretch': 'stretch'
    };
    
    Object.entries(placeValues).forEach(([key, value]) => {
      this.output.push(`.place-items-${key} { place-items: ${value}; }`);
      this.output.push(`.place-content-${key} { place-content: ${value}; }`);
      this.output.push(`.place-self-${key} { place-self: ${value}; }`);
    });
  }

  generateBorders() {
    this.output.push('/* Border Utilities */');
    
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
      this.output.push(`.border${suffix} { border-width: ${value}; }`);
      this.output.push(`.border-t${suffix} { border-top-width: ${value}; }`);
      this.output.push(`.border-r${suffix} { border-right-width: ${value}; }`);
      this.output.push(`.border-b${suffix} { border-bottom-width: ${value}; }`);
      this.output.push(`.border-l${suffix} { border-left-width: ${value}; }`);
      this.output.push(`.border-x${suffix} { border-left-width: ${value}; border-right-width: ${value}; }`);
      this.output.push(`.border-y${suffix} { border-top-width: ${value}; border-bottom-width: ${value}; }`);
    });

    // Border style
    ['solid', 'dashed', 'dotted', 'double', 'none'].forEach(style => {
      this.output.push(`.border-${style} { border-style: ${style}; }`);
    });

    // Border radius
    const borderRadius = this.config.theme.borderRadius;
    Object.entries(borderRadius).forEach(([key, value]) => {
      this.output.push(`.rounded${key ? `-${key}` : ''} { border-radius: ${value}; }`);
      this.output.push(`.rounded-t${key ? `-${key}` : ''} { border-top-left-radius: ${value}; border-top-right-radius: ${value}; }`);
      this.output.push(`.rounded-r${key ? `-${key}` : ''} { border-top-right-radius: ${value}; border-bottom-right-radius: ${value}; }`);
      this.output.push(`.rounded-b${key ? `-${key}` : ''} { border-bottom-right-radius: ${value}; border-bottom-left-radius: ${value}; }`);
      this.output.push(`.rounded-l${key ? `-${key}` : ''} { border-top-left-radius: ${value}; border-bottom-left-radius: ${value}; }`);
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
      this.output.push(`.ring${suffix} {
  --wf-ring-offset-shadow: var(--wf-ring-inset) 0 0 0 var(--wf-ring-offset-width) var(--wf-ring-offset-color);
  --wf-ring-shadow: var(--wf-ring-inset) 0 0 0 calc(${value} + var(--wf-ring-offset-width)) var(--wf-ring-color);
  box-shadow: var(--wf-ring-offset-shadow), var(--wf-ring-shadow), var(--wf-shadow, 0 0 #0000);
}`);
    });

    // Ring offset
    Object.entries(ringWidths).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.ring-offset${suffix} { --wf-ring-offset-width: ${value}; }`);
    });
  }

  generateEffects() {
    this.output.push('/* Effects Utilities */');
    
    // Box shadow
    const boxShadow = this.config.theme.boxShadow;
    Object.entries(boxShadow).forEach(([key, value]) => {
      this.output.push(`.shadow${key ? `-${key}` : ''} {
  --wf-shadow: ${value};
  box-shadow: var(--wf-ring-offset-shadow, 0 0 #0000), var(--wf-ring-shadow, 0 0 #0000), var(--wf-shadow);
}`);
    });

    // Opacity
    const opacity = this.config.theme.opacity;
    Object.entries(opacity).forEach(([key, value]) => {
      this.output.push(`.opacity-${key} { opacity: ${value}; }`);
    });

    // Mix blend mode
    const blendModes = ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
    blendModes.forEach(mode => {
      this.output.push(`.mix-blend-${mode} { mix-blend-mode: ${mode}; }`);
    });
  }

  generateAnimations() {
    this.output.push('/* Animation Utilities - WindFlow Improvements */');
    
    // Basic animations
    this.output.push(`@keyframes wf-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes wf-ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@keyframes wf-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

@keyframes wf-bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`);

    // Enhanced animations
    this.output.push(`@keyframes wf-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes wf-fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes wf-slide-in-right {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes wf-slide-in-left {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes wf-slide-in-up {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}

@keyframes wf-slide-in-down {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@keyframes wf-zoom-in {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

@keyframes wf-zoom-out {
  from { transform: scale(1); }
  to { transform: scale(0); }
}

@keyframes wf-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

@keyframes wf-wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes wf-flip {
  from { transform: perspective(400px) rotateY(0); }
  to { transform: perspective(400px) rotateY(360deg); }
}

@keyframes wf-heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}`);

    // Animation classes
    const animations = {
      'spin': 'wf-spin 1s linear infinite',
      'ping': 'wf-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      'pulse': 'wf-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'bounce': 'wf-bounce 1s infinite',
      'fade-in': 'wf-fade-in 0.5s ease-out',
      'fade-out': 'wf-fade-out 0.5s ease-out',
      'slide-in-right': 'wf-slide-in-right 0.5s ease-out',
      'slide-in-left': 'wf-slide-in-left 0.5s ease-out',
      'slide-in-up': 'wf-slide-in-up 0.5s ease-out',
      'slide-in-down': 'wf-slide-in-down 0.5s ease-out',
      'zoom-in': 'wf-zoom-in 0.3s ease-out',
      'zoom-out': 'wf-zoom-out 0.3s ease-out',
      'shake': 'wf-shake 0.5s ease-in-out',
      'wiggle': 'wf-wiggle 1s ease-in-out infinite',
      'flip': 'wf-flip 0.6s ease-in-out',
      'heartbeat': 'wf-heartbeat 1.5s ease-in-out infinite'
    };

    Object.entries(animations).forEach(([name, value]) => {
      this.output.push(`.animate-${name} { animation: ${value}; }`);
    });

    // Animation utilities
    this.output.push('.animate-none { animation: none; }');
    
    // Animation duration
    const durations = {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    };
    
    Object.entries(durations).forEach(([key, value]) => {
      this.output.push(`.duration-${key} { animation-duration: ${value}; }`);
    });

    // Animation delay
    Object.entries(durations).forEach(([key, value]) => {
      this.output.push(`.delay-${key} { animation-delay: ${value}; }`);
    });

    // Animation iteration
    this.output.push('.animate-once { animation-iteration-count: 1; }');
    this.output.push('.animate-twice { animation-iteration-count: 2; }');
    this.output.push('.animate-infinite { animation-iteration-count: infinite; }');

    // Animation direction
    this.output.push('.animate-normal { animation-direction: normal; }');
    this.output.push('.animate-reverse { animation-direction: reverse; }');
    this.output.push('.animate-alternate { animation-direction: alternate; }');
    this.output.push('.animate-alternate-reverse { animation-direction: alternate-reverse; }');

    // Animation fill mode
    this.output.push('.animate-fill-none { animation-fill-mode: none; }');
    this.output.push('.animate-fill-forwards { animation-fill-mode: forwards; }');
    this.output.push('.animate-fill-backwards { animation-fill-mode: backwards; }');
    this.output.push('.animate-fill-both { animation-fill-mode: both; }');

    // Animation play state
    this.output.push('.animate-play { animation-play-state: running; }');
    this.output.push('.animate-pause { animation-play-state: paused; }');
  }

  generateTransforms() {
    this.output.push('/* Transform Utilities - WindFlow 3D Transforms */');
    
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
      this.output.push(`.origin-${key} { transform-origin: ${value}; }`);
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
      this.output.push(`.scale-${key} { transform: scale(${value}); }`);
      this.output.push(`.scale-x-${key} { transform: scaleX(${value}); }`);
      this.output.push(`.scale-y-${key} { transform: scaleY(${value}); }`);
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
      this.output.push(`.rotate-${key} { transform: rotate(${value}); }`);
      this.output.push(`.-rotate-${key} { transform: rotate(-${value}); }`);
    });

    // 3D Rotations
    Object.entries(rotations).forEach(([key, value]) => {
      this.output.push(`.rotate-x-${key} { transform: rotateX(${value}); }`);
      this.output.push(`.rotate-y-${key} { transform: rotateY(${value}); }`);
      this.output.push(`.rotate-z-${key} { transform: rotateZ(${value}); }`);
      this.output.push(`.-rotate-x-${key} { transform: rotateX(-${value}); }`);
      this.output.push(`.-rotate-y-${key} { transform: rotateY(-${value}); }`);
      this.output.push(`.-rotate-z-${key} { transform: rotateZ(-${value}); }`);
    });

    // Translate
    const spacing = this.config.theme.spacing;
    Object.entries(spacing).forEach(([key, value]) => {
      this.output.push(`.translate-x-${key} { transform: translateX(${value}); }`);
      this.output.push(`.translate-y-${key} { transform: translateY(${value}); }`);
      this.output.push(`.-translate-x-${key} { transform: translateX(-${value}); }`);
      this.output.push(`.-translate-y-${key} { transform: translateY(-${value}); }`);
    });

    // 3D Translate
    Object.entries(spacing).forEach(([key, value]) => {
      this.output.push(`.translate-z-${key} { transform: translateZ(${value}); }`);
      this.output.push(`.-translate-z-${key} { transform: translateZ(-${value}); }`);
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
      this.output.push(`.skew-x-${key} { transform: skewX(${value}); }`);
      this.output.push(`.skew-y-${key} { transform: skewY(${value}); }`);
      this.output.push(`.-skew-x-${key} { transform: skewX(-${value}); }`);
      this.output.push(`.-skew-y-${key} { transform: skewY(-${value}); }`);
    });

    // Perspective
    this.output.push('.perspective-none { transform: perspective(none); }');
    this.output.push('.perspective-sm { perspective: 500px; }');
    this.output.push('.perspective-md { perspective: 1000px; }');
    this.output.push('.perspective-lg { perspective: 1500px; }');
    this.output.push('.perspective-xl { perspective: 2000px; }');

    // Transform style
    this.output.push('.transform-flat { transform-style: flat; }');
    this.output.push('.transform-3d { transform-style: preserve-3d; }');

    // Backface visibility
    this.output.push('.backface-visible { backface-visibility: visible; }');
    this.output.push('.backface-hidden { backface-visibility: hidden; }');
  }

  generateGradients() {
    this.output.push('/* Gradient Utilities - WindFlow Advanced Gradients */');
    
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
      this.output.push(`.bg-gradient-to-${key} {
  background-image: linear-gradient(${value}, var(--wf-gradient-stops));
}`);
    });

    // Radial gradients
    this.output.push(`.bg-gradient-radial {
  background-image: radial-gradient(circle, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-t {
  background-image: radial-gradient(circle at top, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-tr {
  background-image: radial-gradient(circle at top right, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-r {
  background-image: radial-gradient(circle at right, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-br {
  background-image: radial-gradient(circle at bottom right, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-b {
  background-image: radial-gradient(circle at bottom, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-bl {
  background-image: radial-gradient(circle at bottom left, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-l {
  background-image: radial-gradient(circle at left, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-radial-at-tl {
  background-image: radial-gradient(circle at top left, var(--wf-gradient-stops));
}`);

    // Conic gradients
    this.output.push(`.bg-gradient-conic {
  background-image: conic-gradient(var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-t {
  background-image: conic-gradient(from 0deg, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-tr {
  background-image: conic-gradient(from 45deg, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-r {
  background-image: conic-gradient(from 90deg, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-br {
  background-image: conic-gradient(from 135deg, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-b {
  background-image: conic-gradient(from 180deg, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-bl {
  background-image: conic-gradient(from 225deg, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-l {
  background-image: conic-gradient(from 270deg, var(--wf-gradient-stops));
}`);

    this.output.push(`.bg-gradient-conic-from-tl {
  background-image: conic-gradient(from 315deg, var(--wf-gradient-stops));
}`);

    // Gradient color stops
    const colors = this.config.theme.colors;
    
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'string') {
        this.output.push(`.from-${colorName} { --wf-gradient-from: ${colorValue}; --wf-gradient-stops: var(--wf-gradient-from), var(--wf-gradient-to, transparent); }`);
        this.output.push(`.via-${colorName} { --wf-gradient-stops: var(--wf-gradient-from), ${colorValue}, var(--wf-gradient-to, transparent); }`);
        this.output.push(`.to-${colorName} { --wf-gradient-to: ${colorValue}; }`);
      } else if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, hex]) => {
          this.output.push(`.from-${colorName}-${shade} { --wf-gradient-from: ${hex}; --wf-gradient-stops: var(--wf-gradient-from), var(--wf-gradient-to, transparent); }`);
          this.output.push(`.via-${colorName}-${shade} { --wf-gradient-stops: var(--wf-gradient-from), ${hex}, var(--wf-gradient-to, transparent); }`);
          this.output.push(`.to-${colorName}-${shade} { --wf-gradient-to: ${hex}; }`);
        });
      }
    });

    // Mesh gradients (simulated)
    this.output.push(`.bg-mesh-gradient {
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
    this.output.push(`.bg-aurora {
  background: linear-gradient(to bottom right, #f87171, #dc2626, #7c3aed, #2563eb, #0891b2, #059669);
  background-size: 200% 200%;
  animation: wf-aurora 15s ease infinite;
}

@keyframes wf-aurora {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`);
  }

  generateFilters() {
    this.output.push('/* Filter Utilities */');
    
    // Blur
    const blurs = {
      'none': '0',
      'sm': '4px',
      '': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px'
    };
    
    Object.entries(blurs).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.blur${suffix} { filter: blur(${value}); }`);
    });

    // Brightness
    const brightness = {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(brightness).forEach(([key, value]) => {
      this.output.push(`.brightness-${key} { filter: brightness(${value}); }`);
    });

    // Contrast
    Object.entries(brightness).forEach(([key, value]) => {
      this.output.push(`.contrast-${key} { filter: contrast(${value}); }`);
    });

    // Grayscale
    const grayscale = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(grayscale).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.grayscale${suffix} { filter: grayscale(${value}); }`);
    });

    // Hue rotate
    const hueRotate = {
      '0': '0deg',
      '15': '15deg',
      '30': '30deg',
      '60': '60deg',
      '90': '90deg',
      '180': '180deg'
    };
    
    Object.entries(hueRotate).forEach(([key, value]) => {
      this.output.push(`.hue-rotate-${key} { filter: hue-rotate(${value}); }`);
      this.output.push(`.-hue-rotate-${key} { filter: hue-rotate(-${value}); }`);
    });

    // Invert
    const invert = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(invert).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.invert${suffix} { filter: invert(${value}); }`);
    });

    // Saturate
    const saturate = {
      '0': '0',
      '50': '.5',
      '100': '1',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(saturate).forEach(([key, value]) => {
      this.output.push(`.saturate-${key} { filter: saturate(${value}); }`);
    });

    // Sepia
    const sepia = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(sepia).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.sepia${suffix} { filter: sepia(${value}); }`);
    });

    // Drop shadow
    const dropShadows = {
      'sm': '0 1px 1px rgb(0 0 0 / 0.05)',
      '': '0 1px 2px rgb(0 0 0 / 0.1), 0 1px 1px rgb(0 0 0 / 0.06)',
      'md': '0 4px 3px rgb(0 0 0 / 0.07), 0 2px 2px rgb(0 0 0 / 0.06)',
      'lg': '0 10px 8px rgb(0 0 0 / 0.04), 0 4px 3px rgb(0 0 0 / 0.1)',
      'xl': '0 20px 13px rgb(0 0 0 / 0.03), 0 8px 5px rgb(0 0 0 / 0.08)',
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      'none': '0 0 #0000'
    };
    
    Object.entries(dropShadows).forEach(([key, value]) => {
      const suffix = key === 'none' ? '-none' : key ? `-${key}` : '';
      this.output.push(`.drop-shadow${suffix} { filter: drop-shadow(${value}); }`);
    });
  }

  generateBackdropFilters() {
    this.output.push('/* Backdrop Filter Utilities */');
    
    // Backdrop blur
    const blurs = {
      'none': '0',
      'sm': '4px',
      '': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
      '2xl': '40px',
      '3xl': '64px'
    };
    
    Object.entries(blurs).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.backdrop-blur${suffix} { backdrop-filter: blur(${value}); }`);
    });

    // Backdrop brightness
    const brightness = {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(brightness).forEach(([key, value]) => {
      this.output.push(`.backdrop-brightness-${key} { backdrop-filter: brightness(${value}); }`);
    });

    // Backdrop contrast
    Object.entries(brightness).forEach(([key, value]) => {
      this.output.push(`.backdrop-contrast-${key} { backdrop-filter: contrast(${value}); }`);
    });

    // Backdrop grayscale
    const grayscale = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(grayscale).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.backdrop-grayscale${suffix} { backdrop-filter: grayscale(${value}); }`);
    });

    // Backdrop hue rotate
    const hueRotate = {
      '0': '0deg',
      '15': '15deg',
      '30': '30deg',
      '60': '60deg',
      '90': '90deg',
      '180': '180deg'
    };
    
    Object.entries(hueRotate).forEach(([key, value]) => {
      this.output.push(`.backdrop-hue-rotate-${key} { backdrop-filter: hue-rotate(${value}); }`);
      this.output.push(`.-backdrop-hue-rotate-${key} { backdrop-filter: hue-rotate(-${value}); }`);
    });

    // Backdrop invert
    const invert = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(invert).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.backdrop-invert${suffix} { backdrop-filter: invert(${value}); }`);
    });

    // Backdrop opacity
    const opacity = this.config.theme.opacity;
    Object.entries(opacity).forEach(([key, value]) => {
      this.output.push(`.backdrop-opacity-${key} { backdrop-filter: opacity(${value}); }`);
    });

    // Backdrop saturate
    const saturate = {
      '0': '0',
      '50': '.5',
      '100': '1',
      '150': '1.5',
      '200': '2'
    };
    
    Object.entries(saturate).forEach(([key, value]) => {
      this.output.push(`.backdrop-saturate-${key} { backdrop-filter: saturate(${value}); }`);
    });

    // Backdrop sepia
    const sepia = {
      '0': '0',
      '': '100%'
    };
    
    Object.entries(sepia).forEach(([key, value]) => {
      const suffix = key ? `-${key}` : '';
      this.output.push(`.backdrop-sepia${suffix} { backdrop-filter: sepia(${value}); }`);
    });
  }

  generateClipPath() {
    this.output.push('/* Clip Path Utilities - WindFlow Enhancement */');
    
    this.output.push('.clip-none { clip-path: none; }');
    this.output.push('.clip-circle { clip-path: circle(50%); }');
    this.output.push('.clip-ellipse { clip-path: ellipse(50% 40%); }');
    this.output.push('.clip-triangle { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }');
    this.output.push('.clip-triangle-down { clip-path: polygon(0% 0%, 100% 0%, 50% 100%); }');
    this.output.push('.clip-rhombus { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }');
    this.output.push('.clip-parallelogram { clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); }');
    this.output.push('.clip-pentagon { clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); }');
    this.output.push('.clip-hexagon { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }');
    this.output.push('.clip-star { clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); }');
    this.output.push('.clip-cross { clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%); }');
    this.output.push('.clip-message { clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%); }');
    this.output.push('.clip-arrow-left { clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%); }');
    this.output.push('.clip-arrow-right { clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%); }');
    this.output.push('.clip-chevron-left { clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); }');
    this.output.push('.clip-chevron-right { clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%); }');
  }

  generateMixBlendMode() {
    this.output.push('/* Mix Blend Mode Utilities */');
    
    const blendModes = [
      'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
      'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
      'exclusion', 'hue', 'saturation', 'color', 'luminosity'
    ];
    
    blendModes.forEach(mode => {
      this.output.push(`.mix-blend-${mode} { mix-blend-mode: ${mode}; }`);
    });

    // Background blend mode
    blendModes.forEach(mode => {
      this.output.push(`.bg-blend-${mode} { background-blend-mode: ${mode}; }`);
    });
  }

  generateAspectRatio() {
    this.output.push('/* Aspect Ratio Utilities */');
    
    const aspectRatios = {
      'auto': 'auto',
      'square': '1 / 1',
      'video': '16 / 9',
      '4/3': '4 / 3',
      '21/9': '21 / 9'
    };
    
    Object.entries(aspectRatios).forEach(([key, value]) => {
      const className = key.includes('/') ? key.replace('/', '\\:') : key;
      this.output.push(`.aspect-${className} { aspect-ratio: ${value}; }`);
    });
  }

  generateScrollSnap() {
    this.output.push('/* Scroll Snap Utilities */');
    
    // Scroll snap type
    this.output.push('.snap-none { scroll-snap-type: none; }');
    this.output.push('.snap-x { scroll-snap-type: x var(--wf-scroll-snap-strictness, mandatory); }');
    this.output.push('.snap-y { scroll-snap-type: y var(--wf-scroll-snap-strictness, mandatory); }');
    this.output.push('.snap-both { scroll-snap-type: both var(--wf-scroll-snap-strictness, mandatory); }');
    this.output.push('.snap-mandatory { --wf-scroll-snap-strictness: mandatory; }');
    this.output.push('.snap-proximity { --wf-scroll-snap-strictness: proximity; }');

    // Scroll snap align
    this.output.push('.snap-start { scroll-snap-align: start; }');
    this.output.push('.snap-end { scroll-snap-align: end; }');
    this.output.push('.snap-center { scroll-snap-align: center; }');
    this.output.push('.snap-align-none { scroll-snap-align: none; }');

    // Scroll snap stop
    this.output.push('.snap-normal { scroll-snap-stop: normal; }');
    this.output.push('.snap-always { scroll-snap-stop: always; }');

    // Scroll behavior
    this.output.push('.scroll-auto { scroll-behavior: auto; }');
    this.output.push('.scroll-smooth { scroll-behavior: smooth; }');

    // Overscroll behavior
    this.output.push('.overscroll-auto { overscroll-behavior: auto; }');
    this.output.push('.overscroll-contain { overscroll-behavior: contain; }');
    this.output.push('.overscroll-none { overscroll-behavior: none; }');
    this.output.push('.overscroll-y-auto { overscroll-behavior-y: auto; }');
    this.output.push('.overscroll-y-contain { overscroll-behavior-y: contain; }');
    this.output.push('.overscroll-y-none { overscroll-behavior-y: none; }');
    this.output.push('.overscroll-x-auto { overscroll-behavior-x: auto; }');
    this.output.push('.overscroll-x-contain { overscroll-behavior-x: contain; }');
    this.output.push('.overscroll-x-none { overscroll-behavior-x: none; }');
  }

  generateContainerQueries() {
    this.output.push('/* Container Queries - WindFlow Enhancement */');
    
    // Container types
    this.output.push('.container-type-normal { container-type: normal; }');
    this.output.push('.container-type-size { container-type: size; }');
    this.output.push('.container-type-inline-size { container-type: inline-size; }');

    // Container names
    this.output.push('.container-name-card { container-name: card; }');
    this.output.push('.container-name-sidebar { container-name: sidebar; }');
    this.output.push('.container-name-main { container-name: main; }');
    this.output.push('.container-name-header { container-name: header; }');
    this.output.push('.container-name-footer { container-name: footer; }');

    // Container query units in CSS custom properties
    this.output.push(`/* Container query units available as CSS custom properties:
   * --cqw: 1% of container width
   * --cqh: 1% of container height
   * --cqi: 1% of container inline size
   * --cqb: 1% of container block size
   * --cqmin: smaller of cqi or cqb
   * --cqmax: larger of cqi or cqb
   */`);
  }

  generateResponsiveVariants() {
    this.output.push('/* Responsive Variants */');
    
    const breakpoints = this.config.theme.screens;
    
    Object.entries(breakpoints).forEach(([screen, size]) => {
      this.output.push(`@media (min-width: ${size}) {`);
      
      // Display utilities
      this.output.push(`  .${screen}\\:block { display: block; }`);
      this.output.push(`  .${screen}\\:inline-block { display: inline-block; }`);
      this.output.push(`  .${screen}\\:inline { display: inline; }`);
      this.output.push(`  .${screen}\\:flex { display: flex; }`);
      this.output.push(`  .${screen}\\:inline-flex { display: inline-flex; }`);
      this.output.push(`  .${screen}\\:grid { display: grid; }`);
      this.output.push(`  .${screen}\\:inline-grid { display: inline-grid; }`);
      this.output.push(`  .${screen}\\:hidden { display: none; }`);
      
      // Flexbox utilities
      this.output.push(`  .${screen}\\:flex-row { flex-direction: row; }`);
      this.output.push(`  .${screen}\\:flex-col { flex-direction: column; }`);
      this.output.push(`  .${screen}\\:flex-wrap { flex-wrap: wrap; }`);
      this.output.push(`  .${screen}\\:flex-nowrap { flex-wrap: nowrap; }`);
      
      // Grid utilities
      for (let i = 1; i <= 12; i++) {
        this.output.push(`  .${screen}\\:grid-cols-${i} { grid-template-columns: repeat(${i}, minmax(0, 1fr)); }`);
      }
      
      // Spacing utilities
      const spacing = this.config.theme.spacing;
      Object.entries(spacing).forEach(([key, value]) => {
        this.output.push(`  .${screen}\\:m-${key} { margin: ${value}; }`);
        this.output.push(`  .${screen}\\:p-${key} { padding: ${value}; }`);
        this.output.push(`  .${screen}\\:gap-${key} { gap: ${value}; }`);
      });
      
      // Width utilities
      this.output.push(`  .${screen}\\:w-full { width: 100%; }`);
      this.output.push(`  .${screen}\\:w-auto { width: auto; }`);
      this.output.push(`  .${screen}\\:w-screen { width: 100vw; }`);
      this.output.push(`  .${screen}\\:w-min { width: min-content; }`);
      this.output.push(`  .${screen}\\:w-max { width: max-content; }`);
      this.output.push(`  .${screen}\\:w-fit { width: fit-content; }`);
      
      // Text utilities
      const fontSizes = this.config.theme.fontSize;
      Object.entries(fontSizes).forEach(([size, [fontSize, lineHeight]]) => {
        this.output.push(`  .${screen}\\:text-${size} { font-size: ${fontSize}; line-height: ${lineHeight}; }`);
      });
      
      this.output.push('}');
    });
  }

  generateDarkModeVariants() {
    this.output.push('/* Dark Mode Variants */');
    
    this.output.push('@media (prefers-color-scheme: dark) {');
    
    // Color utilities
    const colors = this.config.theme.colors;
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, hex]) => {
          this.output.push(`  .dark\\:text-${colorName}-${shade} { color: ${hex}; }`);
          this.output.push(`  .dark\\:bg-${colorName}-${shade} { background-color: ${hex}; }`);
          this.output.push(`  .dark\\:border-${colorName}-${shade} { border-color: ${hex}; }`);
        });
      }
    });
    
    // Opacity utilities
    const opacity = this.config.theme.opacity;
    Object.entries(opacity).forEach(([key, value]) => {
      this.output.push(`  .dark\\:opacity-${key} { opacity: ${value}; }`);
    });
    
    this.output.push('}');
    
    // Class-based dark mode
    this.output.push('.dark {');
    Object.entries(colors).forEach(([colorName, colorValue]) => {
      if (typeof colorValue === 'object') {
        Object.entries(colorValue).forEach(([shade, hex]) => {
          this.output.push(`  .dark\\:text-${colorName}-${shade} { color: ${hex}; }`);
          this.output.push(`  .dark\\:bg-${colorName}-${shade} { background-color: ${hex}; }`);
          this.output.push(`  .dark\\:border-${colorName}-${shade} { border-color: ${hex}; }`);
        });
      }
    });
    this.output.push('}');
  }

  build() {
    const css = this.generateCSS();
    const outputPath = path.join(__dirname, '..', 'dist', 'windflow.css');
    
    // Ensure dist directory exists
    const distDir = path.dirname(outputPath);
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, css);
    console.log(`✅ WindFlow CSS built successfully! (${(css.length / 1024).toFixed(2)}KB)`);
    console.log(`📁 Output: ${outputPath}`);
  }

  watch() {
    console.log('👀 Watching for changes...');
    
    const watcher = chokidar.watch(['src/**/*.js', 'windflow.config.js'], {
      persistent: true,
      ignoreInitial: true
    });
    
    watcher.on('change', (path) => {
      console.log(`\n📝 File changed: ${path}`);
      this.build();
    });
  }
}

// Run the builder
const builder = new WindFlowBuilder();
builder.build();

if (process.argv.includes('--watch')) {
  builder.watch();
}