<template lang="pug">
  header.header-container(:class="{'is-title': $store.state.title.isTitle}")
    .logo-container(:class="{'is-title': $store.state.title.isTitle}")
      nuxt-link.logo-title(to="/")
        img.logo-title-ja(src="~/assets/emily_logo-text-ja.svg")
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
    site-menu(:class="{'is-title': $store.state.title.isTitle}").site-menu
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
  right 0
  left 0
  display flex
  margin 15px
  height 12vh

.header-container.is-title
  bottom 0
  height auto

.logo-container
  position absolute
  display flex
  flex-direction row
  justify-content space-around
  align-items center
  max-width 380px
  width 30%
  height 100%
  background rgba(252, 252, 246, 0.85)
  text-align left
  white-space nowrap

.logo-container.is-title
  flex-direction column

@media screen and (max-width: 768px)
  .logo-container
    width 100%
  .logo-container.is-title
    width 30%

.logo-container a
  text-decoration none

.logo-title
  display flex
  flex-direction row

.is-title .logo-title
  flex-direction column

.logo-title-ja
  display none
  height 60vh

.is-title .logo-title-ja
  display block

.logo-title-ja-h
  display block
  width 20vw

.is-title .logo-title-ja-h
  display none

.en
  letter-spacing 0

.logo-mark
  display block
  margin auto
  width 40px

@media screen and (max-width: 768px)
  .logo-mark
    width 20px

.link-container
  display flex
  flex-direction column
  justify-content space-between
  font-size 20px

.is-title .link-container
  font-size 30px

@media screen and (max-width: 768px)
  .link-container
    display none
    flex-direction row
  .is-title .link-container
    display flex
    flex-direction column

@media screen and (min-width: 769px)
  .is-title .link-container
    flex-direction row

.link-container a
  display flex
  flex-direction column
  margin 10px
  color #686868

.is-title .link-container a
  margin 10px 30px

.link-icon
  margin 4px 0 -2px
  font-size 120%

.link-text
  font-size 50%

.site-menu
  position absolute
  right 0

@media screen and (max-width: 768px)
  .site-menu
    padding 5px 10px

@media screen and (min-width: 769px)
  .site-menu
    padding 5px 40px
  .site-menu.is-title
    padding 40px
</style>
