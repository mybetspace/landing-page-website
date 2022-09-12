<template>
  <section class="app-section-leading">
    <Container>
      <slot />
    </Container>
  </section>
</template>

<style>
.app-section-leading {
  background-image: url('~assets/bg-waves.png');
  background-size: cover;
  background-position: bottom;
  padding-bottom: 140px;
}

.app-section-leading .app-container {
  text-align: left;
}

@media only screen and (min-width: 1900px) {
  .app-section-leading {
    background-size: 4000px;
    background-position: -850px -700px;
  }
}
</style>
