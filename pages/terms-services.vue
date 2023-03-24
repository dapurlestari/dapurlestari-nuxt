<template>
  <div class="flex flex-col container mx-auto px-4 pt-8 md:pt-24 min-h-screen">
    <h1 class="text-4xl font-extrabold">
      {{ termsServices?.title ?? "Terms Services" }}
    </h1>
    <article class="prose lg:prose-xl">
      <div
        v-html="$mdit.render(termsServices?.content)"
        class="text-sm text-gray-800"></div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/termsServices");
const termsServicesPage = data.value.data.attributes;
const termsServices = termsServicesPage.contentful;
const url = "https://dapurlestari.id/terms-service";
const image =
  config.public.baseURL + termsServicesPage.seo.metaImage.data.attributes.url;
useHead({
  title: termsServicesPage.seo.metaTitle,
  meta: [
    { name: "title", content: termsServicesPage.seo.metaTitle },
    { name: "description", content: termsServicesPage.seo.metaDescription },
    { name: "keywords", content: termsServicesPage.seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: termsServicesPage.seo.metaTitle },
    {
      property: "og:description",
      content: termsServicesPage.seo.metaDescription,
    },
    {
      property: "og:image",
      content: image,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: termsServicesPage.seo.metaTitle,
    },
    {
      name: "twitter:description",
      content: termsServicesPage.seo.metaDescription,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: url,
    },
  ],
});
</script>
