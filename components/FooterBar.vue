<template>
  <div class="footer-bar">
    <sns-box/>
  </div>
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
.footer-bar {
  right: 15px;
  bottom: 15px;
  left: 15px;
  height: 80px;
  position: fixed;
  z-index: 5;
}
</style>
