<template lang="pug">
  .download
    h2 {{ download.title }}

    .store-buttons

      a(:href="download.androidLink") Play Store
      //- a(href="") App Store
</template>

<script>
export default {
  props: ['download']
}
</script>

<style lang="scss" scoped>
.download {
  .store-buttons {
    display: flex;

    a {
      display: block;
      padding: var(--main-padding) calc(var(--main-padding) *3) ;
      border-radius: var(--border-radius);
      background-color: black;
      color: white;
      font-weight: bold;

      margin-right: var(--main-padding);

      @include mobile-screen {
        padding: var(--main-padding);
        width: 50%;
        text-align: center;
      }
    }
  }
}
</style>