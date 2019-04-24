import pkg from './package'
const axios = require('axios')

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
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
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/usr8yii.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~plugins/vue-js-toggle-button',
    ssr: false
  }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    [
      'nuxt-fontawesome', {
        component: 'fa',
        imports: [{
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          },
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          }
        ]
      }
    ]
  ],

  loading: false,

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  axios: {
    baseURL: process.env.BASE_URL || 'https://ota-course-framework.firebaseio.com'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://ota-course-framework.firebaseio.com',
    fbAPIKey: 'AIzaSyBirEEfUTCVTvOaYG7HHhol-YGSYzlm3sw'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
  /*
  generate: {
    routes: function() {
      const routes = []

      return axios.get('https://ota-course-framework.firebaseio.com/courses.json')
        .then(cres => {
          const courses = cres.data;

          for (const p in courses) {

            routes.push({
              route: '/' + courses[p]['_id'],
              payload: {
                postData: courses[p]
              }
            })

            return axios.get('https://ota-course-framework.firebaseio.com/lessons.json')
              .then(lessons => {
                for (const k in lessons.data) {

                  if (courses[p].lessons.includes(lessons.data[k]['_id'])) {
                    routes.push({
                      route: '/' + courses[p]['_id'] + '/' + lessons.data[k]['_id'],
                      payload: {
                        postData: lessons.data[k]
                      }
                    })
                  }
                }

                return routes
              })
          }

        })
    }

}
  */
}