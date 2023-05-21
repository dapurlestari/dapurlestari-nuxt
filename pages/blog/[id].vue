<template>
  <article class="bg-white">
    <div class="max-w-screen-lg mx-auto pt-20 pb-8">
      <div class="px-4 lg:px-0 mb-10 md:my-10 w-full lg:w-3/4 mx-auto relative">
        <div class="flex flex-col space-y-1.5 items-start justify-start">
          <p class="text-4xl font-semibold text-gray-900">
            {{ post.attributes.title }}
          </p>
          <p class="text-xs">{{ $formatDate(post.attributes.createdAt) }}</p>
        </div>
        <div class="flex flex-col items-start justify-start w-full my-8">
          <label :for="`modal-${post.id}`" class="w-full h-72 lg:h-96">
            <img
              :src="firstImageURL"
              :title="post.attributes.title"
              class="w-full h-full flex-1 bg-gray-300 shadow rounded object-cover lg:rounded-lg cursor-pointer" />
          </label>

          <input
            type="checkbox"
            :id="`modal-${post.id}`"
            class="modal-toggle" />
          <label :for="`modal-${post.id}`" class="modal cursor-pointer">
            <div class="modal-box max-w-5xl relative">
              <label
                :for="`modal-${post.id}`"
                class="btn btn-sm btn-circle absolute right-2 top-2 text-xs">
                ✕
              </label>
              <img :src="firstImageURL" class="w-full" />
            </div>
          </label>
        </div>
        <div class="flex flex-col items-start justify-start">
          <article
            v-if="post.attributes.content"
            class="prose lg:prose-xl text-gray-800 prose-p:text-gray-900 prose-headings:text-gray-900 prose-li:text-gray-900 prose-strong:text-gray-800">
            <div v-html="$mdit.render(post.attributes.content)" class=""></div>
          </article>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const { id } = useRoute().params;
const { data, error } = await useFetch("/api/blog/" + id);
const { $mdit, $myConfig } = useNuxtApp();
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

// console.log(data == null);
if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found!" });
}
const post = data.value.data;
const seo = post.attributes.seo;
const image = post.attributes.featuredImage.data;
const url = `https://dapurlestari.id/blog/${post.attributes.slug}`;
const firstImageURL = `${baseURL}${image.attributes.url}`;

useHead({
  title: seo.metaTitle ?? post.attributes.title,
  meta: [
    { name: "title", content: seo.metaTitle ?? post.attributes.title },
    {
      name: "description",
      content: seo.metaDescription ?? post.attributes.subtitle,
    },
    { name: "keywords", content: seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: seo.metaTitle ?? post.attributes.title },
    {
      property: "og:description",
      content: seo.metaDescription ?? post.attributes.subtitle,
    },
    {
      property: "og:image",
      content: firstImageURL,
    },
    // { property: "fb:app_id", content: config.public.fbAppID },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: seo.metaTitle ?? post.attributes.title,
    },
    {
      name: "twitter:description",
      content: seo.metaDescription ?? post.attributes.subtitle,
    },
    {
      name: "twitter:image",
      content: firstImageURL,
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

<style scoped></style>
