<template>
  <section class="flex justify-center mt-20">
    <div class="p-7 text-slate-900 text-center justify-center">
      <h1 class="font-bold text-3xl text-primary-500">
        {{ hotProducts.title }}
      </h1>
      <p class="tracking-wide my-3 mx-auto max-w-3xl">
        {{ hotProducts.caption }}
      </p>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-5 mt-10 mx-0 md:mx-20">
        <ProductCard
          v-for="(product, index) in hotProducts.products.data"
          :key="index"
          :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { hotProducts } = defineProps(["hotProducts"]);
</script>
