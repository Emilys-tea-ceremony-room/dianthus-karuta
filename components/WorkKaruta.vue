<template lang="pug">
.karuta-container
  .karuta
    .karuta-image
      img(:src="imageSource")
    .karuta-title {{ title }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class WorkKaruta extends Vue {
  public isSelected: boolean = false

  @Prop({})
  title

  @Prop({})
  imageSource
}
</script>

<style lang="stylus" scoped>
.karuta-container
  position relative
  margin 8px
  min-width 150px
  width 40%
  +tablet()
    margin 16px
    width 28%
  &::before
    display block
    padding-top calc((400% / 3))
    width 100%
    content ''

.karuta
  position absolute
  top 50%
  left 50%
  display flex
  flex-direction column
  width 100%
  height 100%
  border 8px solid #467837
  background-color #fff
  box-shadow 0 0 8px 0 rgba(#323232 0.8)
  transform translate(-50%, -50%)

.karuta-image
  position relative
  padding-bottom 100%
  width 100%
  & img
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    object-fit contain

.karuta-title
  display flex
  flex-grow 1
  justify-content center
  align-items center
  font-size 9px
</style>
