<template lang="pug">
.page-container(:class="{'title': isTitle}")
  .whitein(v-if="isFirstView && isTitle")
  .frame
    header-bar.header
    .contents
      nuxt
    //- footer-bar.footer-bar
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderBar from '@/components/HeaderBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { titleModule } from '@/store'

@Component({
  components: {
    HeaderBar,
    FooterBar
  }
})
export default class Default extends Vue {
  get isFirstView() {
    return titleModule.isFirstView
  }
  get isTitle() {
    return this.$route.path === '/'
  }
}
</script>

<style lang="stylus" scoped>
.whitein
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  z-index 100
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
  overflow hidden
  min-width 320px
  min-height 480px
  border 15px solid #467837
  text-align center

.header
  z-index 10

.contents
  position absolute
  top 0
  overflow-y scroll
  padding-top 80px
  width 100%
  height 100%
  background #fff
  .title &
    padding-top 0px

.footer-bar
  position absolute
  right 0
  bottom 0
  left 0
  z-index 10
</style>
