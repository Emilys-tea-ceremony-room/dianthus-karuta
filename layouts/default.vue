<template>
  <div class="page-container">
    <div class="contents">
      <nuxt/>
      <footer-bar class="footer-bar"/>
    </div>
    <div class="frame">
      <header-bar class="header-bar"/>
    </div>
  </div>
</template>

<script>
import HeaderBar from '~/components/HeaderBar.vue'
import FooterBar from '~/components/FooterBar.vue'

export default {
  components: {
    HeaderBar,
    FooterBar
  }
}
</script>

<style scoped>
.frame {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 320px;
  height: 100%;
  min-height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 15px solid #467837;
}

.page-container {
  width: 100%;
  height: 100%;
}

.contents {
  margin: 15px;
  background: #b4d2a6;
  z-index: -5;
}

.header-bar {
  position: fixed;
  z-index: 5;
}

.footer-bar {
  z-index: 5;
  display: none;
}
</style>
