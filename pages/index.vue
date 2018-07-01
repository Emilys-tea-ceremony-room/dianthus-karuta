<template>
  <div class="container">
    <div class="background-wrapper">
      <div class="background-image"/>
    </div>
    <div />
</div></template>

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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
