<template>
  <div class="flex flex-col container mx-auto px-4 pt-8 md:pt-24 min-h-screen">
    <h1 class="text-4xl font-extrabold">
      {{ privacyPolicy?.title ?? "Privacy Policy" }}
    </h1>
    <article class="prose lg:prose-xl">
      <div
        v-html="$mdit.render(privacyPolicy?.content)"
        class="text-sm text-gray-800"></div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/privacyPolicy");
const privacyPolicyPage = data.value.data.attributes;
const privacyPolicy = privacyPolicyPage.contentful;
const url = "https://dapurlestari.id/privacy-policy";
const image =
  config.public.baseURL + privacyPolicyPage.seo.metaImage.data.attributes.url;
useHead({
  title: privacyPolicyPage.seo.metaTitle,
  meta: [
    { name: "title", content: privacyPolicyPage.seo.metaTitle },
    { name: "description", content: privacyPolicyPage.seo.metaDescription },
    { name: "keywords", content: privacyPolicyPage.seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: privacyPolicyPage.seo.metaTitle },
    {
      property: "og:description",
      content: privacyPolicyPage.seo.metaDescription,
    },
    {
      property: "og:image",
      content: image,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: privacyPolicyPage.seo.metaTitle,
    },
    {
      name: "twitter:description",
      content: privacyPolicyPage.seo.metaDescription,
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
