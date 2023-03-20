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
        <div
          v-for="product in newProducts.products.data"
          class="group space-y-2">
          <div class="relative">
            <div class="overflow-hidden rounded-2xl bg-gray-200">
              <img
                :src="
                  baseURL +
                  product.attributes.images.data[0].attributes.formats.medium
                    .url
                "
                :alt="product.attributes.name"
                class="aspect-1 sm:aspect-2 md:aspect-1 object-cover object-center group-hover:opacity-75 w-full" />
            </div>
            <div class="absolute bottom-0 left-0 p-4 w-full">
              <h3
                class="text-lg font-semibold text-white line-clamp-1 drop-shadow-[0px_4px_7px_rgba(0,0,0,0.85)]">
                {{ product.attributes.name }}
              </h3>
              <p
                class="mt-1 text-white line-clamp-1 drop-shadow-[0px_2px_7px_rgba(0,0,0,1)]">
                {{ $formatPrice(product.attributes.price) }}
              </p>
            </div>
          </div>
          <NuxtLink
            :to="`/store/${product.attributes.slug}`"
            class="btn btn-primary rounded-lg text-white bg-secondary-500 hover:bg-secondary-600 border-transparent hover:border-transparent px-5 font-bold w-full capitalize">
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
