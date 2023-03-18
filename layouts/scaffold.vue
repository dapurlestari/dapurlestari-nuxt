<template>
  <div>
    <div class="navbar min-h-0 fixed z-50 bg-white shadow-md">
      <div class="navbar-start">
        <button @click="$router.back">
          <i class="lni lni-chevron-left p-2"></i>
        </button>
        <span class="normal-case text-md pl-2">
          <slot name="title">Dapur Lestari</slot>
        </span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup></script>

<style scoped></style>
