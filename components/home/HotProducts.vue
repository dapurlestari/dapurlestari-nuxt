<template>
    <div>
        <section class="">
            <div class="relative overflow-hidden bg-secondary-100">
                <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div class="sm:max-w-lg">
                            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{ hotProducts.title }}</h1>
                            <p class="mt-4 text-xl text-gray-500">{{ hotProducts.caption }}</p>
                        </div>
                        <div>
                            <div class="mt-10">
                                <!-- Decorative image grid -->
                                <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                                    <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div class="flex items-center space-x-6 lg:space-x-8">
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div v-for="product in hotProductsSliced1" 
                                                    :key="product.id" 
                                                    :class="`h-64 w-44 overflow-hidden rounded-lg ${product === hotProductsSliced1[0] ? 'sm:opacity-0 lg:opacity-100' : ' '}`">

                                                    <img :src="baseURL+product.attributes.images.data[0].attributes.url" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div v-for="product in hotProductsSliced2" 
                                                    :key="product.id" 
                                                    class="h-64 w-44 overflow-hidden rounded-lg">

                                                    <img :src="baseURL+product.attributes.images.data[0].attributes.url" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                            <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div v-for="product in hotProductsSliced3" 
                                                    :key="product.id" 
                                                    class="h-64 w-44 overflow-hidden rounded-lg">

                                                    <img :src="baseURL+product.attributes.images.data[0].attributes.url" alt="" class="h-full w-full object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <a href="#" class="inline-block rounded-md border border-transparent bg-secondary-500 py-3 px-8 text-center font-medium text-white hover:bg-secondary-600">Belanja Sekarang</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    const { hotProducts } = defineProps(['hotProducts'])
    const hotProductsSliced1 = hotProducts.products.data.slice(0, 2)
    const hotProductsSliced2 = hotProducts.products.data.slice(2, 5)
    const hotProductsSliced3 = hotProducts.products.data.slice(5, 7)
    const baseURL = config.public.baseURL
    console.log('prodID');
    console.log(hotProductsSliced1[0].id);

</script>

<style scoped>

</style>