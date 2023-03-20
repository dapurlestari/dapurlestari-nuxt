<template>
  <section class="flex justify-center mt-20">
    <div class="p-7 text-slate-900 text-center justify-center">
      <h2 class="font-bold text-3xl text-primary-500">
        {{ recommendation.title }}
      </h2>
      <p class="tracking-wide my-3 mx-auto max-w-3xl">
        {{ recommendation.caption }}
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 mx-0 md:mx-20">
        <div
          v-for="item in recommendations"
          :key="item.id"
          class="bg-gradient-to-br from-tan-100 to-tan-100 rounded-[18px] p-5">
          <i :class="'lni ' + item.icon + ' text-4xl text-primary-500'"></i>
          <h3 class="font-bold text-secondary-500 tracking-wide text-xl mt-3">
            {{ item.title }}
          </h3>
          <p class="font-light text-l">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const { recommendation, recommendations } = defineProps([
  "recommendation",
  "recommendations",
]);
</script>

<style scoped></style>
