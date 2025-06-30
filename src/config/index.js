/**
 * Configuration Index - WindFlow Framework
 * Central configuration management and validation
 */

module.exports = {
  /**
   * Validate configuration object
   * @param {Object} config - User configuration
   * @returns {Object} Validated configuration
   */
  validateConfig: function(config) {
    const defaultConfig = {
      theme: {
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px'
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: '#000000',
          white: '#ffffff'
        },
        spacing: {
          '0': '0px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '40': '10rem',
          '48': '12rem',
          '56': '14rem',
          '64': '16rem'
        },
        fontSize: {
          'xs': ['0.75rem', '1rem'],
          'sm': ['0.875rem', '1.25rem'],
          'base': ['1rem', '1.5rem'],
          'lg': ['1.125rem', '1.75rem'],
          'xl': ['1.25rem', '1.75rem'],
          '2xl': ['1.5rem', '2rem'],
          '3xl': ['1.875rem', '2.25rem'],
          '4xl': ['2.25rem', '2.5rem'],
          '5xl': ['3rem', '1'],
          '6xl': ['3.75rem', '1'],
          '7xl': ['4.5rem', '1'],
          '8xl': ['6rem', '1'],
          '9xl': ['8rem', '1']
        },
        fontWeight: {
          'thin': '100',
          'extralight': '200',
          'light': '300',
          'normal': '400',
          'medium': '500',
          'semibold': '600',
          'bold': '700',
          'extrabold': '800',
          'black': '900'
        },
        fontFamily: {
          'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
          'serif': ['ui-serif', 'Georgia', 'serif'],
          'mono': ['ui-monospace', 'SFMono-Regular', 'monospace']
        },
        lineHeight: {
          '3': '.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '7': '1.75rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
          'none': '1',
          'tight': '1.25',
          'snug': '1.375',
          'normal': '1.5',
          'relaxed': '1.625',
          'loose': '2'
        },
        letterSpacing: {
          'tighter': '-0.05em',
          'tight': '-0.025em',
          'normal': '0em',
          'wide': '0.025em',
          'wider': '0.05em',
          'widest': '0.1em'
        },
        borderRadius: {
          'none': '0px',
          'sm': '0.125rem',
          '': '0.25rem',
          'md': '0.375rem',
          'lg': '0.5rem',
          'xl': '0.75rem',
          '2xl': '1rem',
          '3xl': '1.5rem',
          'full': '9999px'
        },
        boxShadow: {
          'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          '': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
          'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
          'none': '0 0 #0000'
        },
        opacity: {
          '0': '0',
          '5': '0.05',
          '10': '0.1',
          '20': '0.2',
          '25': '0.25',
          '30': '0.3',
          '40': '0.4',
          '50': '0.5',
          '60': '0.6',
          '70': '0.7',
          '75': '0.75',
          '80': '0.8',
          '90': '0.9',
          '95': '0.95',
          '100': '1'
        }
      }
    };

    // Deep merge user config with defaults
    return this.mergeDeep(defaultConfig, config || {});
  },

  /**
   * Deep merge two objects
   * @param {Object} target - Target object
   * @param {Object} source - Source object
   * @returns {Object} Merged object
   */
  mergeDeep: function(target, source) {
    const output = Object.assign({}, target);
    if (this.isObject(target) && this.isObject(source)) {
      Object.keys(source).forEach(key => {
        if (this.isObject(source[key])) {
          if (!(key in target))
            Object.assign(output, { [key]: source[key] });
          else
            output[key] = this.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      });
    }
    return output;
  },

  /**
   * Check if value is an object
   * @param {*} item - Item to check
   * @returns {boolean} True if object
   */
  isObject: function(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  },

  /**
   * Get configuration documentation
   * @returns {string} Configuration guide
   */
  getConfigDocs: function() {
    return `
# WindFlow Configuration

WindFlow uses a configuration file \`windflow.config.js\` to customize the framework.

## Basic Configuration

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    }
  }
}
\`\`\`

## Theme Extension vs Override

- Use \`extend\` to add new values while keeping defaults
- Override theme properties directly to replace defaults

## Available Theme Sections

- \`screens\` - Responsive breakpoints
- \`colors\` - Color palette
- \`spacing\` - Margin, padding, gap values
- \`fontSize\` - Text sizes with line heights
- \`fontWeight\` - Font weights
- \`fontFamily\` - Font families
- \`lineHeight\` - Line height values
- \`letterSpacing\` - Letter spacing values
- \`borderRadius\` - Border radius values
- \`boxShadow\` - Box shadow presets
- \`opacity\` - Opacity values

## Custom Animations

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
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
\`\`\`
`;
  }
};