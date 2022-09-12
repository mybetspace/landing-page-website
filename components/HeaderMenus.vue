<template>
  <ul class="app-header-menus">
    <nuxt-link to="/sofa-score" href="sofa-score" tag="li">
      Plugin SofaScore
    </nuxt-link>
    <nuxt-link to="/game-reading" href="game-reading" tag="li">
      Aplicativo para leitura de jogo
    </nuxt-link>
  </ul>
</template>

<style>
.app-header-menus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  margin-block: 0;
  padding: 0;
  padding-block: 0;
}

.app-header-menus li {
  cursor: pointer;
  opacity: 0.7;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  margin-left: 16px;
  position: relative;
}

.app-header-menus li.nuxt-link-active {
  opacity: 1;
}

.app-header-menus li.nuxt-link-active::after {
  content: '';
  width: 100%;
  height: 2px;
  background: #fff;
  position: absolute;
  bottom: -8px;
  left: 0;
}

.app-header-menus li:hover {
  opacity: 1;
}
</style>
