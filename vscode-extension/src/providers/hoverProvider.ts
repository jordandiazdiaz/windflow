import * as vscode from 'vscode';
import { WindFlowClassDatabase } from '../data/classDatabase';

export class WindFlowHoverProvider implements vscode.HoverProvider {
    private classDatabase: WindFlowClassDatabase;

    constructor() {
        this.classDatabase = new WindFlowClassDatabase();
    }

    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        
        const range = document.getWordRangeAtPosition(position, /[\w-]+/);
        if (!range) {
            return null;
        }

        const word = document.getText(range);
        const classInfo = this.classDatabase.getClassByName(word);
        
        if (!classInfo) {
            return null;
        }

        const config = vscode.workspace.getConfiguration('windflow');
        const includePreview = config.get('includePreview', true);

        const markdown = new vscode.MarkdownString();
        
        // Title
        markdown.appendMarkdown(`### ${classInfo.name}\n\n`);
        
        // Description
        markdown.appendMarkdown(`**${classInfo.description}**\n\n`);
        
        // Category badge
        markdown.appendMarkdown(`*Category: ${classInfo.category}*\n\n`);
        
        // CSS code
        markdown.appendCodeblock(classInfo.css, 'css');
        
        if (includePreview) {
            // Visual preview for certain classes
            if (classInfo.category === 'colors' && classInfo.color) {
                markdown.appendMarkdown(`\n**Color:** `);
                markdown.appendMarkdown(`<span style="background-color: ${classInfo.color}; color: white; padding: 2px 6px; border-radius: 3px;">${classInfo.color}</span>\n\n`);
            }
            
            if (classInfo.category === 'animations') {
                markdown.appendMarkdown(`\n*💡 Tip: Animations can be combined with hover: prefix for interactive effects*\n\n`);
            }
        }
        
        // Example
        markdown.appendMarkdown(`**Example:**\n`);
        markdown.appendCodeblock(classInfo.example, 'html');
        
        // Related classes
        const relatedClasses = this.getRelatedClasses(classInfo);
        if (relatedClasses.length > 0) {
            markdown.appendMarkdown(`\n**Related classes:** ${relatedClasses.join(', ')}\n`);
        }

        markdown.isTrusted = true;
        markdown.supportHtml = true;

        return new vscode.Hover(markdown, range);
    }

    private getRelatedClasses(classInfo: any): string[] {
        const related: string[] = [];
        
        // For animations, suggest hover variants
        if (classInfo.category === 'animations' && classInfo.name.startsWith('animate-')) {
            const baseName = classInfo.name.replace('animate-', '');
            related.push(`hover:animate-${baseName}`);
        }
        
        // For colors, suggest different properties
        if (classInfo.category === 'colors') {
            if (classInfo.name.startsWith('text-')) {
                const colorPart = classInfo.name.replace('text-', '');
                related.push(`bg-${colorPart}`, `border-${colorPart}`);
            } else if (classInfo.name.startsWith('bg-')) {
                const colorPart = classInfo.name.replace('bg-', '');
                related.push(`text-${colorPart}`, `border-${colorPart}`);
            }
        }
        
        // For themes, suggest theme utilities
        if (classInfo.category === 'themes' && classInfo.name.startsWith('theme-')) {
            related.push('text-theme-primary', 'bg-theme-surface', 'border-theme-border');
        }
        
        return related.slice(0, 3); // Limit to 3 related classes
    }
}