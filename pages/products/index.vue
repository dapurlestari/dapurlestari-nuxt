<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products">
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const {data: response} = await useFetch('/api/products/get')
    const products = response.value.data
    console.log(products);
    useHead({
      title: 'Dapur Lestari | Products',
      meta: [
        {name: 'description', content: 'Dapur Lestari Products'},
        {name: 'keywords', content: 'dapur, lestari, produk, kukis'},
      ],
    })
</script>

<style scoped>
    p {
        font-weight: bold;
    } 
</style>