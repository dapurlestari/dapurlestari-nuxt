// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  // build: { transpile: ["@fawmi/vue-google-maps"] },
  build: {
    transpile: [
      '@fawmi/vue-google-maps', 
      '@googlemaps/markerclusterer',
      "fast-deep-equal",
    ],
  },
  app: {
    head: {
      title: 'Dapur Lestari',
      meta: [
        {name: 'description', content: 'Dapur Lestari cookies'}
      ],
      link: [
        { rel:"stylesheet", type:"text/css", href:'https://cdn.lineicons.com/4.0/lineicons.css' }
      ],
      /* script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places&callback=Function.prototype`
        }
      ] */
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: process.env.NUXT_API_SECRET,
    // Keys within public are also exposed client-side
    public: {
      baseURL: process.env.NUXT_BASE_URL,
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      mapAPIKey: process.env.NUXT_MAP_API_KEY,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }
  }

})
