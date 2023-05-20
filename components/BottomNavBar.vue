<template>
  <div class="relative">
    <!-- Bottom Navbar for mobile screen -->
    <div
      class="fixed bottom-0 inline-flex md:hidden space-x-16 items-center justify-between px-8 py-3 bg-secondary-500 rounded-tl-3xl rounded-tr-3xl z-10">
      <NuxtLink
        v-for="(menu, index) in $navMenu"
        :key="index"
        :to="menu.route"
        class="inline-flex flex-col items-center justify-start capitalize text-white">
        <i :class="`${menu.icon} text-lg text-secondary-100`"></i>
        <span class="text-xs font-bold text-secondary-100">
          {{ menu.title }}
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>
