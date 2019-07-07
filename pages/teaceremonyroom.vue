<template lang="pug">
.container
  .tearoom-container
    .tearoom
      h2.tearoom-title エミリーの茶室
      .tearoom-description
        p エミリーを応援するためのコミュニティです。
        p 仕掛け人さま同士の交流や企画の相談、
        p 何気ない雑談などを行うための場として
        p お使いいただけたらと思います。
        //- p 御抹茶情報を交換したり、
        //- p エミリーとおしゃべりを楽しんだりなど
        //- p ご自由にお過ごしください。
        p
          a(href="https://discordapp.com") Discord
          | というチャットツール上で
        p 運用しております。
        p ご参加はこちらからお気軽にどうぞ。
        a.discord-link(href="https://discord.gg/YHVsB9S", target="_blank")
          span.link-icon
            font-awesome-icon(:icon="['fab', 'discord']")
          span.link-text 参加する
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Sakura from '~/components/Sakura.vue'

@Component({
  components: {
    Sakura,
  },
})
export default class Profile extends Vue {}
</script>

<style lang="stylus" scoped>
.container
  position relative
  width 100%
  height 100%

.tearoom-container
  width 100%
  height 100%
  border-top 30px
  background url('~assets/teaceremonyroom/tearoom_background.png') no-repeat center
  background-position center center
  background-size cover

.tearoom
  position absolute
  top 22px
  left 50%
  z-index 0
  padding 14px
  width 88%
  color #322642
  transform translateX(-50%)
  +tablet()
    width 60%
  &::before
    position absolute
    top -8px
    right -8px
    bottom -8px
    left -8px
    z-index -5
    filter blur(8px)
    background-color rgba(#fcfcfc 0.74)
    content ''

.tearoom-title
  margin 8px

.tearoom-description
  font-size 13px
  line-height 2em
  +tablet()
    font-size 15px
  & p a
    color #5E487D
    text-decoration underline

.discord-link
  position relative
  left 50%
  display flex
  justify-content center
  align-items center
  width 4em
  border-radius 18px
  background-color #d2d2d2
  box-shadow 0 2px 2px 0px
  color #5E487D
  font-size 32px
  transform translateX(-50%)
  &:hover
    box-shadow 0 4px 2px 0px

.link-text
  margin 0.6em
  margin-left 1em
  font-size 14px

@media screen and (max-width: 370px)
  .tearoom-title
    margin 0
  .tearoom-description
    font-size 10px
</style>
