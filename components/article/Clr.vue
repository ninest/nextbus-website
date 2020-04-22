<template lang="pug">
  span(:class="color")
    slot
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.green { color: green }
.orange { color: orange }
.red { color: red }
</style>