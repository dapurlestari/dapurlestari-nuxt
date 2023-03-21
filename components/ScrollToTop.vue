<template>
  <button
    @click="scrollToTop"
    type="button"
    class="btn btn-circle fixed bottom-20 right-4 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition-all duration-200 md:bottom-8 md:right-8 md:text-lg md:shadow-xl"
    title="Scroll to Top"
    :class="{ 'opacity-0': !showButton }">
    <i class="lni lni-arrow-up"></i>
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
