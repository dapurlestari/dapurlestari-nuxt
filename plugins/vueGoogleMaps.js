import VueGoogleMaps from "@fawmi/vue-google-maps";

// bug fixed: https://github.com/fawmi/vue-google-maps/issues/152#issuecomment-1264630070
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: config.GOOGLE_MAPS_API_KEY,
    },
  });
});
