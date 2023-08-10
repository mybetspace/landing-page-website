<template>
  <a
    class="button-platform btn-primary rounded-3 text-decoration-none"
    href="https://app.mybetspace.com"
    aria-label="Ir para a plataforma MyBetSpace"
    target="_blank"
  >
    <div class="text-center text-cta">Economize Seu Tempo</div>
    <img
      class="button-platform-logo"
      src="/logo-white.png"
      alt="Logo do MyBetSpace"
      loading="lazy"
    />
  </a>
</template>

<style>
.text-cta{
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-right: 1rem;
}
@media only screen and (max-width: 900px) {
  .text-cta{
    font-size: 1rem;
  }
}
.button-platform:hover{
  background: linear-gradient(90deg, rgba(230,77,26,1) 20%, rgb(171, 43, 0) 100%);
  transition: 0.3s all;
}
</style>