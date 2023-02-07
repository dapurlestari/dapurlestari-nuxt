<template>
    <div class="btm-nav">
        <RouterLink to="/"> 
            <button type="button" class="text-primary flex items-center">
                <i class="lni lni-home p-2"></i>
                <span class="text-sm hidden sm:inline-block pt-0.5">Home</span>
            </button>
        </RouterLink>
        <RouterLink to="/products">                
            <button type="button" class="text-primary flex items-center">
                <i class="lni lni-shopping-basket p-2"></i>
                <span class="text-sm hidden sm:inline-block pt-0.5">Products</span>
            </button>
        </RouterLink>
        <RouterLink to="/about">
            <button type="button" class="text-primary flex items-center">
                <i class="lni lni-restaurant p-2"></i>
                <span class="text-sm hidden sm:inline-block pt-0.5">About Us</span>
            </button>
        </RouterLink>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>