<template>
  <div class="flex container mx-auto min-h-screen px-4 pt-8 md:pt-24">
    <article class="prose lg:prose-xl">
      <h2>{{ about?.title ?? "About" }}</h2>
      <div
        v-html="$mdit.render(about?.content ?? 'Loading...')"
        class="text-sm text-gray-800"></div>
    </article>
  </div>
</template>

<script setup>
const { $myConfig, $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/about");
const about = data.value.data.attributes.contentful;
useHead({
  title: $myConfig.seo.metaTitle,
  meta: [
    { name: "description", content: $myConfig.seo.metaDescription },
    { name: "keywords", content: $myConfig.seo.keywords },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://dapurlestari.id/about`,
    },
  ],
});
</script>

<style scoped></style>
