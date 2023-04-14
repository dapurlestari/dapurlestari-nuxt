<template>
  <div>
    <section class="my-32">
      <div class="text-slate-900 text-center justify-center">
        <h2 class="font-bold text-3xl text-primary-500">
          {{ servedCompanies.title }}
        </h2>
        <p class="tracking-wide text-lg my-3 mx-auto px-5">
          {{ servedCompanies.subtitle }}
        </p>
        <article
          id="company-logo"
          class="flex flex-row flex-wrap justify-center max-w-7xl gap-4 mx-auto px-4 pt-8">
          <div
            v-for="item in servedCompanies.companies"
            :key="item"
            class="p-2 rounded-xl">
            <a :href="item.link ?? ''" target="_blank">
              <img
                :src="baseURL + item.logo.data.attributes.url"
                :alt="item.name"
                width="158"
                height="48"
                class="max-h-24 mx-auto object-contain" />
            </a>
            <span>{{ item.description }}</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { servedCompanies } = defineProps(["servedCompanies"]);
const baseURL = config.public.baseURL;
</script>
