<template>
    <div>
        <section class="flex justify-center">
            <div class="mx-auto max-w-2xl pt-16 px-4 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8 text-center justify-center">
                <h2 class="font-bold text-3xl text-primary-500">{{ newProducts.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-3xl font-serif text-slate-800">{{ newProducts.caption }}</p>

                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-14">
                    <NuxtLink v-for="product in newProducts.products.data" :to="'/products/'+product.attributes.slug" class="group">
                        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img 
                                :src="baseURL+product.attributes.images.data[0].attributes.url" 
                                :alt="product.attributes.images.data[0].alternativeText" 
                                class="h-60 w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-secondary-500">{{ product.attributes.name }}</h3>
                        <p class="mt-1 text-lg font-medium text-gray-900">{{ $formatPrice(product.attributes.price) }}</p>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const { $formatPrice } = useNuxtApp()
    const config = useRuntimeConfig()
    const { newProducts } = defineProps(['newProducts'])
    const baseURL = config.public.baseURL

</script>

<style scoped>

</style>