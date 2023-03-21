<template>
  <div
    class="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 pt-8 md:pt-24">
    <!-- Title -->
    <section>
      <h1 class="text-3xl font-bold text-gray-900">
        {{ productPage.contentful.title }}
      </h1>
      <p class="text-black font-normal">
        {{ productPage.contentful.subtitle }}
      </p>
      <!-- Ads Banner -->
      <div class="grid grid-rows-6 grid-flow-col gap-4 h-64 mt-6">
        <!-- <div class="row-span-3 bg-orange-700"></div> -->
        <div
          v-for="banner in banners"
          :key="banner.id"
          :class="`${banner.style} bg-gray-200 rounded-lg relative h-full`">
          <img
            :src="baseURL + banner.image.data.attributes.url"
            :alt="banner.title"
            class="h-full w-full object-cover object-center rounded-lg" />
          <span
            class="absolute bottom-2 right-3 text-white text-sm drop-shadow-[2px_4px_7px_rgba(0,0,0,0.7)]">
            Ads
          </span>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section class="mt-5">
      <div class="flex">
        <div class="flex-1 w-14 h-14 relative">
          <input
            type="text"
            name=""
            id=""
            placeholder="Kamu mau cari apa..."
            class="w-full h-full p-3 bg-gray-100 border border-gray-200 caret-secondary-500 text-black rounded-md" />
          <i
            class="lni lni-search-alt absolute right-0 top-0 text-2xl py-3 px-6"></i>
        </div>
      </div>
    </section>

    <div
      class="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-5">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product" />
    </div>

    <section class="flex justify-center mt-20 mb-8">
      <div class="btn-group grid grid-cols-2">
        <button type="button" class="btn btn-outline">Previous page</button>
        <button type="button" class="btn btn-outline">Next</button>
      </div>
    </section>
  </div>
</template>

<script setup>
var banners = [
  {
    id: 0,
    title: "",
    style: "row-span-6 col-span-3",
  },
];

const config = useRuntimeConfig();
const baseURL = config.public.baseURL;

const { data: page } = await useFetch("/api/pages/product");
const productPage = page.value.data.attributes;
banners = productPage.ads_banners;
// console.log(banners);

const { data: response } = await useFetch("/api/products/get");
const products = response.value.data;
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>
