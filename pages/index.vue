<template lang="pug">
  Default(:showNavbar="true")
    .top
      h1 {{ title }}
      .subtitle {{ subtitle }}

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
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  h1 {
    font-size: 3em
  }
  .subtitle {
    font-size: 1.5em;
    font-weight: 400;
  }
}
</style>