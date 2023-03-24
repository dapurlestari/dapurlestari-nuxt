<template>
  <div class="flex flex-col container mx-auto px-4 pt-8 md:pt-24 min-h-screen">
    <h1 class="text-4xl font-extrabold">
      {{ faq?.title ?? "Privacy Policy" }}
    </h1>
    <article class="prose lg:prose-xl">
      <div
        v-html="$mdit.render(faq?.content)"
        class="text-sm text-gray-800"></div>
    </article>
    <article
      class="prose prose-strong:text-gray-800 prose-p:text-gray-600 prose-p:my-1 prose-a:text-blue-600 prose-gray lg:prose-xl space-y-6">
      <div
        v-for="(item, index) in faqList"
        class="faq flex flex-col"
        :key="index">
        <h6
          class="text-base my-0 py-0 text-gray-700 align-middle items-center flex space-x-3">
          <i class="lni lni-question-circle"></i>
          <span class="md:pt-0.5 font-bold">
            {{ item?.attributes.question }}
          </span>
        </h6>
        <div
          v-html="$mdit.render(item?.attributes.answer)"
          class="text-sm text-gray-700"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/faq");
const faqPage = data.value.data.attributes;
const faq = faqPage.contentful;
const url = "https://dapurlestari.id/faq";
const image = config.public.baseURL + faqPage.seo.metaImage.data.attributes.url;

const { data: response } = await useFetch("/api/faq/get");
const faqList = response.value.data;

useHead({
  title: faqPage.seo.metaTitle,
  meta: [
    { name: "title", content: faqPage.seo.metaTitle },
    { name: "description", content: faqPage.seo.metaDescription },
    { name: "keywords", content: faqPage.seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: faqPage.seo.metaTitle },
    {
      property: "og:description",
      content: faqPage.seo.metaDescription,
    },
    {
      property: "og:image",
      content: image,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: faqPage.seo.metaTitle,
    },
    {
      name: "twitter:description",
      content: faqPage.seo.metaDescription,
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
