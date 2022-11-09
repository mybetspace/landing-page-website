<template>
  <div class="d-flex justify-content-center" v-if="showBanner">
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
        <img
          class="w-100 image-desktop"
          :src="footer ? imageFooter : image"
          alt="Banner de propaganda da 1XBet"
        />
        <img
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
    footer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: true,
      image: '/Barcelona_Partnership_2023_400x100.gif',
      imageMobile: '/Barcelona_Partnership_2023_320x100.gif',
      imageFooter: '/1x_Games_700x100.gif',
    }
  },
  computed: {
    showBanner() {
      return this.show = false /*&& process.env.showBanner === 'true'*/
    },
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
