<template lang="pug">
  div
    //- p {{ fullwidth }}
    img(:src="require(`~/assets/images/guides/${src}`)")
</template>

<script>
export default {
  // props: ['src', 'fullWidth']
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