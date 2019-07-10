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
        '@gridsome/remark-prismjs',
        'remark-attr',
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
