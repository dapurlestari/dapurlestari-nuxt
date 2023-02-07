<template>
    <div>
        <div class="navbar bg-base-100">
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
        </div>

        <div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        
        <img src="~assets/image/1656569137_0-illustration_svg.svg" alt="">
    </div>
</template>

<script setup>
</script>

<style scoped>
    p {
        font-weight: bold;
    } 
</style>