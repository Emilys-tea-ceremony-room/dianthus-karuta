<template>
  <div class="frame">
    <header-bar/>
    <nuxt/>
    <footer-bar/>
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

<style>
.frame {
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #467837;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
