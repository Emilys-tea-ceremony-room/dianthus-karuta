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
  ul.navbar-menu.menu-list(
    id="navMenu"
    :class="{'menu-active': isMenuActive}"
  )
    li.menu-item(v-for="item, index in menuItems" :key="item.name")
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
  el
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
  background-color rgba(255, 255, 255, 0.4)
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
  z-index -5
  display flex
  flex-direction column
  align-items stretch
  overflow-y scroll
  padding-top 80px
  width 100%
  height 100%
  background-color rgba(#fcfcfc 0.86)
  opacity 0
  transition all 0.5s
  transform translateY(-100%)
  &.menu-active
    opacity 1
    transform translateY(0)

.menu-item
  position relative
  padding 10px
  color #f8f8f8
  letter-spacing 0
  font-size 24px
  for i in (1 .. 12)
    .menu-active &:nth-child({i})
      opacity 0
      animation fade-in 1s (0.2 + 0.1 * i)s forwards
  & a
    display inline
    color #161616
    text-align center
    text-decoration none
    white-space nowrap
    line-height 40%
    writing-mode horizontal-tb
    & > span::after
      position absolute
      bottom 0.95em
      left 50%
      display block
      width 0
      height 1px
      background-color #161616
      content ''
      transition 0.5s all
      transform translateX(-50%)
    &:hover
      & > span::after
        width 5em
    & span
      text-shadow 0px 0px 6px #fff
      &.en
        display block
        letter-spacing 0
        font-size 16px

@keyframes fade-in
  100%
    opacity 1

.link-container
  display none
</style>
