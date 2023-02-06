<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet?</p>
        <p>{{ config }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/config/get')
    console.log(data.value)
    const config = data.value.data
</script>

<style scoped>
    p {
        font-weight: bold;
    } 
</style>