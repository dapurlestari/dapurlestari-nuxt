<template>
    <NuxtLayout name="scaffold">
        <template #title>{{ privacyPolicy.title }}</template>

        <div class="flex container">
            <h2>{{ privacyPolicy.title }}</h2>
            <p>{{ privacyPolicy.content }}</p>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { data } = await useFetch('/api/pages/privacyPolicy')
    const privacyPolicy = data.value.data.attributes.contentful
</script>

<style scoped>
</style>