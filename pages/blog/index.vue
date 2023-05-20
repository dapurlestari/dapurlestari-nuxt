import { NuxtLink } from '../../.nuxt/components';
<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.id"
          class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.attributes.created" class="text-gray-500">{{
              post.attributes.created
            }}</time>
            <a
              href="#"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"></a>
          </div>

          <div class="group relative">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <NuxtLink :to="`/blog/${post.attributes.slug}`">
                <span class="absolute inset-0" />
                {{ post.attributes.title }}
              </NuxtLink>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ post.attributes.subtitle }}
            </p>
          </div>

          <div class="relative mt-8 flex items-center gap-x-4">
            <img src="" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a href="">
                  <span class="absolute inset-0" />
                  Agil
                </a>
              </p>
              <p class="text-gray-600">Administrator</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const url = "https://dapurlestari.id/blog";

const { data: page } = await useFetch("/api/pages/product");
const productPage = page.value.data.attributes;

const { data: response } = await useFetch("/api/blog/get");
const posts = response.value.data;
const image = baseURL + productPage.seo.metaImage.data.attributes.url;
useHead({
  title: productPage.seo.metaTitle,
  meta: [
    { name: "title", content: productPage.seo.metaTitle },
    { name: "description", content: productPage.seo.metaDescription },
    { name: "keywords", content: productPage.seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: productPage.seo.metaTitle },
    { property: "og:description", content: productPage.seo.metaDescription },
    {
      property: "og:image",
      content: image,
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: productPage.seo.metaTitle,
    },
    { name: "twitter:description", content: productPage.seo.metaDescription },
    {
      name: "twitter:image",
      content: image,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://dapurlestari.id/store`,
    },
  ],
});
</script>

<style scoped></style>
