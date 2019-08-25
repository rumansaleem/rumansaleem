const visit = require('unist-util-visit');

function isImage(node) {
    return node.url 
        && node.value 
        && node.value.startsWith('<img');
}

function imgToHTML(node) {
    return `<img src="${node.url}" alt="${node.alt}" title="${node.title}">`;
}

function wrapImgWithFigure(node, caption) {
    return `<figure class="figure-with-caption">
        ${node.value}
        <figcaption class="caption">${caption}</caption>
    </figure>`;
}

module.exports = () => {
    return tree => {
        visit(tree, 'image', (node) => {
            if(node.title != null) {
                node.type = 'html';
                node.value = imgToHTML(node);
            }
        });

        visit(tree, 'html', (node) => {
            node.value = (isImage(node) && node.title != '')
                ? wrapImgWithFigure(node, node.title) 
                : node.value;
        });
    };
}