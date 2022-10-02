<template>
  <div class="d-flex justify-content-center" v-if="show">
    <div class="banner-wrapper d-flex justify-content-end">
      <button class="banner-button" @click="closeBanner">
        <a-icon type="close" />
      </button>
      <a
        :href="link"
        target="_blank"
        aria-label="Ir para site do 1XBet"
        class="banner-image"
      >
        <nuxt-img
          class="w-100"
          :src="image"
          alt="Banner de propaganda da 1XBet"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    closeBanner() {
      this.show = false
    },
  },
}
</script>