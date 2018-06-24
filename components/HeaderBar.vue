<template>
  <header class="header-bar">
    <h1 class="logo-title"><a href="/">なでしこかるた</a></h1>
  </header>
</template>

<script>
import SnsBox from '~/components/SnsBox.vue'

export default {
  components: {
    SnsBox
  }
}
</script>

<style>
.header-bar {
  top: 0;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 5;
}

.logo-title {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  z-index: 10;
}
</style>
