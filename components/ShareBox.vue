<template lang="pug">
  .share-box
    ul.share-list
      li.share-item
        a(href="https://www.facebook.com/share.php?u=https://nadeshikokaruta.com", onclick="window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;")
          font-awesome-icon(:icon="['fab', 'facebook']")
      li.share-item
        a(href="https://twitter.com/share?text=Emily&amp;url=https://nadeshikokaruta.com", onclick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=450, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;", rel="nofollow")
          font-awesome-icon(:icon="['fab', 'twitter']")
      li.share-item
        a(href="https://line.me/R/msg/text/?Emily https%3a%2f%2fnadeshikokaruta%2ecom", onclick="window.open(encodeURI(decodeURI(this.href)), 'linewindow', 'width=650, height=450, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;")
          font-awesome-icon(:icon="['fab', 'line']")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ShareBox extends Vue {}
</script>

<style lang="stylus">
.share-box
  display flex
  align-items center
  font-size 12px

.share-list
  display flex
  justify-content space-around

.share-item
  margin-left 4px
  a
    color #161616
</style>
