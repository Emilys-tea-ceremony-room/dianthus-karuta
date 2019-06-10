<template lang="pug">
  footer
    .footer-background
      .footer-container
        h6.copyright
          font-awesome-icon(:icon="['far', 'copyright']") 2018 Emily Tea Ceremony Room
        share-box
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ShareBox from '~/components/ShareBox.vue'

@Component({
  components: {
    ShareBox
  }
})
export default class FooterBar extends Vue {}
</script>

<style lang="stylus" scoped>
.footer-background
  padding 60px 0 20px

.footer-container
  position relative
  overflow hidden
  margin
    right auto
    left auto
  padding-right 15px
  padding-left 15px

.copyright
  position absolute
  bottom 0
  left 3em
</style>
