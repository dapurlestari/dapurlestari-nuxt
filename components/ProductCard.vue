<template>
  <div class="group space-y-2">
    <div class="relative">
      <div class="overflow-hidden rounded-2xl bg-gray-200">
        <NuxtLink :to="`/store/${productAttr.slug}`">
          <img
            :src="imageURL"
            :alt="productAttr.name"
            class="aspect-1 sm:aspect-2 md:aspect-1 object-cover object-center group-hover:opacity-75 w-full" />
        </NuxtLink>
      </div>
      <div
        class="absolute bottom-0 left-0 p-4 w-full rounded-b-2xl bg-gradient-to-t from-secondary-400 to-transparent drop-shadow-lg">
        <h3
          class="text-lg font-bold text-white line-clamp-1 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]">
          {{ productAttr.name }}
        </h3>
        <p
          class="mt-1 font-semibold text-white line-clamp-1 drop-shadow-[0px_0px_2px_rgba(0,0,0,0.5)]">
          {{ $formatPrice(productAttr.price) }}
        </p>
      </div>
    </div>
    <NuxtLink
      :to="`/store/${productAttr.slug}`"
      class="btn btn-primary rounded-lg text-secondary-900 bg-secondary-400 hover:bg-secondary-500 border-transparent hover:border-transparent px-5 font-bold w-full capitalize drop-shadow-lg">
      Beli Sekarang
    </NuxtLink>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { product } = defineProps(["product"]);
let productAttr = product.attributes;
const firstImage = productAttr.images.data[0].attributes;
const imageURL =
  config.public.baseURL + (firstImage.formats.medium ?? firstImage).url;
</script>