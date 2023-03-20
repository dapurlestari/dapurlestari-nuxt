<template>
  <div class="bg-white pt-8 md:pt-24">
    <!-- Breadcrumb -->
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center mx-1">
            <NuxtLink
              to="/store"
              class="mr-2 text-sm font-medium text-gray-900">
              Products
            </NuxtLink>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li class="text-sm">
          <a
            href="#"
            aria-current="page"
            class="font-medium text-gray-500 hover:text-gray-600">
            {{ product.attributes.name }}
          </a>
        </li>
      </ol>
    </nav>

    <div class="images mt-8 mx-4">
      <div class="carousel w-full">
        <div
          v-for="(image, index) in images"
          :key="index"
          :id="`item${image.id}`"
          class="carousel-item w-full max-h-[400px]">
          <label :for="`modal${image.id}`" class="w-full">
            <img
              class="w-full h-full object-cover rounded-box"
              :src="baseURL + image.attributes.url"
              :alt="`${image.attributes.alternativeText}`" />
          </label>
          <input
            type="checkbox"
            :id="`modal${image.id}`"
            class="modal-toggle" />
          <label :for="`modal${image.id}`" class="modal cursor-pointer">
            <label class="modal-box max-w-5xl relative" for="">
              <label
                :for="`modal${image.id}`"
                class="btn btn-xs btn-circle absolute right-2 top-2 p-0 text-sm">
                ✕
              </label>
              <img
                class="w-full object-cover rounded-box"
                :src="baseURL + image.attributes.url"
                :alt="`${image.attributes.alternativeText}`" />
            </label>
          </label>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a
          v-for="(image, index) in images"
          :key="index"
          :href="`#item${image.id}`"
          class="btn btn-square btn-outline btn-sm p-0 text-xs">
          {{ index + 1 }}
        </a>
      </div>
      <!-- <div class="carousel w-full px-4 mt-8">
        <div
          v-for="(image, index) in images"
          :key="index"
          :id="`item${image.id}`"
          class="carousel-item w-full h-[400px]">
          <label :for="`modal${image.id}`" class="">
            <img
              class="w-full h-full object-cover rounded-box"
              :src="baseURL + image.attributes.url"
              :alt="`${image.attributes.alternativeText}`" />
          </label>
          <input
            type="checkbox"
            :id="`modal${image.id}`"
            class="modal-toggle" />
          <label :for="`modal${image.id}`" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
              <label
                :for="`modal${image.id}`"
                class="btn btn-xs btn-circle absolute right-2 top-2 p-0 text-sm">
                ✕
              </label>
              <img
                class="w-full object-cover rounded-box"
                :src="baseURL + image.attributes.url"
                :alt="`${image.attributes.alternativeText}`" />
            </label>
          </label>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a
          v-for="(image, index) in images"
          :key="index"
          :href="`#item${image.id}`"
          class="btn btn-square btn-outline btn-sm p-0 text-xs">
          {{ index + 1 }}
        </a>
      </div> -->
    </div>

    <!-- Product info -->
    <div class="mx-auto px-4 pb-16 sm:px-6 max-w-2xl lg:max-w-7xl lg:px-8">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1
          class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl pt-8">
          {{ product.attributes.name }}
        </h1>
      </div>

      <!-- Product Info -->
      <div class="mt-4">
        <h2 class="mb-2 text-lg font-semibold text-gray-800">
          Product information
        </h2>
        <div class="space-y-1 lg:space-y-3">
          <div class="flex w-full">
            <h3 class="font-semibold pr-2">Nama Produk:</h3>
            <p>{{ product.attributes.name }}</p>
          </div>
          <div class="flex w-full">
            <h3 class="font-semibold pr-2">SKU:</h3>
            <p>{{ product.id }}</p>
          </div>
          <div class="flex w-full">
            <h3 class="font-semibold pr-2">PIRT:</h3>
            <p>{{ product.attributes.pirt_code }}</p>
          </div>
          <div class="flex w-full">
            <h3 class="font-semibold pr-2">Tahun Rilis:</h3>
            <p>{{ product.attributes.release_year }}</p>
          </div>
          <div class="flex w-full">
            <h3 class="font-semibold pr-2">Stok:</h3>
            <p>{{ product.attributes.stock }}</p>
          </div>
          <div class="flex w-full">
            <h3 class="font-semibold pr-2">Berat Bersih:</h3>
            <p>{{ product.attributes.netto }}</p>
          </div>
          <div class="flex w-full">
            <h3 class="font-semibold pr-2">Satuan:</h3>
            <p>{{ product.attributes.unit }}</p>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Description and details -->
      <div class="mt-4 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        <div>
          <h3 class="">Description</h3>
          <div class="space-y-6">
            <p class="text-base text-gray-900">
              {{ product.attributes.description }}
            </p>
            <article
              v-if="product.attributes.description_rich"
              class="prose lg:prose-xl">
              <div
                v-html="$mdit.render(product.attributes.description_rich)"
                class="text-sm text-black"></div>
            </article>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <form class="mt-4 space-y-4">
        <p class="text-3xl tracking-tight text-gray-900">
          {{ $formatPrice(product.attributes.price) }}
        </p>
        <button
          type="submit"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-secondary-400 py-3 px-8 text-base font-medium text-white hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2">
          Beli Sekarang
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const { $formatPrice, $placeholderImageURL, $mdit } = useNuxtApp();

const { product } = defineProps(["product"]);
const baseURL = "https://panel.dapurlestari.id";
const images = product.attributes.images.data;
const defaultImage = $placeholderImageURL(product.attributes.name, 600, 600);
const defaultImagePortrait = $placeholderImageURL(
  product.attributes.name,
  400,
  800
);

const mainImage =
  images.length > 0 ? baseURL + images[0].attributes.url : defaultImagePortrait;

const secondaryImage =
  images.length > 3 ? baseURL + images[3].attributes.url : defaultImagePortrait;

const centerImages = [
  images.length > 1 ? baseURL + images[1].attributes.url : defaultImage,
  images.length > 2 ? baseURL + images[2].attributes.url : defaultImage,
];
// console.log(centerImages)
const primaryImage = mainImage;
</script>

<style scoped></style>
