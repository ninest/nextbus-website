<template lang="pug">
  Default(:showNavbar="true")
    article

      Top(:title='title' :subtitle='subtitle' :action='action' :mainImage='mainImage')

      Features(:features='features')
      
      Download(:download="download")

</template>

<script>

import Default from '~/layouts/Default.vue';
import Top from '@/components/landing/Top.vue';
import Features from '@/components/landing/Features.vue';
import Download from '@/components/landing/Download.vue';

export default {
  head() {
    return {
      title: `${this.siteConfig.title} | ${this.siteConfig.desc}`,
      titleTemplate: '%s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.siteConfig} – The all new open-source app for Singapore. See bus timings fast with little interaction in an interface you will love`
        }
      ]
    }
  },
  components: {
    Default, 
    Top, 
    Download,
    Features
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
      download: attributes.download,
    }
  }
}
</script>

<style lang="scss" scoped>

h1 { font-size: 3em; margin-top: 0; margin-bottom: 0; }
h2 { font-size: 2.3em; margin-top: 2em;}
</style>