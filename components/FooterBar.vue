<template lang="pug">
  footer.footer-container
    h6.copyright
      font-awesome-icon(:icon="['far', 'copyright']")
      | 2019 Emily Tea Ceremony Room
    share-box
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ShareBox from '~/components/ShareBox.vue'

@Component({
  components: {
    ShareBox,
  },
})
export default class FooterBar extends Vue {}
</script>

<style lang="stylus" scoped>
.footer-container
  display flex
  justify-content center
  align-items center
  background-color rgba(180, 210, 166, 0.6)

h6
  display flex
  align-items center
  margin-right 6px
</style>
