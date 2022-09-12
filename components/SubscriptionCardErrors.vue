<template>
  <a-alert class="app-subscription-card-errors" type="error">
    <h6 slot="message">
      <a-icon type="meh" />
      Ops! Encontramos os seguintes problemas:
    </h6>
    <ul slot="description">
      <li v-for="(error, key) in list" :key="key">
        {{ error }}
      </li>
    </ul>
  </a-alert>
</template>

<script>
export default {
  props: {
    errors: {
      type: [Array, String],
      default: () => [],
    },
  },
  computed: {
    list() {
      return Array.isArray(this.errors) ? this.errors : [this.errors]
    },
  },
}
</script>

<style>
.app-subscription-card-errors {
  border-radius: 16px;
  border: none;
}

.app-subscription-card-errors h6 {
  display: flex;
  color: #cf1322;
  font-size: 13px;
  font-weight: bold;
}

.app-subscription-card-errors .anticon {
  margin: 3px 8px 0 0;
}

.app-subscription-card-errors ul li {
  font-size: 13px;
}
</style>
