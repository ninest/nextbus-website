<template lang="pug">
  footer(:class="{ 'extended-width': extendedWidth }")
    .links
      .each-link(v-for="link in links")
        nuxt-link(v-if="!link.external" :to="link.url") {{ link.title }}
        a(v-else :href="link.url") {{ link.title }}
</template>

<script>
export default {
  props: {
    extendedWidth: {
      default: false,
      required: false,
    }
  },
  data() {
    return {
      links: [
        { title: "Home", url: "/", external: false},
        { title: "Privacy policy", url: "/privacy-policy", external: false },
        { title: "GitHub", url: "https://github.com/themindstorm/NextBusSG", external: true},
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  // same padding as main
  padding: calc(var(--extra-padding) *2) var(--side-padding);
  border-bottom: 1px solid rgb(230, 230, 230);
  border-top: 1px solid rgb(230, 230, 230);

  &.extended-width {
    @include desktop-screen { 
      padding: calc(var(--extra-padding) *2) 10%;
    }
  }

  .links {
    
    display: flex;

    .each-link {
      a { color: gray; }
    }

    .each-link + .each-link {
      margin-left: var(--main-padding);
    }
  }
}
</style>