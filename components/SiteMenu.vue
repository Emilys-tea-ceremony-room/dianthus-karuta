<template lang="pug">
  .menu
    nav
      .navbar-burger(
        :class="{ \
          'is-active': isMenuActive, \
          'is-title': isTitle \
        }"
        data-target="navMenu"
        @click="$store.commit('siteMenu/toggle')"
      )
        span
        span
        span
      .navbar-menu(
        id="navMenu"
        :class="{ \
          'is-active': isMenuActive, \
          'is-title': isTitle \
        }"
      )
        ul.menu-list
          li.menu-item(v-for="item in items" :key="item.name")
            nuxt-link(
              :to="item.link"
              :class="{'is-title': isTitle}"
            )
              span {{ item.name }}
                span.en {{ item.nameEn }}
          li.menu-item.link-container
            a(href="https://twitter.com/emily_discord/" target="_blank")
              span
                font-awesome-icon(:icon="['fab', 'discord']")
            a(href="https://discord.gg/YHVsB9S" target="_blank")
              span
                font-awesome-icon(:icon="['fab', 'twitter-square']")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SiteMenu extends Vue {
  items = [
    /* {
          link: "/",
          name: "新着情報",
          nameEn: "News"
        }, */
    {
      link: '/profile',
      name: '人物紹介',
      nameEn: 'Profile'
    }
    /* {
          link: "/",
          name: "活動記録",
          nameEn: "History"
        },
        {
          link: "/",
          name: "作品目録",
          nameEn: "Discography"
        }, */
    /* {
          link: "/",
          name: "撫子歌留多",
          nameEn: "Nadeshiko Karuta"
        }, */
    /* {
          link: "/",
          name: "電子案内",
          nameEn: "Links"
        } */
  ]
  get isMenuActive() {
    return this.$store.state.siteMenu.isMenuActive
  }
  get isTitle() {
    return this.$store.state.title.isTitle
  }
}
</script>

<style lang="stylus" scoped>
.menu
  display flex

.menu-list
  display flex
  justify-content flex-end
  align-items stretch

@media screen and (max-width: 768px)
  .menu-list
    flex-direction column

@media screen and (min-width: 769px)
  .menu-list
    flex-direction row

.menu-item
  width 100px
  color #f8f8f8
  letter-spacing 0
  font-size 20px

.menu-item a
  position relative
  display inline
  padding 20px 30px
  color #161616
  text-align left
  text-decoration none
  white-space nowrap
  font-size 90%
  line-height 90%

@media screen and (max-width: 768px)
  .menu-item a
    writing-mode rl

@media screen and (min-width: 769px)
  .menu-item a.is-title
    font-size 120%
    writing-mode vertical-rl

.menu-item a > span
  position relative
  display block
  text-shadow 0px 0px 8px #fff

.menu-item a span.en
  display block
  font-size 13px

.en
  letter-spacing 0

.link-container
  display none

.navbar-burger
  position relative
  margin-left auto
  width 3.25rem
  height 3.25rem
  cursor pointer

@media screen and (max-width: 768px)
  .navbar-burger
    display block

@media screen and (min-width: 769px)
  .navbar-burger
    display none

.navbar-burger span
  position absolute
  left calc(50% - 8px)
  display block
  width 16px
  height 2px
  background-color currentColor
  box-shadow 0 0 16px 0 #fff
  transition-timing-function ease-out
  transition-duration 86ms
  transition-property background-color, opacity, transform
  transform-origin center

.navbar-burger span:nth-child(1)
  top calc(50% - 6px)

.navbar-burger span:nth-child(2)
  top calc(50% - 1px)

.navbar-burger span:nth-child(3)
  top calc(50% + 4px)

.navbar-burger:hover
  background-color rgba(0, 0, 0, 0.15)

.navbar-burger.is-active span:nth-child(1)
  transform translateY(5px) rotate(45deg)

.navbar-burger.is-active span:nth-child(2)
  opacity 0

.navbar-burger.is-active span:nth-child(3)
  transform translateY(-5px) rotate(-45deg)

.navbar-menu
  padding 0.5rem 0
  box-shadow 0 8px 16px rgba(10, 10, 10, 0.1)

@media screen and (max-width: 768px)
  .navbar-menu
    display none

@media screen and (min-width: 769px)
  .navbar-menu
    display block

.navbar-menu.is-active
  display block
</style>
