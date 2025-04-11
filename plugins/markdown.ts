import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

// Configure marked to use highlight.js for code blocks
marked.setOptions({
    highlight: function (code: string, lang: string) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    }
} as Parameters<typeof marked.setOptions>[0]);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('markdown', (text: string) => {
        return marked(text);
    });
}); 