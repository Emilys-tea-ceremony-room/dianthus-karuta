<template lang="pug">
nav.menu
  .navbar-burger(
    :class="{ 'is-active': isMenuActive }"
    data-target="navMenu"
    @click="toggleMenu"
  )
    span
    span
    span
  .navbar-menu(
    id="navMenu"
    :class="{ 'is-active': isMenuActive, }"
  )
    ul.menu-list
      li.menu-item(v-for="item in menuItems" :key="item.name")
        n-link(
          :to="item.link"
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
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { siteMenuModule } from '@/store'

@Component
export default class SiteMenu extends Vue {
  get menuItems() {
    return siteMenuModule.menuItems
  }

  get isMenuActive() {
    return siteMenuModule.isMenuActive
  }

  toggleMenu() {
    siteMenuModule.ToggleMenu()
  }

  @Watch('$route')
  onRouteChanged() {
    siteMenuModule.CLOSE_MENU()
  }
}
</script>

<style lang="stylus" scoped>
.menu-list
  display flex
  flex-direction column
  justify-content flex-end
  align-items stretch
  +tablet()
    flex-direction row

.menu-item
  margin 10px
  color #f8f8f8
  letter-spacing 0
  font-size 20px
  +tablet()
    margin 40px
  a
    display inline
    color #161616
    text-align left
    text-decoration none
    white-space nowrap
    line-height 90%
    writing-mode horizontal-tb
    +tablet()
      font-size 120%
      writing-mode vertical-rl
    span
      position relative
      display block
      text-shadow 0px 0px 6px #fff
      &.en
        display block
        letter-spacing 0
        font-size 13px

.link-container
  display none

.navbar-burger
  position relative
  display block
  margin-left auto
  width 3.25rem
  height 3.25rem
  background-color rgba(255, 255, 255, 0.2)
  cursor pointer
  +tablet()
    display none
  & span
    position absolute
    left calc(50% - 8px)
    display block
    width 16px
    height 2px
    background-color currentColor
    transition-timing-function ease-out
    transition-duration 86ms
    transition-property background-color, opacity, transform
    transform-origin center
    &:nth-child(1)
      top calc(50% - 6px)
    &:nth-child(2)
      top calc(50% - 1px)
    &:nth-child(3)
      top calc(50% + 4px)
  &.is-active span
    &:nth-child(1)
      transform translateY(5px) rotate(45deg)
    &:nth-child(2)
      opacity 0
    &:nth-child(3)
      transform translateY(-5px) rotate(-45deg)

.navbar-menu
  display none
  padding 0.5rem 0
  background-color rgba(216, 216, 216, 0.6)
  box-shadow 0 0 16px rgba(10, 10, 10, 0.1)
  +tablet()
    display block
  &.is-active
    display block
</style>
