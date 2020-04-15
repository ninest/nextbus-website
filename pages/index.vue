<template lang="pug">
  Default(:showNavbar="true")
    .top
      .right 
        .title 
          h1 {{ title }}
          .subtitle {{ subtitle }}

        .action
          nuxt-link(:to="action.main.url").main {{ action.main.text }}
          nuxt-link(:to="action.secondary.url").secondary {{ action.secondary.text }}

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
    }
  }
}
</script>

<style lang="scss" scoped>
.top {

  margin-top: calc(var(--extra-padding) * 5);

  .right {
    .title {
      h1 { font-size: 3em; margin-bottom: 0; }
      .subtitle {
        font-size: 1.5em;
        font-weight: 400;
      }

      margin-bottom: calc(var(--extra-padding) * 3);
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
}
</style>