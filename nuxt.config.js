export default {
 
  ssr: false,


  head: {
    title: 'VNRevolution',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap' }
    ]
  },

  
  css: [
    "@/assets/css/app.css"
  ],
 
  plugins: [
  ],

  
  components: true,

  
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment'
  ],

 
  modules: [
    '@nuxt/content'
  ],

  
  build: {
  },
  content: {
    nestedProperties: ['author.name']
  },
}
