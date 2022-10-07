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
          class="w-100 image-desktop"
          :src="image"
          alt="Banner de propaganda da 1XBet"
        />
        <nuxt-img
          class="w-100 image-mobile"
          :src="imageMobile"
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
  },
  data() {
    return {
      show: true,
      image: '/Barcelona_Partnership_2023_400x100.gif',
      imageMobile: '/Barcelona_Partnership_2023_320x100.gif',
    }
  },
  methods: {
    closeBanner() {
      this.show = false
    },
  },
}
</script>

<style>
@media screen and (max-width: 499px) {
  .image-desktop {
    display: none;
  }
}
@media screen and (min-width: 500px) {
  .image-mobile {
    display: none;
  }
}
</style>
