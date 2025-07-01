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
exports.WindFlowHoverProvider = void 0;
const vscode = __importStar(require("vscode"));
const classDatabase_1 = require("../data/classDatabase");
class WindFlowHoverProvider {
    constructor() {
        this.classDatabase = new classDatabase_1.WindFlowClassDatabase();
    }
    provideHover(document, position, token) {
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
    getRelatedClasses(classInfo) {
        const related = [];
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
            }
            else if (classInfo.name.startsWith('bg-')) {
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
exports.WindFlowHoverProvider = WindFlowHoverProvider;
//# sourceMappingURL=hoverProvider.js.map