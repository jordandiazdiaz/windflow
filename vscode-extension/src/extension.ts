import * as vscode from 'vscode';
import { WindFlowCompletionProvider } from './providers/completionProvider';
import { WindFlowHoverProvider } from './providers/hoverProvider';
import { WindFlowDefinitionProvider } from './providers/definitionProvider';
import { WindFlowColorProvider } from './providers/colorProvider';
import { WindFlowDiagnosticsProvider } from './providers/diagnosticsProvider';
import { WindFlowClassExtractor } from './utils/classExtractor';
import { WindFlowConfigWatcher } from './utils/configWatcher';

export function activate(context: vscode.ExtensionContext) {
    console.log('WindFlow IntelliSense is now active!');

    const config = vscode.workspace.getConfiguration('windflow');
    
    if (!config.get('enable')) {
        return;
    }

    // Initialize providers
    const completionProvider = new WindFlowCompletionProvider();
    const hoverProvider = new WindFlowHoverProvider();
    const definitionProvider = new WindFlowDefinitionProvider();
    const colorProvider = new WindFlowColorProvider();
    const diagnosticsProvider = new WindFlowDiagnosticsProvider();
    const classExtractor = new WindFlowClassExtractor();
    const configWatcher = new WindFlowConfigWatcher();

    // Supported languages
    const languages = [
        'html', 'javascript', 'typescript', 
        'javascriptreact', 'typescriptreact', 
        'vue', 'svelte', 'php'
    ];

    // Register completion provider
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            languages,
            completionProvider,
            ' ', '"', "'", '`', '='
        )
    );

    // Register hover provider
    context.subscriptions.push(
        vscode.languages.registerHoverProvider(languages, hoverProvider)
    );

    // Register definition provider
    context.subscriptions.push(
        vscode.languages.registerDefinitionProvider(languages, definitionProvider)
    );

    // Register color provider
    context.subscriptions.push(
        vscode.languages.registerColorProvider(languages, colorProvider)
    );

    // Register diagnostics provider
    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(e => {
            diagnosticsProvider.updateDiagnostics(e.document);
        })
    );

    // Register commands
    context.subscriptions.push(
        vscode.commands.registerCommand('windflow.generateCSS', async () => {
            await generateCSS();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('windflow.previewTheme', async () => {
            await previewTheme();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('windflow.showDocs', async () => {
            await showDocumentation();
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('windflow.extractClasses', async () => {
            await classExtractor.extractToComponent();
        })
    );

    // Initialize config watcher
    configWatcher.initialize();

    // Status bar
    const statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right, 
        100
    );
    statusBarItem.text = "$(symbol-color) WindFlow";
    statusBarItem.tooltip = "WindFlow IntelliSense Active";
    statusBarItem.command = 'windflow.showDocs';
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);
}

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
        const panel = vscode.window.createWebviewPanel(
            'windflowThemePreview',
            `WindFlow Theme: ${selectedTheme}`,
            vscode.ViewColumn.Two,
            {
                enableScripts: true,
                localResourceRoots: [vscode.workspace.workspaceFolders![0].uri]
            }
        );
        
        panel.webview.html = getThemePreviewHTML(selectedTheme);
    }
}

function getThemePreviewHTML(theme: string): string {
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
            }
            .theme-card { 
                padding: 20px; 
                border-radius: 12px; 
                margin: 10px 0;
                border: 1px solid #e5e7eb;
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
                background: #6366f1;
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
            h1 { color: #1f2937; margin-bottom: 20px; }
            h2 { color: #4b5563; margin-top: 30px; }
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
            <code style="background: #f3f4f6; padding: 15px; border-radius: 8px; display: block; margin-top: 10px;">
&lt;div class="theme-${theme}"&gt;<br>
&nbsp;&nbsp;&lt;h1 class="text-theme-primary"&gt;Hello WindFlow!&lt;/h1&gt;<br>
&nbsp;&nbsp;&lt;div class="bg-theme-surface p-4 rounded-lg"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class="text-theme-text"&gt;Content with theme colors&lt;/p&gt;<br>
&nbsp;&nbsp;&lt;/div&gt;<br>
&lt;/div&gt;
            </code>
        </div>
        
        <script>
            // Add some interactivity
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

function getThemeColors(theme: string) {
    const themes: Record<string, any> = {
        dark: { primary: '#6366f1', secondary: '#8b5cf6', accent: '#06b6d4', background: '#0f172a' },
        cyberpunk: { primary: '#ff0080', secondary: '#00ffff', accent: '#ffff00', background: '#0a0a0a' },
        glassmorphism: { primary: '#6366f1', secondary: '#8b5cf6', accent: '#06b6d4', background: 'rgba(255,255,255,0.1)' },
        retro: { primary: '#ff6b9d', secondary: '#feca57', accent: '#48dbfb', background: '#2c2c54' },
        nature: { primary: '#22c55e', secondary: '#84cc16', accent: '#eab308', background: '#f0fdf4' },
        ocean: { primary: '#0ea5e9', secondary: '#0284c7', accent: '#06b6d4', background: '#f0f9ff' },
        monochrome: { primary: '#000000', secondary: '#404040', accent: '#808080', background: '#ffffff' },
        sunset: { primary: '#f97316', secondary: '#ea580c', accent: '#fbbf24', background: '#fffbeb' }
    };
    return themes[theme] || themes.dark;
}

async function showDocumentation() {
    const panel = vscode.window.createWebviewPanel(
        'windflowDocs',
        'WindFlow Documentation',
        vscode.ViewColumn.Two,
        { enableScripts: true }
    );
    
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
            }
            .section { margin-bottom: 30px; }
            .class-example { 
                background: #f8f9fa; 
                padding: 10px; 
                border-radius: 6px; 
                font-family: monospace;
                border-left: 4px solid #6366f1;
                margin: 10px 0;
            }
            h1 { color: #1f2937; }
            h2 { color: #4b5563; border-bottom: 2px solid #e5e7eb; padding-bottom: 5px; }
            .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        </style>
    </head>
    <body>
        <h1>🌊 WindFlow CSS Framework</h1>
        
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
            </div>
            
            <div class="section">
                <h2>🎨 Theme System</h2>
                <div class="class-example">theme-dark</div>
                <div class="class-example">theme-cyberpunk</div>
                <div class="class-example">theme-glassmorphism</div>
                <div class="class-example">theme-retro</div>
                <div class="class-example">text-theme-primary</div>
                <div class="class-example">bg-theme-surface</div>
            </div>
            
            <div class="section">
                <h2>✨ Text Effects</h2>
                <div class="class-example">animate-glow</div>
                <div class="class-example">animate-neon</div>
                <div class="class-example">text-typewriter</div>
                <div class="class-example">text-glitch</div>
            </div>
            
            <div class="section">
                <h2>⚡ Loading Components</h2>
                <div class="class-example">loading-dots</div>
                <div class="class-example">loading-bars</div>
                <div class="class-example">loading-spinner</div>
                <div class="class-example">loading-pulse-ring</div>
            </div>
        </div>
    </body>
    </html>`;
}

export function deactivate() {}