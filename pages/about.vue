<template>
  <div class="flex flex-col container mx-auto min-h-screen px-4 pt-8 md:pt-24">
    <h1 class="text-4xl font-extrabold">
      {{ about?.title ?? "About" }}
    </h1>
    <article class="prose lg:prose-xl">
      <div
        v-html="$mdit.render(about?.content ?? 'Loading...')"
        class="text-sm text-gray-800"></div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/about");
const aboutPage = data.value.data.attributes;
const about = aboutPage.contentful;
const url = "https://dapurlestari.id/about";
const image =
  config.public.baseURL + aboutPage.seo.metaImage.data.attributes.url;
useHead({
  title: aboutPage.seo.metaTitle,
  meta: [
    { name: "title", content: aboutPage.seo.metaTitle },
    { name: "description", content: aboutPage.seo.metaDescription },
    { name: "keywords", content: aboutPage.seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: aboutPage.seo.metaTitle },
    { property: "og:description", content: aboutPage.seo.metaDescription },
    {
      property: "og:image",
      content: image,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: aboutPage.seo.metaTitle,
    },
    { name: "twitter:description", content: aboutPage.seo.metaDescription },
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
