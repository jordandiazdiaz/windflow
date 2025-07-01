"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const completionProvider_1 = require("./providers/completionProvider");
const hoverProvider_1 = require("./providers/hoverProvider");
function activate(context) {
    console.log('WindFlow IntelliSense is now active!');
    const config = vscode.workspace.getConfiguration('windflow');
    if (!config.get('enable')) {
        return;
    }
    // Initialize providers
    const completionProvider = new completionProvider_1.WindFlowCompletionProvider();
    const hoverProvider = new hoverProvider_1.WindFlowHoverProvider();
    // Supported languages
    const languages = [
        'html', 'javascript', 'typescript',
        'javascriptreact', 'typescriptreact',
        'vue', 'svelte', 'php'
    ];
    // Register completion provider
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider(languages, completionProvider, ' ', '"', "'", '`', '='));
    // Register hover provider
    context.subscriptions.push(vscode.languages.registerHoverProvider(languages, hoverProvider));
    // Register commands
    context.subscriptions.push(vscode.commands.registerCommand('windflow.generateCSS', async () => {
        await generateCSS();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('windflow.previewTheme', async () => {
        await previewTheme();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('windflow.showDocs', async () => {
        await showDocumentation();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('windflow.extractClasses', async () => {
        vscode.window.showInformationMessage('Extract Classes feature coming soon!');
    }));
    // Status bar
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "$(symbol-color) WindFlow";
    statusBarItem.tooltip = "WindFlow IntelliSense Active";
    statusBarItem.command = 'windflow.showDocs';
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);
}
exports.activate = activate;
async function generateCSS() {
    const terminal = vscode.window.activeTerminal || vscode.window.createTerminal('WindFlow');
    terminal.show();
    terminal.sendText('windflow build');
    vscode.window.showInformationMessage('Generating WindFlow CSS...');
}
async function previewTheme() {
    const themes = [
        'dark', 'cyberpunk', 'glassmorphism', 'retro',
        'nature', 'ocean', 'monochrome', 'sunset'
    ];
    const selectedTheme = await vscode.window.showQuickPick(themes, {
        placeHolder: 'Select a theme to preview'
    });
    if (selectedTheme) {
        // Create preview HTML
        const panel = vscode.window.createWebviewPanel('windflowThemePreview', `WindFlow Theme: ${selectedTheme}`, vscode.ViewColumn.Two, {
            enableScripts: true
        });
        panel.webview.html = getThemePreviewHTML(selectedTheme);
    }
}
function getThemePreviewHTML(theme) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WindFlow Theme Preview: ${theme}</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0; 
                padding: 20px;
                background: ${getThemeColors(theme).background};
                color: ${getThemeColors(theme).text || '#1f2937'};
            }
            .theme-card { 
                padding: 20px; 
                border-radius: 12px; 
                margin: 10px 0;
                background: ${getThemeColors(theme).surface || '#ffffff'};
                border: 1px solid ${getThemeColors(theme).border || '#e5e7eb'};
            }
            .color-palette {
                display: flex;
                gap: 10px;
                margin: 15px 0;
            }
            .color-swatch {
                width: 40px;
                height: 40px;
                border-radius: 8px;
                border: 1px solid #ccc;
            }
            .animation-demo {
                padding: 10px 20px;
                background: ${getThemeColors(theme).primary};
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                margin: 5px;
                transition: all 0.3s ease;
            }
            .animation-demo:hover {
                transform: scale(1.05);
            }
            h1 { color: ${getThemeColors(theme).primary}; margin-bottom: 20px; }
            h2 { color: ${getThemeColors(theme).secondary}; margin-top: 30px; }
        </style>
    </head>
    <body>
        <h1>🌊 WindFlow Theme Preview: ${theme.charAt(0).toUpperCase() + theme.slice(1)}</h1>
        
        <div class="theme-card">
            <h2>Color Palette</h2>
            <div class="color-palette">
                <div class="color-swatch" style="background: ${getThemeColors(theme).primary}"></div>
                <div class="color-swatch" style="background: ${getThemeColors(theme).secondary}"></div>
                <div class="color-swatch" style="background: ${getThemeColors(theme).accent}"></div>
                <div class="color-swatch" style="background: ${getThemeColors(theme).background}"></div>
            </div>
        </div>
        
        <div class="theme-card">
            <h2>Interactive Elements</h2>
            <button class="animation-demo">Primary Button</button>
            <button class="animation-demo" style="background: ${getThemeColors(theme).secondary}">Secondary Button</button>
            <button class="animation-demo" style="background: ${getThemeColors(theme).accent}">Accent Button</button>
        </div>
        
        <div class="theme-card">
            <h2>Usage Example</h2>
            <code style="background: #f3f4f6; padding: 15px; border-radius: 8px; display: block; margin-top: 10px; color: #1f2937;">
&lt;div class="theme-${theme}"&gt;<br>
&nbsp;&nbsp;&lt;h1 class="text-theme-primary"&gt;Hello WindFlow!&lt;/h1&gt;<br>
&nbsp;&nbsp;&lt;div class="bg-theme-surface p-4 rounded-lg"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="text-theme-text"&gt;Content with theme colors&lt;/p&gt;<br>
&nbsp;&nbsp;&lt;/div&gt;<br>
&lt;/div&gt;
            </code>
        </div>
        
        <script>
            document.querySelectorAll('.animation-demo').forEach(btn => {
                btn.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1.05)';
                    }, 100);
                });
            });
        </script>
    </body>
    </html>`;
}
function getThemeColors(theme) {
    const themes = {
        dark: {
            primary: '#6366f1',
            secondary: '#8b5cf6',
            accent: '#06b6d4',
            background: '#0f172a',
            surface: '#1e293b',
            text: '#f1f5f9',
            border: '#334155'
        },
        cyberpunk: {
            primary: '#ff0080',
            secondary: '#00ffff',
            accent: '#ffff00',
            background: '#0a0a0a',
            surface: '#1a1a1a',
            text: '#ffffff',
            border: '#ff0080'
        },
        glassmorphism: {
            primary: '#6366f1',
            secondary: '#8b5cf6',
            accent: '#06b6d4',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            surface: 'rgba(255,255,255,0.1)',
            text: '#1f2937',
            border: 'rgba(255,255,255,0.2)'
        },
        retro: {
            primary: '#ff6b9d',
            secondary: '#feca57',
            accent: '#48dbfb',
            background: '#2c2c54',
            surface: '#40407a',
            text: '#ffffff',
            border: '#706fd3'
        },
        nature: {
            primary: '#22c55e',
            secondary: '#84cc16',
            accent: '#eab308',
            background: '#f0fdf4',
            surface: '#ffffff',
            text: '#1f2937',
            border: '#dcfce7'
        },
        ocean: {
            primary: '#0ea5e9',
            secondary: '#0284c7',
            accent: '#06b6d4',
            background: '#f0f9ff',
            surface: '#ffffff',
            text: '#1f2937',
            border: '#e0f2fe'
        },
        monochrome: {
            primary: '#000000',
            secondary: '#404040',
            accent: '#808080',
            background: '#ffffff',
            surface: '#f8f9fa',
            text: '#000000',
            border: '#e5e7eb'
        },
        sunset: {
            primary: '#f97316',
            secondary: '#ea580c',
            accent: '#fbbf24',
            background: '#fffbeb',
            surface: '#ffffff',
            text: '#1f2937',
            border: '#fed7aa'
        }
    };
    return themes[theme] || themes.dark;
}
async function showDocumentation() {
    const panel = vscode.window.createWebviewPanel('windflowDocs', 'WindFlow Documentation', vscode.ViewColumn.Two, { enableScripts: true });
    panel.webview.html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>WindFlow Documentation</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                padding: 20px; 
                line-height: 1.6;
                background: #0f172a;
                color: #f1f5f9;
            }
            .section { margin-bottom: 30px; }
            .class-example { 
                background: #1e293b; 
                padding: 10px; 
                border-radius: 6px; 
                font-family: 'Courier New', monospace;
                border-left: 4px solid #6366f1;
                margin: 10px 0;
                color: #06b6d4;
            }
            h1 { color: #6366f1; margin-bottom: 20px; }
            h2 { color: #8b5cf6; border-bottom: 2px solid #334155; padding-bottom: 5px; }
            .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
            .intro { background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #06b6d4; }
        </style>
    </head>
    <body>
        <h1>🌊 WindFlow CSS Framework</h1>
        
        <div class="intro">
            <p><strong>WindFlow IntelliSense</strong> provides intelligent autocomplete and documentation for all WindFlow CSS classes.</p>
            <p>Start typing class names in your HTML, JSX, or Vue files to see suggestions!</p>
        </div>
        
        <div class="grid">
            <div class="section">
                <h2>🎬 Advanced Animations</h2>
                <div class="class-example">animate-rubber-band</div>
                <div class="class-example">animate-jello</div>
                <div class="class-example">animate-swing</div>
                <div class="class-example">animate-tada</div>
                <div class="class-example">animate-wobble</div>
                <div class="class-example">animate-roll-in</div>
                <div class="class-example">animate-light-speed-in</div>
                <div class="class-example">animate-jack-in-the-box</div>
                <div class="class-example">animate-glitch</div>
                <div class="class-example">animate-typewriter</div>
            </div>
            
            <div class="section">
                <h2>🎨 Theme System</h2>
                <div class="class-example">theme-dark</div>
                <div class="class-example">theme-cyberpunk</div>
                <div class="class-example">theme-glassmorphism</div>
                <div class="class-example">theme-retro</div>
                <div class="class-example">text-theme-primary</div>
                <div class="class-example">bg-theme-surface</div>
                <div class="class-example">border-theme-border</div>
            </div>
            
            <div class="section">
                <h2>✨ Glass Effects</h2>
                <div class="class-example">glass-light</div>
                <div class="class-example">glass-dark</div>
                <div class="class-example">glass-heavy</div>
                <div class="class-example">backdrop-blur-sm</div>
                <div class="class-example">backdrop-blur-md</div>
            </div>
            
            <div class="section">
                <h2>🌈 Advanced Gradients</h2>
                <div class="class-example">gradient-aurora</div>
                <div class="class-example">gradient-ocean</div>
                <div class="class-example">gradient-sunset</div>
                <div class="class-example">gradient-forest</div>
                <div class="class-example">gradient-mesh</div>
                <div class="class-example">animate-gradient</div>
            </div>
            
            <div class="section">
                <h2>⚡ Loading Components</h2>
                <div class="class-example">loading-dots</div>
                <div class="class-example">loading-bars</div>
                <div class="class-example">loading-spinner</div>
                <div class="class-example">loading-pulse-ring</div>
            </div>
            
            <div class="section">
                <h2>🎭 3D Transforms</h2>
                <div class="class-example">rotate-x-45</div>
                <div class="class-example">rotate-y-90</div>
                <div class="class-example">perspective-lg</div>
                <div class="class-example">transform-3d</div>
                <div class="class-example">backface-hidden</div>
            </div>
        </div>
        
        <div class="intro" style="margin-top: 30px;">
            <h2>📚 Quick Tips</h2>
            <ul>
                <li>Use <code>Ctrl+Space</code> to trigger autocomplete manually</li>
                <li>Hover over class names to see CSS preview</li>
                <li>Use <code>Ctrl+Shift+W</code> to generate CSS</li>
                <li>All animations support hover: <code>hover:animate-rubber-band</code></li>
            </ul>
        </div>
    </body>
    </html>`;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map