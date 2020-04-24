<template lang="pug">
  div
    img(:src="require(`~/assets/images/guides/${src}`)" :class="{ fullwidth: fullwidth }")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    fullwidth: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
div {

  img {
    display: block;

    // sligt margin above and below images
    margin: 2em auto;
    max-width: 70%;

    &.fullwidth {
      max-width: 100%;
    }
    

    @include not-mobile-screen {
      max-width: 50%;
    }
  }
}
</style>