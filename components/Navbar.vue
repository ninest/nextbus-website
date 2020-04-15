<template lang="pug">
  nav
    .logo NextBus SG
    .right
      nuxt-link(to="") Features
      nuxt-link(to="").install Install
</template>

<style lang="scss" scoped>
nav {
  background-color: white;
  display: flex;

  justify-content: space-between;
  align-content: center;

  padding: var(--main-padding);

  .right {
    & > a {
      padding-left: var(--main-padding);
    }
  }
}
</style>