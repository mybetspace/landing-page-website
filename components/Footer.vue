<template>
  <footer class="app-footer">
    <Container>
      <a-row>
        <a-col :xs="24" :md="24" :lg="8">
          <Logo />
          <p>Operamos em cima dos dados fornecidos pela betfair.</p>
          <p>MyBetSpace © {{ year }}</p>
          <p>Todos os direitos reservados.</p>
        </a-col>
        <a-col :xs="24" :md="24" :lg="9">
          <h5>Veja também</h5>
          <ul>
            <nuxt-link tag="li" to="/sofa-score">
              <a-icon type="arrow-right" />
              Plugin SofáScore
            </nuxt-link>
            <nuxt-link tag="li" to="/game-reading">
              <a-icon type="arrow-right" />
              Aplicativo para leitura de jogo
            </nuxt-link>
          </ul>
        </a-col>
        <a-col :xs="24" :md="24" :lg="7">
          <h5>Fale com a gente ;)</h5>
          <ul>
            <li>
              <a-icon type="mobile" />
              <a :href="whatsapp" target="_blank">Whatsapp</a>
            </li>
            <li>
              <a-icon type="instagram" />
              <a :href="instagram" target="_blank">Instagran</a>
            </li>
            <li>
              <a-icon type="mail" />
              <a :href="email" target="_blank">mybetspaces@gmail.com</a>
            </li>
            <li>
              <a-icon type="environment" />
              Florianópolis, SC
            </li>
          </ul>
        </a-col>
      </a-row>
    </Container>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear()
    },
    whatsapp() {
      return 'https://api.whatsapp.com/send?phone=554899885462&text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20o%20Mybetspace.'
    },
    instagram() {
      return 'https://www.instagram.com/mybetspace/'
    },
    email() {
      return 'mailto:mybetspaces@gmail.com'
    },
  },
}
</script>

<style>
.app-footer {
  background: url('~assets/bg-stadium-1.jpg');
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;
  padding: 132px 0 78px 0;
  font-size: 14px;
  position: relative;
}

.app-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 110px;
  width: 100%;
  background-image: url('~assets/bg-waves-footer.png');
  background-size: cover;
  background-position: bottom;
}

.app-footer h6,
.app-footer h5,
.app-footer h4,
.app-footer h3,
.app-footer h2,
.app-footer h1 {
  color: #fff;
}

.app-footer .app-logo img {
  width: 150px;
  margin-bottom: 12px;
}

.app-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-block: 0;
  padding-block: 0;
}

.app-footer ul li {
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 8px;
  opacity: 0.7;
  padding-right: 8px;
  display: flex;
  align-items: flex-start;
  line-height: 1.5;
}

.app-footer ul li:hover {
  opacity: 1;
}

.app-footer ul li .anticon {
  margin-top: 3px;
  margin-right: 8px;
}

.app-footer .ant-col {
  margin-top: 32px;
}

@media only screen and (min-width: 1900px) {
  .app-footer::before {
    background-size: 3000px;
    background-position: -350px 0px;
    height: 140px;
  }
}
</style>
