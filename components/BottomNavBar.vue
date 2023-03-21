<template>
  <div class="relative">
    <!-- Bottom Navbar for mobile screen -->
    <div
      class="navbar light-mode bg-base-200 z-10 fixed bottom-0 pt-1 m-0 inline-block md:hidden rounded-t-2xl shadow-[0_-2px_20px_5px_rgba(0,0,0,0.2)]">
      <div class="navbar-center w-full h-full">
        <ul
          class="menu menu-horizontal items-center justify-evenly w-full flex p-0 h-full">
          <li v-for="(menu, index) in $navMenu" :key="index" class="p-0">
            <NuxtLink :to="menu.route" class="btn nav capitalize">
              <i :class="menu.icon"></i>
              <span class="mt-0.5">{{ menu.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
