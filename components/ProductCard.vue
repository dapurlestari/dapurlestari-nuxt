<template>
    <NuxtLink :to="`/products/${product.attributes.slug}`" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img :src="`${baseURL}${product.attributes.images.data[0].attributes.url}`" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{{ product.attributes.name }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">{{ product.attributes.price }}</p>
    </NuxtLink>
</template>

<script setup>
    const { product } = defineProps(['product'])
    const baseURL = 'https://panel.dapurlestari.id'
</script>

<style scoped>

</style>