<template>
  <div class="relative">
    <!-- Navbar for large screen -->
    <div
      class="navbar light-mode bg-base-100 z-10 fixed top-0 hidden md:inline-block rounded-b-xl drop-shadow-xl">
      <div class="navbar-start">
        <NuxtLink to="/" class="font-bold ml-2">Dapur Lestari</NuxtLink>
      </div>
      <div class="navbar-end">
        <ul class="menu menu-horizontal px-1 space-x-3 hidden md:flex">
          <li v-for="(menu, index) in $navMenu" :key="index">
            <NuxtLink :to="menu.route" class="btn nav capitalize">{{
              menu.title
            }}</NuxtLink>
          </li>
        </ul>
        <div class="dropdown dropdown-left">
          <label tabindex="0" class="btn btn-ghost md:hidden">
            <i class="lni lni-menu"></i>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mr-2 p-2 shadow bg-base-200 rounded-box w-52">
            <li v-for="(menu, index) in $navMenu" :key="index">
              <NuxtLink :to="menu.route" class="btn nav capitalize">{{
                menu.title
              }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
