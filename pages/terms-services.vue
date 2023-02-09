<template>
    <NuxtLayout name="scaffold">
        <template #title>{{ termsServices.title }}</template>

        <div class="flex container">
            <h2>{{ termsServices.title }}</h2>
            <p>{{ termsServices.content }}</p>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { data } = await useFetch('/api/pages/termsServices')
    const termsServices = data.value.data.attributes.contentful
</script>

<style scoped>
</style>