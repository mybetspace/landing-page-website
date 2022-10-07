export default {
  // Env/configs
  publicRuntimeConfig: {
    apiBaseURL: process.env.API_BASE_URL,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title:
      'My Bet Space - Plataforma para Gestão de Banca para Trade Esportivo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `My Bet Space - Plataforma para Gestão de Banca para Trade Esportivo. Aqui você encontra uma melhor gestão das suas apostas esportivas da betfair, 
        aumento no lucro dos seus investimentos e praticidade na sua vida como trader.`,
      },
      {
        property: 'og:title',
        content: `My Bet Space - Plataforma para Gestão de Banca para Trade Esportivo. Aqui você encontra uma melhor gestão das suas apostas esportivas da betfair, 
        aumento no lucro dos seus investimentos e praticidade na sua vida como trader.`,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script:
      process.env.DEVELOPMENT_MODE === 'true'
        ? []
        : [
            {
              src: 'https://www.googletagmanager.com/gtag/js?id=G-DYMJG8L6XZ',
              async: true,
              defer: true,
              name: 'ga-script',
            },
          ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['ant-design-vue/dist/antd.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/antd-ui', '@/plugins/v-mask'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxt/image'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
