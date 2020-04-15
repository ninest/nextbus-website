<template lang="pug">
  Default(:showNavbar="true")
    article
      .top
        .right 
          .title 
            h1 {{ title }}
            .subtitle {{ subtitle }}

          .action
            nuxt-link(:to="action.main.url").main {{ action.main.text }}
            nuxt-link(:to="action.secondary.url").secondary {{ action.secondary.text }}
        
        .left
          img(:src="require(`~/assets/images/${mainImage}`)")

      .features
        h2 {{ features.title }}

</template>

<script>

import Default from '~/layouts/Default.vue';


export default {
  components: {
    Default,
  },
  async asyncData({params, app}){
    var md = require('markdown-it')();
    var markdownContent = await import('@/content/landing.md');
    var attributes = markdownContent.attributes;

    return {
      title: attributes.title,
      subtitle: attributes.subtitle,
      action: attributes.action,
      mainImage: attributes.mainImage,
      features: attributes.features,
    }
  }
}
</script>

<style lang="scss" scoped>
article {

  & > div {
    padding: var(--main-padding) var(--side-padding) 0 var(--side-padding);
  }

  .top {
    margin-top: calc(var(--extra-padding) * 5);
    @include mobile-screen { margin-top: var(--main-padding); }

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas: "right left";

    @include mobile-screen {
      grid-template-columns: 1fr;
      grid-template-areas: 
        "left"
        "right";
    }

    height: 75vh;
    @include mobile-screen {
      height: 89vh;
    }

    .right {
      grid-area: right;
      .title {
        h1 { font-size: 3em; margin-top: 0; margin-bottom: 0; }
        .subtitle {
          font-size: 1.5em;
          font-weight: 400;
        }
        @include mobile-screen {
          h1 { font-size: 2.5em }
          .subtitle { font-size: 1.3em }
        }

        margin-bottom: calc(var(--extra-padding) * 3);
        @include mobile-screen { margin-bottom: var(--main-padding); }
      }

      .action {
        & a {
          padding: var(--main-padding) calc(var(--main-padding) * 3) ;
          border-radius: var(--border-radius);
          text-decoration: unset;

          @include mobile-screen {
            display: block;
            width: 100%;
            text-align: center;
          }

          &.main {
            color: white;
            background-color: var(--action-color);
          }
          &.secondary {
            @include not-mobile-screen { margin-left: var(--main-padding); }
            @include mobile-screen { margin-top: var(--main-padding); }
            box-shadow: inset 0 0 0 3px var(--action-color);
            // , inset 0 0 0 10px white;

            color: var(--action-color);
          }
        }

      }
    }

    .left {
      grid-area: left;
      img {
        height: 500px;
        // border: 6px solid rgb(70, 70, 70);
        border-radius: calc(var(--border-radius) * 2);

        @include mobile-screen {
          height: 50vh;
        }
      }
    }
  }

  .features {
    h2 { font-size: 2em}
  }
}
</style>