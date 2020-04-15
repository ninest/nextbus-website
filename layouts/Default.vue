<template lang="pug">
  Root
    Navbar(v-if="showNavbar")
    main
      slot
</template>

<script>
import Root from '~/layouts/Root.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Root, Navbar,
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
  // padding: var(--main-padding) var(--side-padding);
  padding-top: 0;
}
</style>