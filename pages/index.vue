<template lang="pug">
.container
  //- .emily
  //-   img(src="@/assets/home_emily.png")
  sakura
  .background-image
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Sakura from '@/components/Sakura.vue'
import { titleModule } from '@/store'

@Component({
  components: {
    Sakura,
  },
})
export default class Index extends Vue {
  get isFirstView() {
    return titleModule.isFirstView
  }
  beforeRouteLeave(to, from, next) {
    titleModule.SET_VIEWED()
    next()
  }
}
</script>

<style lang="stylus" scoped>
.container
  overflow hidden
  height 100%

.background-image
  height 100%
  background url('~assets/background/tearoom_2x.png') no-repeat center
  background-size cover
  animation move 8s forwards

@keyframes move
  0%
    transform scale(1.05)

.emily
  position absolute
  right 10%
  bottom 0
  object-fit contain
</style>
