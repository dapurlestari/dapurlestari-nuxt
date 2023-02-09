<template>
    <div>
        <div class="hero min-h-screen" :style="{'background-image': 'url('+firstSlideshowURL+')'}">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <img :src="$logo" alt="" class="w-20 sm:w-36 md:w-36 mb-4 inline-block bg-white p-7 mask mask-circle">
                    <p class="mb-5 text-white">{{ firstSlideshow.subtitle }}</p>
                    <button type="button" class="btn bg-secondary-500 hover:bg-secondary-600 text-white">Beli Yuk!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { $logo } = useNuxtApp()
    const config = useRuntimeConfig()
    const { firstSlideshow } = defineProps(['firstSlideshow'])
    const firstSlideshowURL = config.public.baseURL+firstSlideshow.image.data.attributes.url

</script>

<style scoped>

</style>