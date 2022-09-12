<template>
  <header class="app-header">
    <Container>
      <Logo type="square" />
      <HeaderMenus />
    </Container>
  </header>
</template>

<script>
export default {}
</script>

<style>
.app-header {
  margin-bottom: 48px;
}

.app-header .app-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  color: #fff;
}

@media only screen and (max-width: 900px) {
  .app-header .app-container {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .app-header .app-logo {
    margin-top: 24px;
    margin-bottom: 16px;
  }
}
</style>
