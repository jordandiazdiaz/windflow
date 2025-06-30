# WindFlow IntelliSense

Intelligent WindFlow CSS class suggestions, documentation, and tooling for Visual Studio Code.

## Features

### 🎯 **Intelligent Autocomplete**
- Smart class suggestions based on context
- Fuzzy search for finding classes quickly
- Category-based organization of utilities

### 📖 **Rich Documentation**
- Hover tooltips with CSS preview
- Examples and usage patterns
- Related class suggestions

### 🎨 **Theme Support**
- Preview WindFlow themes directly in VS Code
- Theme-aware color suggestions
- Live theme switching

### ⚡ **Advanced Animations**
- IntelliSense for 50+ animation classes
- Hover effect suggestions
- Loading component snippets

### 🔧 **Developer Tools**
- Generate CSS with keyboard shortcut (Ctrl+Shift+W)
- Extract classes to components
- Configuration file support

## Quick Start

1. Install the extension from VS Code marketplace
2. Open any HTML, JavaScript, or framework file
3. Start typing WindFlow classes in `class=""` attributes
4. Get instant suggestions and documentation!

## Supported File Types

- HTML (`.html`)
- JavaScript (`.js`, `.jsx`)
- TypeScript (`.ts`, `.tsx`)
- Vue (`.vue`)
- Svelte (`.svelte`)
- PHP (`.php`)

## Commands

| Command | Keyboard Shortcut | Description |
|---------|-------------------|-------------|
| `WindFlow: Generate CSS` | `Ctrl+Shift+W` / `Cmd+Shift+W` | Build WindFlow CSS |
| `WindFlow: Preview Theme` | - | Preview themes in webview |
| `WindFlow: Show Documentation` | - | Open documentation panel |
| `WindFlow: Extract Classes` | - | Extract classes to component |

## Snippets

Type these prefixes and press Tab:

- `wf-card` → WindFlow card component
- `wf-btn` → Interactive button
- `wf-loading-dots` → Animated loading dots
- `wf-glass` → Glassmorphism card
- `wf-neon` → Neon text effect
- `wf-gradient` → Advanced gradient
- `wf-animations` → Animation showcase

## Configuration

```json
{
  "windflow.enable": true,
  "windflow.configPath": "./windflow.config.js",
  "windflow.includePreview": true,
  "windflow.preferredTheme": "dark",
  "windflow.enableExperimentalFeatures": false
}
```

### Settings

- **Enable**: Toggle WindFlow IntelliSense on/off
- **Config Path**: Path to your WindFlow configuration file
- **Include Preview**: Show CSS preview in hover tooltips
- **Preferred Theme**: Default theme for previews
- **Experimental Features**: Enable beta features

## Examples

### Basic Usage
```html
<div class="flex items-center justify-center bg-theme-surface">
  <button class="btn-hover-lift bg-theme-primary text-white px-6 py-3 rounded-lg">
    Hover me!
  </button>
</div>
```

### Theme System
```html
<body class="theme-cyberpunk">
  <div class="bg-theme-background text-theme-text">
    <h1 class="neon-text text-theme-primary">Cyberpunk Theme</h1>
    <div class="cyber-grid p-8">
      <div class="neon-border p-4">Neon content</div>
    </div>
  </div>
</body>
```

### Advanced Animations
```html
<div class="grid grid-cols-4 gap-4">
  <div class="hover:animate-rubber-band">Rubber Band</div>
  <div class="hover:animate-jello">Jello</div>
  <div class="hover:animate-swing">Swing</div>
  <div class="hover:animate-tada">Tada!</div>
</div>
```

### Loading Components
```html
<!-- Animated dots -->
<div class="loading-dots text-blue-500">
  <div></div><div></div><div></div>
</div>

<!-- Spinner -->
<div class="loading-spinner text-purple-500"></div>

<!-- Bars -->
<div class="loading-bars text-green-500">
  <div></div><div></div><div></div><div></div><div></div>
</div>
```

## Class Categories

### 🎬 **Animations** (50+ classes)
- **Attention Seekers**: `animate-rubber-band`, `animate-jello`, `animate-swing`, `animate-tada`
- **Entrances**: `animate-fade-in`, `animate-slide-in-*`, `animate-zoom-in`, `animate-roll-in`
- **Exits**: `animate-fade-out`, `animate-slide-out-*`, `animate-zoom-out`, `animate-roll-out`
- **Text Effects**: `animate-glow`, `animate-neon`, `animate-typewriter`
- **Modern Effects**: `animate-glitch`, `animate-matrix`, `animate-morphing`

### 🎨 **Themes** (8 predefined themes)
- **Dark**: Modern dark theme
- **Cyberpunk**: Neon-inspired futuristic
- **Glassmorphism**: Transparent glass effects
- **Retro**: 80s vintage aesthetic
- **Nature**: Earth-inspired colors
- **Ocean**: Deep blue oceanic
- **Monochrome**: Elegant black & white
- **Sunset**: Warm sunset colors

### ✨ **Effects**
- **Glass**: `glass-card`, `glass-nav`
- **Neon**: `neon-text`, `neon-border`
- **Hover**: `btn-hover-lift`, `btn-hover-glow`, `card-hover-float`
- **Clip Paths**: `clip-circle`, `clip-star`, `clip-triangle`

### ⚡ **Loading**
- **Components**: `loading-dots`, `loading-bars`, `loading-spinner`
- **Animations**: `animate-loading-*`

## Tips & Tricks

1. **Combine animations with hover**: `hover:animate-rubber-band`
2. **Use theme variables**: `bg-theme-surface` adapts to active theme
3. **Stack effects**: `glass-card neon-border animate-float`
4. **Responsive animations**: `md:animate-slide-in-right`
5. **Custom timing**: Use `duration-*` and `delay-*` classes

## Troubleshooting

### IntelliSense not working?
1. Check that WindFlow is enabled in settings
2. Verify you're in a supported file type
3. Make sure you're inside `class=""` attributes

### Missing classes?
1. Update to latest WindFlow version
2. Check your `windflow.config.js` path
3. Restart VS Code

### Slow performance?
1. Disable experimental features
2. Reduce hover preview detail
3. Clear VS Code cache

## Links

- [WindFlow Documentation](https://github.com/jordandiazdiaz/windflow)
- [NPM Package](https://npmjs.com/package/windflow-css)
- [Report Issues](https://github.com/jordandiazdiaz/windflow/issues)

## Contributing

Found a bug or want to contribute? Check out our [GitHub repository](https://github.com/jordandiazdiaz/windflow).

---

**Enjoy using WindFlow!** 🌊