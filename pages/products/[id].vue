<template>
    <ProductDetails :product="product" />
</template>

<script setup>
    const { id } = useRoute().params
    const { data, error } = await useFetch('https://panel.dapurlestari.id/api/products/find-by-slug/' + id + '/?populate=*')
    // console.log(data == null);
    if (error.value) {
        throw createError({statusCode: 404, statusMessage: 'Product not found!'})
    }
    const product = data.value.data

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>
    p {
        font-weight: bold;
    }
</style>