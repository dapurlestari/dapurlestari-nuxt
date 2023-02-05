// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Dapur Lestari',
      meta: [
        {name: 'description', content: 'Dapur Lestari cookies'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.google.com/icons?icon.style=Rounded'}
      ]
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }

})
