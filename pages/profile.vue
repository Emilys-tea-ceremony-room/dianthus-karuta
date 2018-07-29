<template>
  <div class="container">
    <div class="background-wrapper">
      <div class="background-image"/>
    </div>
    <div/>
  </div>
</template>

<script>
export default {
  fetch ({store}) {
    store.commit('title/reset')
    store.commit('siteMenu/reset')
    return
  }
}
</script>

<style scoped>
.container {
}
</style>
