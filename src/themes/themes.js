// WindFlow Predefined Themes
const themes = {
  // Dark Theme
  dark: {
    name: 'Dark',
    description: 'Modern dark theme with enhanced contrast',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#06b6d4',
      background: '#0f172a',
      surface: '#1e293b',
      'surface-light': '#334155',
      text: '#f8fafc',
      'text-muted': '#cbd5e1',
      border: '#475569',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      dark: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)'
    }
  },

  // Cyberpunk Theme
  cyberpunk: {
    name: 'Cyberpunk',
    description: 'Futuristic neon-inspired theme',
    colors: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: '#0a0a0a',
      surface: '#1a0a1a',
      'surface-light': '#2a1a2a',
      text: '#ffffff',
      'text-muted': '#ff00ff',
      border: '#ff0080',
      success: '#00ff00',
      warning: '#ffff00',
      error: '#ff0040'
    },
    gradients: {
      primary: 'linear-gradient(45deg, #ff0080, #ff8000, #ffff00)',
      secondary: 'linear-gradient(45deg, #00ffff, #0080ff, #8000ff)',
      neon: 'radial-gradient(circle, #ff00ff, #00ffff)'
    }
  },

  // Glassmorphism Theme
  glassmorphism: {
    name: 'Glassmorphism',
    description: 'Transparent glass-like effects',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#06b6d4',
      background: 'rgba(255, 255, 255, 0.1)',
      surface: 'rgba(255, 255, 255, 0.2)',
      'surface-light': 'rgba(255, 255, 255, 0.3)',
      text: '#1f2937',
      'text-muted': '#6b7280',
      border: 'rgba(255, 255, 255, 0.3)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    },
    gradients: {
      primary: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))',
      backdrop: 'backdrop-filter: blur(20px)'
    }
  },

  // Retro Theme
  retro: {
    name: 'Retro',
    description: '80s vintage aesthetic',
    colors: {
      primary: '#ff6b9d',
      secondary: '#feca57',
      accent: '#48dbfb',
      background: '#2c2c54',
      surface: '#40407a',
      'surface-light': '#706fd3',
      text: '#f1f2f6',
      'text-muted': '#ddd',
      border: '#ff9ff3',
      success: '#2ed573',
      warning: '#ffa502',
      error: '#ff3838'
    },
    gradients: {
      primary: 'linear-gradient(45deg, #ff6b9d, #feca57)',
      secondary: 'linear-gradient(45deg, #48dbfb, #0abde3)',
      vintage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  },

  // Nature Theme
  nature: {
    name: 'Nature',
    description: 'Earth-inspired natural colors',
    colors: {
      primary: '#22c55e',
      secondary: '#84cc16',
      accent: '#eab308',
      background: '#f0fdf4',
      surface: '#dcfce7',
      'surface-light': '#bbf7d0',
      text: '#14532d',
      'text-muted': '#166534',
      border: '#86efac',
      success: '#16a34a',
      warning: '#ca8a04',
      error: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #22c55e, #84cc16)',
      forest: 'linear-gradient(135deg, #134e4a, #065f46)',
      sunset: 'linear-gradient(135deg, #fbbf24, #f59e0b, #dc2626)'
    }
  },

  // Ocean Theme
  ocean: {
    name: 'Ocean',
    description: 'Deep blue oceanic theme',
    colors: {
      primary: '#0ea5e9',
      secondary: '#0284c7',
      accent: '#06b6d4',
      background: '#f0f9ff',
      surface: '#e0f2fe',
      'surface-light': '#bae6fd',
      text: '#0c4a6e',
      'text-muted': '#0369a1',
      border: '#7dd3fc',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      ocean: 'linear-gradient(135deg, #0c4a6e, #075985, #0284c7)',
      wave: 'radial-gradient(ellipse at center, #bae6fd, #0ea5e9)'
    }
  },

  // Monochrome Theme
  monochrome: {
    name: 'Monochrome',
    description: 'Elegant black and white',
    colors: {
      primary: '#000000',
      secondary: '#404040',
      accent: '#808080',
      background: '#ffffff',
      surface: '#f8f9fa',
      'surface-light': '#e9ecef',
      text: '#000000',
      'text-muted': '#6c757d',
      border: '#dee2e6',
      success: '#28a745',
      warning: '#ffc107',
      error: '#dc3545'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #000000, #404040)',
      light: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
      contrast: 'linear-gradient(45deg, #000000, #ffffff)'
    }
  },

  // Sunset Theme
  sunset: {
    name: 'Sunset',
    description: 'Warm sunset colors',
    colors: {
      primary: '#f97316',
      secondary: '#ea580c',
      accent: '#fbbf24',
      background: '#fffbeb',
      surface: '#fef3c7',
      'surface-light': '#fde68a',
      text: '#92400e',
      'text-muted': '#d97706',
      border: '#fcd34d',
      success: '#65a30d',
      warning: '#ca8a04',
      error: '#dc2626'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #f97316, #ea580c)',
      sunset: 'linear-gradient(135deg, #fbbf24, #f97316, #ea580c, #dc2626)',
      warm: 'radial-gradient(ellipse at center, #fef3c7, #f97316)'
    }
  }
};

module.exports = themes;