<template lang="pug">
  footer
    .links
      .each-link(v-for="link in links")
        nuxt-link(:to="link.url") {{ link.title }}
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "Features", url: "/#features" },
        { title: "Privacy policy", url: "/privacy-policy" },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
footer {
  // same padding as main
  padding: var(--main-padding) var(--side-padding);
  border-bottom: 1px solid rgb(230, 230, 230);
  border-top: 1px solid rgb(230, 230, 230);

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