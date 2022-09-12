<template>
  <section class="app-container">
    <slot />
  </section>
</template>

<style>
.app-container {
  max-width: 900px;
  position: relative;
  margin: 0 auto;
  padding: 0 32px;
}

@media only screen and (max-width: 900px) {
  .app-container {
    max-width: 100%;
    padding: 0 16px;
  }
}
</style>
