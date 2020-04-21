<template lang="pug">
  Default(:showNavbar="true")
    h1 Privacy policy
    .content
      markdown
</template>

<script>
import Default from '~/layouts/Default.vue';
import mdFileContent from '~/content/privacy-policy.md';

export default {
  head() {
    return {
      title: 'Privacy policy'
    }
  },
  components: {
    Default,
    markdown: mdFileContent.vue.component
  }
}
</script>