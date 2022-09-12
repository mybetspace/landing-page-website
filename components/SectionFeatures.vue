<template>
  <section class="app-section-features">
    <Container>
      <div class="content">
        <h2>Melhore sua performance na bolsa esportiva</h2>
        <p class="description">
          Confira algumas características do nosso dashboard em seu lançamento:
        </p>
      </div>
      <a-list
        :data-source="features"
        :grid="{
          gutter: 32,
          column: 2,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }"
      >
        <a-list-item slot="renderItem" slot-scope="item">
          <FeatureCard
            :title="item.title"
            :icon="item.icon"
            :description="item.description"
            style="margin-bottom: 32px"
          />
        </a-list-item>
      </a-list>
    </Container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: 'pie-chart',
          title: 'Automatização da captura das apostas na betfair',
          description:
            'Veja em tempo real no seu dashboard customizado, todos os dados da betfair.',
        },
        {
          icon: 'check-circle',
          title: 'Facilidade em validar seu método',
          description: 'Saiba exatamente em que método você é mais lucrativo.',
        },
        {
          icon: 'login',
          title: 'Facilidade em analisar suas entradas',
          description:
            'Obtenha controle sobre o histórico de entradas através de análise por gráficos.',
        },
        {
          icon: 'clock-circle',
          title: 'Otimização do seu tempo',
          description:
            'Diga adeus as planilhas e coleta de informações manuais. Aqui você tem seus dados em tempo real.',
        },
      ],
    }
  },
}
</script>

<style>
.app-section-features {
  text-align: center;
  padding: 0 0 100px 0;
  background-color: #f4f7fa;
}

.app-section-features .content {
  margin: 0 auto;
  margin-top: -36px;
  max-width: 500px;
}

.app-section-features .description {
  margin-bottom: 24px;
}
</style>
