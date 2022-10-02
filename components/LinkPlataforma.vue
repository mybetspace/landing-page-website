<template>
  <a
    class="button-platform btn-primary rounded-3"
    href="https://app.mybetspace.com"
    aria-label="Ir para a plataforma MyBetSpace"
    target="_blank"
    >Clique aqui para acessar
    <nuxt-img
      class="button-platform-logo"
      src="/logo-white.png"
      alt="Logo do MyBetSpace"
      :loading="loading"
    />
  </a>
</template>

<script>
export default {
  props: {
    loading: {
      type: String,
      default: 'eager',
    },
  },
}
</script>