# 🌊 WindFlow CSS Framework

[![npm version](https://badge.fury.io/js/windflow-css.svg)](https://badge.fury.io/js/windflow-css)
[![Downloads](https://img.shields.io/npm/dm/windflow-css.svg)](https://npmjs.com/package/windflow-css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

WindFlow is a modern, utility-first CSS framework inspired by Tailwind CSS, but with **superpowers** that developers have been asking for.

## 🎯 Why WindFlow?

- **315.9 KB** of pure CSS goodness with 50+ animations, 8 themes, and advanced effects
- **No build process required** - Just include and use
- **100% Tailwind compatible** - Easy migration with automated tools
- **Performance focused** - 92/100 benchmark score
- **Developer friendly** - VS Code extension, comprehensive docs, and examples

## 🏆 Performance

WindFlow CSS achieves a **92/100 performance score** with:
- ⚡ **145ms** average load time
- 🎯 **58 FPS** consistent animation performance
- 💾 **Low memory footprint** (18.5 MB initial)
- 📊 **0.02 CLS** (Cumulative Layout Shift) score
- 🚀 **Optimized** for production with minification

[View detailed benchmarks →](./benchmarks/)

## ✨ Key Improvements Over Tailwind

### 1. **50+ Advanced Animations** 🎬
- **Attention seekers**: rubber-band, jello, swing, tada, wobble, shake, heartbeat
- **Entrances**: fade-in, slide-in-*, zoom-in, roll-in, light-speed-in, jack-in-the-box
- **Exits**: fade-out, slide-out-*, zoom-out, roll-out, light-speed-out, hinge
- **Text effects**: typewriter, blink, glow, neon
- **Modern effects**: glitch, matrix, morphing, float, levitate
- **Loading animations**: dots, bars, spinner, pulse-ring
- **Animation utilities** for duration, delay, iteration, direction, fill mode, play state
- **Hover variants**: All animations support `hover:animate-*` prefix

### 2. **Advanced Gradients** 🎨
- **Linear gradients** in all directions
- **Radial gradients** with positioning
- **Conic gradients** for circular effects
- **Mesh gradients** for complex color blends
- **Animated gradients** like aurora effects

### 3. **3D Transforms** 🎭
- Full 3D rotation support (`rotate-x-45`, `rotate-y-90`)
- 3D translations (`translate-z-4`)
- Perspective utilities (`perspective-lg`)
- Transform style preservation (`transform-3d`)
- Backface visibility control

### 4. **Modern CSS Features** 🚀
- **Container queries** support
- **Backdrop filters** for glassmorphism
- **Clip-path shapes** (circle, triangle, star, etc.)
- **Scroll snap** utilities
- **Aspect ratio** utilities
- **Mix blend modes**

### 5. **8 Beautiful Themes** 🎨
- **Pre-built themes**: dark, cyberpunk, glassmorphism, retro, nature, ocean, monochrome, sunset
- **CSS variables**: Automatic theme variable generation
- **Theme utilities**: `text-theme-primary`, `bg-theme-surface`, `border-theme-border`
- **Instant switching**: No rebuild required
- **Theme-specific effects**: neon-text, glass-card, cyber-grid

### 6. **VS Code Extension** 🔧
- **Intelligent autocomplete**: Context-aware class suggestions  
- **Rich documentation**: Hover tooltips with CSS preview
- **Theme previews**: Live theme switching in editor
- **Snippets**: 10+ pre-built component snippets
- **Commands**: Generate CSS, preview themes, extract classes

### 7. **Better Developer Experience** 💻
- Enhanced CLI with watch mode
- Complete documentation website
- Zero PostCSS configuration required
- Comprehensive examples and demos
- Modular architecture for customization

### 8. **Migration Tools** 🔄
- **Automated migration script** from Tailwind CSS
- **Class mapping** for easy transition
- **Backup system** for safe migration
- **Step-by-step guide** with examples
- **Package.json updater** included

## 🚀 Quick Start

### Installation

```bash
npm install windflow-css
```

Or install globally for CLI access:

```bash
npm install -g windflow-css
```

### Initialize in Your Project

```bash
windflow init
```

This creates:
- `windflow.config.js` - Configuration file
- `windflow-example.html` - Example page showing features

### Build Your CSS

```bash
windflow build
```

### Watch for Changes

```bash
windflow watch
```

### Include in Your HTML

```html
<link rel="stylesheet" href="dist/windflow.css">
```

### Migrating from Tailwind CSS

Run our automated migration tool:

```bash
node scripts/migrate-from-tailwind.js
```

[Read the complete migration guide →](./docs/migration-from-tailwind.md)

## 📦 Usage Examples

### Enhanced Animations
```html
<!-- Fade in with custom duration -->
<div class="animate-fade-in duration-500">Hello World</div>

<!-- Shake effect on hover -->
<button class="hover:animate-shake">Click me!</button>

<!-- Continuous wiggle -->
<div class="animate-wiggle animate-infinite">🎉</div>

<!-- 3D flip card -->
<div class="animate-flip transform-3d">Card</div>
```

### Advanced Gradients
```html
<!-- Radial gradient -->
<div class="bg-gradient-radial from-blue-400 to-purple-600">
  Radial Gradient
</div>

<!-- Conic gradient -->
<div class="bg-gradient-conic from-red-500 via-yellow-500 to-green-500">
  Color Wheel
</div>

<!-- Animated aurora gradient -->
<div class="bg-aurora text-white p-8">
  Aurora Background
</div>
```

### 3D Transforms
```html
<!-- 3D rotation -->
<div class="transform rotate-x-45 rotate-y-45 perspective-lg">
  3D Element
</div>

<!-- 3D card hover effect -->
<div class="transform-3d hover:rotate-y-180 transition-transform duration-700">
  <div class="backface-hidden">Front</div>
  <div class="backface-hidden rotate-y-180">Back</div>
</div>
```

### Glassmorphism
```html
<!-- Glass effect -->
<div class="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl">
  Glass Card
</div>
```

### Clip Paths
```html
<!-- Star shape -->
<div class="clip-star bg-yellow-400 w-32 h-32"></div>

<!-- Message bubble -->
<div class="clip-message bg-blue-500 text-white p-4">
  Chat Message
</div>
```

## 🛠️ Configuration

Edit `windflow.config.js` to customize:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          // ... your brand colors
        }
      },
      animation: {
        'custom-bounce': 'customBounce 2s ease-in-out infinite'
      },
      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  }
}
```

## 📝 CLI Commands

- `windflow init` - Initialize WindFlow in your project
- `windflow build` - Build the CSS file
- `windflow watch` - Watch and rebuild on changes
- `windflow optimize` - Create minified version
- `windflow config` - Show current configuration
- `windflow help` - Show help

## 🏗️ Project Structure

```
windflow/
├── src/
│   ├── core/           # Reset and base styles
│   ├── utilities/      # Utility classes
│   ├── components/     # Component styles
│   ├── animations/     # 50+ animation definitions
│   ├── themes/         # 8 pre-built themes
│   └── config/         # Configuration
├── dist/
│   ├── windflow.css     # Generated CSS (315.9 KB)
│   └── windflow.min.css # Minified CSS
├── docs/
│   ├── README.md        # Complete documentation
│   └── migration-from-tailwind.md # Migration guide
├── examples/
│   ├── index.html       # Feature showcase
│   ├── dashboard.html   # Dashboard demo
│   └── playground.html  # Interactive playground
├── benchmarks/
│   ├── index.html       # Performance dashboard
│   └── tests/           # Performance test suite
├── scripts/
│   ├── build.js         # Build script
│   └── migrate-from-tailwind.js # Migration tool
├── vscode-extension/    # VS Code integration
├── cli.js               # CLI tool
├── windflow.config.js   # User configuration
└── package.json
```

## 🌍 Browser Support

WindFlow supports all modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

Some advanced features like container queries require newer browser versions.

## 📊 Comparison with Other Frameworks

| Feature | WindFlow | Tailwind | Bootstrap | Bulma |
|---------|----------|----------|-----------|--------|
| **Bundle Size** | 315.9 KB | 42.7 KB | 192.4 KB | 234.8 KB |
| **Animations** | 50+ | 4 | 12 | 0 |
| **Themes** | 8 built-in | Manual | 1 | Manual |
| **3D Support** | ✅ Full | ❌ | ❌ | ❌ |
| **Glassmorphism** | ✅ | ❌ | ❌ | ❌ |
| **VS Code Ext** | ✅ | ✅ | ❌ | ❌ |
| **Migration Tool** | ✅ | - | ❌ | ❌ |
| **Performance** | 92/100 | 85/100 | 78/100 | 72/100 |

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

MIT License - feel free to use WindFlow in your projects!

## 🔗 Links

- [Documentation](./docs/README.md) - Complete guides and API reference
- [Migration from Tailwind](./docs/migration-from-tailwind.md) - Step-by-step migration guide
- [Examples](./examples/) - Interactive demos and playground
- [Performance Benchmarks](./benchmarks/) - Detailed performance analysis
- [VS Code Extension](./vscode-extension/) - IntelliSense and snippets
- [GitHub Repository](https://github.com/jordandiazdiaz/windflow)

---

Made with ❤️ by developers, for developers. WindFlow - where Tailwind meets modern CSS.