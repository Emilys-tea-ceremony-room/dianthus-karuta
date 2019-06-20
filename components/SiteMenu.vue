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
    v-if="isMenuActive"
  )
    ul.menu-list
      li.menu-item(v-for="item in menuItems" :key="item.name")
        n-link(
          :to="item.link"
          @click.native="closeMenu"
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

  closeMenu() {
    siteMenuModule.CLOSE_MENU()
  }

  @Watch('$route')
  onRouteChanged() {
    siteMenuModule.CLOSE_MENU()
  }
}
</script>

<style lang="stylus" scoped>
.navbar-burger
  position absolute
  top 20px
  right 20px
  z-index 10
  width 40px
  height 40px
  background-color rgba(255, 255, 255, 0.2)
  cursor pointer
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
  position absolute
  top 0
  left 0
  overflow-y scroll
  padding-top 80px
  width 100%
  height 100%
  background-color rgba(252, 252, 252, 0.82)

.menu-list
  display flex
  flex-direction column
  justify-content flex-end
  align-items stretch

.menu-item
  padding 10px
  color #f8f8f8
  letter-spacing 0
  font-size 24px
  a
    display inline
    color #161616
    text-align center
    text-decoration none
    white-space nowrap
    line-height 40%
    writing-mode horizontal-tb
    span
      text-shadow 0px 0px 6px #fff
      &.en
        display block
        letter-spacing 0
        font-size 16px

@keyframes feadin
  0%
    opacity 0

.link-container
  display none
</style>
