import VueGtag, { trackRouter } from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-K2LE81NNJZ",
    },
  });
  trackRouter(useRouter());
});
