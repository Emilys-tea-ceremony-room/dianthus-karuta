<template>
  <div class="header-container">
    <header>
      <div class="logo-container">
        <nuxt-link to="/">
          <h1 class="logo-title">
            なでしこかるた
            <span class="en">Nadeshiko Karuta</span>
          </h1>
        </nuxt-link>
      </div>
      <site-menu class="site-menu"/>
    </header>
  </div>
</template>

<script>
import SiteMenu from '~/components/SiteMenu.vue'

export default {
  components: {
    SiteMenu
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/earlyaccess/hannari.css);

.header-container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
}

.logo-container {
  position: absolute;
  background: rgba(252, 252, 246, 0.95);
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: 380px;
  height: 100%;
}

.logo-container a {
  text-decoration: none;
}

.logo-title {
  display: block;
  color: #161616;
  font-size: 50px;
  font-family: 'Hannari';
  writing-mode: vertical-rl;
}

.logo-title .en {
  display: block;
  font-size: 20px;
}

.en {
  letter-spacing: 0;
}

.site-menu {
  position: absolute;
  padding: 60px 40px;
  right: 0;
}
</style>
