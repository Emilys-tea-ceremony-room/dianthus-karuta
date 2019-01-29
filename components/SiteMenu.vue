<template>
  <div class="menu">
    <nav>
      <div 
        :class="{
          'is-active': $store.state.siteMenu.isMenuActive, 
          'is-title': $store.state.title.isTitle
        }" 
        class="navbar-burger" 
        data-target="navMenu" 
        @click="$store.commit('siteMenu/toggle')">
        <span/>
        <span/>
        <span/>
      </div>
      <div 
        id="navMenu" 
        :class="{
          'is-active': $store.state.siteMenu.isMenuActive, 
          'is-title': $store.state.title.isTitle
        }" 
        class="navbar-menu">
        <ul class="menu-list">
          <li
            v-for="item in items"
            :key="item.name"
            class="menu-item">
            <nuxt-link 
              :to="item.link"
              :class="{
                'is-title': $store.state.title.isTitle
            }">
              <span>
                {{ item.name }}
                <span class="en">{{ item.nameEn }}</span>
              </span>
            </nuxt-link>
          </li>
          <li class="menu-item link-container">
            <a
              href="https://twitter.com/emily_discord/"
              target="_blank">
              <span>
                <i class="fab fa-twitter-square"/>
              </span>
            </a>
            <a
              href="https://discord.gg/YHVsB9S"
              target="_blank">
              <span>
                <i class="fab fa-discord"/>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        /*{
          link: "/",
          name: "新着情報",
          nameEn: "News"
        },
        {
          link: "/profile",
          name: "人物紹介",
          nameEn: "Profile"
        },
        {
          link: "/",
          name: "活動記録",
          nameEn: "History"
        },
        {
          link: "/",
          name: "作品目録",
          nameEn: "Discography"
        },*/
        /*{
          link: "/",
          name: "撫子歌留多",
          nameEn: "Nadeshiko Karuta"
        },*/
        /*{
          link: "/",
          name: "電子案内",
          nameEn: "Links"
        }*/
      ]
    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
}

.menu-list {
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
}

@media screen and (max-width: 768px) {
  .menu-list {
    flex-direction: column;
  }
}

@media screen and (min-width: 769px) {
  .menu-list {
    flex-direction: row;
  }
}

.menu-item {
  letter-spacing: 0;
  font-size: 20px;
  color: #f8f8f8;
  width: 100px;
}

.menu-item a {
  position: relative;
  text-align: left;
  color: #161616;
  text-decoration: none;
  line-height: 90%;
  padding: 20px 30px;
  display: inline;
  white-space: nowrap;
  font-size: 90%;
}

@media screen and (max-width: 768px) {
  .menu-item a {
    writing-mode: rl;
  }
}

@media screen and (min-width: 769px) {
  .menu-item a.is-title {
    font-size: 120%;
    writing-mode: vertical-rl;
  }
}

.menu-item a > span {
  display: block;
  position: relative;
  text-shadow: 0px 0px 8px #fff;
}

.menu-item a span.en {
  display: block;
  font-size: 13px;
}

.en {
    letter-spacing: 0;
}

.link-container {
  display: none;
}

.navbar-burger {
  cursor: pointer;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
}

@media screen and (max-width: 768px) {
  .navbar-burger {
    display: block;
  }
}

@media screen and (min-width: 769px) {
  .navbar-burger {
    display: none;
  }
}

.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 2px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
  width: 16px;
  box-shadow: 0 0 16px 0 #fff;
}

.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}

.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}

.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}

.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0.15);
}

.navbar-burger.is-active span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}

.navbar-menu {
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
  padding: 0.5rem 0;
}

@media screen and (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .navbar-menu {
    display: block;
  }
}

.navbar-menu.is-active {
  display: block;
}
</style>
