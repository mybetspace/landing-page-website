<template>
  <a-tooltip title="Fale com a gente!" placement="left">
    <a
      href="https://api.whatsapp.com/send?phone=554899885462&text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20o%20Mybetspace."
      target="_blank"
      class="app-button-whatsapp"
    >
      <img src="~/assets/icon-wpp.png" />
    </a>
  </a-tooltip>
</template>

<style>
.app-button-whatsapp {
  background: #25d366;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  z-index: 1;
  position: fixed;
  bottom: 96px;
  right: 10px;
  display: grid;
  place-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  -moz-box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28);
  box-shadow: 0px 2px 12px rgba(126, 142, 177, 0.28) !important;
}

.app-button-whatsapp img {
  width: 26px;
  margin-left: 2px;
}
</style>
