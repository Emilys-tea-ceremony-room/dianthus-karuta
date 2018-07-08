<template>
  <div class="menu">
    <nav>
      <ul class="menu-list">
        <li
          v-for="item in items"
          :key="item.name"
          class="menu-item">
          <nuxt-link :to="item.link">
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
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
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
        },
        {
          link: "/",
          name: "電子案内",
          nameEn: "Links"
        }
      ]
    }
  }
}
</script>

<style>
.menu {
  display: flex;
}

.menu-list {
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
}

.menu-item {
  letter-spacing: 0;
  font-size: 20px;
  color: #f8f8f8;
  width: 100px;
}

.menu-item a {
  position: relative;
  font-size: 120%;
  text-align: left;
  color: #161616;
  text-decoration: none;
  line-height: 90%;
  padding: 20px 30px;
  display: inline;
  white-space: nowrap;
  writing-mode: vertical-rl;
}

.menu-item a > span {
  display: block;
  position: relative;
  text-shadow: 0px 0px 4px #fff;
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
</style>
