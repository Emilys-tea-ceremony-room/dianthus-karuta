<template lang="pug">
.container
  //- .discography-menu
  //-   .menu-item
  //-     .name すべて
  //-     .sakura
  //-     .sakura
  //-     .sakura
  //-   .menu-item.is-menu-selected
  //-     .name CD
  //-     .sakura
  //-     .sakura
  //-     .sakura
  //-   .menu-item
  //-     .name Blu-ray
  //-     .sakura
  //-     .sakura
  //-     .sakura
  //-   .menu-item
  //-     .name その他
  //-     .sakura
  //-     .sakura
  //-     .sakura
  .discography-container
    WorkKaruta(
      v-for="work, index in discographies"
      :key="work.name"
      :imageSource="work.jacketSource"
      :title="work.title"
      @click.native="selectWork(work)"
    )
  MordalWorkKaruta
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WorkKaruta from '@/components/WorkKaruta.vue'
import MordalWorkKaruta from '@/components/MordalWorkKaruta.vue'
import { discographyModule } from '@/store'

@Component({
  components: {
    WorkKaruta,
    MordalWorkKaruta,
  },
})
export default class Discography extends Vue {
  get discographies() {
    return discographyModule.data
  }

  selectWork(item) {
    discographyModule.SELECT_WORK(item)
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  align-items center
  min-height 100%
  width 100%
  background url('~assets/background/tatami.png') center
  background-position top center

.discography-menu
  position fixed
  z-index 5
  display flex
  justify-content space-around
  margin 24px 0
  width 80%

.menu-item
  position relative
  & .name
    position relative
    z-index 5

.sakura
  position absolute
  top 50%
  left 50%
  z-index 1
  filter drop-shadow(0 0 8px rgba(#ad85a7 0.6))
  &:nth-child(2)
    left 10%
    transform translate(-50%, -50%) rotate(-80deg)
  &:nth-child(3)
    left 90%
    transform translate(-50%, -50%) rotate(-10deg)
  width 0
  height 0
  border 10px solid rgba(240, 210, 210, 0.9)
  border-radius 15px
  transform translate(-50%, -50%) rotate(80deg)
  .is-selected &
    border 20px solid rgba(240, 210, 210, 0.9)
    border-radius 30px
    border-top-right-radius 0
    border-bottom-left-radius 0
  border-top-right-radius 0
  border-bottom-left-radius 0

.sakura::after
  position absolute
  top -7px
  left -7px
  display block
  width 0
  height 0
  border 10px solid rgba(240, 210, 210, 0.9)
  border-radius 15px
  .is-selected &
    top -14px
    left -14px
    border 20px solid rgba(240, 210, 210, 0.9)
    border-radius 30px
    border-top-right-radius 0
    border-bottom-left-radius 0
  border-top-right-radius 0
  border-bottom-left-radius 0
  content ''
  transform rotate(15deg)

.discography-container
  display flex
  flex-wrap wrap
  justify-content space-around
  justify-content center
  margin-top 80px
  width 100%
  +tablet()
    width 74%
</style>
