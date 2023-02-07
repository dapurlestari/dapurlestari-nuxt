<template>
    <div>
        <div class="navbar min-h-0 fixed z-50 bg-white shadow-lg">
            <div class="navbar-start">
                <NuxtLink to="/">
                    <i class="lni lni-chevron-left p-2"></i>
                </NuxtLink>
                <span class="normal-case text-md pl-2">
                    <slot name="title">Dapur Lestari</slot>
                </span>
            </div>
        </div>
        <slot />
        
        <BottomNav />

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>