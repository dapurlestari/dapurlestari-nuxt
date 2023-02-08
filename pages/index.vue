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

        <section class="">
            <div class="relative overflow-hidden bg-secondary-100">
                <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div class="sm:max-w-lg">
                            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
                            <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
                        </div>
                        <div>
                        <div class="mt-10">
                            <!-- Decorative image grid -->
                            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div class="flex items-center space-x-6 lg:space-x-8">
                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <a href="#" class="inline-block rounded-md border border-transparent bg-secondary-500 py-3 px-8 text-center font-medium text-white hover:bg-secondary-600">Belanja Sekarang</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="flex justify-center mt-20">
            <div class="container p-7 bg-gradient-to-br from-tan-100 to-tan-100 rounded-[18px] text-slate-900 text-center justify-center">
                <h2 class="font-bold text-3xl text-primary-500">{{ recommendation.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-3xl font-serif">{{ recommendation.subtitle }}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mx-0 md:mx-20">
                    <div v-for="item in homeData.recommendations" :key="item.id">
                        <i :class="'lni '+item.icon+' text-4xl text-primary-500'"></i>
                        <h3 class="font-bold text-secondary-500 tracking-wide text-xl mt-3">{{ item.title }}</h3>
                        <p class="font-light text-l">{{ item.subtitle }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="flex justify-center">
            <div class="mx-auto max-w-2xl pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center justify-center">
                <h2 class="font-bold text-3xl text-primary-500">{{ hotProducts.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-3xl font-serif text-slate-800">{{ hotProducts.caption }}</p>

                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-14">
                    <NuxtLink v-for="product in hotProductsSliced" :to="'/products/'+product.attributes.slug" class="group">
                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img 
                                :src="config.public.baseURL+product.attributes.images.data[0].attributes.url" 
                                :alt="product.attributes.images.data[0].alternativeText" 
                                class="h-60 w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-secondary-500">{{ product.attributes.name }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">{{ $formatPrice(product.attributes.price) }}</p>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- <section class="flex justify-center">
            <div class="mx-auto max-w-2xl pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center justify-center">
                <h2 class="font-bold text-3xl text-primary-500">{{ hotProducts.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-3xl font-serif text-slate-800">{{ hotProducts.caption }}</p>

                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-14">
                    <NuxtLink v-for="product in hotProductsSliced" :to="'/products/'+product.attributes.slug" class="group">
                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img 
                                :src="config.public.baseURL+product.attributes.images.data[0].attributes.url" 
                                :alt="product.attributes.images.data[0].alternativeText" 
                                class="h-60 w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-secondary-500">{{ product.attributes.name }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">{{ $formatPrice(product.attributes.price) }}</p>
                    </NuxtLink>
                </div>
            </div>
        </section> -->

        <!-- marquee by https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/ -->
        <section class="flex justify-center mt-32">
            <div class="text-slate-900 text-center justify-center">
                <h2 class="font-bold text-3xl text-primary-500">{{ testimonial.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-3xl font-serif">
                    {{ testimonial.subtitle }}
                </p>

                <div class="relative flex overflow-x-hidden">
                    <div class="py-12 animate-marquee whitespace-nowrap">
                        <span class="text-4xl mx-4">Company Logo 1</span>
                        <span class="text-4xl mx-4">Company Logo 2</span>
                        <span class="text-4xl mx-4">Company Logo 3</span>
                        <span class="text-4xl mx-4">Company Logo 4</span>
                        <span class="text-4xl mx-4">Company Logo 5</span>
                    </div>

                    <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                        <span class="text-4xl mx-4">Company Logo 1</span>
                        <span class="text-4xl mx-4">Company Logo 2</span>
                        <span class="text-4xl mx-4">Company Logo 3</span>
                        <span class="text-4xl mx-4">Company Logo 4</span>
                        <span class="text-4xl mx-4">Company Logo 5</span>
                    </div>
                </div>
            </div>
        </section>

        <ContactSection />

        <section class="flex justify-center mt-20"></section>
    </div>
</template>

<script setup>
    const { $myConfig, $logo, $formatPrice } = useNuxtApp()
    const { data } = await useFetch('/api/pages/home')

    const config = useRuntimeConfig()
    console.log(data.value)
    const homeData = data.value.data.attributes
    const firstSlideshow = homeData.slideshows[0]
    const firstSlideshowURL = config.public.baseURL+firstSlideshow.image.data.attributes.url
    const hotProducts = homeData.hot_products
    const hotProductsSliced = hotProducts.products.data.slice(0, 4)
    const recommendation = {
        title: 'Kenapa Dapur Lestari?',
        subtitle: 'Pasti dong! Karena kami tidak akan membuatmu kecewa soal rasa dan harga. Kami telah memiliki beberapa sertifikat sehingga kamu ngga perlu ragu'
    }

    const testimonial = {
        title: 'Apakah Kamu Selanjutnya?',
        subtitle: 'Ingin order banyak? Percayakan sajian kue anda dengan Dapur Lestari dan jadi salah satu di barisan ini'
    }
    console.log(firstSlideshowURL)
</script>