# Changelog

All notable changes to WindFlow CSS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-06-30

### 🎉 Major Release - WindFlow Gets Superpowers!

This major release transforms WindFlow from a simple Tailwind alternative into a comprehensive modern CSS framework with unique features that developers have been asking for.

### ✨ Added

#### 🎬 **Advanced Animation System**
- **30+ new animations**: rubber-band, jello, swing, tada, wobble, roll-in, light-speed-in, jack-in-the-box, roll-out, light-speed-out, hinge
- **Text effects**: typewriter, blink, glow, neon
- **Floating effects**: float, levitate  
- **Modern effects**: morphing, glitch, matrix
- **Loading animations**: loading-dots, loading-bars, loading-spinner, loading-pulse-ring
- **Hover variants**: All animations now support `hover:animate-*` prefix
- **Animation utilities**: duration, delay, iteration-count, direction, fill-mode, play-state
- **Custom easing functions**: elastic, back, bounce, expo, circ, sine, quad, cubic, quart, quint

#### 🎨 **Theme System**
- **8 predefined themes**: dark, cyberpunk, glassmorphism, retro, nature, ocean, monochrome, sunset
- **CSS custom properties**: Automatic theme variables generation
- **Theme utilities**: `text-theme-*`, `bg-theme-*`, `border-theme-*`
- **Theme-specific components**: neon-text, glass-card, cyber-grid, retro-text, scanlines
- **Instant theme switching**: No rebuild required

#### ✨ **Advanced Effects**
- **Glassmorphism**: Built-in backdrop-blur utilities and glass components
- **3D transforms**: Full 3D rotation, translation, and perspective support
- **Neon effects**: Cyberpunk-style glowing text and borders
- **Clip paths**: 15+ predefined shapes (circle, star, triangle, arrow, etc.)
- **Advanced gradients**: Conic gradients, mesh gradients, aurora effects
- **Mix blend modes**: All blend mode utilities
- **Modern filters**: Enhanced backdrop filters

#### ⚡ **Loading Components**
- **Animated dots**: Pre-built loading dots with staggered animation
- **Loading bars**: Equalizer-style loading indicator
- **Spinners**: Circular loading spinners
- **Pulse rings**: Expanding ring effects
- **Zero JavaScript**: Pure CSS implementations

#### 🎯 **Interactive Elements**
- **Button effects**: hover-lift, hover-glow, hover-scale
- **Card effects**: hover-float, hover-tilt
- **Text effects**: Glitch, typewriter, neon glow
- **Scroll animations**: scroll-reveal, parallax support

#### 🔧 **VS Code Extension**
- **Intelligent autocomplete**: Context-aware class suggestions
- **Rich documentation**: Hover tooltips with CSS preview
- **Theme previews**: Live theme switching in editor
- **Snippets**: 10+ pre-built component snippets
- **Commands**: Generate CSS, preview themes, extract classes
- **Configuration**: Customizable settings and preferences

#### 📚 **Documentation**
- **Complete website**: Interactive documentation with live examples
- **Animation showcase**: Click-to-test all animations
- **Theme explorer**: Visual theme comparison
- **Code examples**: Copy-paste ready snippets
- **Getting started guide**: Step-by-step tutorials

### 🚀 **Improved**

#### Performance
- **Optimized CSS output**: Better organization and smaller file size
- **Tree-shaking ready**: Modular architecture for future optimization
- **Faster build times**: Improved build system

#### Developer Experience
- **Enhanced CLI**: Better error messages and progress indicators
- **Auto-watch mode**: Automatic rebuilding on file changes
- **Better defaults**: Improved default configuration
- **Comprehensive examples**: More demo files and use cases

#### Browser Support
- **Modern CSS features**: Container queries, backdrop-filter, clip-path
- **Graceful degradation**: Fallbacks for older browsers
- **Better cross-browser compatibility**: Tested across major browsers

### 🔧 **Technical**

#### Build System
- **Modular architecture**: Separated themes, animations, and utilities
- **Plugin system**: Extensible configuration
- **Better error handling**: Graceful failures and helpful messages

#### Configuration
- **Enhanced config**: More customization options
- **Theme extensions**: Easy theme customization
- **Plugin support**: Ready for community plugins

### 📦 **Migration from v1.x**

WindFlow 2.0 is mostly backward compatible with v1.x. To upgrade:

1. **Update package**: `npm update windflow-css`
2. **Rebuild CSS**: `windflow build`
3. **Optional**: Explore new features like themes and advanced animations

### 🐛 **Fixed**
- Fixed animation timing inconsistencies
- Improved responsive utility generation
- Better CSS reset for modern browsers
- Fixed conflicting class names in rare edge cases

### 💔 **Breaking Changes**
- Minimum Node.js version: 14.0.0
- Some internal CSS class names changed (only affects direct CSS usage)
- Default theme is now "dark" instead of no theme

---

## [1.0.0] - 2024-06-30

### Added
- Initial release of WindFlow CSS
- Basic utility classes inspired by Tailwind CSS
- Simple CLI tool for building CSS
- Core spacing, typography, and layout utilities
- Basic animation classes (spin, pulse, bounce)
- Flexbox and Grid utilities
- Color palette utilities
- Border and shadow utilities

### Features
- Utility-first CSS framework
- Responsive design utilities
- Dark mode support
- Basic build system
- Configuration file support

---

## Upcoming Features

### v2.1.0 (Planned)
- [ ] Component library expansion
- [ ] Advanced responsive utilities
- [ ] CSS-in-JS support
- [ ] React/Vue component packages
- [ ] Advanced theme customization
- [ ] Performance optimizations

### v2.2.0 (Planned)
- [ ] Design tokens integration
- [ ] Figma plugin
- [ ] Advanced accessibility features
- [ ] RTL language support
- [ ] Print styles utilities

### Community Requests
- [ ] More animation presets
- [ ] Sketch plugin
- [ ] WordPress integration
- [ ] CDN hosting
- [ ] Online playground

---

**Full Changelog**: https://github.com/jordandiazdiaz/windflow/compare/v1.0.0...v2.0.0