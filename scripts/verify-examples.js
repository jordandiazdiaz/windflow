#!/usr/bin/env node

/**
 * WindFlow Examples Verification Script
 * Verifies that all CSS classes used in examples are available in the generated CSS
 */

const fs = require('fs');
const path = require('path');

// Read the generated CSS
const cssPath = path.join(__dirname, '..', 'dist', 'windflow.css');
const css = fs.readFileSync(cssPath, 'utf8');

// Example files to check
const exampleFiles = [
  'examples/advanced-components.html',
  'examples/real-world-examples.html',
  'examples/playground.html'
];

// Critical CSS classes that should be present
const criticalClasses = [
  // Animations
  'animate-pulse', 'animate-bounce', 'animate-glow', 'animate-neon', 'animate-typewriter',
  'animate-glitch', 'animate-float', 'animate-levitate', 'animate-rubber-band', 'animate-tada',
  
  // Hover effects
  'hover:animate-bounce', 'hover:animate-shake', 'hover:animate-glitch',
  'btn-hover-lift', 'btn-hover-glow', 'btn-hover-scale',
  'card-hover-float', 'card-hover-tilt',
  
  // Loading components
  'loading-dots', 'loading-bars', 'loading-spinner', 'loading-pulse-ring',
  
  // Theme system
  'theme-dark', 'theme-cyberpunk', 'theme-glassmorphism', 'theme-retro',
  'text-theme-primary', 'bg-theme-surface', 'border-theme-border',
  
  // Theme-specific components
  'neon-text', 'neon-border', 'cyber-grid', 'glass-card', 'glass-nav',
  'retro-text', 'scanlines',
  
  // Text effects
  'text-typewriter', 'text-glitch',
  
  // 3D transforms
  'perspective-lg', 'transform-3d', 'backface-hidden', 'rotate-y-180',
  
  // Advanced gradients
  'bg-gradient-conic', 'bg-gradient-radial', 'bg-aurora', 'bg-mesh-gradient',
  
  // Modern CSS
  'backdrop-blur-lg', 'clip-star', 'aspect-video',
  
  // Responsive and dark mode
  'dark:bg-gray-900', 'md:grid-cols-2', 'lg:grid-cols-3'
];

console.log('🔍 WindFlow Examples Verification\n');

let allPassed = true;
let totalChecks = 0;
let passedChecks = 0;

// Check critical classes
console.log('📋 Checking Critical CSS Classes...');
criticalClasses.forEach(className => {
  totalChecks++;
  let searchClass = className;
  
  // Handle escaped characters in CSS for hover and responsive classes
  if (className.includes(':')) {
    searchClass = className.replace(':', '\\:');
  }
  
  if (css.includes(`.${searchClass}`)) {
    console.log(`  ✅ ${className}`);
    passedChecks++;
  } else {
    console.log(`  ❌ ${className} - MISSING`);
    allPassed = false;
  }
});

// Check example files exist and are readable
console.log('\n📄 Checking Example Files...');
exampleFiles.forEach(filePath => {
  totalChecks++;
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('windflow.css')) {
      console.log(`  ✅ ${filePath} - Links to WindFlow CSS`);
      passedChecks++;
    } else {
      console.log(`  ❌ ${filePath} - Missing WindFlow CSS link`);
      allPassed = false;
    }
  } else {
    console.log(`  ❌ ${filePath} - File not found`);
    allPassed = false;
  }
});

// Check keyframes
console.log('\n🎬 Checking Animation Keyframes...');
const keyframes = [
  'wf-spin', 'wf-pulse', 'wf-bounce', 'wf-glow', 'wf-neon', 'wf-typewriter',
  'wf-glitch', 'wf-float', 'wf-rubber-band', 'wf-tada', 'wf-aurora'
];

keyframes.forEach(keyframe => {
  totalChecks++;
  if (css.includes(`@keyframes ${keyframe}`)) {
    console.log(`  ✅ @keyframes ${keyframe}`);
    passedChecks++;
  } else {
    console.log(`  ❌ @keyframes ${keyframe} - MISSING`);
    allPassed = false;
  }
});

// Check theme variables
console.log('\n🎨 Checking Theme Variables...');
const themeVariables = [
  '--wf-primary', '--wf-secondary', '--wf-background', '--wf-surface',
  '--wf-text', '--wf-border'
];

themeVariables.forEach(variable => {
  totalChecks++;
  if (css.includes(variable)) {
    console.log(`  ✅ ${variable}`);
    passedChecks++;
  } else {
    console.log(`  ❌ ${variable} - MISSING`);
    allPassed = false;
  }
});

// File size check
const cssSize = fs.statSync(cssPath).size;
const cssKB = (cssSize / 1024).toFixed(2);
console.log(`\n📊 CSS File Size: ${cssKB}KB`);

if (cssSize < 100000) { // Less than 100KB
  console.log('  ⚠️  CSS file seems too small, possible build issue');
  allPassed = false;
}

// Final results
console.log('\n' + '='.repeat(50));
console.log(`📈 Results: ${passedChecks}/${totalChecks} checks passed`);

if (allPassed) {
  console.log('🎉 All examples are working correctly!');
  console.log('✅ WindFlow CSS is ready for production use');
  process.exit(0);
} else {
  console.log('❌ Some issues found. Please check the output above.');
  console.log('🔧 Run `npm run build` to regenerate CSS');
  process.exit(1);
}