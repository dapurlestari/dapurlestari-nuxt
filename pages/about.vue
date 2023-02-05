<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet?</p>
        <!-- <p>{{ data.message }}</p> -->
        <ul>
            <li v-for="file in files">{{ file.name }}</li>
        </ul>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/getFiles')
    console.log(data.value)
    const files = data.value
</script>

<style scoped>
    p {
        font-weight: bold;
    } 
</style>