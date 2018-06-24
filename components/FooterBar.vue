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
  bottom: 0;
  height: 80px;
  width: 100%;
  position: fixed;
  z-index: 5;
}
</style>
