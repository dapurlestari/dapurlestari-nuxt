<template>
    <div>
        <!-- <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NuxtLink to="/">Beranda</NuxtLink></li>
                        <li><NuxtLink to="/products">Produk</NuxtLink></li>
                        <li><NuxtLink to="/about">Tentang Kami</NuxtLink></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Dapur Lestari</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li><NuxtLink to="/">Beranda</NuxtLink></li>
                    <li><NuxtLink to="/products">Produk</NuxtLink></li>
                    <li><NuxtLink to="/about">Tentang Kami</NuxtLink></li>
                </ul>
            </div>
        </div> -->

        <div class="hero min-h-screen" :style="{'background-image': 'url('+firstSlideshowURL+')'}">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <img :src="$logo" alt="" class="w-20 sm:w-32 md:w-32 pb-4 inline-block">
                    <p class="mb-5">{{ firstSlideshow.subtitle }}</p>
                    <button type="button" class="btn bg-secondary-500 hover:bg-secondary-600 text-white">Beli Yuk!</button>
                </div>
            </div>
        </div>
        
        <section class="flex-none">
            <div class="p-5">
                <h3>{{ firstSlideshow.title }}</h3>
                <p>{{ firstSlideshow.subtitle }}</p>
            </div>
        </section>
    </div>
</template>

<script setup>
    const { $logo } = useNuxtApp()
    const { data } = await useFetch('/api/pages/home')

    const config = useRuntimeConfig()
    console.log(data.value)
    const homeData = data.value.data
    const firstSlideshow = homeData.attributes.slideshows[0]
    const firstSlideshowURL = config.public.baseURL+firstSlideshow.image.data.attributes.url
    console.log(firstSlideshowURL)
    // const logo = config.public.baseURL+configData.attributes.logo.data.attributes.url
</script>

<style scoped>
    p {
        font-weight: bold;
    } 
</style>