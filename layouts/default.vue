<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto justify-between p-4 flex">
                <NuxtLink to="/" class="font-bold">Dapur Lestari</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
                    <li><NuxtLink to="/about" class="btn">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>