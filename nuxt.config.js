module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '牛氪',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      type: 'text/css',
      href: '//at.alicdn.com/t/font_618722_t3nlmpm7qfe6ogvi.css'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  css: ['~assets/css/normal.css', 'element-ui/lib/theme-chalk/index.css'],
  loading: {
    color: '#3B8070'
  },
  plugins: [{
    src: '~plugins/element-ui',
    ssr: false
  }],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    rules: [{
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader', 'css-loader'
        ],
        include: ['/src/', '/node_modules/element-ui/lib/']
      },

      {
        test: /\.less$/,
        loader: [
          'style-loader', 'css-loader', 'less-loader'
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      /* {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      } */
    ],
    vendor: ['element-ui']
  }
}
