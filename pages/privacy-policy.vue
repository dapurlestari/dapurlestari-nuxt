<template>
  <div class="flex container mx-auto px-4 pt-8 md:pt-24 min-h-screen">
    <article class="prose lg:prose-xl">
      <h2>{{ privacyPolicy.title }}</h2>
      <div
        v-html="$mdit.render(privacyPolicy.content)"
        class="text-sm text-gray-800"></div>
    </article>
  </div>
</template>

<script setup>
const { $mdit } = useNuxtApp();
const { data } = await useFetch("/api/pages/privacyPolicy");
const privacyPolicy = data.value.data.attributes.contentful;
</script>

<style scoped></style>
