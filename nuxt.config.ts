// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Dapur Lestari',
      meta: [
        {name: 'description', content: 'Dapur Lestari cookies'}
      ]
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '3e5fe9be1d245a3c0983bba1e79e49eaf1432abd4ee55456a8b1479d7899ef28eb312ec51f9bfb36eb3f62cc6a40c8c57e1c4bba5fbd21f55c8cdd4547b4056dcce9cbe915ba86f76f3e0eb95cb0aee9cd1e97fc6c1a222c2a7d28a5bcf28d17d3c3e872d7bf252a281b8cb9da37c396d52887fc418c3ae1f10fe193b834e4ee',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }

})
