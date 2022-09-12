<template>
  <a-card class="app-feature-card">
    <a-icon :type="icon" />
    <h5>{{ title }}</h5>
    <div v-if="description" class="description">
      {{ description }}
    </div>
  </a-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    icon: {
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
.app-feature-card {
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 16px;
  -webkit-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  -moz-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
}

.app-feature-card .ant-card-body {
  padding: 48px 54px;
  text-align: center;
}

.app-feature-card .anticon {
  font-size: 72px;
  margin-bottom: 24px;
  color: #fa541c;
}

.app-feature-card .description {
  font-size: 14px;
  margin-top: 16px;
}

@media only screen and (max-width: 900px) {
  .app-feature-card .ant-card-body {
    padding: 32px;
  }
}
</style>
