<template>
  <div class="header-container">
    <header>
      <div class="logo-container">
        <nuxt-link to="/">
          <div class="logo-title"/>
          <div class="logo-title-en"/>
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
  width: 30%;
  max-width: 380px;
  height: 100%;
}

.logo-container a {
  text-decoration: none;
}

.logo-title {
  display: block;
  color: #161616;
  background: url('~/assets/logo-text.svg');
}

@media screen and (max-width: 768px) {
  .logo-title {
    font-size: 40px;
  }
}

@media screen and (min-width: 769px) {
  .logo-title {
    font-size: 50px;
  }
}

.logo-title-en {
  display: block;
  background: url('~/assets/logo-text-en.svg');
}

@media screen and (max-width: 768px) {
  .logo-title .en {
  }
}

@media screen and (min-width: 769px) {
  .logo-title .en {
  }
}

.en {
  letter-spacing: 0;
}

.link-container {
  font-size: 30px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .link-container {
    flex-direction: column;
  }
}

@media screen and (min-width: 769px) {
  .link-container {
    flex-direction: row;
  }
}

.link-container a {
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  color: #686868;
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
    padding: 10px 20px;
  }
}

@media screen and (min-width: 769px) {
  .site-menu {
    padding: 60px 40px;
  }
}

</style>
