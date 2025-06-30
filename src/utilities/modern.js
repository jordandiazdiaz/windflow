/**
 * Modern CSS Utilities - WindFlow Framework
 * Clip paths, aspect ratios, scroll snap, container queries, and mix blend modes
 */

module.exports = {
  generateClipPath: function(config) {
    let output = [];
    output.push('/* Clip Path Utilities - WindFlow Enhancement */');
    
    output.push('.clip-none { clip-path: none; }');
    output.push('.clip-circle { clip-path: circle(50%); }');
    output.push('.clip-ellipse { clip-path: ellipse(50% 40%); }');
    output.push('.clip-triangle { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }');
    output.push('.clip-triangle-down { clip-path: polygon(0% 0%, 100% 0%, 50% 100%); }');
    output.push('.clip-rhombus { clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }');
    output.push('.clip-parallelogram { clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); }');
    output.push('.clip-pentagon { clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); }');
    output.push('.clip-hexagon { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }');
    output.push('.clip-star { clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); }');
    output.push('.clip-cross { clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%); }');
    output.push('.clip-message { clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%); }');
    output.push('.clip-arrow-left { clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%); }');
    output.push('.clip-arrow-right { clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%); }');
    output.push('.clip-chevron-left { clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); }');
    output.push('.clip-chevron-right { clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%); }');

    return output.join('\n');
  },

  generateMixBlendMode: function(config) {
    let output = [];
    output.push('/* Mix Blend Mode Utilities */');
    
    const blendModes = [
      'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten',
      'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
      'exclusion', 'hue', 'saturation', 'color', 'luminosity'
    ];
    
    blendModes.forEach(mode => {
      output.push(`.mix-blend-${mode} { mix-blend-mode: ${mode}; }`);
    });

    // Background blend mode
    blendModes.forEach(mode => {
      output.push(`.bg-blend-${mode} { background-blend-mode: ${mode}; }`);
    });

    return output.join('\n');
  },

  generateAspectRatio: function(config) {
    let output = [];
    output.push('/* Aspect Ratio Utilities */');
    
    const aspectRatios = {
      'auto': 'auto',
      'square': '1 / 1',
      'video': '16 / 9',
      '4/3': '4 / 3',
      '21/9': '21 / 9'
    };
    
    Object.entries(aspectRatios).forEach(([key, value]) => {
      const className = key.includes('/') ? key.replace('/', '\\:') : key;
      output.push(`.aspect-${className} { aspect-ratio: ${value}; }`);
    });

    return output.join('\n');
  },

  generateScrollSnap: function(config) {
    let output = [];
    output.push('/* Scroll Snap Utilities */');
    
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

    // Scroll behavior
    output.push('.scroll-auto { scroll-behavior: auto; }');
    output.push('.scroll-smooth { scroll-behavior: smooth; }');

    // Overscroll behavior
    output.push('.overscroll-auto { overscroll-behavior: auto; }');
    output.push('.overscroll-contain { overscroll-behavior: contain; }');
    output.push('.overscroll-none { overscroll-behavior: none; }');
    output.push('.overscroll-y-auto { overscroll-behavior-y: auto; }');
    output.push('.overscroll-y-contain { overscroll-behavior-y: contain; }');
    output.push('.overscroll-y-none { overscroll-behavior-y: none; }');
    output.push('.overscroll-x-auto { overscroll-behavior-x: auto; }');
    output.push('.overscroll-x-contain { overscroll-behavior-x: contain; }');
    output.push('.overscroll-x-none { overscroll-behavior-x: none; }');

    return output.join('\n');
  },

  generateContainerQueries: function(config) {
    let output = [];
    output.push('/* Container Queries - WindFlow Enhancement */');
    
    // Container types
    output.push('.container-type-normal { container-type: normal; }');
    output.push('.container-type-size { container-type: size; }');
    output.push('.container-type-inline-size { container-type: inline-size; }');

    // Container names
    output.push('.container-name-card { container-name: card; }');
    output.push('.container-name-sidebar { container-name: sidebar; }');
    output.push('.container-name-main { container-name: main; }');
    output.push('.container-name-header { container-name: header; }');
    output.push('.container-name-footer { container-name: footer; }');

    // Container query units in CSS custom properties
    output.push(`/* Container query units available as CSS custom properties:
   * --cqw: 1% of container width
   * --cqh: 1% of container height
   * --cqi: 1% of container inline size
   * --cqb: 1% of container block size
   * --cqmin: smaller of cqi or cqb
   * --cqmax: larger of cqi or cqb
   */`);

    return output.join('\n');
  }
};