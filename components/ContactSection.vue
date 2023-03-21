<template>
  <section class="flex justify-center bg-gray-50 w-full">
    <div
      class="pt-16 px-4 sm:pt-8 sm:px-6 lg:px-8 text-center justify-center w-full">
      <h2 class="font-bold text-3xl text-primary-500">
        {{ contact.title }}
      </h2>
      <p class="tracking-wide my-3 mx-auto text-slate-800 text-xl">
        {{ contact.subtitle }}
      </p>

      <div class="contact max-w-3xl mx-auto">
        <p class="my-8 text-gray-700">{{ app.$myConfig.address }}</p>
      </div>

      <GMapMap
        class="rounded-xl shadow-xl w-full h-[450px] md:h-[420px] m-auto"
        :center="location"
        :zoom="map.zoom"
        :options="{
          zoomControl: map.zoomControl,
          mapTypeControl: map.mapTypeControl,
          scaleControl: map.scaleControl,
          streetViewControl: map.streetViewControl,
          rotateControl: map.rotateControl,
          fullscreenControl: map.fullscreenControl,
          draggable: map.draggable,
        }">
        <GMapMarker
          :position="marker.position"
          :clickable="marker.clickable"
          :draggable="marker.draggable" />
      </GMapMap>

      <div
        class="max-w-lg mx-auto flex flex-col lg:flex-row lg:flex-auto space-y-4 lg:space-y-0 lg:space-x-4 my-10">
        <a
          :href="app.$myConfig.whatsapp_link"
          class="btn bg-secondary-500 hover:bg-secondary-600 border-transparent hover:border-transparent text-white rounded-full px-4 py-0 lg:flex-1">
          <i class="lni lni-whatsapp text-lg mr-3"></i>
          <span>WhatsApp</span>
        </a>
        <a
          :href="`mailto:${app.$myConfig.email}`"
          class="btn btn-outline bg-transparent hover:bg-transparent border-secondary-500 hover:border-secondary-600 text-secondary-500 hover:text-secondary-500 rounded-full px-4 py-0 lg:flex-1">
          <i class="lni lni-envelope text-lg mr-3"></i>
          <span class="">Email</span>
        </a>
      </div>
    </div>
  </section>
  <!-- <div class="overflow-hidden bg-gray-50 py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2
              class="text-lg leading-8 tracking-tight text-secondary-500 font-bold">
              {{ contact.subtitle }}
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {{ contact.title }}
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600"></p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div class="relative pl-9">
                <dt class="inline font-bold text-gray-900">
                  <i
                    class="lni lni-whatsapp absolute top-1 left-1 h-5 w-5 text-secondary-500"></i>
                  WhatsApp.
                </dt>
                {{ " " }}
                <dd class="inline text-gray-900">
                  <a
                    :href="app.$myConfig.whatsapp_link"
                    target="_blank"
                    class="underline"
                    >{{ phone }}</a
                  >
                </dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-bold text-gray-900">
                  <i
                    class="lni lni-envelope absolute top-1 left-1 h-5 w-5 text-secondary-500"></i>
                  Email.
                </dt>
                {{ " " }}
                <dd class="inline text-gray-900">
                  <a
                    :href="`mailto:${app.$myConfig.email}`"
                    target="_blank"
                    class="underline"
                    >{{ app.$myConfig.email }}</a
                  >
                </dd>
              </div>
              <div class="relative pl-9">
                <dt class="inline font-bold text-gray-900">
                  <i
                    class="lni lni-map-marker absolute top-1 left-1 h-5 w-5 text-secondary-500"></i>
                  Alamat.
                </dt>
                {{ " " }}
                <dd class="inline text-gray-900">
                  {{ app.$myConfig.address }}
                </dd>
              </div>
            </dl>
          </div>
        </div>


        <GMapMap
          class="rounded-xl shadow-xl w-full h-[450px] md:h-[420px] m-auto"
          :center="location"
          :zoom="map.zoom"
          :options="{
            zoomControl: map.zoomControl,
            mapTypeControl: map.mapTypeControl,
            scaleControl: map.scaleControl,
            streetViewControl: map.streetViewControl,
            rotateControl: map.rotateControl,
            fullscreenControl: map.fullscreenControl,
            draggable: map.draggable,
          }">
          <GMapMarker
            :position="marker.position"
            :clickable="marker.clickable"
            :draggable="marker.draggable" />
        </GMapMap>
      </div>
    </div>
  </div> -->
</template>

<script setup>
const app = useNuxtApp();
// const config = useRuntimeConfig()
const contact = {
  title: "Punya Pertanyaan?",
  subtitle: "Segera Hubungi Kami!",
};

// const phone = app.$formatPhoneNumberID(app.$myConfig.phone);
const map = app.$myConfig.map;
// console.log(map);
const markers = map.markers;
const defaultMarker = markers[0];
const location = {
  lat: defaultMarker.latitude,
  lng: defaultMarker.longitude,
};

const marker = {
  description: defaultMarker.label,
  id: `${defaultMarker.id}`,
  position: location,
  clickable: defaultMarker.clickable,
  draggable: defaultMarker.draggable,
};
</script>
