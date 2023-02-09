<template>
    <div>
        <section class="flex justify-center mt-20">
            <div class="container p-7 bg-gradient-to-br from-tan-100 to-tan-100 rounded-[18px] text-slate-900 text-center justify-center">
                <h2 class="font-bold text-3xl text-primary-500">{{ recommendation.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-3xl font-serif">{{ recommendation.subtitle }}</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mx-0 md:mx-20">
                    <div v-for="item in recommendations" :key="item.id">
                        <i :class="'lni '+item.icon+' text-4xl text-primary-500'"></i>
                        <h3 class="font-bold text-secondary-500 tracking-wide text-xl mt-3">{{ item.title }}</h3>
                        <p class="font-light text-l">{{ item.subtitle }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    const { recommendations } = defineProps(['recommendations'])
    const recommendation = {
        title: 'Kenapa Dapur Lestari?',
        subtitle: 'Pasti dong! Karena kami tidak akan membuatmu kecewa soal rasa dan harga. Kami telah memiliki beberapa sertifikat sehingga kamu ngga perlu ragu'
    }

</script>

<style scoped>

</style>