const fbAppID = "155272500410320";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  // build: { transpile: ["@fawmi/vue-google-maps"] },
  css: ["~/assets/css/fonts.css"],
  // target: "static",
  // router: {
  //   trailingSlash: false,
  // },
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.plugins.push(
          new (require("@nuxtjs/webpackmonitor"))({
            capture: true,
            target: "server",
          })
        );
      }
    },
    transpile: [
      "@fawmi/vue-google-maps",
      "@googlemaps/markerclusterer",
      "fast-deep-equal",
    ],
    terser: {
      // https://github.com/terser/terser#compress-options
      // remove console command on production
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    html: {
      // minify assets
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        preserveLineBreaks: false,
        collapseWhitespace: true,
      },
    },
  },
  cache: {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    immutable: true,

    // Cache images and fonts for 1 year
    staticAssets: {
      cacheControl: "public, max-age=31536000, immutable",
      keyPrefix: "static-assets",
      version: "1.0.0",
    },

    // Cache API responses for 5 minutes
    api: {
      cacheControl: "public, max-age=300",
      keyPrefix: "api",
      version: "1.0.0",
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Dapur Lestari",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          "http-equiv": "Cache-Control",
          content: "max-age=86400, must-revalidate",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.lineicons.com/4.0/lineicons.css",
        },
        {
          rel: "canonical",
          href: "https://dapurlestari.id",
        },
      ],
      script: [
        /* {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places&callback=Function.prototype`
        } */
        /* {
          src: "https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js",
        }, */
      ],
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
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      fbAppID: fbAppID,
    },
  },
});
