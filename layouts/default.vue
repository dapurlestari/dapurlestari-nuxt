<template>
    <div>
        <slot />

        <BottomNav />
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/config/get')
    
    const config = useRuntimeConfig()
    // console.log(data.value)
    const configData = data.value.data
    // console.log(configData.attributes.logo.data.attributes.url)
    // const logo = config.public.baseURL+configData.attributes.logo.data.attributes.url
</script>