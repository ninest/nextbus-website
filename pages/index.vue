<template lang="pug">
  div
    h1 Index page
    div(v-html="teset")
</template>

<script>


// import md from 'markdown-it'
// var md = require('markdown-it')();


export default {
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