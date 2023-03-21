<template>
  <button
    @click="scrollToTop"
    class="fixed bottom-20 right-4 bg-gray-700 text-white rounded-full p-3 shadow-md hover:bg-gray-600 transition-all duration-200 md:bottom-8 md:right-8 md:p-4 md:text-lg md:shadow-xl"
    :class="{ 'opacity-0': !showButton }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 200) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    scrollToTop() {
      const duration = 500;
      const start = window.pageYOffset;
      const startTime =
        "now" in window.performance ? performance.now() : new Date().getTime();

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, 0 - start, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
      requestAnimationFrame(animateScroll);
    },
  },
};
</script>
