<template>
  <div>
    <div
      class="hero min-h-screen"
      :style="{ 'background-image': 'url(' + firstSlideshowURL + ')' }">
      <div class="hero-overlay bg-opacity-80"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md space-y-8">
          <img
            :src="$logo"
            alt=""
            class="w-36 inline-block bg-white p-7 mask mask-circle" />
          <p class="mb-10 text-white text-xl">
            {{ firstSlideshow.subtitle }}
          </p>
          <button
            type="button"
            class="btn bg-secondary-500 hover:bg-secondary-600 border-transparent hover:border-transparent px-14 text-black font-bold text-lg">
            Beli Yuk!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $logo } = useNuxtApp();
const config = useRuntimeConfig();
const { firstSlideshow } = defineProps(["firstSlideshow"]);
const firstSlideshowURL =
  config.public.baseURL + firstSlideshow.image.data.attributes.url;
</script>

<style scoped></style>
