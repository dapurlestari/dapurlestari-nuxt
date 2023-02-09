<template>
    <NuxtLayout name="scaffold">
        <template #title>{{ about.title }}</template>

        <div class="flex container">
            <h2>{{ about.title }}</h2>
            <p>{{ about.content }}</p>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { data } = await useFetch('/api/pages/about')
    const about = data.value.data.attributes.contentful
</script>

<style scoped>
</style>