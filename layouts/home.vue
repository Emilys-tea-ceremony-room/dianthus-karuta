<template lang="pug">
  .page-container
    .frame
      header.header-bar
        .logo-container
          nuxt-link.logo-title(to="/")
            img.logo-title-ja(src="~/assets/emily_logo-text-ja.svg")
            img.logo-mark(src="~/assets/emily_logo.svg")
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
        footer-bar.footer-bar
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderBar from '~/components/HeaderBar.vue'
import FooterBar from '~/components/FooterBar.vue'
import SiteMenu from '~/components/SiteMenu.vue'

@Component({
  components: {
    HeaderBar,
    SiteMenu,
    FooterBar
  }
})
export default class Default extends Vue {}
</script>

<style lang="stylus" scoped>
.page-container
  width 100%
  height 100%

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
  z-index 10
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  width 30%
  height 100%
  background rgba(252, 252, 246, 0.85)

.logo-container
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  width 30%
  height 100%
  text-align left
  white-space nowrap
  a
    text-decoration none

.logo-title
  display flex
  flex-direction column

.logo-title-ja
  height 60vh

.logo-mark
  display block
  height 40px

.link-container
  display flex
  flex-direction column
  +tablet()
    display flex
    flex-direction row
  justify-content space-between
  font-size 30px

.link-container a
  display flex
  flex-direction column
  margin 10px 30px
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
