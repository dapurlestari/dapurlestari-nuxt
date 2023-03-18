<template>
  <section class="flex justify-center mt-20">
    <div class="p-7 text-slate-900 text-center justify-center">
      <h1 class="font-bold text-3xl text-primary-500">
        {{ hotProducts.title }}
      </h1>
      <p class="tracking-wide my-3 mx-auto max-w-3xl">
        {{ hotProducts.caption }}
      </p>
      <a
        href="#"
        class="inline-block mt-10 rounded-md border border-transparent bg-secondary-500 py-3 px-8 text-center font-medium text-white hover:bg-secondary-600">
        Belanja Sekarang
      </a>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const { hotProducts } = defineProps(["hotProducts"]);
const hotProductsSliced1 = hotProducts.products.data.slice(0, 2);
const hotProductsSliced2 = hotProducts.products.data.slice(2, 5);
const hotProductsSliced3 = hotProducts.products.data.slice(5, 7);
const baseURL = config.public.baseURL;
console.log("prodID");
console.log(hotProductsSliced1[0].id);
</script>

<style scoped></style>
