<template>
  <header class="header-bar">
    <div class="header-background">
      <div class="header-container">
        <h1 class="logo-title"><nuxt-link to="/">なでしこかるた(仮)</nuxt-link></h1>
        <site-menu/>
      </div>
    </div>
  </header>
</template>

<script>
import SiteMenu from '~/components/SiteMenu.vue'

export default {
  components: {
    SiteMenu
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/earlyaccess/hannari.css);

.header-bar {
  top: 15px;
  right: 15px;
  left: 15px;
  position: fixed;
  z-index: 5;
}

.header-background {
  padding: 60px 0 20px;
}

.header-container {
  width: 90%;
  position: relative;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.logo-title {
  width: 380px;
  background: rgba(248, 248, 206, 0.4);
  padding: 30px 40px;
  float: left;
  font-family: 'Hannari';
}
</style>
