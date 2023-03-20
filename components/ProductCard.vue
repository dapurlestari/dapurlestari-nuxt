<template>
  <NuxtLink :to="`/products/${productAttr.slug}`" class="group">
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img :src="imageURL" :alt="productAttr.name" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ productAttr.name }}</h2>
        <p>{{ productAttr.price }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Pesan Sekarang</button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const config = useRuntimeConfig();
const { product } = defineProps(["product"]);
const id = product.id;
let productAttr = product.attributes;
productAttr.id = id;
const imageURL =
  config.public.baseURL +
  productAttr.images.data[0].attributes.formats.medium.url;
</script>

<style scoped></style>
