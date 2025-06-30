# 🌊 WindFlow CSS Framework

WindFlow is a modern, utility-first CSS framework inspired by Tailwind CSS, but with powerful enhancements that developers have been asking for.

## ✨ Key Improvements Over Tailwind

### 1. **Enhanced Animations** 🎬
- **30+ built-in animations** including fade, slide, zoom, shake, wiggle, flip, and heartbeat
- **Animation utilities** for duration, delay, iteration, direction, fill mode, and play state
- Easy-to-use classes like `animate-fade-in`, `animate-slide-up`, `duration-300`

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

### 5. **Better Developer Experience** 💻
- Simpler configuration
- Built-in CLI tool
- Automatic optimization
- No PostCSS required for basic usage
- Smaller file size with same features

## 🚀 Quick Start

### Installation

```bash
npm install -g windflow
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
│   ├── core/        # Reset and base styles
│   ├── utilities/   # Utility classes
│   ├── components/  # Component styles
│   └── config/      # Configuration
├── dist/
│   ├── windflow.css     # Generated CSS
│   └── windflow.min.css # Minified CSS
├── scripts/
│   └── build.js     # Build script
├── cli.js           # CLI tool
├── windflow.config.js # User configuration
└── package.json
```

## 🌍 Browser Support

WindFlow supports all modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

Some advanced features like container queries require newer browser versions.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

MIT License - feel free to use WindFlow in your projects!

## 🔗 Links

- [Documentation](#) (Coming soon)
- [Examples](#) (Coming soon)
- [GitHub Repository](#) (Your repo here)

---

Made with ❤️ by developers, for developers. WindFlow - where Tailwind meets modern CSS.