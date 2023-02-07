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
        { rel:"stylesheet", type:"text/css", href:'https://cdn.lineicons.com/4.0/lineicons.css' }
      ]
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: process.env.NUXT_API_SECRET,
    // Keys within public are also exposed client-side
    public: {
      baseURL: process.env.NUXT_BASE_URL,
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  }

})
