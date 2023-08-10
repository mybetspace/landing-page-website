<template>
  <div class="container-fluid bg-dark p-0">
    <header id="main-header"
      class="d-flex flex-wrap align-items-center py-3 mb-4 fixed-top justify-content-between bg-dark-opacity">
      <a href="/" class="d-flex align-items-center ml-5 mb-md-0 me-md-auto"
        aria-label="Logo do MyBetSpace que leva à esta mesma página">
        <img class="logo" src="/logo-white-orange.png" alt="Logo do MyBetSpace" />
      </a>

      <ul class="nav nav-pills d-none d-md-inline-flex">
        <li class="nav-item"></li>
        <li v-for="(item, i) in navItems" :key="`item${i}`" class="nav-item">
          <a v-if="i === 0" :href="item.link" class="nav-link active" aria-current="page"
            aria-label="Ir para seção Home"><i class="bi bi-house-fill"></i> {{ item.name }}</a>
          <a v-else :href="item.link" :aria-label="`Ir para seção ${item.name}`" class="nav-link h-100">{{ item.name
          }}</a>
        </li>
      </ul>
      <a-dropdown :trigger="['click']" class="menu-pills">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <a-icon class="menu-icon" type="menu" />
        </a>
        <a-menu slot="overlay">
          <a-menu-item v-for="(item, i) in navItems" :key="`item${i}`">
            <a :href="item.link" :aria-label="`Ir para seção ${item.name}`" class="menu-link">
              <i v-if="i === 0" class="bi bi-house-fill home-icon"></i>
              {{ item.name }}</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </header>
    <main class="main">
      <section id="home" class="section-home container-fluid p-0">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="position-relative">
                <img src="@/static/banner2.jpg" class="d-none d-md-block w-100" alt="Quer melhorar suas apostas banner">
                <img src="@/static/bannermob1.jpg" class="d-block d-md-none w-100"
                  alt="Quer melhorar suas apostas banner">
                <div class="opacity-banner" />
              </div>
              <div class="w-100 h-100 position-absolute top-0">
                <div class="d-flex flex-column justify-content-center align-items-center h-100 p-3 p-md-0">
                  <h1 class="text-white text-center banner-txt">
                    Sua gestão de apostas de <br /> forma mais rápida e eficiente
                  </h1>
                  <p class="text-white description-banner">A My Bet Space é uma plataforma profissional de gestão de banca
                    para trade esportivo na exchange da betfair.</p>
                  <LinkPlataforma class="mt-5" />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="position-relative">
                <img src="@/static/banner3.jpg" class="d-none d-md-block w-100" alt="Quer melhorar suas apostas banner">
                <img src="@/static/bannermob2.jpg" class="d-block d-md-none w-100"
                  alt="Quer melhorar suas apostas banner">
                <div class="opacity-banner" />
              </div>
              <div class="w-100 h-100 position-absolute top-0">
                <div class="d-flex flex-column justify-content-center align-items-center h-100 p-3 p-md-0">
                  <h1 class="text-white text-center banner-txt">
                    Afinal quanto vale seu tempo?
                  </h1>
                  <p class="text-white description-banner p-md-0 m-0">Vai continuar gastando seu tempo com atividades
                    chatas e
                    repetitivas como planilhar?</p>
                  <p class="text-white description-banner">Vamos ajudar você a economizar o seu tempo e gerar números para
                    que consiga focar no trade esportivo</p>
                  <LinkPlataforma class="mt-5" />
                </div>
              </div>
            </div>
          </div>
          <button class="d-flex align-items-center h-100 carousel-control-prev" type="button"
            data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="d-flex align-items-center h-100 carousel-control-next" type="button"
            data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section id="features" class="bg-dark w-100">
        <div class="container-fluid p-0 m-0">
          <div class="row g-4">
            <div class="col-md-6 p-0">
              <img src="@/static/function1.jpg" class="w-100" />
            </div>
            <div class="col-md-6 p-0 m-0">
              <div class="feature-card bg-light text-light rounded h-100 d-flex flex-column justify-content-between">
                <div class="feature-content p-4">
                  <i class="bi bi-box-arrow-in-down-left feature-icon"></i>
                  <h2 class="mb-3">Automatização para importar suas apostas da betfair</h2>
                  <p>
                    Veja em tempo real no seu dashboard, todas as suas entradas e saídas, lucros, prejuízos, odds e muito
                    mais.
                  </p>
                </div>
                <div class="feature-footer p-4">
                  <LinkPlataforma />
                </div>
              </div>
            </div>

            <div class="d-flex reverse p-0 m-0">
              <div class="col-md-6 p-0 m-0">
                <div class="feature-card bg-light text-light rounded h-100 d-flex flex-column justify-content-between">
                  <div class="feature-content p-4">
                    <i class="bi bi-check-circle feature-icon"></i>
                    <h2 class="mb-3">Facilidade em validar seu método</h2>
                    <p>
                      Valide seu método de forma mais rápida e simples. Saiba exatamente em que método você é mais lucrativo
                      e o método em que perde dinheiro.
                    </p>
                  </div>
                  <div class="feature-footer p-4">
                    <LinkPlataforma />
                  </div>
                </div>
              </div>
              <div class="col-md-6 p-0 m-0">
                <img src="@/static/function2.jpg" class="w-100" />
              </div>
            </div>

            <div class="col-md-6 p-0 m-0">
              <img src="@/static/function3.jpg" class="w-100" />
            </div>
            <div class="col-md-6 p-0 m-0">
              <div class="feature-card bg-light text-light rounded h-100 d-flex flex-column justify-content-between">
                <div class="feature-content p-4">
                  <i class="bi bi-clock feature-icon"></i>
                  <h2 class="mb-3">Otimização do seu tempo</h2>
                  <p>
                    Diga adeus as planilhas e coleta de informações manuais. Aqui você tem seus dados em tempo real.
                    Muitas vezes conseguimos economizar de 90% a 95% do seu tempo de planilha, tendo muito mais
                    informações do que você faria na planilha.
                  </p>
                </div>
                <div class="feature-footer p-4">
                  <LinkPlataforma />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" class="my-section section-padding w-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 col-sm-6" v-for="(plan, i) in planItems" :key="`plan${i}`">
              <div :class="'pricing-table-3 ' + plan.plan">
                <div class="pricing-table-header">
                  <h4><strong>{{ plan.name }}</strong></h4>
                </div>
                <div class="price"><strong>R${{ plan.price
                }}</strong> {{ plan.period }}</div>
                <div class="pricing-body">
                  <ul class="pricing-table-ul">
                    <li><i class="fa fa-send"></i> {{ plan.description }}</li>
                  </ul><a href="#" class="view-more">Assinar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="my-section w-100">
        <div class="bg-light w-100 section-padding d-flex flex-column align-items-center text-center about-wrapper">
          <div class="section-width col-lg-8 d-flex flex-column align-items-center">
            <h1 class="text-primary-custom">Missão</h1>
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
                <h1 class="text-primary-custom">Contato</h1>
                <p class="text-muted text-center para-desc mx-auto mb-0">
                  Dúvidas ou sugestões entre em contato
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div v-for="(contact, i) in contactItems" :key="`contact${i}`" class="col-md-4 mt-4 pt-2">
              <div class="contact-detail text-center bg-light">
                <div class="icon text-primary-custom">
                  <i :class="`bi bi-${contact.icon}`"></i>
                </div>
                <div class="content mt-4">
                  <h6 class="title text-uppercase font-weight-bold">
                    {{ contact.name }}
                  </h6>
                  <p class="text-muted text-center" v-html="contact.description"></p>
                  <a v-if="contact.link" :href="contact.link" class="text-primary-custom" target="_blank"
                    :aria-label="contactAriaLabel(i)">{{ contact.linkName }}</a>
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
          <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.facebook.com/mybetspace"
            target="_blank" role="button" data-mdb-ripple-color="dark"><i class="bi bi-facebook"></i></a>

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
          <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/mybetspace"
            target="_blank" role="button" data-mdb-ripple-color="dark"><i class="bi bi-instagram"></i></a>

          <!-- Linkedin -->
          <!--                    <a-->
          <!--                            class="btn btn-link btn-floating btn-lg text-dark m-1"-->
          <!--                            href="#!"-->
          <!--                            role="button"-->
          <!--                            data-mdb-ripple-color="dark"-->
          <!--                    ><i class="fab fa-linkedin"></i-->
          <!--                    ></a>-->
          <!-- Youtube -->
          <a class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.youtube.com/channel/UC6ivzleevCLsb9bgMKSmmqg" target="_blank" role="button"
            data-mdb-ripple-color="dark"><i class="bi bi-youtube"></i></a>
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
    period: '/Mês',
    plan: 'basic'
  },
  {
    name: 'Trimestral',
    price: '19,50',
    description: '3 meses de assinatura',
    totalPrice: '58,50',
    discount: '2,5',
    period: '/Três meses',
    plan: 'premium'
  },
  {
    name: 'Semestral',
    price: '18,99',
    description: '6 meses de assinatura',
    totalPrice: '113,94',
    discount: '5,00',
    period: '/Seis meses',
    plan: 'business'
  },
  {
    name: 'Anual',
    price: '18,50',
    description: '12 meses de assinatura',
    totalPrice: '222,00',
    discount: '7,50',
    hot: true,
    period: '/Ano',
    plan: 'enterprise'
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
      screenSize: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    // Ajustar o screenSize para o tamanho da tela do usuario
    this.screenSize = window.innerWidth;
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
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
    handleScroll() {
      const header = document.querySelector('#main-header'); // Ajuste para o seletor correto do seu header
      if (window.scrollY > 0) {
        header.classList.add('header-small');
        header.classList.remove('header-large');
      } else {
        header.classList.remove('header-small');
        header.classList.add('header-large');
      }
    }
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

.bg-dark-opacity {
  background-color: rgba(0, 0, 0, 0.7);
}

.bg-dark-opacity.header-large {
  background-color: rgba(0, 0, 0, 0.0);
}

/* Estilo para o header no topo */
.header-large {
  height: 100px;
  /* Defina a altura desejada */
  transition: height 0.3s ease-in-out;
}

/* Estilo para o header ao rolar a página */
.header-small {
  height: 70px;
  /* Defina a altura desejada */
  transition: height 0.3s ease-in-out;
}

.opacity-banner {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.banner-txt {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
}

#features p,
#features h1,
#features h2,
#features h3,
#features h4,
#features h5,
#features h6 {
  color: #e64d1a;
}

.bg-primary-custom {
  background-color: #e64d1a;
  background-image: linear-gradient(to bottom, #e64d1a, #c5370a);
}

.feature-card {
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-footer .btn {
  background-color: #e64d1a;
  color: #fff;
  border: none;
  transition: background-color 0.3s;
}

.feature-footer .btn:hover {
  background-color: #c5370a;
}

.reverse{
  flex-direction: inherit;
}

@media only screen and (max-width: 900px) {
  .app-page-index .leading {
    text-align: center;
    margin-top: 0;
    margin-right: 0;
  }

  .banner-txt {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #fff;
  }

  .bg-dark-opacity {
    background-color: rgba(0, 0, 0, 1);
  }

  .bg-dark-opacity.header-large {
    background-color: rgb(24, 24, 24);
  }

  #home {
    padding-top: 100px !important;
  }

  .description-banner {
    font-size: 1rem;
    padding-left: 10px;
    padding-right: 10px;
  }

  .pricingTable {
    margin-bottom: 35px;
  }
  .reverse{
    flex-direction: column-reverse;
  }
}
</style>
