<template>
  <div class="container-fluid p-0">
    <header
      class="d-flex flex-wrap align-items-center py-3 mb-4 border-bottom fixed-top bg-white justify-content-between"
    >
      <a
        href="/"
        class="d-flex align-items-center ml-5 mb-md-0 me-md-auto"
        aria-label="Logo do MyBetSpace que leva à esta mesma página"
      >
        <img class="logo" src="/logo-dark.png" alt="Logo do MyBetSpace" />
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"></li>
        <li v-for="(item, i) in navItems" :key="`item${i}`" class="nav-item">
          <a
            v-if="i === 0"
            :href="item.link"
            class="nav-link active"
            aria-current="page"
            aria-label="Ir para seção Home"
            ><i class="bi bi-house-fill"></i> {{ item.name }}</a
          >
          <a
            v-else
            :href="item.link"
            :aria-label="`Ir para seção ${item.name}`"
            class="nav-link"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <a-dropdown :trigger="['click']" class="menu-pills">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <a-icon class="menu-icon" type="menu" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item v-for="(item, i) in navItems" :key="`item${i}`">
            <a
              :href="item.link"
              :aria-label="`Ir para seção ${item.name}`"
              class="menu-link"
            >
              <i v-if="i === 0" class="bi bi-house-fill home-icon"></i>
              {{ item.name }}</a
            >
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </header>
    <main class="main">
      <section id="home" class="section-home section-padding mt-6">
        <div class="mt-5 section-width">
          <Banner class="pb-6" link="https://bit.ly/2-banner1xbet" />
          <h1 class="display-4 fw-bold pb-1 text-justify">
            Deseja fazer sua gestão de apostas de forma mais rápida e eficiente?
          </h1>
          <div>
            <p class="lead my-6 pb-6 text-justify">
              <b
                >Cansado de perder seu tempo anotando suas apostas em planilhas
                e administrar manualmente seus investimentos? Então veio ao
                lugar certo.</b
              >
              A My Bet Space é uma plataforma profissional de gestão de banca
              para trade esportivo na exchange da betfair. Temos como objetivo
              economizar seu tempo ao máximo, automatizando o maior número de
              funcionalidades possíveis para que você consiga perder menos tempo
              com trabalhos repetitivos, lucrativo e
              <b>profissional</b>.
            </p>
            <div class="d-flex justify-content-center">
              <LinkPlataforma class="col-lg-6" />
            </div>
          </div>
          <div class="graphic-wrapper">
            <img
              class="img-fluid border rounded-3 my-6"
              src="/mbs.png"
              alt="Imagem com dois gráficos mostrando o resultado por dia e da banca da plataforma MyBetSpace"
            />
          </div>
          <div
            class="d-flex column align-items-center flex-column bg-light time-wrapper"
          >
            <h3 class="text-primary text-center">
              Afinal quanto vale seu tempo?
            </h3>
            <div class="d-flex flex-column align-items-center py-6">
              <p class="lead col-lg-6 mt-2 text-center">
                Vai continuar gastando seu tempo com atividades chatas e
                repetitivas como planilhar? Pois o Red você pode recuperar
                apesar de não dever(rsrs), mas o tempo você nunca vai conseguir
                recuperar.
              </p>
              <div class="lead mt-2 mb-6 col-lg-6 text-center">
                Vamos ajudar você a economizar o seu tempo e gerar números para
                que consiga focar no trade esportivo.
              </div>
            </div>
            <div class="d-flex justify-content-center col-lg-6">
              <LinkPlataforma />
            </div>
          </div>
        </div>
      </section>
      <section id="features" class="my-section w-100">
        <div
          id="featured-3"
          class="bg-light w-100 section-padding d-flex flex-column align-items-center feature-wrapper"
        >
          <div class="section-width">
            <h1 class="mb-6 text-primary">Funcionalidades</h1>
            <h2 class="pb-2 border-bottom">
              Melhore sua performance na bolsa esportiva
            </h2>
            <div class="row g-4 pt-5 row-cols-1 row-cols-lg-3">
              <div class="feature col">
                <div class="feature-icon bg-primary bg-gradient">
                  <i class="bi bi-box-arrow-in-down-left"></i>
                </div>
                <h2>Automatização para importar suas apostas da betfair</h2>
                <p>
                  Veja em tempo real no seu dashboard, todos suas entradas e
                  saidas, lucros, prejuízos, odds e muito mais.
                </p>
              </div>
              <div class="feature col">
                <div class="feature-icon bg-primary bg-gradient">
                  <i class="bi bi-check-circle"></i>
                </div>
                <h2>Facilidade em validar seu método</h2>
                <p>
                  Valide seu método de forma mais rápida e simples. Saiba
                  exatamente em que método você é mais lucrativo e o método em
                  que perde dinheiro.
                </p>
              </div>
              <div class="feature col">
                <div class="feature-icon bg-primary bg-gradient">
                  <i class="bi bi-clock"></i>
                </div>
                <h2>Otimização do seu tempo</h2>
                <p>
                  Diga adeus as planilhas e coleta de informações manuais. Aqui
                  você tem seus dados em tempo real. Muitas vezes conseguimos
                  economizar de 90% a 95% do seu tempo de planilha, tendo muito
                  mais informações do que você faria na planilha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" class="my-section section-padding">
        <div class="section-width">
          <div class="pricing-header pb-md-4">
            <h1 class="mb-6 text-primary">Preços</h1>
            <p class="fs-5 text-muted">
              <b
                >Todos os usuários novos tem direito à 10 dias gratuitos
                após a abertura de conta.</b
              ><br />
              Após o período gratuito para continuar usando o My Bet Space é
              necessário ter uma assinatura, você pode escolher um dos planos
              abaixo.
            </p>
          </div>

          <div
            class="row row-cols-1 row-cols-md-2 row-cols-lg-4 mb-3 text-center"
          >
            <div class="col" v-for="(plan, i) in planItems" :key="`plan${i}`">
              <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div
                  class="card-header text-white bg-primary border-primary py-3"
                >
                  <h4 class="my-0 fw-normal text-center text-white">
                    {{ plan.name }}
                  </h4>
                </div>
                <div class="card-body">
                  <h1 class="card-title pricing-card-title">
                    R${{ plan.price
                    }}<small class="text-muted fw-light">/mês</small>
                  </h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li
                      class="my-2 text-muted font-italic"
                      v-html="descontoLabel(plan.discount)"
                    ></li>
                    <li>{{ plan.description }}</li>
                    <li>&nbsp;</li>
                    <li class="mt-3">Preço total R$ {{ plan.totalPrice }}</li>
                  </ul>
                  <a
                    href="https://app.mybetspace.com/"
                    target="_blank"
                    type="button"
                    class="w-100 btn btn-lg btn-primary"
                    aria-label="Botão Assinar que vai para a plataforma MyBetSpace"
                  >
                    Assinar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="my-section w-100">
        <div
          class="bg-light w-100 section-padding d-flex flex-column align-items-center text-center about-wrapper"
        >
          <div
            class="section-width col-lg-8 d-flex flex-column align-items-center"
          >
            <h1 class="text-primary">Missão</h1>
            <h4 class="pt-4 pb-2 text-justify">
              A My Bet Space tem como missão é ajudar a comunidade de trader
              Esportivo a economizar seu tempo planilhando, auxiliar no dia a
              dia do trade, para que de forma mais ágil a validar consiga seu
              método, para ser mais lucrativo.
            </h4>
            <p class="text-justify">
              Resumindo de uma forma simples a nossa plataforma é uma especie de
              planilha online em que o usuário só precisa preencher o seu método
              e o resto agente faz pra você. Pegamos todos os jogos, nomes dos
              times, mercados, campeonatos , odds, stake e entre outras coisas
              mais. Geramos diversos indicadores para você tomar as melhores
              decisões e conseguir validar seus métodos Você só precisa
              cadastrar seus métodos, preenche-los e analisar seus dados depois.
            </p>
            <LinkPlataforma class="mt-2 col-lg-6" />
          </div>
        </div>
      </section>
      <section id="contact" class="my-section section-padding">
        <div class="section-width">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h1 class="text-primary">Contato</h1>
                <p class="text-muted text-center para-desc mx-auto mb-0">
                  Dúvidas ou sugestões entre em contato
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              v-for="(contact, i) in contactItems"
              :key="`contact${i}`"
              class="col-md-4 mt-4 pt-2"
            >
              <div class="contact-detail text-center bg-light">
                <div class="icon text-primary">
                  <i :class="`bi bi-${contact.icon}`"></i>
                </div>
                <div class="content mt-4">
                  <h6 class="title text-uppercase font-weight-bold">
                    {{ contact.name }}
                  </h6>
                  <p
                    class="text-muted text-center"
                    v-html="contact.description"
                  ></p>
                  <a
                    v-if="contact.link"
                    :href="contact.link"
                    class="text-primary"
                    target="_blank"
                    :aria-label="contactAriaLabel(i)"
                    >{{ contact.linkName }}</a
                  >
                  <div v-else>&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="floating-banner">
        <Banner link="https://bit.ly/1-Banner1xbet" :footer="true" />
      </div>
    </main>
    <footer class="text-center text-white" style="background-color: #f1f1f1">
      <!-- Grid container -->
      <div class="container pt-4">
        <!-- Section: Social media -->
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/mybetspace"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="bi bi-facebook"></i
          ></a>

          <!-- Twitter -->
          <!--                    <a-->
          <!--                            class="btn btn-link btn-floating btn-lg text-dark m-1"-->
          <!--                            href="#!"-->
          <!--                            role="button"-->
          <!--                            data-mdb-ripple-color="dark"-->
          <!--                    ><i class="fab fa-twitter"></i-->
          <!--                    ></a>-->

          <!-- Google -->
          <!--                    <a-->
          <!--                            class="btn btn-link btn-floating btn-lg text-dark m-1"-->
          <!--                            href="#!"-->
          <!--                            role="button"-->
          <!--                            data-mdb-ripple-color="dark"-->
          <!--                    ><i class="fab fa-google"></i-->
          <!--                    ></a>-->

          <!-- Instagram -->
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/mybetspace"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="bi bi-instagram"></i
          ></a>

          <!-- Linkedin -->
          <!--                    <a-->
          <!--                            class="btn btn-link btn-floating btn-lg text-dark m-1"-->
          <!--                            href="#!"-->
          <!--                            role="button"-->
          <!--                            data-mdb-ripple-color="dark"-->
          <!--                    ><i class="fab fa-linkedin"></i-->
          <!--                    ></a>-->
          <!-- Youtube -->
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.youtube.com/channel/UC6ivzleevCLsb9bgMKSmmqg"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
            ><i class="bi bi-youtube"></i
          ></a>
        </section>
        <!-- Section: Social media -->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center text-dark p-3">
        © 2021 Copyright
        <a class="text-dark" href="https://www.mybetspace.com/">My Bet Space</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
const navItems = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'Funcionalidades',
    link: '#features',
  },
  {
    name: 'Preços',
    link: '#pricing',
  },
  {
    name: 'Missão',
    link: '#about',
  },
  {
    name: 'Contato',
    link: '#contact',
  },
]

const planItems = [
  {
    name: 'Mensal',
    price: '19,99',
    description: '1 mês de assinatura',
    totalPrice: '19,99',
  },
  {
    name: 'Trimestral',
    price: '19,50',
    description: '3 meses de assinatura',
    totalPrice: '58,50',
    discount: '2,5',
  },
  {
    name: 'Semestral',
    price: '18,99',
    description: '6 meses de assinatura',
    totalPrice: '113,94',
    discount: '5,00',
  },
  {
    name: 'Anual',
    price: '18,50',
    description: '12 meses de assinatura',
    totalPrice: '222,00',
    discount: '7,50',
  },
]

const contactItems = [
  {
    name: 'WHATSAPP',
    description: 'Dúvidas ou sugestões entre em contato pelo whatsapp',
    link: 'https://api.whatsapp.com/send?phone=5548996436891&text=Olá',
    linkName: '+55 48 99643-6891',
    icon: 'whatsapp',
  },
  {
    name: 'EMAIL',
    description: 'Dúvidas ou sugestões entre em contato pelo email',
    link: 'mailto:suporte@mybetspace.com',
    linkName: 'suporte@mybetspace.com',
    icon: 'envelope',
  },
  {
    name: 'LOCALIZAÇÃO',
    description: 'Florianópolis - SC <br /> Brasil',
    icon: 'geo-alt',
  },
]

export default {
  data() {
    return {
      navItems,
      planItems,
      contactItems,
    }
  },
  methods: {
    descontoLabel(discount) {
      return discount ? `${discount}% de desconto` : '&nbsp;'
    },
    contactAriaLabel(index) {
      return index === 0
        ? 'Iniciar conversa no WhatsApp com este número'
        : 'Ir para provedor de email'
    },
  },
}
</script>

<style>
.app-page-index .app-section-leading .app-container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.app-page-index .leading {
  flex: 1;
  color: #fff;
  margin-top: 32px;
  margin-right: 48px;
  margin-bottom: 32px;
}

.app-page-index .leading h1,
.app-page-index .leading h2,
.app-page-index .leading h3,
.app-page-index .leading h4,
.app-page-index .leading h5,
.app-page-index .leading h6 {
  color: #fff;
}

.app-page-index .leading .subtitle {
  opacity: 0.9;
}

.app-page-index .app-subscription-card {
  flex: 0 1 400px;
}

@media only screen and (max-width: 900px) {
  .app-page-index .leading {
    text-align: center;
    margin-top: 0;
    margin-right: 0;
  }
}
</style>
