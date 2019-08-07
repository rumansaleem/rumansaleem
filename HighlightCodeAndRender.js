const visit = require('unist-util-visit');
const escapeHtml = require('escape-html');
const Prism = require('prismjs');

function highlight({ value, lang }, tag = 'pre') {
    let code = Prism.languages.hasOwnProperty(lang)
        ? Prism.highlight(value, Prism.languages[lang], lang)
        : value

    if (!lang) {
        lang = 'text'
        code = escapeHtml(code)
    }

    const className = `language-${lang}`
    const codeTag = `<code class="${className}">${code}</code>`

    return tag === 'pre'
        ? `<pre class="${className}">${codeTag}</pre>`
        : codeTag
}

module.exports = () => {
    return tree => {
        visit(tree, 'code', (node) => {
            let outputValue = (node.lang == 'html' && node.meta == 'output') ?
                `<div class="html-code-output">${node.value}</div>` :
                null;
            let code = highlight(node);
            node.type = 'html';
            node.value = outputValue != null ? `<div class="code-with-output">${code} ${outputValue}</div>` : code;
        });
    };
}