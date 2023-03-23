<template>
  <section class="flex justify-center">
    <div class="pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8 text-center justify-center">
      <h2 class="font-bold text-3xl text-primary-500">
        {{ newProducts.title }}
      </h2>
      <p class="tracking-wide my-3 mx-auto text-slate-800">
        {{ newProducts.caption }}
      </p>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mt-10 mx-0 md:mx-20">
        <ProductCard
          v-for="product in newProducts.products.data"
          :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { newProducts } = defineProps(["newProducts"]);
</script>
