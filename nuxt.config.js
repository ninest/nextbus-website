const path = require('path')

// markdown configration
import Mode from 'frontmatter-markdown-loader/mode'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  typographer: true
})

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/globalComponents.js',
    '~/plugins/siteConfig.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources',],
  styleResources: {
    scss: [
      'assets/styles/variables.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      // for reading markdown files
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          // include: path.resolve(__dirname, 'content'),
          options: {
            mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT, Mode.BODY],
            vue: {
              // root: "dynamicMarkdown"
            },
            markdown(body) {
              return md.render(body)
            }
          }
        },

        {
          test: /\.ya?ml$/,
          type: 'json',
          use: 'yaml-loader'
        }
      )
    }
  },

  generate: {
    dir: 'dist',
    routes: ['/']
  }
}
