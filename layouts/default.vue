<template>
<section>
  <navbar></navbar>
  <nuxt />
  <foot></foot>
</section>
</template>

<script>
import navbar from '../components/ui/navbar'
import foot from '../components/ui/foot'

export default {
  components: {
    navbar,
    foot
  },
  data() {
    return {
      theme: 'dark'
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.theme == 'dark' ? 'dark' : 'light'
      }
    }
  },
}
</script>

<style lang="scss">
</style>
