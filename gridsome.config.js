// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
  
module.exports = {
  siteName: 'Ruman Saleem',
  titleTemlate: '%s | Ruman Saleem',

  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
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
          require('autoprefixer')
        ],
      },
    },
  }
}
