<template lang="pug">
  Default(:showNavbar="true")
    article
      h1 {{ attr.title }}
      .content
        DynamicMarkdown(:renderFunc="renderFunc" :staticRenderFuncs="staticRenderFuncs")
</template>

<script>
import Default from '~/layouts/Default.vue';
import DynamicMarkdown from '~/components/article/DynamicMarkdown.vue';

export default {
  head() {
    return {
      title: this.attr.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.attr.description} - ${this.siteConfig}`
        }
      ]
    }
  },
  components: {
    Default, DynamicMarkdown
  },

  async asyncData ({ params, app }) {
    const slug = params.slug.toLowerCase();
    const markdownFileContent = await import(`~/content/guides/${slug}.md`);

    return {
      attr: markdownFileContent.attributes,
      renderFunc: `(${markdownFileContent.vue.render})`,
      staticRenderFuncs: `[${markdownFileContent.vue.staticRenderFns}]`,
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  padding: 0 15%;
}
</style>