<template lang="pug">
.container
  .profile-container
    sakura
    .profile
      .name エミリー・スチュアート
      .name_en Emily Stewart
      ul.detail-container
        li.detail
          .left 年齢
          .right 13歳
        li.detail
          .left 誕生日
          .right 1月 8日
        li.detail
          .left 出身地
          .right イギリス
        li.detail
          .left 好きなもの
          .right 抹茶
        li.detail
          .left 趣味
          .right かるた遊び
  .biography
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Sakura from '~/components/Sakura.vue'

@Component({
  components: {
    Sakura
  }
})
export default class Profile extends Vue {}
</script>

<style lang="stylus" scoped>
.container
  position relative
  width 100%
  height 100%

.profile-container
  width 100%
  height 100%
  border-top 30px
  background url('~assets/profile/profile_bg.png') no-repeat center
  background-position top center
  background-size cover

.profile
  position absolute
  top 55%
  left 45%
  +tablet()
    top 60%
    left 55%
    width 220px
  z-index 0
  padding 14px
  width 160px
  color #554171
  font-size 12px
  +tablet()
    font-size 16px
  &::before
    position absolute
    top -8px
    right -8px
    bottom -8px
    left -8px
    z-index -5
    filter blur(8px)
    background-color rgba(255, 255, 255, 0.8)
    content ''

.name
  text-align center
  &_en
    text-align center
    font-size 10px

.detail
  display flex
  justify-content space-between
  margin-top 6px
</style>
