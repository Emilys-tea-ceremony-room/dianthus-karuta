<template lang="pug">
.loading-container
  .whitein
  .frame
    img.logo-mark(src="~/assets/emily_logo.svg")
    img.logo-mark.pulse(src="~/assets/emily_logo.svg")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {}
</script>

<style lang="stylus" scoped>
.loading-container
  position absolute
  width 100%
  height 100%

.whitein
  position absolute
  z-index 5
  width 100%
  height 100%
  background-color #fff
  opacity 0
  animation whitein 2s

@keyframes whitein
  from
    opacity 1

.frame
  position absolute
  top 15px
  right 15px
  bottom 15px
  left 15px
  // width 100%
  // height 100%
  // border 15px solid #467837
  background-color #fff
  animation loading 2s 3s forwards

@keyframes loading
  to
    opacity 0.8

.logo-mark
  position absolute
  top 50%
  left 50%
  height 20%
  transform translate(-50%, -50%)
  &.pulse
    opacity 0
    animation logo-pulse 3s 1.5s forwards

@keyframes logo-pulse
  0%
    opacity 0.4
  70%
    height 30%
    opacity 0
</style>
