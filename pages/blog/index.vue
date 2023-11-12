import { NuxtLink } from '../../.nuxt/components';
<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ blogPage.contentful.title }}
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          {{ blogPage.contentful.subtitle }}
        </p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div
          v-for="post in posts"
          :key="post.id"
          class="space-y-2.5 items-start justify-start">
          <NuxtLink
            :to="`/blog/${post.attributes.slug}`"
            class="w-full h-3/4 bg-gray-300 rounded">
            <img
              :src="`${baseURL}${post.attributes.featuredImage.data.attributes.url}`"
              :alt="post.attributes.title"
              class="rounded" />
          </NuxtLink>
          <div class="flex flex-col space-y-1.5 items-start justify-start px-1">
            <h1 class="w-full text-lg font-bold">
              <NuxtLink :to="`/blog/${post.attributes.slug}`">
                {{ post.attributes.title }}
              </NuxtLink>
            </h1>
            <p class="w-full text-sm">
              {{ $formatDate(post.attributes.createdAt) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const url = "https://dapurlestari.id/blog";

const { data: page } = await useFetch("/api/pages/blog");
const blogPage = page.value.data.attributes;

const { data: response } = await useFetch("/api/blog/get");
const posts = response.value.data;
const image = baseURL + blogPage.seo.metaImage.data.attributes.url;
useHead({
  title: blogPage.seo.metaTitle,
  meta: [
    { name: "title", content: blogPage.seo.metaTitle },
    { name: "description", content: blogPage.seo.metaDescription },
    { name: "keywords", content: blogPage.seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: blogPage.seo.metaTitle },
    { property: "og:description", content: blogPage.seo.metaDescription },
    {
      property: "og:image",
      content: image,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: blogPage.seo.metaTitle,
    },
    { name: "twitter:description", content: blogPage.seo.metaDescription },
    {
      name: "twitter:image",
      content: image,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://dapurlestari.id/blog`,
    },
  ],
});
</script>

<style scoped></style>
