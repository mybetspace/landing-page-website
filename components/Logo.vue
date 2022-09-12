<template>
  <nuxt-link class="app-logo" to="/" href="/">
    <img :src="src" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  computed: {
    src() {
      switch (this.type) {
        case 'square':
          return require('~/assets/logo-square.png')

        case 'white':
          return require('~/assets/logo-white.png')

        case 'dark':
          return require('~/assets/logo-dark.png')

        default:
          return require('~/assets/logo.png')
      }
    },
  },
}
</script>

<style>
.app-logo {
  width: 200px;
}

.app-logo img {
  width: 200px;
}
</style>
