<template>
  <article class="bg-base-200">
    <div class="max-w-screen-lg mx-auto pt-20 pb-8">
      <div class="mb-4 md:mb-0 w-full lg:w-3/4 mx-auto relative">
        <div class="px-4 lg:px-0">
          <h2 class="text-4xl font-semibold">{{ post.attributes.title }}</h2>
        </div>

        <!-- The button to open modal -->
        <label :for="`modal-${post.id}`" class="">
          <img
            :src="firstImageURL"
            :title="post.attributes.title"
            class="w-full h-72 lg:h-96 mt-3 mx-5 md:mx-0 object-cover lg:rounded-lg cursor-pointer" />
        </label>
        <!-- <ShareButtons :title="post.data.title.iv" /> -->
        <div class="divider px-4 lg:px-0"></div>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" :id="`modal-${post.id}`" class="modal-toggle" />
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
        <article
          v-if="post.attributes.content"
          class="prose lg:prose-xl mx-5 md:mx-0">
          <div v-html="$mdit.render(post.attributes.content)" class=""></div>
        </article>
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
