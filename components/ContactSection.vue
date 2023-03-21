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
