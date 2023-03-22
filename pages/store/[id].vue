<template>
  <!-- <ProductDetails :product="product" /> -->
  <div class="pt-0 md:pt-16 pb-10 lg:pb-16">
    <div class="p-4">
      <button
        type="button"
        title="Back Button"
        class="btn btn-outline btn-sm px-3 py-0 space-x-2 text-xs"
        @click="$router.back">
        <i class="lni lni-chevron-left"></i>
        <span class="font-normal">Back</span>
      </button>
    </div>

    <div class="flex flex-col md:flex-row h-[800px] lg:h-[500px]">
      <Swiper
        :modules="[SwiperPagination, SwiperZoom]"
        :loop="true"
        :slides-per-view="1"
        :space-between="0"
        :autoplay="false"
        :pagination="true"
        :zoom="true"
        class="flex-1 w-full">
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img
            :src="`${baseURL}${image.attributes.url}`"
            :alt="image.attributes.alternativeText"
            class="object-cover w-full h-full" />
        </SwiperSlide>
        <!-- <SwiperSlide>
          <img
            src="https://cdn11.bigcommerce.com/s-8klxh9o/images/stencil/1111x736/products/569/11571/lenny-larry_complete-cookie_chocolate-chip_pick-mix_uk__05621.1524053269.png?c=3"
            alt="image"
            class="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placeimg.com/640/480/any"
            alt="image"
            class="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://placeimg.com/640/480/nature"
            alt="image"
            class="object-cover w-full h-full" />
        </SwiperSlide> -->
      </Swiper>
      <div class="md:flex-1">
        <div class="flex flex-col p-4 justify-between h-full">
          <div class="title">
            <div
              class="category flex flex-row space-x-2 align-middle items-center">
              <h2 class="text-sm uppercase">cookies</h2>
              <i class="lni lni-minus text-[8pt]"></i>
              <h2 class="text-sm uppercase">paket a</h2>
            </div>
            <h1 class="text-3xl md:text-4xl font-bold tracking-wide">
              {{ product.attributes.name }}
            </h1>
          </div>
          <div class="my-8 md:my-0">
            <table class="table-fixed w-full">
              <tbody>
                <tr>
                  <td>Kode P-IRT</td>
                  <td>{{ product.attributes.pirt_code }}</td>
                </tr>
                <tr>
                  <td>SKU</td>
                  <td>
                    #DL-COO{{ product.id }}X{{
                      product.attributes.release_year
                    }}
                  </td>
                </tr>
                <tr>
                  <td>Berat Bersih</td>
                  <td>
                    {{ product.attributes.netto }}{{ product.attributes.unit }}
                  </td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td>{{ product.attributes.stock }}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td class="space-x-2">
                    <span
                      v-if="product.attributes.discount_price > 0"
                      class="line-through">
                      {{ $formatPrice(product.attributes.price) }}
                    </span>
                    <span class="font-semibold">{{
                      $formatPrice(
                        product.attributes.discount_price > 0
                          ? product.attributes.discount_price
                          : product.attributes.price
                      )
                    }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn">Beli Sekarang</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data, error } = await useFetch("/api/products/" + id);
const { $formatPrice, $mdit } = useNuxtApp();
const baseURL = "https://panel.dapurlestari.id";

// console.log(data == null);
if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found!" });
}
const product = data.value.data;
const seo = product.attributes.seo;
const images = product.attributes.images.data;

useHead({
  title: seo.metaTitle,
  meta: [
    { name: "description", content: seo.metaDescription },
    { name: "keywords", content: seo.keywords },
  ],
});
</script>

<!-- <script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
    };
  },
};
</script> -->

<style scoped>
tr > td {
  @apply py-2;
}

tr > td:first-child {
  @apply font-bold border border-l-0 border-gray-200 pr-2 w-[135px];
}

tr > td:last-child {
  @apply border border-l-0 border-r-0 pl-2;
}
.menu > li:nth-child(2) .btn.nav {
  @apply text-secondary-500;
}
</style>
