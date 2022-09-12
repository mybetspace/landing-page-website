<template>
  <div class="app-page-game-reading">
    <SectionLeading>
      <div class="leading text-shadow">
        <h1>Aplicativo gratuito para leitura de jogos de futebol!</h1>
        <h4>
          Baixe nosso aplicativo de leitura de jogo para iniciantes e
          <b class="text-highlight">entenda</b> o que está acontecendo em campo.
        </h4>
        <a-button type="primary" href="#download" style="margin-top: 24px">
          Download do aplicativo
          <a-icon type="download" />
        </a-button>
      </div>
      <ScreenCard />
    </SectionLeading>
    <SectionDownload id="download">
      <SubscriptionCard
        category="game-reading"
        title="Download do aplicativo"
        description="Preencha os dados e receba o aplicativo de leitura de jogo por email."
        alert="Aplicativo <strong>exclusivo</strong> para o computador (não funciona para celular)."
        submit-text="Download do aplicativo"
        success-title="Tudo certo!"
        success-subtitle="Aplicativo a caminho."
        success-description="Enviamos para seu email um link para download do aplicativo. Agora é só baixar e sair usando!"
      />
    </SectionDownload>
  </div>
</template>

<script>
export default {}
</script>

<style>
.app-page-game-reading .app-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.app-page-game-reading .leading {
  flex: 1;
  margin-top: 48px;
  margin-right: 48px;
  margin-bottom: 32px;
}

.app-page-game-reading .leading h1,
.app-page-game-reading .leading h4 {
  color: #fff !important;
}

.app-page-game-reading .app-screen-card {
  flex: 0 1 430px;
}

.app-page-game-reading .app-subscription-card {
  margin-top: -72px;
}

@media only screen and (max-width: 900px) {
  .app-page-game-reading .leading {
    text-align: center;
    margin-top: 0;
    margin-right: 0;
  }
}
</style>
