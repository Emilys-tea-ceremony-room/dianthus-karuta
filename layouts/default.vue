<template lang="pug">
  .page-container
    .contents
      nuxt
      footer-bar.footer-bar
    .frame
      header-bar.header-bar
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderBar from '~/components/HeaderBar.vue'
import FooterBar from '~/components/FooterBar.vue'

@Component({
  components: {
    HeaderBar,
    FooterBar
  }
})
export default class Default extends Vue {}
</script>

<style lang="stylus" scoped>
.frame
  position fixed
  top 0
  left 0
  display flex
  justify-content center
  align-items center
  min-width 320px
  min-height 480px
  width 100%
  height 100%
  border 15px solid #467837
  text-align center

.page-container
  width 100%
  height 100%

.contents
  z-index -5
  margin 15px
  background #b4d2a6

.header-bar
  position fixed
  z-index 5

.footer-bar
  z-index 5
  display none
</style>
