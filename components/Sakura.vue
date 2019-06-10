<template lang="pug">
  .sakura-container
    .sakura(v-for="i in 12", :id="'sakura' + i", :key="i")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Sakura extends Vue {}
</script>

<style lang="stylus" scoped>
.sakura
  position absolute
  width 0
  height 0
  border 10px solid rgba(240, 210, 210, 0.9)
  border-radius 15px
  border-top-right-radius 0
  border-bottom-left-radius 0

.sakura::after
  position absolute
  top -7px
  left -7px
  display block
  width 0
  height 0
  border 10px solid rgba(240, 210, 210, 0.9)
  border-radius 15px
  border-top-right-radius 0
  border-bottom-left-radius 0
  content ''
  transform rotate(15deg)

#sakura1
  z-index 0
  animation sakura01 12s ease-out 2s infinite normal, sakura11 2.2s ease-in-out 0s infinite alternate, sakura21 3.5s ease 0s infinite alternate

#sakura2
  z-index 10
  animation sakura02 11s ease-out 3s infinite normal, sakura11 2.5s ease-in-out 0s infinite alternate, sakura22 4.4s ease 0s infinite alternate

#sakura3
  z-index 5
  animation sakura03 13s ease-out 1s infinite normal, sakura12 2s ease-in-out 0s infinite alternate, sakura23 2.6s ease 0s infinite alternate

#sakura4
  z-index 0
  animation sakura04 12s ease-out 0s infinite normal, sakura11 2.4s ease-in-out 0s infinite alternate, sakura21 4.2s ease 0s infinite alternate

#sakura5
  z-index 10
  animation sakura05 11s ease-out 1.5s infinite normal, sakura12 3s ease-in-out 0s infinite alternate, sakura22 2.8s ease 0s infinite alternate

#sakura6
  z-index 2
  animation sakura06 30s ease-out 2.3s infinite normal, sakura12 2.2s ease-in-out 0s infinite alternate, sakura23 3.4s ease 0s infinite alternate

#sakura7
  z-index 0
  animation sakura07 10s ease-out 1.4s infinite normal, sakura12 2s ease-in-out 0s infinite alternate, sakura22 3s ease 0s infinite alternate

#sakura8
  z-index 10
  animation sakura02 40s ease-out 3s infinite normal, sakura11 2.5s ease-in-out 0s infinite alternate, sakura23 3.8s ease 0s infinite alternate

#sakura9
  z-index 4
  animation sakura01 12s ease-out 5s infinite normal, sakura11 2.4s ease-in-out 0s infinite alternate, sakura21 4s ease 0s infinite alternate

#sakura10
  z-index 0
  animation sakura05 11s ease-out 0.5s infinite normal, sakura12 2.6s ease-in-out 0s infinite alternate, sakura23 2.2s ease 0s infinite alternate

#sakura11
  z-index 10
  animation sakura03 16s ease-out 2s infinite normal, sakura11 3s ease-in-out 0s infinite alternate, sakura21 3.6s ease 0s infinite alternate

#sakura12
  z-index 2
  animation sakura07 15s ease-out 3s infinite normal, sakura12 2.8s ease-in-out 0s infinite alternate, sakura22 3.2s ease 0s infinite alternate

@keyframes sakura01
  0%
    top -50px
    left 50%
    opacity 1
  100%
    top 100%
    left 20%
    opacity 1

@keyframes sakura02
  0%
    top -50px
    left 80%
    opacity 1
  100%
    top 100%
    left 30%
    opacity 1

@keyframes sakura03
  0%
    top -50px
    left 105%
    opacity 1
  100%
    top 100%
    left 40%
    opacity 1

@keyframes sakura04
  0%
    top -50px
    left 75%
    opacity 1
  100%
    top 100%
    left 60%
    opacity 1

@keyframes sakura05
  0%
    top -50px
    left 90%
    opacity 1
  100%
    top 100%
    left -5%
    opacity 1

@keyframes sakura06
  0%
    top -50px
    left 50%
    opacity 1
  100%
    top 100%
    left 10%
    opacity 1

@keyframes sakura07
  0%
    top -50px
    left 80%
    opacity 1
  100%
    top 100%
    left -5%
    opacity 1

@keyframes sakura11
  0%
    margin-left 120px
  100%
    margin-left 10px

@keyframes sakura12
  0%
    margin-left 150px
  100%
    margin-left -50px

@keyframes sakura21
  0%
    transform rotateX(-60deg) rotateY(-160deg)
  50%
    transform rotateX(120deg) rotateY(80deg)
  100%
    transform rotateX(320deg) rotateY(360deg)

@keyframes sakura22
  0%
    transform rotateX(-60deg) rotateY(160deg)
  50%
    transform rotateX(120deg) rotateY(-80deg)
  100%
    transform rotateX(320deg) rotateY(-360deg)

@keyframes sakura23
  0%
    transform rotateX(60deg) rotateY(-160deg)
  50%
    transform rotateX(-120deg) rotateY(80deg)
  100%
    transform rotateX(-320deg) rotateY(360deg)
</style>
