<template lang="pug">
header.header-container(:class="{'home': isTitle, 'first-view': isFirstView}")
  .header-bar
    .logo-container
      nuxt-link.logo-title(to="/")
        transition(name="fade" mode="out-in")
          img.logo-title-ja(v-if="isTitle" key="v" src="@/assets/emily_logo-text-ja.svg")
          img.logo-title-ja-h(v-else key="h" src="@/assets/emily_logo-text-ja-h.svg")
        img.logo-mark(src="@/assets/emily_logo.svg")
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
    SiteMenu
  }
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
  display flex
  width 100%
  height 80px
  background rgb(252, 252, 246)
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
      animation open 1.2s ease-in-out 2.5s forwards

@keyframes open
  100%
    width 30%
    opacity 0.8

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
  height 72px

.en
  letter-spacing 0

.logo-mark
  display block
  height 40px

.link-container
  display none
  flex-direction row
  +tablet()
    display flex
  justify-content space-between
  font-size 20px

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
  position absolute
  top 0
  right 0
  +tablet()
    padding 40px 60px
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
