<template lang="pug">
  Root
    Navbar(v-if="showNavbar")
    main
      slot
    Footer
</template>

<script>
import Root from '~/layouts/Root.vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Root, Navbar, Footer
  },
  props: {
    showNavbar: {
      default: true,
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: var(--main-padding) var(--side-padding);
  padding-top: 0;
}
</style>