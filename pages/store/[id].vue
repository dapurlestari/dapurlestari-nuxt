<template>
  <div class="pt-0 md:pt-16 pb-10 lg:pb-16 max-w-7xl mx-auto">
    <div class="p-4 xl:px-0 lg:py-4">
      <button
        type="button"
        title="Back Button"
        class="btn btn-outline btn-sm px-3 py-0 space-x-2 text-xs"
        @click="$router.back">
        <i class="lni lni-chevron-left"></i>
        <span class="font-normal">Back</span>
      </button>
    </div>

    <div class="flex flex-col md:flex-row h-[700px] lg:h-[500px] mx-4 md:mx-0">
      <Swiper
        :modules="[SwiperPagination, SwiperZoom]"
        :loop="true"
        :slides-per-view="1"
        :space-between="0"
        :autoplay="false"
        :pagination="true"
        :zoom="true"
        class="flex-1 w-full rounded-lg">
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img
            :src="`${baseURL}${image.attributes.url}`"
            :alt="image.attributes.alternativeText ?? product.attributes.name"
            class="object-cover w-full h-full" />
        </SwiperSlide>
      </Swiper>
      <div class="md:flex-1">
        <div class="flex flex-col p-2 lg:p-4 justify-between h-full">
          <div class="title">
            <div
              class="category flex flex-row space-x-2 align-middle items-center">
              <h2 class="text-sm uppercase">
                {{ product.attributes.category.data?.attributes.name }}
              </h2>
              <i
                v-if="product.attributes.bundle.data"
                class="lni lni-minus text-[8pt]"></i>
              <h2 class="text-sm uppercase">
                {{ product.attributes.bundle.data?.attributes.name }}
              </h2>
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
                <!-- <tr>
                  <td>SKU</td>
                  <td>
                    #DL-COO{{ product.id }}X{{
                      product.attributes.release_year
                    }}
                  </td>
                </tr> -->
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
          <a
            :href="waMe"
            target="_blank"
            class="btn w-full hidden md:flex mt-4">
            Beli Sekarang
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-6 md:px-4 lg:pt-6 lg:pb-16 lg:pr-8">
      <div>
        <h2 class="text-2xl font-bold">Description</h2>
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
      <a :href="waMe" target="_blank" class="btn w-full md:hidden mt-4">
        Beli Sekarang
      </a>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data, error } = await useFetch("/api/products/" + id);
const { $formatPrice, $mdit, $myConfig } = useNuxtApp();
const baseURL = "https://panel.dapurlestari.id";

// console.log(data == null);
if (error.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found!" });
}
const product = data.value.data;
const seo = product.attributes.seo;
const images = product.attributes.images.data;
const waMe = `https://wa.me/${$myConfig.phone}/?text=Halo kak. mau pesen ${product.attributes.name} nya dong! 😊`;
const url = `https://dapurlestari.id/${product.attributes.slug}`;
const firstImageURL = `${baseURL}${images[0].attributes.url}`;

useHead({
  title: seo.metaTitle ?? product.attributes.name,
  meta: [
    { name: "title", content: seo.metaTitle ?? product.attributes.name },
    { name: "description", content: seo.metaDescription },
    { name: "keywords", content: seo.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: seo.metaTitle ?? product.attributes.name },
    { property: "og:description", content: seo.metaDescription },
    {
      property: "og:image",
      content: firstImageURL,
    },
    // { property: "fb:app_id", content: config.public.fbAppID },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    {
      name: "twitter:title",
      content: seo.metaTitle ?? product.attributes.name,
    },
    { name: "twitter:description", content: seo.metaDescription },
    {
      name: "twitter:image",
      content: firstImageURL,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://dapurlestari.id/store/${product.attributes.slug}`,
    },
  ],
});
</script>

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
