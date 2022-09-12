<template>
  <a-card class="app-subscription-card">
    <SubscriptionCardSuccess
      v-if="status === 'success'"
      :title="successTitle"
      :subtitle="successSubtitle"
      :description="successDescription"
    />
    <template v-else>
      <div class="card-leading">
        <h3>
          {{ title }}
        </h3>
        <div class="description">
          {{ description }}
        </div>
      </div>
      <SubscriptionCardErrors v-if="errors" :errors="errors" />
      <SubscriptionCardForm
        :category="category"
        :submit-text="submitText"
        @errors="setErrors"
        @success="setSuccess"
      />
      <div class="alert">
        <span v-html="alert"></span>
      </div>
    </template>
  </a-card>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    alert: {
      type: String,
      default: null,
    },
    submitText: {
      type: String,
      default: null,
    },
    successTitle: {
      type: String,
      default: null,
    },
    successSubtitle: {
      type: String,
      default: null,
    },
    successDescription: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      status: 'form',
      errors: false,
    }
  },
  methods: {
    setErrors(errs) {
      this.status = 'form'
      this.errors = errs
    },
    setSuccess() {
      this.status = 'success'
      this.errors = false
    },
  },
}
</script>

<style>
.app-subscription-card {
  width: 100%;
  border-radius: 16px;
  border: none;
  z-index: 1;
  position: relative;
  -webkit-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  -moz-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
}

.app-subscription-card::after {
  content: '';
  height: 100%;
  width: 100%;
  background: #fff;
  opacity: 0.2;
  left: 15px;
  top: 24px;
  z-index: -1;
  border-radius: 16px;
  position: absolute;
}

.app-subscription-card .ant-card-body {
  padding: 60px;
}

.app-subscription-card .description {
  font-size: 14px;
  margin-bottom: 16px;
}

.app-subscription-card .alert {
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
}

.app-subscription-card .card-leading {
  text-align: center;
}

.app-subscription-card .card-leading .ant-input {
  text-align: left;
}

.app-subscription-card .app-subscription-card-errors {
  margin-bottom: 16px;
}

@media only screen and (max-width: 900px) {
  .app-subscription-card .ant-card-body {
    padding: 32px;
  }
}
</style>
