<template>
  <div>
    <HomeLandingHero :first-slideshow="homeData.slideshows[0]" />

    <HomeHotProducts :hot-products="homeData.hot_products" />

    <HomeRecomSection
      :recommendations="homeData.recommendations"
      :recommendation="homeData.recommended_products" />

    <HomeNewProducts :new-products="homeData.new_products" />

    <!-- marquee by https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/ -->
    <HomeServedCompanies :served-companies="homeData.served_companies" />

    <ContactSection />
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/pages/home");
const homeData = data.value.data.attributes;
</script>

<style scoped></style>
