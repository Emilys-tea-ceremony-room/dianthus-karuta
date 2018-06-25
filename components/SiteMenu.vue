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
          link: "/",
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
  width: calc(100% - 380px);
  float: right;
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
  line-height: 110%;
  padding: 20px 30px;
  display: inline;
  white-space: nowrap;
  -webkit-writing-mode: vertical-rl;
      -ms-writing-mode: tb-rl;
          writing-mode: vertical-rl;
}

.menu-item a > span {
  display: block;
  position: relative;
}

.menu-item a span.en {
  display: block;
  font-size: 13px;
}

.en {
    letter-spacing: 0;
}
</style>
