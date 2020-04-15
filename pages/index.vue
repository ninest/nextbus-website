<template lang="pug">
  Default(:showNavbar="false")
    h1 Index page
    div(v-html="teset")
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
      teset: md.render(attributes.teset),
    }
  }
}
</script>