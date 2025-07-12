#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Crear directorio de promoción si no existe
const promotionDir = './promotion';
if (!fs.existsSync(promotionDir)) {
  fs.mkdirSync(promotionDir, { recursive: true });
}

const packageInfo = require('../package.json');

const contentTemplates = {
  twitter: {
    announcement: `🚀 WindFlow CSS v${packageInfo.version} is here!

✨ New features:
• 8+ advanced animations (morph, ripple, glitch-2)
• Enhanced grid layouts with pre-built templates
• New "neon" theme with vibrant colors
• Advanced text decorations (wavy, thickness)
• CLI stats command for analytics

npm install ${packageInfo.name}

#CSS #WebDev #TailwindAlternative #Frontend`,

    showcase: `🎨 Check out WindFlow's new animations:

• animate-morph: Organic shape transformations 🔄
• animate-ripple: Expanding wave effects 🌊
• animate-glitch-2: Enhanced digital distortion ⚡
• animate-float-up/down: Smooth floating 🎈

Perfect for modern web interfaces!

Demo: https://github.com/jordandiazdiaz/windflow
Try it: npm install ${packageInfo.name}`,

    thread: [
      `🧵 THREAD: Why I built WindFlow CSS as a Tailwind alternative (1/7)`,
      `The problem: Tailwind is great, but lacks advanced animations and modern CSS features that today's web demands. (2/7)`,
      `WindFlow solution: 58+ animations, 9 themes, advanced grid layouts, all with zero build process required. (3/7)`,
      `New in v${packageInfo.version}: Morph animations, neon theme, enhanced grids, better text decorations. (4/7)`,
      `Performance: 374KB of utilities vs writing custom CSS. 92/100 performance score. (5/7)`,
      `Migration: 100% Tailwind compatible. Use our automated migration tool. (6/7)`,
      `Try it: npm install ${packageInfo.name}
GitHub: https://github.com/jordandiazdiaz/windflow
What do you think? (7/7)`
    ]
  },

  reddit: {
    webdev: `**WindFlow CSS v${packageInfo.version}: Major Update with 58+ Animations**

Hey r/webdev! Just released a major update to my Tailwind alternative with some game-changing features:

## 🆕 What's New
- **8 new animations**: morphing shapes, ripple effects, enhanced glitch
- **Enhanced CSS Grid**: Pre-built layouts (dashboard, masonry, cards)
- **New "neon" theme**: Perfect for cyberpunk/futuristic designs
- **Advanced text decorations**: Wavy underlines, thickness control
- **CLI stats command**: Analyze your CSS metrics

## 🎯 Why WindFlow over Tailwind?
- **More animations**: 58+ vs Tailwind's 4
- **Built-in themes**: 9 beautiful themes included
- **Zero build process**: Just include and use
- **100% compatible**: Easy migration from Tailwind
- **Modern CSS**: Container queries, backdrop filters, advanced transforms

## 📊 Performance
- 374KB total size with all features
- 92/100 performance score
- Optimized for production

## 🚀 Quick Start
\`\`\`bash
npm install ${packageInfo.name}
\`\`\`

\`\`\`html
<div class="animate-morph bg-gradient-neon p-8 rounded-xl">
  Modern CSS made easy
</div>
\`\`\`

[GitHub](https://github.com/jordandiazdiaz/windflow) | [npm](https://npmjs.com/package/${packageInfo.name}) | [Live Demo](https://jordandiazdiaz.github.io/windflow)

Love to hear your thoughts! What features would you like to see next?`,

    css: `**WindFlow CSS: Advanced Animations Meet Utility-First Design**

r/css, check out this utility framework with some serious animation power:

## 🎬 Animation Highlights
- **58+ pre-built animations**: From basic fades to complex morphing
- **Modern effects**: Glitch, matrix, neon, glassmorphism
- **3D transforms**: Full perspective and rotation support
- **Custom easing**: Elastic, bounce, back, expo curves

## 🎨 CSS Features
- **Advanced gradients**: Linear, radial, conic, mesh, animated
- **Backdrop filters**: Full glassmorphism support
- **Modern CSS**: Container queries, scroll snap, aspect ratio
- **Typography**: Enhanced text decorations, font variants

## 💡 Philosophy
Utility-first like Tailwind, but with the animations and modern CSS features that designers actually want.

Example:
\`\`\`css
.animate-morph {
  animation: morph 8s ease-in-out infinite;
  border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
}
\`\`\`

[GitHub](https://github.com/jordandiazdiaz/windflow) | What do you think of utility-first + animations?`
  },

  devto: `---
title: "WindFlow CSS v${packageInfo.version}: The Tailwind Alternative with Animation Superpowers"
published: false
tags: css, webdev, javascript, frontend, tailwind
cover_image: https://github.com/jordandiazdiaz/windflow/raw/main/assets/cover.png
---

# WindFlow CSS v${packageInfo.version}: Animation Superpowers for Modern Web

As web interfaces become more interactive and engaging, developers need CSS frameworks that go beyond basic utilities. That's why I created WindFlow CSS - a utility-first framework that combines Tailwind's simplicity with the advanced animations and modern CSS features that today's web demands.

## 🚀 What Makes WindFlow Different

### 58+ Advanced Animations
While Tailwind offers 4 basic animations, WindFlow provides 58+ including:

\`\`\`html
<!-- Morphing shapes -->
<div class="animate-morph bg-blue-500 w-32 h-32">
  Organic transformation
</div>

<!-- Ripple effects -->
<button class="animate-ripple bg-purple-600 px-6 py-3 rounded">
  Click me!
</button>

<!-- Enhanced glitch -->
<h1 class="animate-glitch-2 text-4xl font-bold">
  Cyberpunk Title
</h1>
\`\`\`

### Pre-built Grid Layouts
No more complex grid configurations:

\`\`\`html
<!-- Dashboard layout -->
<div class="grid grid-layout-dashboard min-h-screen gap-4">
  <header class="bg-blue-500 p-4" style="grid-area: header">
    Header
  </header>
  <nav class="bg-gray-200 p-4" style="grid-area: sidebar">
    Sidebar
  </nav>
  <main class="bg-white p-4" style="grid-area: main">
    Main Content
  </main>
  <footer class="bg-gray-100 p-4" style="grid-area: footer">
    Footer
  </footer>
</div>
\`\`\`

### 9 Beautiful Themes
Including the new "neon" theme for futuristic designs:

\`\`\`html
<body class="theme-neon">
  <div class="bg-theme-surface text-theme-text p-8">
    <h1 class="text-theme-primary animate-glow">
      Neon Powered
    </h1>
  </div>
</body>
\`\`\`

## 📈 Performance & Migration

**Size**: 374KB with all features included
**Performance**: 92/100 score in benchmarks
**Migration**: 100% Tailwind compatible

Migrating from Tailwind? Use our automated tool:
\`\`\`bash
node scripts/migrate-from-tailwind.js
\`\`\`

## 🛠️ Developer Experience

### Enhanced CLI
\`\`\`bash
# New stats command
windflow stats
# Shows detailed CSS analytics

# Build and optimize
windflow build
windflow optimize
\`\`\`

### Zero Configuration
\`\`\`bash
npm install ${packageInfo.name}
\`\`\`

\`\`\`html
<link rel="stylesheet" href="node_modules/${packageInfo.name}/dist/windflow.css">
\`\`\`

That's it! No build process, no configuration files.

## 🎯 Real-World Examples

### Glassmorphism Card
\`\`\`html
<div class="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl p-6 animate-float">
  <h3 class="text-xl font-semibold mb-4">Glass Card</h3>
  <p class="text-gray-700">Beautiful glassmorphism effect with floating animation.</p>
</div>
\`\`\`

### Interactive Button
\`\`\`html
<button class="btn-hover-lift bg-gradient-primary text-white px-8 py-4 rounded-lg animate-pulse">
  Hover me!
</button>
\`\`\`

## 🔮 What's Next

- More animation presets
- Vue/React component library
- Visual animation builder
- Advanced theme customization

## 🌟 Try WindFlow Today

[GitHub](https://github.com/jordandiazdiaz/windflow) | [npm](https://npmjs.com/package/${packageInfo.name}) | [Documentation](https://github.com/jordandiazdiaz/windflow#readme)

What features would you like to see in WindFlow? Drop a comment below!

---

*WindFlow CSS - Where Tailwind meets modern CSS*`,

  producthunt: `🚀 **WindFlow CSS v${packageInfo.version}** - The Tailwind alternative with animation superpowers

**Tagline**: Modern CSS framework with 58+ animations and zero configuration

**Description**: 
WindFlow CSS combines Tailwind's utility-first approach with advanced animations, 9 beautiful themes, and modern CSS features. Get morphing shapes, glassmorphism effects, and pre-built grid layouts without any build process.

**Key Features**:
• 58+ advanced animations (vs Tailwind's 4)
• 9 pre-built themes including new "neon" theme
• Enhanced grid layouts with templates
• Advanced text decorations & effects
• Zero build process required
• 100% Tailwind compatible migration
• CLI with CSS analytics

**Gallery Assets Needed**:
1. Hero GIF showing morphing animation
2. Screenshot of grid layout examples
3. Theme comparison image
4. CLI stats command demo
5. Code examples with results

**Maker Comment**:
"Hey Product Hunt! 👋

I built WindFlow because I was tired of choosing between Tailwind's simplicity and having advanced animations. Why not have both?

After months of development, v${packageInfo.version} includes 58+ animations, 9 themes, and modern CSS features that work out of the box.

Perfect for developers who want Tailwind's productivity with the visual polish that modern web demands.

Try it: npm install ${packageInfo.name}

What do you think? Ready to give your projects some WindFlow? 🌊"

**Links**:
- Website: https://github.com/jordandiazdiaz/windflow
- Download: https://npmjs.com/package/${packageInfo.name}
- Docs: https://github.com/jordandiazdiaz/windflow#readme`
};

// Generar archivos de contenido
console.log('🚀 Generando contenido promocional...\n');

Object.entries(contentTemplates).forEach(([platform, content]) => {
  if (typeof content === 'object') {
    Object.entries(content).forEach(([type, text]) => {
      const filename = `${platform}-${type}.txt`;
      const filepath = path.join(promotionDir, filename);
      
      if (Array.isArray(text)) {
        // Para threads de Twitter
        fs.writeFileSync(filepath, text.join('\n\n'));
      } else {
        fs.writeFileSync(filepath, text);
      }
      
      console.log(`✅ ${filename}`);
    });
  } else {
    const filename = `${platform}.md`;
    const filepath = path.join(promotionDir, filename);
    fs.writeFileSync(filepath, content);
    console.log(`✅ ${filename}`);
  }
});

// Generar checklist de promoción
const promotionChecklist = `# 📋 Checklist de Promoción WindFlow v${packageInfo.version}

## 📅 Semana 1: Preparación
- [ ] Crear GIFs de animaciones
- [ ] Screenshots de código + resultado
- [ ] Video demo de 30 segundos
- [ ] Optimizar README con badges
- [ ] Crear assets para Product Hunt

## 📅 Semana 2: Lanzamiento Suave
- [ ] **GitHub**: README mejorado, releases
- [ ] **Twitter**: Anuncio + thread de features
- [ ] **Dev.to**: Artículo técnico detallado
- [ ] **LinkedIn**: Post profesional

## 📅 Semana 3: Lanzamiento Mayor
- [ ] **Product Hunt**: Launch principal (martes-jueves)
- [ ] **Reddit r/webdev**: Post con valor agregado
- [ ] **Reddit r/css**: Focus en características CSS
- [ ] **Hacker News**: Show HN
- [ ] **Discord**: Compartir en comunidades dev

## 📊 Métricas a Trackear
- [ ] Downloads de npm
- [ ] Stars en GitHub
- [ ] Mentions en redes sociales
- [ ] Tráfico web
- [ ] Issues/feedback

## 🎯 Contenido Generado
${Object.entries(contentTemplates).map(([platform, content]) => {
  if (typeof content === 'object') {
    return Object.keys(content).map(type => `- [ ] ${platform}-${type}.txt`).join('\n');
  }
  return `- [ ] ${platform}.md`;
}).join('\n')}

## 🔄 Pasos de Promoción Manual

### Twitter
1. Copiar contenido de twitter-announcement.txt
2. Agregar GIF/imagen relevante
3. Publicar en horario de mayor engagement
4. Usar thread para más detalles

### Reddit
1. Leer reglas de cada subreddit
2. Adaptar contenido al tono de la comunidad
3. Responder activamente a comentarios
4. Seguir ratio 90/10 de contenido útil vs promoción

### Product Hunt
1. Preparar assets visuales
2. Notificar a red personal
3. Programar para martes-jueves
4. Estar activo el día del launch

### Dev.to
1. Usar contenido de devto.md
2. Agregar código examples
3. Tags apropiados
4. Interactuar con comentarios

## 💡 Tips
- Personalizar cada mensaje para la plataforma
- Mostrar valor antes que promoción
- Responder a todos los comentarios
- Usar métricas/números específicos
- Incluir llamadas a la acción claras
`;

fs.writeFileSync(path.join(promotionDir, 'checklist.md'), promotionChecklist);
console.log('✅ checklist.md');

console.log('\n🎉 Contenido promocional generado exitosamente!');
console.log(`📁 Archivos creados en: ${promotionDir}/`);
console.log('\n💡 Próximos pasos:');
console.log('1. Revisar y personalizar el contenido generado');
console.log('2. Crear assets visuales (GIFs, screenshots)');
console.log('3. Seguir el checklist para promoción manual');
console.log('4. Trackear métricas y ajustar estrategia');