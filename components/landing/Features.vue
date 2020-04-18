<template lang="pug">
  .features
    h2(id="features") {{ features.title }}

    .grid
      div(
        v-for="f in features.list" :key="f.text"
        v-bind:class="{dark: f.dark}"
      ).each-feature 
        //- .graphic
        img(:src="require(`~/assets/images/${f.image}`)")
        .text
          h3 {{ f.text }}
          .description {{ f.description }}
</template>

<script>

export default {
  props: ['features']
}
</script>

<style lang="scss" scoped>
.features {
  .grid {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--main-padding);

    @include mobile-screen {
      grid-template-columns: 1fr; 
    }

    .each-feature {
      
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: var(--extra-padding);

      border-radius: var(--border-radius);

      background-color: rgba(0, 0, 0, 0.05);

      padding: var(--main-padding);

      &.dark { color: white; background-color: black; 
              .description { color: #aaa; }
      }

      .text {
        h3 { font-size: 1.4em; margin-top: 0; }
        .description { font-size: 0.9em }
      }

      img {
        width: 100%;
        border-radius: calc(var(--border-radius) /2);
      }

    }
  }


  margin-bottom: calc(var(--extra-padding) * 3);
}
</style>