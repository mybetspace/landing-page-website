<template>
  <img class="app-screen-card" src="~/assets/screen-game-reading.jpeg" />
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
.app-screen-card {
  background: #000000;
  width: 100%;
  border-radius: 16px;
  border: 10px solid #fff;
  z-index: 1;
  position: relative;
  -webkit-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  -moz-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
}

.app-screen-card::after {
  content: '';
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: 0.2;
  left: 15px;
  top: 24px;
  z-index: -1;
  border-radius: 16px;
  position: absolute;
}
</style>
