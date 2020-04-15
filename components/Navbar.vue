<template lang="pug">
  nav
    .logo
    .right
      nuxt-link(to="") Features
      nuxt-link(to="").install Install
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
nav {
  background-color: rgb(248, 248, 248);
  border-bottom: 1px solid rgb(230, 230, 230);
  display: flex;

  justify-content: space-between;
  align-content: center;

  padding: var(--dense-padding) var(--side-padding);

  position: sticky;
  top: 0;

  .right {
    & > a {
      padding-left: var(--main-padding);
    }
  }
}
</style>