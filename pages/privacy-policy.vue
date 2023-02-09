<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet?</p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'scaffold'
    })

    const { data } = await useFetch('/api/pages/privacyPolicy')
    const privacyPolicy = data.value.data.attributes
</script>

<style scoped>
</style>