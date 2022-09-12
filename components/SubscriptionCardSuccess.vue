<template>
  <section class="app-subscription-card-success">
    <a-icon type="check-circle" />
    <h1>
      {{ title }}
    </h1>
    <h3>
      {{ subtitle }}
    </h3>
    <div class="description">
      {{ description }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
}
</script>

<style>
.app-subscription-card-success {
  text-align: center;
}

.app-subscription-card-success > .anticon {
  margin: 32px 0;
  color: #52c41a;
  font-size: 72px;
}

.app-subscription-card-success h3 .anticon {
  color: #858d9a50;
  font-size: 20px;
}

.app-subscription-card-success .description {
  margin-top: 16px;
}
</style>
