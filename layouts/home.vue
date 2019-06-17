<template lang="pug">
.page-container
  .whitein(v-if="isFirstView")
  .frame
    header.header-bar(:class="{'first-view': isFirstView}")
      .logo-container
        nuxt-link.logo-title(to="/")
          img.logo-title-ja(src="@/assets/emily_logo-text-ja.svg")
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
    .contents
      nuxt
      //- footer-bar.footer-bar
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FooterBar from '@/components/FooterBar.vue'
import SiteMenu from '@/components/SiteMenu.vue'
import { titleStore } from '@/store'

@Component({
  components: {
    SiteMenu,
    FooterBar
  }
})
export default class Default extends Vue {
  get isFirstView() {
    return titleStore.isFirstView
  }
}
</script>

<style lang="stylus" scoped>
.loading-container
  position absolute
  width 100%
  height 100%

.whitein
  position absolute
  z-index 15
  width 100%
  height 100%
  background-color #fff
  animation whitein 2s ease-in forwards

@keyframes whitein
  0%
    display block
    opacity 1
  99%
    display block
  100%
    visibility hidden
    opacity 0

.page-container
  width 100%
  height 100%

.loading
  z-index 100

.frame
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  z-index 0
  display flex
  justify-content center
  align-items center
  min-width 320px
  min-height 480px
  border 15px solid #467837
  text-align center

.header-bar
  position absolute
  left 0
  z-index 10
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  width 30%
  height 100%
  background rgb(252, 252, 246)
  opacity 0.85
  &.first-view
    width 100%
    opacity 1
    animation open 1.2s ease-in-out 2.5s forwards

@keyframes open
  100%
    width 30%
    opacity 0.8

.logo-container
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  text-align left
  white-space nowrap
  a
    text-decoration none

.logo-title
  display flex
  flex-direction column
  align-items center

.logo-title-ja
  height 60vh

.logo-mark-container
  position relative
  margin-top 10px
  width 50px
  height 50px

.logo-mark
  width 50px
  height 50px
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
  display flex
  display none
  flex-direction column
  +tablet()
    display flex
    display none
    flex-direction row
  justify-content space-between
  font-size 30px

.link-container a
  display flex
  flex-direction column
  margin 0px 30px
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
    padding 40px

.contents
  z-index -10
  flex-grow 1
  height 100%
  background #b4d2a6

.footer-bar
  position absolute
  right 0
  bottom 0
  left 30%
  z-index 10
</style>
