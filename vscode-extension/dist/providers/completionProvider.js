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
exports.WindFlowCompletionProvider = void 0;
const vscode = __importStar(require("vscode"));
const classDatabase_1 = require("../data/classDatabase");
class WindFlowCompletionProvider {
    constructor() {
        this.classDatabase = new classDatabase_1.WindFlowClassDatabase();
    }
    provideCompletionItems(document, position, token, context) {
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
    isInClassAttribute(text) {
        // Check for class=" or className=" or class='
        const classRegex = /(?:class|className)\s*=\s*["'`]([^"'`]*)$/;
        return classRegex.test(text);
    }
    getCurrentWord(text) {
        const match = text.match(/[\w-]*$/);
        return match ? match[0] : '';
    }
    getSortText(classInfo) {
        // Prioritize common classes and exact matches
        const priority = {
            'layout': '1',
            'spacing': '2',
            'colors': '3',
            'typography': '4',
            'animations': '5',
            'effects': '6'
        };
        return (priority[classInfo.category] || '9') + classInfo.name;
    }
}
exports.WindFlowCompletionProvider = WindFlowCompletionProvider;
//# sourceMappingURL=completionProvider.js.map