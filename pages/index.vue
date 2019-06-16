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
    Sakura
  }
})
export default class Index extends Vue {
  // layout() {
  //   return 'home'
  // }
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
  height 100%

.background-image
  width 100%
  height 100%
  background url('~assets/background/tearoom.jpg') no-repeat center
  background-size cover

.emily
  position absolute
  right 10%
  bottom 0
  object-fit contain
</style>
