<template lang="pug">
  .container
    .background-wrapper
      .background-image
      sakura
    //- div.emily
    //-   img(src="~/assets/home_emily.png")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Sakura from '~/components/Sakura.vue'

@Component({
  components: {
    Sakura
  }
})
export default class Index extends Vue {
  fetch({ store }) {
    store.commit('siteMenu/reset')
    store.commit('title/set')
  }
}
</script>

<style lang="stylus" scoped>
.background-wrapper
  position fixed
  top 0
  left 0
  z-index -10
  width 100%
  height 100%

.background-image
  z-index -1
  width 100%
  height 100%
  background url('~assets/tearoom.jpg') no-repeat center
  background-size cover

.emily
  position absolute
  right 10%
  bottom 0
  object-fit contain
</style>
