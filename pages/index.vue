<template>
  <section class="container">
    <div class="background-wrapper">
      <div class="background-image"/>
    </div>
    <div>
      <app-logo/>
    </div>
  </section>
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.background-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
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
