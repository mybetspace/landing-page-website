<template>
  <iframe
    class="app-iframe-youtube"
    allow="autoplay; accelerometer; encrypted-media; gyroscope; fullscreen; picture-in-picture"
    allowfullscreen=""
    frameborder="0"
    :src="`https://www.youtube.com/embed/${videoId}?autoplay=0&amp;rel=0`"
  />
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
.app-iframe-youtube {
  background: #000000;
  width: 100%;
  height: 500px;
  border-radius: 16px;
  border: 10px solid #fff;
  z-index: 1;
  position: relative;
  -webkit-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  -moz-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
}

@media only screen and (max-width: 900px) {
  .app-iframe-youtube {
    height: 300px;
  }
}
</style>
