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
        class="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-5 mt-10 mx-0 md:mx-20">
        <div
          v-for="product in newProducts.products.data"
          class="group space-y-2">
          <div class="relative">
            <div class="overflow-hidden rounded-2xl bg-gray-200">
              <img
                :src="
                  baseURL + product.attributes.images.data[0].attributes.url
                "
                :alt="product.attributes.name"
                class="aspect-1 object-cover object-center group-hover:opacity-75" />
            </div>
            <div class="absolute bottom-0 left-0 p-4 w-full">
              <h3
                class="text-xl font-semibold text-white line-clamp-1 drop-shadow-[2px_4px_7px_rgba(0,0,0,0.7)]">
                {{ product.attributes.name }}
              </h3>
              <p
                class="mt-1 text-lg text-white line-clamp-1 drop-shadow-[2px_4px_7px_rgba(0,0,0,0.7)]">
                {{ $formatPrice(product.attributes.price) }}
              </p>
            </div>
          </div>
          <NuxtLink
            :to="'/store/' + product.attributes.slug"
            class="btn rounded-xl bg-secondary-400 hover:bg-secondary-500 border-transparent hover:border-transparent px-5 text-primary-800 font-bold w-full">
            Beli Sekarang
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $formatPrice } = useNuxtApp();
const config = useRuntimeConfig();
const { newProducts } = defineProps(["newProducts"]);
const baseURL = config.public.baseURL;
</script>

<style scoped></style>
