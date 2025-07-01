#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// ANSI color codes para output bonito
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

// Mapa completo de clases Tailwind a WindFlow
const classMap = {
  // Animaciones mejoradas
  'hover:scale-105': 'hover-scale',
  'hover:scale-110': 'hover-scale-lg',
  'hover:shadow-xl': 'hover:shadow-xl hover-lift',
  'transition-all duration-300': 'transition-all',
  'transition-transform': 'transition-transform',
  'transition-opacity': 'transition-opacity',
  'transition duration-150 ease-in-out': 'transition-all',
  
  // Efectos visuales
  'backdrop-blur-sm': 'glass-light',
  'backdrop-blur-md': 'glass-dark',
  'backdrop-blur-lg': 'glass-heavy',
  'backdrop-blur': 'glass-light',
  
  // Gradientes predefinidos
  'bg-gradient-to-r from-blue-500 to-purple-600': 'gradient-ocean',
  'bg-gradient-to-r from-green-400 to-blue-500': 'gradient-forest',
  'bg-gradient-to-r from-purple-400 to-pink-600': 'gradient-sunset',
  'bg-gradient-to-br from-pink-500 to-orange-400': 'gradient-warm',
  'bg-gradient-to-r from-cyan-500 to-blue-500': 'gradient-cool',
  
  // Animaciones de entrada
  'animate-none': 'animate-none',
  'motion-safe:animate-': 'animate-',
  'motion-reduce:animate-none': 'animate-none',
};

// Clases que requieren atención manual
const warningClasses = {
  '@apply': 'Necesita conversión manual a CSS estándar',
  'dark:': 'Usar data-theme en WindFlow para temas',
  'group-hover:': 'Revisar si necesita ajustes para WindFlow',
  'peer-': 'Funcionalidad peer puede requerir ajustes',
};

// Estadísticas de migración
let stats = {
  filesProcessed: 0,
  classesReplaced: 0,
  warnings: 0,
  errors: 0
};

function createBackup(filePath) {
  const backupPath = filePath + '.tailwind-backup';
  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

function migrateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    let modified = false;
    const fileWarnings = [];
    
    // Crear backup
    const backupPath = createBackup(filePath);
    
    // Reemplazar clases conocidas
    Object.entries(classMap).forEach(([oldClass, newClass]) => {
      const regex = new RegExp(`\\b${oldClass.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, newClass);
        modified = true;
        stats.classesReplaced += matches.length;
      }
    });
    
    // Detectar clases que necesitan atención manual
    Object.entries(warningClasses).forEach(([pattern, message]) => {
      if (content.includes(pattern)) {
        fileWarnings.push(`${pattern}: ${message}`);
        stats.warnings++;
      }
    });
    
    // Agregar animaciones WindFlow a elementos interactivos
    content = content.replace(
      /class="([^"]*\b(?:hover:|group-hover:)[^"]*?)"/g,
      (match, classes) => {
        if (!classes.includes('hover-') && !classes.includes('animate-')) {
          modified = true;
          return match.replace(classes, classes + ' hover-pop');
        }
        return match;
      }
    );
    
    // Agregar className para JSX
    content = content.replace(
      /className="([^"]*\b(?:hover:|group-hover:)[^"]*?)"/g,
      (match, classes) => {
        if (!classes.includes('hover-') && !classes.includes('animate-')) {
          modified = true;
          return match.replace(classes, classes + ' hover-pop');
        }
        return match;
      }
    );
    
    if (modified || fileWarnings.length > 0) {
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`${colors.green}✅ Migrado:${colors.reset} ${filePath}`);
        
        // Mostrar resumen de cambios
        const changes = content.split('\n').filter((line, index) => 
          line !== originalContent.split('\n')[index]
        ).length;
        
        if (changes > 0) {
          console.log(`   ${colors.blue}↳ ${changes} líneas modificadas${colors.reset}`);
        }
      }
      
      if (fileWarnings.length > 0) {
        console.log(`${colors.yellow}⚠️  Advertencias en ${filePath}:${colors.reset}`);
        fileWarnings.forEach(warning => {
          console.log(`   ${colors.yellow}↳ ${warning}${colors.reset}`);
        });
      }
      
      console.log(`   ${colors.bright}📁 Backup:${colors.reset} ${backupPath}`);
    }
    
    stats.filesProcessed++;
    
  } catch (error) {
    console.error(`${colors.red}❌ Error procesando ${filePath}:${colors.reset}`, error.message);
    stats.errors++;
  }
}

function updatePackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json');
  
  if (fs.existsSync(packagePath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      let modified = false;
      
      // Remover dependencias de Tailwind
      const tailwindDeps = ['tailwindcss', 'postcss', 'autoprefixer', '@tailwindcss/forms', '@tailwindcss/typography'];
      
      tailwindDeps.forEach(dep => {
        if (packageJson.dependencies && packageJson.dependencies[dep]) {
          delete packageJson.dependencies[dep];
          modified = true;
        }
        if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
          delete packageJson.devDependencies[dep];
          modified = true;
        }
      });
      
      // Agregar WindFlow
      if (!packageJson.dependencies) packageJson.dependencies = {};
      if (!packageJson.dependencies['windflow-css']) {
        packageJson.dependencies['windflow-css'] = '^2.1.1';
        modified = true;
      }
      
      // Actualizar scripts
      if (packageJson.scripts) {
        const scriptMap = {
          'build:css': 'windflow build',
          'watch:css': 'windflow watch',
          'build-css': 'windflow build',
          'watch-css': 'windflow watch'
        };
        
        Object.entries(scriptMap).forEach(([oldScript, newScript]) => {
          if (packageJson.scripts[oldScript] && packageJson.scripts[oldScript].includes('tailwind')) {
            packageJson.scripts[oldScript] = newScript;
            modified = true;
          }
        });
      }
      
      if (modified) {
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        console.log(`${colors.green}✅ Actualizado package.json${colors.reset}`);
      }
      
    } catch (error) {
      console.error(`${colors.red}❌ Error actualizando package.json:${colors.reset}`, error.message);
    }
  }
}

function createWindFlowConfig() {
  const configPath = path.join(process.cwd(), 'windflow.config.js');
  
  if (!fs.existsSync(configPath)) {
    const config = `module.exports = {
  input: './src/styles/input.css',
  output: './dist/windflow.css',
  theme: 'default',
  features: {
    animations: true,
    themes: true,
    glassmorphism: true,
    gradients: true,
    particles: true,
    loading: true
  }
};
`;
    
    fs.writeFileSync(configPath, config);
    console.log(`${colors.green}✅ Creado windflow.config.js${colors.reset}`);
  }
}

function removeOldConfigs() {
  const configsToRemove = ['tailwind.config.js', 'postcss.config.js'];
  
  configsToRemove.forEach(config => {
    const configPath = path.join(process.cwd(), config);
    if (fs.existsSync(configPath)) {
      const backupPath = configPath + '.backup';
      fs.renameSync(configPath, backupPath);
      console.log(`${colors.yellow}📦 ${config} movido a ${backupPath}${colors.reset}`);
    }
  });
}

function showSummary() {
  console.log(`\n${colors.bright}📊 Resumen de Migración${colors.reset}`);
  console.log(`${colors.bright}${'─'.repeat(40)}${colors.reset}`);
  console.log(`📁 Archivos procesados: ${colors.green}${stats.filesProcessed}${colors.reset}`);
  console.log(`🔄 Clases reemplazadas: ${colors.green}${stats.classesReplaced}${colors.reset}`);
  console.log(`⚠️  Advertencias: ${colors.yellow}${stats.warnings}${colors.reset}`);
  console.log(`❌ Errores: ${colors.red}${stats.errors}${colors.reset}`);
  console.log(`${colors.bright}${'─'.repeat(40)}${colors.reset}\n`);
}

function showNextSteps() {
  console.log(`${colors.bright}🚀 Próximos Pasos${colors.reset}`);
  console.log(`${colors.bright}${'─'.repeat(40)}${colors.reset}`);
  console.log(`1. Ejecuta ${colors.blue}npm install${colors.reset} para instalar WindFlow`);
  console.log(`2. Actualiza tus imports CSS:`);
  console.log(`   ${colors.red}- @import 'tailwindcss/base';${colors.reset}`);
  console.log(`   ${colors.green}+ @import 'windflow-css/dist/windflow.css';${colors.reset}`);
  console.log(`3. Revisa las advertencias y ajusta manualmente si es necesario`);
  console.log(`4. Ejecuta ${colors.blue}npm run build-css${colors.reset} para generar tu CSS`);
  console.log(`5. Prueba tu aplicación y disfruta las nuevas características! ✨`);
  console.log(`${colors.bright}${'─'.repeat(40)}${colors.reset}\n`);
}

// CLI principal
function main() {
  console.log(`\n${colors.bright}🌊 WindFlow CSS - Herramienta de Migración desde Tailwind${colors.reset}`);
  console.log(`${colors.bright}${'─'.repeat(50)}${colors.reset}\n`);
  
  // Parsear argumentos
  const args = process.argv.slice(2);
  const pattern = args[0] || 'src/**/*.{js,jsx,ts,tsx,html,vue,svelte}';
  const options = {
    ignore: ['node_modules/**', 'dist/**', 'build/**', '.git/**', '*.backup']
  };
  
  console.log(`📂 Buscando archivos con patrón: ${colors.blue}${pattern}${colors.reset}\n`);
  
  // Buscar archivos
  const files = glob.sync(pattern, options);
  
  if (files.length === 0) {
    console.log(`${colors.yellow}⚠️  No se encontraron archivos para migrar${colors.reset}`);
    return;
  }
  
  console.log(`📋 Encontrados ${colors.green}${files.length}${colors.reset} archivos para procesar\n`);
  
  // Procesar archivos
  files.forEach(migrateFile);
  
  // Actualizar configuraciones
  console.log(`\n${colors.bright}⚙️  Actualizando configuraciones...${colors.reset}\n`);
  updatePackageJson();
  createWindFlowConfig();
  removeOldConfigs();
  
  // Mostrar resumen
  showSummary();
  showNextSteps();
  
  if (stats.warnings > 0) {
    console.log(`${colors.yellow}💡 Tip:${colors.reset} Busca archivos .tailwind-backup para comparar cambios\n`);
  }
  
  console.log(`${colors.green}✨ ¡Migración completada!${colors.reset}\n`);
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = { migrateFile, classMap };