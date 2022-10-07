<template>
  <div class="container-fluid p-0">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top bg-white"
    >
      <a
        href="/"
        class="d-flex align-items-center ml-5 mb-3 mb-md-0 me-md-auto"
      >
        <img class="logo" src="~/assets/logo-dark.png" alt="My Bet Space" />
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#home" class="nav-link active" aria-current="page"
            ><i class="bi bi-house-fill"></i> Home</a
          >
        </li>
        <li class="nav-item">
          <a href="#features" class="nav-link">Funcionalidades</a>
        </li>
        <li class="nav-item">
          <a href="#pricing" class="nav-link">Preços</a>
        </li>
        <li class="nav-item"><a href="#about" class="nav-link">Missão</a></li>
        <li class="nav-item">
          <a href="#contact" class="nav-link">Contato</a>
        </li>
      </ul>
    </header>
    <main>
      <section id="home" class="section">
        <div class="px-4 pt-5 my-5 text-center">
          <h1 class="display-3 fw-bold">
            Deseja fazer sua gestão de apostas de forma mais rápida e eficiente?
          </h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead my-6">
              <b>Cansado de perder seu tempo anotando suas apostas em planilhas e administrar manualmente seus investimentos? Então veio ao lugar certo.</b>
              A My Bet Space é uma plataforma profissional de gestão de banca para trade
              esportivo na exchange da betfair. Temos como objetivo economizar seu tempo ao
              máximo, automatizando o maior número de funcionalidades possíveis
              para que você  consiga perder menos tempo com trabalhos repetitivos, lucrativo e
              <b>profissional</b>.
            </p>
            <div class="text-black-50 h3 mb-3">
              <i>Clique na imagem abaixo e acesse a Plataforma</i>
            </div>
            <a class="btn btn-primary" href="https://app.mybetspace.com">
              <img src="~/assets/logo-white.png" />
            </a>
          </div>
          <div class="overflow-hidden">
            <div class="container px-5">
              <a href="https://app.mybetspace.com">
                <img
                  src="~/assets/mbs.png"
                  class="img-fluid border rounded-3 shadow-lg my-6 mx-auto"
                  alt="Example image"
                  width="800"
                  height="700"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-6 mx-auto">
            <p class="lead my-6 py-6">
              Vai continuar gastando seu tempo com atividades chatas e
              repetitivas como planilhar? Pois o Red você pode recuperar apesar
              de não dever(rsrs), mas o tempo você nunca vai conseguir
              recuperar.
            </p>
            <h3 class="text-primary">A final quanto vale seu tempo?</h3>
            <div class="lead mt-6 text-center">
              Vamos ajudar você a economizar o seu tempo e gerar números para que
              consiga focar no trade esportivo.
            </div>
          </div>
        </div>
      </section>
      <section id="features" class="section bg-light">
        <div id="featured-3" class="container px-4 py-5">
          <h1 class="mb-6 text-primary">Funcionalidades</h1>
          <h2 class="pb-2 border-bottom">
            Melhore sua performance na bolsa esportiva
          </h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
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
                exatamente em que método você é mais lucrativo e o método em que
                perde dinheiro.
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
      </section>
      <section id="pricing" class="section">
        <div class="container py-3">
          <header>
            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 class="text-center mb-6 text-primary">Preços</h1>
              <p class="fs-5 text-muted">
                <b
                  >Todos os usuários tem direito à 15 dias gratuitos após a
                  abertura de conta.</b
                ><br />
                Após o período gratuito para continuar usando o My Bet Space é
                necessário ter uma assinatura, você pode escolher um dos planos
                abaixo.
              </p>
            </div>
          </header>

          <main>
            <div class="row row-cols-1 row-cols-md-4 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div
                    class="card-header text-white bg-primary border-primary py-3"
                  >
                    <h4 class="my-0 fw-normal text-center text-white">
                      Mensal
                    </h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">
                      R$19,99<small class="text-muted fw-light">/mês</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li class="my-2 text-muted font-italic">&nbsp;</li>
                      <li>1 mês de assinatura</li>
                      <li>&nbsp;</li>
                      <li class="mt-3">Preço total R$ 19,99</li>
                    </ul>
                    <a
                      href="https://app.mybetspace.com/"
                      target="_blank"
                      class="w-100 btn btn-lg btn-primary"
                    >
                      Assinar
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div
                    class="card-header text-white bg-primary border-primary py-3"
                  >
                    <h4 class="my-0 fw-normal text-center text-white">
                      Trimestral
                    </h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">
                      R$18,99<small class="text-muted fw-light">/mês</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li class="my-2 text-muted font-italic">
                        5% de desconto
                      </li>
                      <li>3 meses de assinatura</li>
                      <li>&nbsp;</li>
                      <li class="mt-3">Preço total R$ 56,97</li>
                    </ul>
                    <a
                      href="https://app.mybetspace.com/"
                      target="_blank"
                      type="button"
                      class="w-100 btn btn-lg btn-primary"
                    >
                      Assinar
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div
                    class="card-header text-white bg-primary border-primary py-3"
                  >
                    <h4 class="my-0 fw-normal text-center text-white">
                      Semestral
                    </h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">
                      R$18,49<small class="text-muted fw-light">/mês</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li class="my-2 text-muted font-italic">
                        7,5% de desconto
                      </li>
                      <li>6 meses de assinatura</li>
                      <li>&nbsp;</li>
                      <li class="mt-3">Preço total R$ 110,94</li>
                    </ul>
                    <a
                      href="https://app.mybetspace.com/"
                      target="_blank"
                      type="button"
                      class="w-100 btn btn-lg btn-primary"
                    >
                      Assinar
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div
                    class="card-header text-white bg-primary border-primary py-3"
                  >
                    <h4 class="my-0 fw-normal text-center text-white">
                      Anual
                    </h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title">
                      R$17,99<small class="text-muted fw-light">/mês</small>
                    </h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li class="my-2 text-muted font-italic">
                        10% de desconto
                      </li>
                      <li>12 meses de assinatura</li>
                      <li>&nbsp;</li>
                      <li class="mt-3">Preço total R$ 215,88</li>
                    </ul>
                    <a
                      href="https://app.mybetspace.com/"
                      target="_blank"
                      type="button"
                      class="w-100 btn btn-lg btn-primary"
                    >
                      Assinar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="subscriptions-messages">
              <p class="subscriptions-important-message">
                <b class="subscription-important"> IMPORTANTE:</b> Para podermos
                identificar seu pagamento é obrigatório efetuar pelo menos um
                dos passos abaixo: <br />
                - Enviar comprovante de pagamento e o e-mail de cadastro para
                <a
                  href="mailto:suporte.mybetspace@gmail.com"
                  class="text-primary"
                  >suporte.mybetspace@gmail.com</a
                >
                ou para WhatsApp
                <a
                  class="text-primary"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5548996436891&text="
                  >(48) 99643-6891</a
                >.
              </p>
              <p>
                No momento estamos apenas recebendo pagamento via PIX. O nome do
                destinatário do PIX é <i>Julierme de Oliveira Martins</i>. Caso
                não possua PIX, entre em contato pelo e-mail
                <strong>suporte.mybetspace@gmail.com</strong>.
              </p>
            </div>
          </main>
        </div>
      </section>
      <section id="about" class="section bg-light">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <h1 class="mb-6 text-primary">Missão</h1>
              <h4>
                A My Bet Space tem como missão é ajudar a comunidade de trader
                Esportivo a economizar seu tempo planilhando, auxiliar no dia a
                dia do trade, para que de forma mais ágil a validar consiga seu
                método, para ser mais lucrativo.
              </h4>
              <p>
                Resumindo de uma forma simples a nossa plataforma é uma especie
                de planilha online em que o usuário só precisa preencher o seu
                método e o resto agente faz pra você. Pegamos todos os jogos,
                nomes dos times, mercados, campeonatos , odds, stake e entre
                outras coisas mais. Geramos diversos indicadores para você tomar
                as melhores decisões e conseguir validar seus métodos Você só
                precisa cadastrar seus métodos, preenche-los e analisar seus
                dados depois.
              </p>
            </div>
            <div class="col-sm-4"></div>
          </div>
        </div>
      </section>
      <section id="contact" class="section">
        <div class="container">
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
            <div class="col-md-4 mt-4 pt-2">
              <div class="contact-detail text-center">
                <div class="icon text-primary">
                  <i class="bi bi-whatsapp"></i>
                </div>
                <div class="content mt-4">
                  <h6 class="title text-uppercase font-weight-bold">
                    Whatsapp
                  </h6>
                  <p class="text-muted">
                    Dúvidas ou sugestões entre em contato pelo whatsapp
                  </p>
                  <a href="tel:+5548996436891" class="text-primary"
                    >+55 48 99643-6891</a
                  >
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-4 pt-2">
              <div class="contact-detail text-center">
                <div class="icon text-primary">
                  <i class="bi bi-envelope"></i>
                </div>
                <div class="content mt-4">
                  <h6 class="title text-uppercase font-weight-bold">Email</h6>
                  <p class="text-muted">
                    Dúvidas ou sugestões entre em contato pelo email
                  </p>
                  <a
                    href="mailto:suporte.mybetspace@gmail.com"
                    class="text-primary"
                    >suporte.mybetspace@gmail.com</a
                  >
                </div>
              </div>
            </div>
            <div class="col-md-4 mt-4 pt-2">
              <div class="contact-detail text-center">
                <div class="icon text-primary">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="content mt-4">
                  <h6 class="title text-uppercase font-weight-bold">
                    Localização
                  </h6>
                  <p class="text-muted text-center">
                    Florianópolis - SC <br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
export default {}
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
