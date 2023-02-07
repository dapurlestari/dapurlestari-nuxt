<template>
    <ProductDetails :product="product" />
</template>

<script setup>
    const { id } = useRoute().params
    const { data, error } = await useFetch('/api/products/' + id)
    // console.log(data == null);
    if (error.value) {
        throw createError({statusCode: 404, statusMessage: 'Product not found!'})
    }
    const product = data.value.data
    const seo = product.attributes.seo

    useHead({
      title: seo.metaTitle,
      meta: [
        {name: 'description', content: seo.metaDescription},
        {name: 'keywords', content: seo.keywords},
      ],
    })

    /* definePageMeta({
        layout: 'products'
    }) */
</script>

<style scoped>
    p {
        font-weight: bold;
    }
</style>