<template>
  <div class="flex container mx-auto px-4 pt-8 md:pt-24 min-h-screen">
    <article class="prose lg:prose-xl">
      <h1>{{ privacyPolicy?.title ?? "Privacy Policy" }}</h1>
      <div
        v-html="$mdit.render(privacyPolicy?.content ?? 'Loading...')"
        class="text-sm text-gray-800"></div>
    </article>
  </div>
</template>

<script setup>
const { $myConfig, $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/privacyPolicy");
const privacyPolicy = data.value.data.attributes.contentful;
useHead({
  title: $myConfig.seo.metaTitle,
  meta: [
    { name: "description", content: $myConfig.seo.metaDescription },
    { name: "keywords", content: $myConfig.seo.keywords },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://dapurlestari.id/privacy-policy`,
    },
  ],
});
</script>
