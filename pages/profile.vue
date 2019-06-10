<template lang="pug">
  .container
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Profile extends Vue {
  fetch({ store }) {
    store.commit('siteMenu/reset')
    store.commit('title/reset')
  }
}
</script>

<style lang="stylus" scoped></style>
