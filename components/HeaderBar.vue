<template lang="pug">
  header.header-container
    .logo-container
      nuxt-link.logo-title(to="/")
        img.logo-title-ja-h(src="~/assets/emily_logo-text-ja-h.svg")
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
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SiteMenu from '~/components/SiteMenu.vue'

@Component({
  components: {
    SiteMenu
  }
})
export default class HeaderBar extends Vue {}
</script>

<style lang="stylus" scoped>
.header-container
  position absolute
  top 0
  display flex
  width 100%
  height 80px
  background rgba(252, 252, 246, 0.85)

.logo-container
  display flex
  flex-direction row
  justify-content space-around
  align-items center
  margin-left 40px
  text-align left
  white-space nowrap
  a
    text-decoration none

.logo-title
  display flex
  flex-direction row
  align-items center

.logo-title-ja-h
  display block
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
  right 0
  +tablet()
    padding 40px 60px
</style>
