<template>
  <div>
    <footer
      class="footer footer-center p-10 bg-gray-100 text-base-content rounded">
      <div class="grid grid-flow-col gap-4">
        <NuxtLink to="/terms-services" class="link link-hover">
          Terms and Services
        </NuxtLink>
        <NuxtLink to="/faq" class="link link-hover"> FAQ </NuxtLink>
        <NuxtLink to="/terms-services" class="link link-hover">
          Terms and Services
        </NuxtLink>
      </div>
      <div>
        <div class="grid grid-flow-col gap-4">
          <a
            v-for="item in $socials"
            :key="item.id"
            :href="item.attributes.link"
            :aria-label="item.attributes.name"
            target="_blank"
            class="">
            <i
              :class="
                item.attributes.icon + ' text-lg hover:text-secondary-500'
              "></i>
          </a>
        </div>
      </div>
      <div class="mb-12">
        <p class="text-sm">{{ $myConfig.copyright }}</p>
      </div>
    </footer>
  </div>
</template>
