<template>
  <a-form-model
    ref="form"
    :model="lead"
    :rules="rules"
    layout="vertical"
    class="app-subscription-card-form"
  >
    <a-form-model-item ref="name" prop="name">
      <a-input v-model="lead.name" placeholder="Nome completo" required>
        <a-icon slot="prefix" type="user" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item ref="email" prop="email">
      <a-input
        v-model="lead.email"
        type="email"
        placeholder="Seu email"
        required
      >
        <a-icon slot="prefix" type="mail" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item ref="mobile" prop="mobile">
      <a-input
        v-model="lead.mobile"
        v-mask="'(##) #####-####'"
        placeholder="Telefone: (99) 99999-9999"
        required
      >
        <a-icon slot="prefix" type="mobile" />
      </a-input>
    </a-form-model-item>
    <a-button
      :loading="loading"
      type="primary"
      size="large"
      block
      @click="submit"
    >
      {{ submitText }}
    </a-button>
  </a-form-model>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: null,
    },
    submitText: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      lead: {
        name: null,
        email: null,
        mobile: null,
        recaptcha: null,
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Nome é obrigatório.',
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: 'Email é obrigatório.',
            trigger: 'blur',
          },
          {
            // eslint-disable-next-line no-useless-escape
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Email inválido.',
            trigger: 'blur',
          },
        ],
        mobile: [
          {
            required: true,
            message: 'Telefone é obrigatório.',
            trigger: 'blur',
          },
        ],
      },
      loading: false,
    }
  },
  methods: {
    async submit() {
      this.loading = true
      await this.$recaptchaLoaded()
      this.lead.recaptcha = await this.$recaptcha('subscribe')
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            this.$emit('errors', false)
            const url = `${this.$config.apiBaseURL}/newsletter`
            await this.$axios.post(url, {
              ...this.lead,
              category: this.category,
            })
            this.$emit('success')
          } catch (err) {
            const { response } = err
            const { data } = response
            const errors = Array.isArray(data.error)
              ? data.error.map((error) => error.message)
              : data.error
            this.$emit('errors', errors)
          } finally {
            this.loading = false
          }
        }
        this.loading = false
      })
    },
  },
}
</script>

<style>
.app-subscription-card-form .ant-btn {
  margin-top: 0px;
}
</style>
