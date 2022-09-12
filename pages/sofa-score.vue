<template>
  <div class="app-page-sofa-score">
    <SectionLeading>
      <div class="leading text-shadow">
        <h1>Plugin SofaScore gratuito!</h1>
        <h4>
          Deixe o SofaScore mais <b class="text-highlight">limpo</b>.
          Concentre-se no que realmente importa.
        </h4>
        <a-button type="primary" href="#download" style="margin-top: 24px">
          Download do plugin
          <a-icon type="download" />
        </a-button>
      </div>
      <IframeYoutube video-id="qY3vhHpA3Bc" />
    </SectionLeading>
    <SectionDownload id="download">
      <SubscriptionCard
        category="sofa-score"
        title="Download do plugin"
        description="Preencha os dados e receba o plugin por email."
        alert="Plugin <strong>exclusivo</strong> para o Chrome em desktop (não funciona para mobile)."
        submit-text="Fazer download do plugin"
        success-title="Tudo certo!"
        success-subtitle="Plugin a caminho."
        success-description="Enviamos para seu email um link para download do plugin. Agora é só baixar e sair usando!"
      />
    </SectionDownload>
  </div>
</template>

<script>
export default {}
</script>

<style>
.app-page-sofa-score .leading {
  text-align: center;
}

.app-page-sofa-score .leading h1,
.app-page-sofa-score .leading h4 {
  color: #fff !important;
}

.app-page-sofa-score .app-iframe-youtube {
  margin-top: 32px;
}

.app-page-sofa-score .app-subscription-card {
  margin-top: -72px;
}
</style>
