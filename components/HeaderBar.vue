<template>
  <div 
    :class="{
      'is-title': $store.state.title.isTitle
    }"
    class="header-container">
    <header>
      <div
        :class="{
          'is-title': $store.state.title.isTitle
        }" 
        class="logo-container">
        <nuxt-link 
          to="/" 
          class="logo-title">
          <img 
            class="logo-title-ja" 
            src="~/assets/emily_logo-text-ja.svg">
          <img 
            class="logo-title-ja-h"
            src="~/assets/emily_logo-text-ja-h.svg">
          <img
            class="logo-mark"
            src="~/assets/emily_logo.svg">
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
      <site-menu 
        :class="{
          'is-title': $store.state.title.isTitle
        }" 
        class="site-menu"/>
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
.header-container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
}

.header-container.is-title {
  height: 100%;
}

.logo-container {
  position: absolute;
  background: rgba(252, 252, 246, 0.85);
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;
  max-width: 380px;
  width: 30%;
  height: 100%;
}

.logo-container.is-title {
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .logo-container {
    width: 70%;
  }

  .logo-container.is-title {
    width: 30%;
  }
}

.logo-container a {
  text-decoration: none;
}

.logo-title {
  display: flex;
  flex-direction: row;
}

.is-title .logo-title {
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .logo-title {
  }
}

@media screen and (min-width: 769px) {
  .logo-title {
  }
}

.logo-title-ja {
  display: none;
  height: 60vh;
}

.is-title .logo-title-ja {
  display: block;
}

.logo-title-ja-h {
  display: block;
  width: 20vw;
}

.is-title .logo-title-ja-h {
  display: none;
}

@media screen and (max-width: 768px) {
  .logo-title-ja {
  }
}

@media screen and (min-width: 769px) {
  .logo-title-ja {
  }
}

.en {
  letter-spacing: 0;
}

.logo-mark {
  width: 40px;
  display: block;
  margin: auto;
}

.link-container {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.is-title .link-container {
  font-size: 30px;
}

@media screen and (max-width: 768px) {
  .link-container {
    flex-direction: row;
  }

  .is-title .link-container {
    flex-direction: column;
  }
}

@media screen and (min-width: 769px) {
  .is-title .link-container {
    flex-direction: row;
  }
}

.link-container a {
  margin: 10px;
  display: flex;
  flex-direction: column;
  color: #686868;
}

.is-title .link-container a {
  margin: 10px 30px;
}

.link-icon {
  margin: 4px 0 -2px;
  font-size: 120%;
}

.link-text {
  font-size: 50%;
}

.site-menu {
  position: absolute;
  right: 0;
}

@media screen and (max-width: 768px) {
  .site-menu {
    padding: 5px 10px;
  }
}

@media screen and (min-width: 769px) {
  .site-menu {
    padding: 5px 40px;
  }

  .site-menu.is-title {
    padding: 40px;
  }
}
</style>
