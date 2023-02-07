<template>
    <div>
        <header class="shadow-sm bg-tan-100">
            <nav class="container mx-auto justify-between p-4 flex">
                <NuxtLink to="/" class="font-bold">
                    <img :src="logo" alt="" class="w-10">
                </NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="btn">Beranda</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Produk</NuxtLink></li>
                    <li><NuxtLink to="/about" class="btn">Tentang Kami</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/config/get')
    
    const config = useRuntimeConfig()
    // console.log(data.value)
    const configData = data.value.data
    console.log(configData.attributes.logo.data.attributes.url)
    const logo = config.public.baseURL+configData.attributes.logo.data.attributes.url
</script>