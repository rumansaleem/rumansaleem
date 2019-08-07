const isProduction = process.env.NODE_ENV === 'production';

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

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

module.exports = {
  siteName: 'Ruman Saleem',
  titleTemlate: '%s | Ruman Saleem',

  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
    ],
  },
  
  chainWebpack(config, { isServer }) {

    config.module.rules.delete('svg');
    
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader');
  },
  
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-143625006-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/about/index.md',
        typeName: 'About',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/*/index.md',
        typeName: 'BlogPost',
        route: '/blog/:slug',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/work/*/index.md',
        typeName: 'Portfolio',
        route: '/work/:slug',
      }
    },
  ],
  transformers: {
    remark: {
      plugins: [
        'remark-attr',
        (options) => {
          return tree => {
            visit(tree, 'code', (node) => {
              let outputValue = (node.lang == 'html' && node.meta == 'output') ? 
                `<div class="html-code-output">${node.value}</div>`: 
                null;
              let code = highlight(node);
              node.type = 'html';
              node.value = outputValue != null ? `<div class="code-with-output">${code} ${outputValue}</div>` : code;
            });
          };
        }
      ]
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('postcss-nested'),
          require('autoprefixer'),
          ...isProduction ? [purgecss] : [],
        ],
      },
    },
  }
}
