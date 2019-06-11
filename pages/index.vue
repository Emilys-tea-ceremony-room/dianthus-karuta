<template lang="pug">
.container
  //- .emily
  //-   img(src="~/assets/home_emily.png")
  sakura.sakura-container
  .background-image
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
  layout() {
    return 'home'
  }

  fetch({ store }) {
    store.commit('siteMenu/reset')
    store.commit('title/set')
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%

.sakura-container
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  overflow hidden

.background-image
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
