import * as vscode from 'vscode';
import { WindFlowClassDatabase } from '../data/classDatabase';

export class WindFlowCompletionProvider implements vscode.CompletionItemProvider {
    private classDatabase: WindFlowClassDatabase;

    constructor() {
        this.classDatabase = new WindFlowClassDatabase();
    }

    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
        
        const lineText = document.lineAt(position).text;
        const beforeCursor = lineText.substring(0, position.character);
        
        // Check if we're inside a class attribute
        if (!this.isInClassAttribute(beforeCursor)) {
            return [];
        }

        const currentWord = this.getCurrentWord(beforeCursor);
        const suggestions = this.classDatabase.search(currentWord);

        return suggestions.map(classInfo => {
            const item = new vscode.CompletionItem(classInfo.name, vscode.CompletionItemKind.Class);
            
            item.detail = classInfo.category;
            item.documentation = new vscode.MarkdownString()
                .appendCodeblock(classInfo.css, 'css')
                .appendMarkdown(`\n**Description:** ${classInfo.description}\n\n`)
                .appendMarkdown(`**Example:**\n\`\`\`html\n${classInfo.example}\n\`\`\``);
            
            item.insertText = classInfo.name;
            item.sortText = this.getSortText(classInfo);
            
            // Add color preview for color-related classes
            if (classInfo.category === 'colors' && classInfo.color) {
                item.kind = vscode.CompletionItemKind.Color;
            }
            
            return item;
        });
    }

    private isInClassAttribute(text: string): boolean {
        // Check for class=" or className=" or class='
        const classRegex = /(?:class|className)\s*=\s*["'`]([^"'`]*)$/;
        return classRegex.test(text);
    }

    private getCurrentWord(text: string): string {
        const match = text.match(/[\w-]*$/);
        return match ? match[0] : '';
    }

    private getSortText(classInfo: any): string {
        // Prioritize common classes and exact matches
        const priority = {
            'layout': '1',
            'spacing': '2',
            'colors': '3',
            'typography': '4',
            'animations': '5',
            'effects': '6'
        };
        
        return (priority[classInfo.category as keyof typeof priority] || '9') + classInfo.name;
    }
}