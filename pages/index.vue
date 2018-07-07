<template>
  <div class="container">
    <div class="background-wrapper">
      <div class="background-image"/>
      <sakura/>
    </div>
    <!--
    <div class="emily">
      <img src="~/assets/home_emily.png">
    </div>
    -->
  </div>
</template>

<script>
import Sakura from '~/components/Sakura.vue'

export default {
  components: {
    Sakura
  }
}
</script>

<style scoped>
.container {
}

.background-wrapper {
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -10;
}

.background-image {
  height: 100%;
  width: 100%;
  z-index: -1;
  background: url(~/assets/tearoom.jpg) no-repeat center;
  background-size: cover;
}

.emily {
  position: absolute;
  right: 10%;
  bottom: 0;
  object-fit: contain;
}
</style>
