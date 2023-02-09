<template>
    <NuxtLayout name="scaffold">
        <template #title>About</template>

        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet?</p>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const { data } = await useFetch('/api/pages/about')
    const about = data.value.data.attributes
</script>

<style scoped>
</style>