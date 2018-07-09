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
    return store.commit('siteMenu/reset')
  }
}
</script>

<style scoped>
.container {
}
</style>
