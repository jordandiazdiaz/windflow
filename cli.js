#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class WindFlowCLI {
  constructor() {
    this.args = process.argv.slice(2);
    this.commands = {
      'init': this.init.bind(this),
      'build': this.build.bind(this),
      'watch': this.watch.bind(this),
      'optimize': this.optimize.bind(this),
      'config': this.config.bind(this),
      'stats': this.stats.bind(this),
      'help': this.help.bind(this)
    };
  }

  run() {
    const command = this.args[0] || 'help';
    
    if (this.commands[command]) {
      this.commands[command]();
    } else {
      console.error(`❌ Unknown command: ${command}`);
      this.help();
    }
  }

  init() {
    console.log('🚀 Initializing WindFlow in your project...\n');
    
    // Check if windflow.config.js already exists
    const configPath = path.join(process.cwd(), 'windflow.config.js');
    if (fs.existsSync(configPath)) {
      console.log('⚠️  windflow.config.js already exists!');
      return;
    }
    
    // Create config file
    const defaultConfig = `module.exports = {
  // Customize your WindFlow configuration here
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      animation: {
        // Add your custom animations
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  // Plugins configuration
  plugins: [],
  // Output configuration
  output: {
    path: 'dist/windflow.css',
    minify: true
  }
};`;

    fs.writeFileSync(configPath, defaultConfig);
    console.log('✅ Created windflow.config.js');
    
    // Create example HTML file
    const exampleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WindFlow Example</title>
    <link rel="stylesheet" href="dist/windflow.css">
</head>
<body class="bg-gray-50">
    <!-- Hero Section with Advanced Gradient -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div class="text-center px-4">
            <h1 class="text-6xl font-bold text-white mb-4 animate-fade-in">
                Welcome to WindFlow
            </h1>
            <p class="text-xl text-white/90 mb-8 animate-fade-in-up">
                A modern CSS framework with enhanced features
            </p>
            <button class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold 
                         hover:scale-105 transform transition-all duration-300 
                         shadow-xl hover:shadow-2xl animate-bounce">
                Get Started
            </button>
        </div>
    </section>

    <!-- Feature Cards with 3D Transforms -->
    <section class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-bold text-center mb-16 text-gray-800">
                Enhanced Features
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-white rounded-xl shadow-lg p-6 transform hover:rotate-y-12 
                           transition-transform duration-500 transform-3d">
                    <div class="w-16 h-16 bg-gradient-radial from-blue-400 to-blue-600 
                              rounded-full mb-4 animate-pulse"></div>
                    <h3 class="text-xl font-semibold mb-2">Advanced Animations</h3>
                    <p class="text-gray-600">
                        30+ built-in animations including 3D effects, with customizable duration and timing
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="bg-white rounded-xl shadow-lg p-6 transform hover:rotate-y-12 
                           transition-transform duration-500 transform-3d">
                    <div class="w-16 h-16 bg-gradient-conic from-green-400 via-blue-500 to-purple-600 
                              rounded-full mb-4 animate-spin"></div>
                    <h3 class="text-xl font-semibold mb-2">Modern Gradients</h3>
                    <p class="text-gray-600">
                        Linear, radial, conic, and mesh gradients with easy-to-use utility classes
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="bg-white rounded-xl shadow-lg p-6 transform hover:rotate-y-12 
                           transition-transform duration-500 transform-3d">
                    <div class="w-16 h-16 bg-gradient-to-tr from-pink-400 to-red-600 
                              rounded-full mb-4 animate-wiggle"></div>
                    <h3 class="text-xl font-semibold mb-2">3D Transforms</h3>
                    <p class="text-gray-600">
                        Full 3D transform support with perspective, rotation, and transform-style utilities
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Glassmorphism Example -->
    <section class="py-20 px-4 bg-gradient-to-br from-purple-400 to-indigo-600">
        <div class="max-w-4xl mx-auto">
            <div class="backdrop-blur-lg bg-white/20 rounded-2xl p-8 shadow-2xl border border-white/30">
                <h2 class="text-3xl font-bold text-white mb-4">Glassmorphism Support</h2>
                <p class="text-white/90 mb-6">
                    Built-in backdrop filters for modern glass effects. Combine with opacity utilities
                    for beautiful, translucent designs.
                </p>
                <div class="flex gap-4">
                    <div class="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
                        Subtle Blur
                    </div>
                    <div class="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20">
                        Medium Blur
                    </div>
                    <div class="backdrop-blur-xl bg-white/10 rounded-lg p-4 border border-white/20">
                        Strong Blur
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Container Queries Demo -->
    <section class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">Container Queries Ready</h2>
            <div class="container-type-inline-size">
                <div class="bg-gray-100 rounded-lg p-8">
                    <p class="text-gray-700">
                        WindFlow includes utilities for CSS Container Queries, allowing truly responsive
                        components that adapt based on their container size, not just viewport.
                    </p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`;

    fs.writeFileSync('windflow-example.html', exampleHtml);
    console.log('✅ Created windflow-example.html');
    
    // Update package.json if it exists
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts) {
        packageJson.scripts = {};
      }
      
      packageJson.scripts['windflow:build'] = 'windflow build';
      packageJson.scripts['windflow:watch'] = 'windflow watch';
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.log('✅ Updated package.json scripts');
    }
    
    console.log('\n🎉 WindFlow initialized successfully!');
    console.log('\nNext steps:');
    console.log('1. Run "windflow build" to generate your CSS');
    console.log('2. Include dist/windflow.css in your HTML');
    console.log('3. Start using WindFlow classes!');
  }

  build() {
    console.log('🔨 Building WindFlow CSS...\n');
    
    try {
      require('./scripts/build.js');
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
  }

  watch() {
    console.log('👀 Watching for changes...\n');
    
    try {
      execSync('node scripts/build.js --watch', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Watch failed:', error.message);
      process.exit(1);
    }
  }

  optimize() {
    console.log('⚡ Optimizing WindFlow CSS...\n');
    
    const inputPath = path.join(process.cwd(), 'dist', 'windflow.css');
    const outputPath = path.join(process.cwd(), 'dist', 'windflow.min.css');
    
    if (!fs.existsSync(inputPath)) {
      console.error('❌ dist/windflow.css not found. Run "windflow build" first.');
      return;
    }
    
    try {
      // Use PostCSS with cssnano for optimization
      execSync(`npx postcss ${inputPath} -o ${outputPath} --use cssnano`, { stdio: 'inherit' });
      
      const originalSize = fs.statSync(inputPath).size;
      const minifiedSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - minifiedSize) / originalSize * 100).toFixed(2);
      
      console.log(`\n✅ Optimization complete!`);
      console.log(`📊 Original: ${(originalSize / 1024).toFixed(2)}KB`);
      console.log(`📊 Minified: ${(minifiedSize / 1024).toFixed(2)}KB`);
      console.log(`📊 Reduction: ${reduction}%`);
    } catch (error) {
      console.error('❌ Optimization failed:', error.message);
      console.log('\n💡 Tip: Make sure you have postcss and cssnano installed:');
      console.log('   npm install -D postcss postcss-cli cssnano');
    }
  }

  config() {
    const configPath = path.join(process.cwd(), 'windflow.config.js');
    
    if (!fs.existsSync(configPath)) {
      console.error('❌ windflow.config.js not found. Run "windflow init" first.');
      return;
    }
    
    console.log('📋 Current WindFlow configuration:\n');
    
    try {
      const config = require(configPath);
      console.log(JSON.stringify(config, null, 2));
    } catch (error) {
      console.error('❌ Error reading config:', error.message);
    }
  }

  stats() {
    console.log('📊 WindFlow CSS Statistics\n');
    
    const cssPath = path.join(process.cwd(), 'dist', 'windflow.css');
    const minPath = path.join(process.cwd(), 'dist', 'windflow.min.css');
    
    if (!fs.existsSync(cssPath)) {
      console.error('❌ dist/windflow.css not found. Run "windflow build" first.');
      return;
    }
    
    try {
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      const lines = cssContent.split('\n');
      const rules = cssContent.match(/\{[^}]*\}/g) || [];
      const selectors = cssContent.match(/[^{]+{/g) || [];
      const animations = cssContent.match(/@keyframes\s+[\w-]+/g) || [];
      const cssVars = cssContent.match(/--[\w-]+:/g) || [];
      const mediaQueries = cssContent.match(/@media[^{]+/g) || [];
      
      // Count unique classes
      const classMatches = cssContent.match(/\.[a-zA-Z][\w-]*/g) || [];
      const uniqueClasses = new Set(classMatches);
      
      // File sizes
      const cssSize = fs.statSync(cssPath).size;
      const minSize = fs.existsSync(minPath) ? fs.statSync(minPath).size : 0;
      
      console.log('📄 File Information:');
      console.log(`   • Original size: ${(cssSize / 1024).toFixed(2)} KB`);
      if (minSize > 0) {
        console.log(`   • Minified size: ${(minSize / 1024).toFixed(2)} KB`);
        console.log(`   • Compression: ${((1 - minSize / cssSize) * 100).toFixed(2)}%`);
      }
      console.log('');
      
      console.log('📈 CSS Metrics:');
      console.log(`   • Total lines: ${lines.length.toLocaleString()}`);
      console.log(`   • CSS rules: ${rules.length.toLocaleString()}`);
      console.log(`   • Selectors: ${selectors.length.toLocaleString()}`);
      console.log(`   • Unique classes: ${uniqueClasses.size.toLocaleString()}`);
      console.log(`   • Animations: ${animations.length}`);
      console.log(`   • CSS variables: ${cssVars.length}`);
      console.log(`   • Media queries: ${mediaQueries.length}`);
      console.log('');
      
      console.log('🎨 Feature Breakdown:');
      const features = {
        'Colors': classMatches.filter(c => c.match(/\.(text-|bg-|border-)/)).length,
        'Layout': classMatches.filter(c => c.match(/\.(flex|grid|block|inline|hidden)/)).length,
        'Spacing': classMatches.filter(c => c.match(/\.(m-|p-|space-)/)).length,
        'Typography': classMatches.filter(c => c.match(/\.(text-|font-|leading-)/)).length,
        'Effects': classMatches.filter(c => c.match(/\.(shadow-|opacity-|blur-)/)).length,
        'Animations': classMatches.filter(c => c.match(/\.animate-/)).length,
        'Transforms': classMatches.filter(c => c.match(/\.(rotate-|scale-|translate-)/)).length,
        'Responsive': classMatches.filter(c => c.match(/\.(sm:|md:|lg:|xl:|2xl:)/)).length
      };
      
      Object.entries(features).forEach(([feature, count]) => {
        console.log(`   • ${feature}: ${count.toLocaleString()} utilities`);
      });
      
      console.log('\n✨ WindFlow CSS v2.1.2 - Modern CSS Framework');
      
    } catch (error) {
      console.error('❌ Error analyzing CSS:', error.message);
    }
  }

  help() {
    console.log(`
🌊 WindFlow CSS Framework CLI

Usage: windflow <command> [options]

Commands:
  init       Initialize WindFlow in your project
  build      Build the CSS file
  watch      Watch for changes and rebuild automatically
  optimize   Optimize and minify the CSS output
  config     Show current configuration
  stats      Display CSS statistics and metrics
  help       Show this help message

Examples:
  windflow init      # Set up WindFlow in your project
  windflow build     # Generate windflow.css
  windflow watch     # Build and watch for changes
  windflow optimize  # Create optimized windflow.min.css
  windflow stats     # Show CSS file statistics

Learn more at: https://github.com/jordandiazdiaz/windflow
`);
  }
}

// Run the CLI
const cli = new WindFlowCLI();
cli.run();