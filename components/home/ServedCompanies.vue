<template>
    <div>
        <section class="flex justify-center mt-32">
            <div class="text-slate-900 text-center justify-center">
                <h2 class="font-bold text-2xl text-primary-500">{{ servedCompanies.title }}</h2>
                <p class="font-light tracking-wide text-xl my-3 mx-auto max-w-2xl font-serif px-5">
                    {{ servedCompanies.subtitle }}
                </p>

                <article id="company-logo" class="flex overflow-hidden whitespace-nowrap mt-10">
                    <div class="relative">
                        <ul class="marquee flex list-none pl-0">
                            <li v-for="item in servedCompanies.companies">
                                <img 
                                :src="baseURL+item.logo.data.attributes.url" 
                                :alt="item.name"
                                class="max-h-28 mr-2">
                            </li>
                        </ul>
                        <ul class="marquee2 flex list-none pl-0 absolute top-0">
                            <li v-for="item in servedCompanies.companies">
                                <img 
                                :src="baseURL+item.logo.data.attributes.url" 
                                :alt="item.name"
                                class="max-h-28 mr-2">
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig()
    const { servedCompanies } = defineProps(['servedCompanies'])
    const baseURL = config.public.baseURL

</script>

<style scoped>
    .marquee {
        animation: marquee 5s linear infinite;
    }

    .marquee2 {
        animation: marquee2 5s linear infinite;
    }

    #company-logo ul li {
        margin: 8px;
    }

    @keyframes marquee {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @keyframes marquee2 {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }

</style>