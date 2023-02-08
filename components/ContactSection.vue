<template>
      <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">
                        <h2 class="text-lg font-semibold leading-8 tracking-tight text-secondary-500">{{ contact.subtitle }}</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ contact.title }}</p>
                        <p class="mt-6 text-lg leading-8 text-gray-600"></p>
                        <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    <i class="lni lni-whatsapp absolute top-1 left-1 h-5 w-5 text-secondary-500"></i>
                                    WhatsApp.
                                </dt>
                                {{ ' ' }}
                                <dd class="inline"><a :href="$myConfig.whatsapp_link" target="_blank">{{ $myConfig.phone }}</a></dd>
                            </div>
                            <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    <i class="lni lni-envelope absolute top-1 left-1 h-5 w-5 text-secondary-500"></i>
                                    Email.
                                </dt>
                                {{ ' ' }}
                                <dd class="inline"><a :href="$myConfig.email" target="_blank">{{ $myConfig.email }}</a></dd>
                            </div>
                            <div class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    <i class="lni lni-map-marker absolute top-1 left-1 h-5 w-5 text-secondary-500"></i>
                                    Alamat.
                                </dt>
                                {{ ' ' }}
                                <dd class="inline">{{ $myConfig.address }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                
                <!-- <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" /> -->
                
                <GMapMap
                    class="rounded-xl shadow-xl"
                    :center="center"
                    :zoom="15"
                    :options="{
                        zoomControl: true,
                        mapTypeControl: false,
                        scaleControl: true,
                        streetViewControl: false,
                        rotateControl: false,
                        fullscreenControl: false,
                        draggable: false
                    }"
                    style="width: 660px; height: 400px; margin: auto">

                    <GMapMarker
                        :position="marker.position"
                        :clickable="false"
                        :draggable="false" />
                </GMapMap>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { $myConfig } = useNuxtApp()
    const config = useRuntimeConfig()
    const mapAPIKey = config.public.mapAPIKey
    const contact = {
        title: 'Segera hubungi kami!',
        subtitle: 'Punya pertanyaan?',
    }

    const center = { lat: -7.412287, lng: 112.533737 };

    const marker = {
            description: "Google France",
            id: "1",
            position: center,
        }
</script>

<style scoped>
    #map {
        height: 50vh;
        width: 100vw;
    }
</style>