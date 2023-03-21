<template>
  <div>
    <NuxtLoadingIndicator />
    <TopNavBar />
    <BottomNavBar />
    <slot />

    <FooterSection />

    <ScrollToTop />
  </div>
</template>

<script setup>
const { $myConfig } = useNuxtApp();
useHead({
  title: $myConfig.seo.metaTitle,
  meta: [
    { name: "description", content: $myConfig.seo.metaDescription },
    { name: "keywords", content: $myConfig.seo.keywords },
  ],
});
</script>
