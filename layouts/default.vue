<template lang="pug">
  .page-container
    .frame
      header-bar.header-bar
      .contents
        nuxt
      footer-bar.footer-bar
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
.page-container
  width 100%
  height 100%

.frame
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  display flex
  flex-direction column
  justify-content center
  align-items center
  min-width 320px
  min-height 480px
  border 15px solid #467837
  text-align center

.header-bar
  z-index 10

.contents
  display flex
  flex-grow 1
  width 100%
  background #b4d2a6

.footer-bar
  position absolute
  right 0
  bottom 0
  left 0
  z-index 10
</style>
