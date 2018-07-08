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
        <div class="link-container">
          <a
            href="https://discord.gg/YHVsB9S"
            target="_blank">
            <span class="link-icon">
              <i class="fab fa-discord"/>
            </span>
            <span class="link-text">
              茶室
            </span>
          </a>
          <a
            href="https://twitter.com/emily_discord/"
            target="_blank">
            <span class="link-icon">
              <i class="fab fa-twitter-square"/>
            </span>
            <span class="link-text">
              呟き
            </span>
          </a>
        </div>
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
  flex-direction: column;
  justify-content: space-around;
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

.link-container {
  font-size: 30px;
  display: flex;
  justify-content: space-between;
}

.link-container a {
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  color: #686868;
}

.link-icon {
  margin: 8px 0;
  font-size: 120%;
}

.link-text {
  font-size: 50%;
}

.site-menu {
  position: absolute;
  padding: 60px 40px;
  right: 0;
}
</style>
