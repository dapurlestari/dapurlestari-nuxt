<template>
  <div>
    <NuxtLoadingIndicator />
    <TopNavBar />
    <BottomNavBar />
    <slot />

    <FooterSection />

    <ScrollToTop />
  </div>
</template>

<script setup>
const { $myConfig } = useNuxtApp();
const config = useRuntimeConfig();
const url = "https://dapurlestari.id";
const image =
  config.public.baseURL + $myConfig.seo.metaImage.data.attributes.url;
useHead({
  title: $myConfig.seo.metaTitle,
  meta: [
    { name: "title", content: $myConfig.seo.metaTitle },
    { name: "description", content: $myConfig.seo.metaDescription },
    { name: "keywords", content: $myConfig.seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: $myConfig.seo.metaTitle },
    { property: "og:description", content: $myConfig.seo.metaDescription },
    { property: "og:image", content: image },
    // { property: "fb:app_id", content: fbAppID },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    { name: "twitter:title", content: $myConfig.seo.metaTitle },
    { name: "twitter:description", content: $myConfig.seo.metaDescription },
    { name: "twitter:image", content: image },
  ],
});
</script>
