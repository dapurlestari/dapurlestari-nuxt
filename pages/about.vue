<template>
  <div class="flex container mx-auto min-h-screen px-4 pt-8 md:pt-24">
    <article class="prose lg:prose-xl">
      <h2>{{ about.title }}</h2>
      <div
        v-html="$mdit.render(about.content)"
        class="text-sm text-gray-800"></div>
    </article>
  </div>
</template>

<script setup>
const { $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/about");
const about = data.value.data.attributes.contentful;
</script>

<style scoped></style>
