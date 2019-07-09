<template lang="pug">
.mordal-background(v-if="isWorkSelected" @click="close")
  .karuta
    .karuta-image
      img(:src="work.jacketSource")
    .karuta-description
      .title {{ work.title }}
      .release-date {{ getReleaseDateStr }}
      .product-number {{ work.productNumber }}
      .price ¥{{ work.price }} (税抜価格)
      .distributer {{ work.distributer }}
      iframe.audition(
        :src="'https://www.youtube.com/embed/' + work.youtube_id + '?autoplay=1&controls=2&modestbranding=1&showinfo=0&rel=0&start=' + work.youtube_start"
        frameborder="0"
        allowfullscreen)
      .index
        .song(v-for="song, index in work.index")
          .song-title
            | {{ index + 1 }}. {{ song.title }}
          .song-description
            .song-artists
              span 歌
              .artist(v-for="artist in song.artist")
                | {{ artist }}
            .song-words
              span 作詞
              .words(v-for="words in song.words")
                | {{ words }}
            .song-musics
              span 作曲
              .music(v-for="music in song.music")
                | {{ music }}
            .song-arrangements
              span 編曲
              .arrangement(v-for="arrangement in song.arrangement")
                | {{ arrangement }}
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { discographyModule } from '@/store'

@Component({})
export default class MordalWorkKaruta extends Vue {
  get isWorkSelected() {
    return discographyModule.selectedWork !== null
  }

  get work() {
    return discographyModule.selectedWork
  }

  get getReleaseDateStr() {
    if (discographyModule.selectedWork === null) {
      return ''
    }
    const releaseDate = discographyModule.selectedWork.releaseDate

    const year = releaseDate.getFullYear()
    const month = releaseDate.getMonth() + 1
    const day = releaseDate.getDate()

    return `${year}年${month}月${day}日`
  }

  close() {
    discographyModule.DISSELECT_WORK()
  }
}
</script>

<style lang="stylus" scoped>
.mordal-background
  position fixed
  top 95px
  left 15px
  z-index 5
  overflow-y scroll
  width calc(100% - 15px * 2)
  height calc(100% - 15px * 2 - 80px)
  background-color rgba(#323232 0.8)

.karuta
  display flex
  flex-direction column
  margin 20px auto
  padding 20px
  width 90%
  +tablet()
    width 40%
  border 10px solid #467837
  background-color #fff
  box-shadow 0 0 12px 0 rgba(#323232 0.8)

.karuta-image
  position relative
  padding-bottom 100%
  width 100%
  & img
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    object-fit contain

.karuta-description
  margin-top 20px
  font-size 10px
  flex-glow 1

.title
  font-size 14px

.release-date
  text-align right

.product-number
  text-align right

.price
  text-align right

.audition
  max-width 100%

.song
  &:not(:last-child)
    margin-bottom 20px
  &-title
    text-align left
    font-size 12px
  &-description
    margin-left 40px
    +tablet()
      margin-left 40%
    font-weight lighter
    font-size 12px
  &-artists
    display flex
    justify-content flex-end
    & span
      flex 1
      text-align left
    .artist
      margin-left 1em
  &-words
    display flex
    justify-content flex-end
    & span
      flex 1
      text-align left
    .words
      margin-left 1em
      &:not(:last-child)::after
        content ','
  &-musics
    display flex
    justify-content flex-end
    & span
      flex 1
      text-align left
    .music
      margin-left 1em
  &-arrangements
    display flex
    justify-content flex-end
    & span
      flex 1
      text-align left
    .arrangement
      margin-left 1em
</style>
