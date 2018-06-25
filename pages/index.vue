<template>
  <div class="container">
    <div class="background-wrapper">
      <div class="background-image"/>
    </div>
    <div>
      <app-logo/>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
}

.background-wrapper {
  position: absolute;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  z-index: -10;
}

.background-image {
  position: absolute;
  z-index: -1;
  background: url(~/assets/tearoom.jpg) no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
