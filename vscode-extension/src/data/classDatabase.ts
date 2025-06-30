import Fuse from 'fuse.js';

export interface WindFlowClass {
    name: string;
    category: string;
    description: string;
    css: string;
    example: string;
    color?: string;
    tags: string[];
}

export class WindFlowClassDatabase {
    private classes: WindFlowClass[] = [];
    private fuse: Fuse<WindFlowClass>;

    constructor() {
        this.initializeClasses();
        this.fuse = new Fuse(this.classes, {
            keys: ['name', 'tags', 'description'],
            threshold: 0.3,
            includeScore: true
        });
    }

    private initializeClasses() {
        // Layout Classes
        this.addLayoutClasses();
        // Spacing Classes
        this.addSpacingClasses();
        // Color Classes
        this.addColorClasses();
        // Typography Classes
        this.addTypographyClasses();
        // Animation Classes
        this.addAnimationClasses();
        // Theme Classes
        this.addThemeClasses();
        // Effect Classes
        this.addEffectClasses();
        // Loading Classes
        this.addLoadingClasses();
    }

    private addLayoutClasses() {
        const layouts = [
            {
                name: 'flex',
                category: 'layout',
                description: 'Sets display to flex',
                css: 'display: flex;',
                example: '<div class="flex">Flex container</div>',
                tags: ['display', 'flexbox']
            },
            {
                name: 'grid',
                category: 'layout',
                description: 'Sets display to grid',
                css: 'display: grid;',
                example: '<div class="grid grid-cols-3">Grid container</div>',
                tags: ['display', 'grid']
            },
            {
                name: 'hidden',
                category: 'layout',
                description: 'Hides element',
                css: 'display: none;',
                example: '<div class="hidden">Hidden element</div>',
                tags: ['display', 'hide']
            }
        ];

        this.classes.push(...layouts);
    }

    private addSpacingClasses() {
        const spacings = ['0', '1', '2', '4', '8', '16'];
        const properties = [
            { prefix: 'm', property: 'margin', desc: 'margin' },
            { prefix: 'p', property: 'padding', desc: 'padding' },
            { prefix: 'gap', property: 'gap', desc: 'gap' }
        ];

        properties.forEach(prop => {
            spacings.forEach(size => {
                this.classes.push({
                    name: `${prop.prefix}-${size}`,
                    category: 'spacing',
                    description: `Sets ${prop.desc} to ${size === '0' ? '0' : size === '1' ? '0.25rem' : size === '2' ? '0.5rem' : size === '4' ? '1rem' : size === '8' ? '2rem' : '4rem'}`,
                    css: `${prop.property}: ${size === '0' ? '0' : size === '1' ? '0.25rem' : size === '2' ? '0.5rem' : size === '4' ? '1rem' : size === '8' ? '2rem' : '4rem'};`,
                    example: `<div class="${prop.prefix}-${size}">Spaced element</div>`,
                    tags: ['spacing', prop.desc]
                });
            });
        });
    }

    private addColorClasses() {
        const colors = [
            { name: 'red', hex: '#ef4444' },
            { name: 'blue', hex: '#3b82f6' },
            { name: 'green', hex: '#22c55e' },
            { name: 'purple', hex: '#8b5cf6' },
            { name: 'yellow', hex: '#eab308' },
            { name: 'pink', hex: '#ec4899' },
            { name: 'indigo', hex: '#6366f1' }
        ];

        const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

        colors.forEach(color => {
            shades.forEach(shade => {
                // Text colors
                this.classes.push({
                    name: `text-${color.name}-${shade}`,
                    category: 'colors',
                    description: `Sets text color to ${color.name} ${shade}`,
                    css: `color: ${color.hex};`,
                    example: `<p class="text-${color.name}-${shade}">Colored text</p>`,
                    color: color.hex,
                    tags: ['color', 'text', color.name]
                });

                // Background colors
                this.classes.push({
                    name: `bg-${color.name}-${shade}`,
                    category: 'colors',
                    description: `Sets background color to ${color.name} ${shade}`,
                    css: `background-color: ${color.hex};`,
                    example: `<div class="bg-${color.name}-${shade}">Colored background</div>`,
                    color: color.hex,
                    tags: ['color', 'background', color.name]
                });
            });
        });
    }

    private addTypographyClasses() {
        const typography = [
            {
                name: 'text-xs',
                category: 'typography',
                description: 'Sets font size to extra small',
                css: 'font-size: 0.75rem; line-height: 1rem;',
                example: '<p class="text-xs">Extra small text</p>',
                tags: ['font', 'size', 'small']
            },
            {
                name: 'text-lg',
                category: 'typography',
                description: 'Sets font size to large',
                css: 'font-size: 1.125rem; line-height: 1.75rem;',
                example: '<p class="text-lg">Large text</p>',
                tags: ['font', 'size', 'large']
            },
            {
                name: 'font-bold',
                category: 'typography',
                description: 'Sets font weight to bold',
                css: 'font-weight: 700;',
                example: '<p class="font-bold">Bold text</p>',
                tags: ['font', 'weight', 'bold']
            }
        ];

        this.classes.push(...typography);
    }

    private addAnimationClasses() {
        const animations = [
            {
                name: 'animate-rubber-band',
                category: 'animations',
                description: 'Rubber band animation effect',
                css: 'animation: wf-rubber-band 1s ease-out;',
                example: '<div class="animate-rubber-band">Rubber band effect</div>',
                tags: ['animation', 'attention', 'rubber', 'band']
            },
            {
                name: 'animate-jello',
                category: 'animations',
                description: 'Jello wobble animation effect',
                css: 'animation: wf-jello 1s ease-out;',
                example: '<div class="animate-jello">Jello effect</div>',
                tags: ['animation', 'attention', 'jello', 'wobble']
            },
            {
                name: 'animate-swing',
                category: 'animations',
                description: 'Swing animation effect',
                css: 'animation: wf-swing 1s ease-out;',
                example: '<div class="animate-swing">Swing effect</div>',
                tags: ['animation', 'attention', 'swing']
            },
            {
                name: 'animate-tada',
                category: 'animations',
                description: 'Tada celebration animation',
                css: 'animation: wf-tada 1s ease-out;',
                example: '<div class="animate-tada">Tada effect</div>',
                tags: ['animation', 'attention', 'tada', 'celebration']
            },
            {
                name: 'animate-glitch',
                category: 'animations',
                description: 'Glitch effect animation',
                css: 'animation: wf-glitch 2s linear infinite;',
                example: '<div class="animate-glitch">Glitch effect</div>',
                tags: ['animation', 'modern', 'glitch', 'digital']
            },
            {
                name: 'animate-neon',
                category: 'animations',
                description: 'Neon glow animation',
                css: 'animation: wf-neon 1.5s ease-in-out infinite alternate;',
                example: '<div class="animate-neon">Neon glow</div>',
                tags: ['animation', 'glow', 'neon', 'cyberpunk']
            },
            {
                name: 'animate-float',
                category: 'animations',
                description: 'Floating animation effect',
                css: 'animation: wf-float 3s ease-in-out infinite;',
                example: '<div class="animate-float">Floating element</div>',
                tags: ['animation', 'float', 'hover', 'continuous']
            }
        ];

        this.classes.push(...animations);
    }

    private addThemeClasses() {
        const themes = ['dark', 'cyberpunk', 'glassmorphism', 'retro', 'nature', 'ocean', 'monochrome', 'sunset'];
        
        themes.forEach(theme => {
            this.classes.push({
                name: `theme-${theme}`,
                category: 'themes',
                description: `Applies ${theme} theme to element and children`,
                css: `/* ${theme} theme variables */`,
                example: `<div class="theme-${theme}">Themed content</div>`,
                tags: ['theme', theme, 'style']
            });
        });

        // Theme color utilities
        const themeColors = ['primary', 'secondary', 'accent', 'background', 'surface', 'text'];
        themeColors.forEach(color => {
            ['text', 'bg', 'border'].forEach(property => {
                this.classes.push({
                    name: `${property}-theme-${color}`,
                    category: 'themes',
                    description: `Sets ${property} to theme ${color} color`,
                    css: `${property === 'text' ? 'color' : property === 'bg' ? 'background-color' : 'border-color'}: var(--wf-${color});`,
                    example: `<div class="${property}-theme-${color}">Theme colored element</div>`,
                    tags: ['theme', 'color', property, color]
                });
            });
        });
    }

    private addEffectClasses() {
        const effects = [
            {
                name: 'glass-card',
                category: 'effects',
                description: 'Glassmorphism card effect',
                css: 'background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.3);',
                example: '<div class="glass-card p-4">Glass card</div>',
                tags: ['glass', 'blur', 'transparent', 'modern']
            },
            {
                name: 'neon-text',
                category: 'effects',
                description: 'Neon text glow effect',
                css: 'text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;',
                example: '<h1 class="neon-text">Neon text</h1>',
                tags: ['neon', 'glow', 'text', 'cyberpunk']
            },
            {
                name: 'btn-hover-lift',
                category: 'effects',
                description: 'Button lift effect on hover',
                css: 'transition: transform 0.2s ease, box-shadow 0.2s ease; hover: transform: translateY(-2px);',
                example: '<button class="btn-hover-lift">Hover me</button>',
                tags: ['button', 'hover', 'lift', 'interactive']
            }
        ];

        this.classes.push(...effects);
    }

    private addLoadingClasses() {
        const loadingComponents = [
            {
                name: 'loading-dots',
                category: 'loading',
                description: 'Animated loading dots component',
                css: 'display: inline-flex; gap: 0.25rem;',
                example: '<div class="loading-dots"><div></div><div></div><div></div></div>',
                tags: ['loading', 'dots', 'spinner', 'animation']
            },
            {
                name: 'loading-bars',
                category: 'loading',
                description: 'Animated loading bars component',
                css: 'display: inline-flex; gap: 0.125rem; align-items: center;',
                example: '<div class="loading-bars"><div></div><div></div><div></div></div>',
                tags: ['loading', 'bars', 'equalizer', 'animation']
            },
            {
                name: 'loading-spinner',
                category: 'loading',
                description: 'Circular loading spinner',
                css: 'width: 2rem; height: 2rem; border: 0.25rem solid #f3f3f3; border-top: 0.25rem solid currentColor; border-radius: 50%; animation: wf-loading-spinner 1s linear infinite;',
                example: '<div class="loading-spinner"></div>',
                tags: ['loading', 'spinner', 'circle', 'rotation']
            }
        ];

        this.classes.push(...loadingComponents);
    }

    search(query: string): WindFlowClass[] {
        if (!query || query.length < 2) {
            // Return most common classes for empty query
            return this.classes
                .filter(c => ['flex', 'grid', 'p-4', 'm-4', 'text-lg', 'bg-blue-500'].includes(c.name))
                .slice(0, 10);
        }

        const results = this.fuse.search(query);
        return results
            .filter(result => (result.score || 0) < 0.6)
            .map(result => result.item)
            .slice(0, 20);
    }

    getAllClasses(): WindFlowClass[] {
        return this.classes;
    }

    getClassByName(name: string): WindFlowClass | undefined {
        return this.classes.find(c => c.name === name);
    }
}