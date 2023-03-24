<template>
  <div>
    <HomeLandingHero :first-slideshow="homeData.slideshows[0]" />

    <div v-if="pending" class=""></div>
    <HomeHotProducts v-else :hot-products="homeData.hot_products" />

    <div v-if="pending" class=""></div>
    <HomeRecomSection
      v-else
      :recommendations="homeData.recommendations"
      :recommendation="homeData.recommended_products" />

    <div v-if="pending" class=""></div>
    <HomeNewProducts v-else :new-products="homeData.new_products" />

    <!-- marquee by https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/ -->
    <div v-if="pending" class=""></div>
    <HomeServedCompanies v-else :served-companies="homeData.served_companies" />

    <div v-if="pending" class=""></div>
    <ContactSection v-else />

    <div v-if="pending" class="h-[400px] bg-white"></div>
  </div>
</template>

<script setup>
const app = useNuxtApp();
const defaultImage = app.$placeholderImageURL("Featured Main Image", 600, 450);
var homeData = {
  slideshows: [
    {
      subtitle: "...",
      image: {
        data: {
          attributes: {
            url: defaultImage,
          },
        },
      },
    },
  ],
};

const { pending, data } = await useLazyFetch("/api/pages/home");
homeData = data.value?.data.attributes;
</script>
