<template lang="pug">
  .share-box
    .share-title
      span 共有:
    ul.share-list
      li.share-item
        a(href="https://www.facebook.com/share.php?u=https://Emilys-tea-ceremony-room.github.io/dianthus-karuta/", onclick="window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;")
          font-awesome-icon(:icon="['fab', 'facebook']")
      li.share-item
        a(href="https://twitter.com/share?text=Emily&amp;url=https://Emilys-tea-ceremony-room.github.io/dianthus-karuta/", onclick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;", rel="nofollow")
          font-awesome-icon(:icon="['fab', 'twitter']")
      li.share-item
        a(href="https://line.me/R/msg/text/?Emily https%3a%2f%2fEmilys-tea-ceremony-room%2egithub%2eio%2fdianthus-karuta%2f")
          font-awesome-icon(:icon="['fab', 'line']")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ShareBox extends Vue {}
</script>

<style lang="stylus">
.share-box
  float right
  width calc(100% - 380px)

.share-title
  display inline-flex
  font-size 20px

.share-list
  display inline-flex
  justify-content flex-end
  align-items stretch
  float right
  width auto

.share-item
  padding 8px

.share-item a
  color #161616
  font-size 30px
</style>
