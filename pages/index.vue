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
                    <img :src="$logo" alt="" class="w-20 sm:w-36 md:w-36 mb-4 inline-block bg-white p-7 mask mask-circle">
                    <p class="mb-5 text-white">{{ firstSlideshow.subtitle }}</p>
                    <button type="button" class="btn bg-secondary-500 hover:bg-secondary-600 text-white">Beli Yuk!</button>
                </div>
            </div>
        </div>
        
        <section class="flex justify-center mt-20">
            <div class="container p-7 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-[18px] shadow-xl text-slate-900 text-center justify-center">
                <h2 class="font-bold text-3xl text-slate-900">{{ recommendation.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-3xl font-serif">{{ recommendation.subtitle }}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mx-0 md:mx-20">
                    <div v-for="item in homeData.recommendations" :key="item.id">
                        <i :class="'lni '+item.icon+' text-4xl'"></i>
                        <h3 class="font-bold text-primary-500 tracking-wide text-xl mt-3">{{ item.title }}</h3>
                        <p class="font-light text-l">{{ item.subtitle }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="flex justify-center mt-20"></section>
    </div>
</template>

<script setup>
    const { $myConfig, $logo } = useNuxtApp()
    const { data } = await useFetch('/api/pages/home')

    const config = useRuntimeConfig()
    console.log(data.value)
    const homeData = data.value.data.attributes
    const firstSlideshow = homeData.slideshows[0]
    const firstSlideshowURL = config.public.baseURL+firstSlideshow.image.data.attributes.url
    const recommendation = {
        title: 'Kenapa Dapur Lestari?',
        subtitle: 'Pasti dong! Karena kami tidak akan membuatmu kecewa soal rasa dan harga. Kami telah memiliki beberapa sertifikat sehingga kamu ngga perlu ragu'
    }
    console.log(firstSlideshowURL)
</script>