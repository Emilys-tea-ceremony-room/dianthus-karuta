<template lang="pug">
.error-container
  .error-background
  .error
    .info 道に迷ってしまったようです。
    .info_en We are in the middle of nowhere.
    nuxt-link(to="/") タイトルへ戻る
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Error extends Vue {}
</script>

<style lang="stylus" scoped>
.error-container
  width 100%
  height 100%
  border-top 30px
  background-color #554171

.error-background
  position absolute
  top 0
  bottom 0
  left -20%
  width 100%
  background url('~assets/404_emily.png') no-repeat center
  background-size auto 100%

.error
  position absolute
  top 55%
  right 5%
  z-index 0
  padding 14px
  min-width 240px
  width 40%
  color #554171
  font-size 14px
  +tablet()
    top 30%
    left 55%
    width 220px
    font-size 16px
  &::before
    position absolute
    top -8px
    right -8px
    bottom -8px
    left -8px
    z-index -5
    filter blur(8px)
    background-color rgba(255, 255, 255, 0.8)
    content ''

.info
  text-align center
  &_en
    padding-bottom 8px
    text-align center
    font-size 10px

.detail
  display flex
  justify-content space-between
  margin-top 6px
</style>
