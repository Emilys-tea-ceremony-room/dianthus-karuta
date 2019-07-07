<template lang="pug">
header.header-container(:class="{'home': isTitle, 'first-view': isFirstView}")
  .header-bar
    .logo-container
      nuxt-link.logo-title(to="/")
        transition(name="fade" mode="out-in")
          img.logo-title-ja(v-if="isTitle" key="v" src="@/assets/emily_logo-text-ja.svg")
          img.logo-title-ja-h(v-else key="h" src="@/assets/emily_logo-text-ja-h.svg")
        .logo-mark-container
          img.logo-mark(src="@/assets/emily_logo.svg")
          img.logo-mark.pulse(v-if="isFirstView" src="@/assets/emily_logo.svg")
      .link-container
        a(href="https://discord.gg/YHVsB9S", target="_blank")
          span.link-icon
            font-awesome-icon(:icon="['fab', 'discord']")
          span.link-text 茶室
        a(href="https://twitter.com/emily_discord/", target="_blank")
          span.link-icon
            font-awesome-icon(:icon="['fab', 'twitter-square']")
          span.link-text 呟き
  site-menu.site-menu
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SiteMenu from '@/components/SiteMenu.vue'
import { titleModule } from '@/store'

@Component({
  components: {
    SiteMenu,
  },
})
export default class HeaderBar extends Vue {
  get isFirstView() {
    return titleModule.isFirstView
  }
  get isTitle() {
    return this.$route.path === '/'
  }
}
</script>

<style lang="stylus" scoped>
.header-bar
  position absolute
  top 0
  left 0
  z-index 5
  display flex
  justify-content space-around
  width 100%
  height 80px
  background rgb(252, 252, 246)
  box-shadow 0 0 6px 0
  opacity 0.85
  transition height 1s
  .home &
    flex-direction column
    justify-content space-around
    width 30%
    height 100%
    .first-view&
      width 100%
      opacity 1
      animation open 1.2s ease-in-out 2.5s forwards, clear 2s 1.8s forwards

@keyframes open
  100%
    width 30%

@keyframes clear
  100%
    opacity 0.85

.logo-container
  display flex
  flex-direction row
  justify-content space-around
  align-items center
  margin-left 40px
  text-align left
  white-space nowrap
  .title &
    flex-direction column
    margin-left 0
  a
    text-decoration none

.logo-title
  display flex
  flex-direction row
  align-items center
  .title &
    flex-direction column

.logo-title-ja
  height 60vh

.logo-title-ja-h
  height 74px

.en
  letter-spacing 0

.logo-mark-container
  position relative
  .home &
    margin-top 10px

.logo-mark
  height 40px
  &.pulse
    position absolute
    top 0
    left 0
    opacity 0
    animation logo-pulse 3s 1.2s forwards

@keyframes logo-pulse
  0%
    opacity 0.4
  70%
    opacity 0
    transform scale(1.5)

.link-container
  display none
  flex-direction row
  +tablet()
    display flex
  justify-content space-between
  font-size 20px
  .title .first-view &
    opacity 0
    animation arrival 1s ease-in-out 3.2s forwards

.link-container a
  display flex
  flex-direction column
  margin 10px
  color #686868

.link-icon
  margin 4px 0 -2px
  font-size 120%

.link-text
  font-size 50%

.site-menu
  .title .first-view &
    opacity 0
    animation arrival 1s ease-in-out 2.7s forwards

@keyframes arrival
  100%
    opacity 1

.fade-enter-active, .fade-leave-active
  transition opacity 0.5s

.fade-enter, .fade-leave-to
  opacity 0
</style>
