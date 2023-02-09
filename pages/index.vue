<template>
    <div>
        
        <HomeLandingHero :first-slideshow="homeData.slideshows[0]" />

        <HomeHotProducts :hot-products="homeData.hot_products"/>
        
        <HomeRecomSection :recommendations="homeData.recommendations" />

        <HomeNewProducts :new-products="homeData.new_products" />

        <!-- marquee by https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/ -->
        <HomeServedCompanies :served-companies="homeData.served_companies" />

        <ContactSection />
    </div>
</template>

<script setup>
    const { $myConfig, $logo, $formatPrice } = useNuxtApp()
    const { data } = await useFetch('/api/pages/home')

    const config = useRuntimeConfig()
    // console.log(data.value)
    const homeData = data.value.data.attributes
    // console.log(firstSlideshowURL)
</script>

<style scoped>
</style>