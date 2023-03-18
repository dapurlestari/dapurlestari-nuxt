<template>
  <NuxtLayout name="scaffold">
    <template #title>Products</template>

    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <section>
        <h1 class="text-3xl font-bold text-gray-900">
          {{ productPage.contentful.title }}
        </h1>
        <p class="text-black font-normal">
          {{ productPage.contentful.subtitle }}
        </p>
        <div class="grid grid-rows-6 grid-flow-col gap-4 h-64 mt-6">
          <div
            v-for="banner in banners"
            :key="banner.id"
            :class="banner.style + ' bg-gray-200 rounded-lg'">
            <img
              :src="baseURL + banner.image.data.attributes.url"
              :alt="banner.title"
              class="h-full w-full object-cover object-center rounded-lg" />
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

      <section></section>

      <div
        class="w-full grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-5">
        <div v-for="product in products" :key="product.id">
          <div>
            <NuxtLink :to="'/store/' + product.attributes.slug" class="group">
              <div
                class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  :src="
                    baseURL + product.attributes.images.data[0].attributes.url
                  "
                  :alt="product.attributes.images.data[0].alternativeText"
                  class="h-60 w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 class="mt-4 text-secondary-500">
                {{ product.attributes.name }}
              </h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                {{ $formatPrice(product.attributes.price) }}
              </p>
            </NuxtLink>
          </div>
          <button
            class="rounded-lg bg-secondary-500 hover:bg-secondary-600 text-white p-2 w-full text-sm mt-2">
            Tambah ke keranjang
          </button>
        </div>
      </div>

      <section class="flex justify-center mt-20">
        <div class="btn-group grid grid-cols-2">
          <button class="btn btn-outline">Previous page</button>
          <button class="btn btn-outline">Next</button>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { $formatPrice, $placeholderImageURL } = useNuxtApp();
const config = useRuntimeConfig();
const baseURL = config.public.baseURL;
const defaultImage = $placeholderImageURL("Ads", 600, 450);

const { data: page } = await useFetch("/api/pages/product");
const productPage = page.value.data.attributes;
const banners = productPage.ads_banners;
console.log(banners);

const { data: response } = await useFetch("/api/products/get");
const products = response.value.data;
// console.log(products);
/* useHead({
      title: 'Dapur Lestari | Products',
      meta: [
        {name: 'description', content: 'Dapur Lestari Products'},
        {name: 'keywords', content: 'dapur, lestari, produk, kukis'},
      ],
    }) */
</script>

<style scoped>
p {
  font-weight: bold;
}
</style>
