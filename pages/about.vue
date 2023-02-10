<template>
    <NuxtLayout name="scaffold">
        <template #title>{{ about.title }}</template>

        <div class="flex container mx-auto px-4 pt-16">
            <article class="prose lg:prose-xl">
                <h2>{{ about.title }}</h2>
                <div v-html="$mdit.render(about.content)" class="text-sm text-gray-700"></div>
            </article>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { $mdit } = useNuxtApp()
    const { data } = await useFetch('/api/pages/about')
    const about = data.value.data.attributes.contentful
</script>

<style scoped>
</style>