<template>
  <div class="group space-y-2">
    <div class="relative">
      <div class="overflow-hidden rounded-2xl bg-gray-200 shadow">
        <NuxtLink :to="`/store/${productAttr.slug}`">
          <img
            :src="imageURL"
            :alt="productAttr.name"
            class="aspect-1 sm:aspect-2 md:aspect-1 object-cover object-center group-hover:opacity-75 w-full shadow-black shadow-lg" />
        </NuxtLink>
      </div>
    </div>
    <div class="w-full rounded-b-2xl text-center">
      <h3 class="text-lg font-bold text-gray-900 line-clamp-1">
        {{ productAttr.name }}
      </h3>
      <p class="mt-1 font-semibold text-gray-600 line-clamp-1">
        {{ $formatPrice(productAttr.price) }}
      </p>
    </div>
    <NuxtLink
      :to="`/store/${productAttr.slug}`"
      class="btn btn-primary rounded-xl text-white text-base bg-secondary-500 hover:bg-secondary-600 border-transparent hover:border-transparent px-5 font-semibold w-full capitalize shadow">
      Beli Sekarang
    </NuxtLink>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { product } = defineProps(["product"]);
let productAttr = product.attributes;
const firstImage = productAttr.images.data[0].attributes;
const imageURL = config.public.baseURL + firstImage.url;
</script>
