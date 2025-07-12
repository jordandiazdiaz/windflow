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

// Import modular generators
const generateReset = require('../src/core/reset.js');
const generateBase = require('../src/core/base.js');
const generateSpacing = require('../src/utilities/spacing.js');
const generateColors = require('../src/utilities/colors.js');
const generateTypography = require('../src/utilities/typography.js');
const { generateFlexbox, generateGrid } = require('../src/utilities/layout.js');
const generateBorders = require('../src/utilities/borders.js');
const generateEffects = require('../src/utilities/effects.js');
const generateAnimations = require('../src/utilities/animations.js');
const generateTransforms = require('../src/utilities/transforms.js');
const generateGradients = require('../src/utilities/gradients.js');
const { generateFilters, generateBackdropFilters } = require('../src/utilities/filters.js');
const { 
  generateClipPath, 
  generateMixBlendMode, 
  generateAspectRatio, 
  generateScrollSnap, 
  generateContainerQueries 
} = require('../src/utilities/modern.js');
const generateThemes = require('../src/components/themes.js');
const { generateResponsiveVariants, generateDarkModeVariants } = require('../src/utilities/responsive.js');
const generateGridEnhanced = require('../src/utilities/grid.js');
const generateBehavior = require('../src/utilities/behavior.js');

class WindFlowBuilder {
  constructor() {
    this.output = [];
    this.config = config;
  }

  generateCSS() {
    this.output = [];
    
    console.log('🚀 Building WindFlow CSS...');
    
    // Core styles
    console.log('  📋 Generating reset styles...');
    this.output.push(generateReset(this.config));
    
    console.log('  🏗️  Generating base styles...');
    this.output.push(generateBase(this.config));
    
    // Utilities
    console.log('  📏 Generating spacing utilities...');
    this.output.push(generateSpacing(this.config));
    
    console.log('  🎨 Generating color utilities...');
    this.output.push(generateColors(this.config));
    
    console.log('  📝 Generating typography utilities...');
    this.output.push(generateTypography(this.config));
    
    console.log('  📱 Generating layout utilities...');
    this.output.push(generateFlexbox(this.config));
    this.output.push(generateGrid(this.config));
    this.output.push(generateGridEnhanced(this.config));
    
    console.log('  🖼️  Generating border utilities...');
    this.output.push(generateBorders(this.config));
    
    console.log('  ✨ Generating effects utilities...');
    this.output.push(generateEffects(this.config));
    
    console.log('  🎬 Generating animation utilities...');
    this.output.push(generateAnimations(this.config));
    
    console.log('  🔄 Generating transform utilities...');
    this.output.push(generateTransforms(this.config));
    
    console.log('  🌈 Generating gradient utilities...');
    this.output.push(generateGradients(this.config));
    
    console.log('  🎭 Generating filter utilities...');
    this.output.push(generateFilters(this.config));
    this.output.push(generateBackdropFilters(this.config));
    
    console.log('  🔧 Generating modern CSS utilities...');
    this.output.push(generateClipPath(this.config));
    this.output.push(generateMixBlendMode(this.config));
    this.output.push(generateAspectRatio(this.config));
    this.output.push(generateScrollSnap(this.config));
    this.output.push(generateContainerQueries(this.config));
    
    console.log('  🎯 Generating behavior utilities...');
    this.output.push(generateBehavior(this.config));
    
    console.log('  🎨 Generating theme system...');
    this.output.push(generateThemes(this.config));
    
    console.log('  📱 Generating responsive variants...');
    this.output.push(generateResponsiveVariants(this.config));
    
    console.log('  🌙 Generating dark mode variants...');
    this.output.push(generateDarkModeVariants(this.config));
    
    return this.output.join('\n\n');
  }

  build() {
    try {
      const css = this.generateCSS();
      
      // Ensure dist directory exists
      const distDir = path.dirname(this.config.output.path);
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      
      // Write CSS file
      fs.writeFileSync(this.config.output.path, css);
      
      const stats = fs.statSync(this.config.output.path);
      const fileSizeInKB = (stats.size / 1024).toFixed(2);
      
      console.log(`✅ WindFlow CSS built successfully!`);
      console.log(`📁 Output: ${this.config.output.path}`);
      console.log(`📊 Size: ${fileSizeInKB} KB`);
      
      return css;
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
  }

  watch() {
    if (!chokidar) {
      console.error('❌ Watch mode requires chokidar');
      return;
    }

    console.log('👀 Watching for changes...');
    
    const watcher = chokidar.watch(['src/**/*.js', 'windflow.config.js'], {
      ignored: /node_modules/,
      persistent: true
    });

    watcher.on('change', (filePath) => {
      console.log(`\n🔄 File changed: ${filePath}`);
      
      // Clear require cache for the changed file
      delete require.cache[require.resolve(path.resolve(filePath))];
      
      // Rebuild
      this.build();
    });

    // Initial build
    this.build();
  }
}

// Main execution
const builder = new WindFlowBuilder();

if (process.argv.includes('--watch')) {
  builder.watch();
} else {
  builder.build();
}

module.exports = WindFlowBuilder;