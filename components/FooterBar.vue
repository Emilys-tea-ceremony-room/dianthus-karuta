<template>
  <footer class="footer-bar">
    <div class="footer-background">
      <div class="footer-container">
        <h6 class="copyright">
          <i class="far fa-copyright"/>2018 Emily Tea Ceremony Room
        </h6>
        <share-box/>
      </div>
    </div>
  </footer>
</template>

<script>
import ShareBox from '~/components/ShareBox.vue'

export default {
  components: {
    ShareBox
  }
}
</script>

<style scoped>
.footer-bar {
}

.footer-background {
  padding: 60px 0 20px;
}

.footer-container {
  position: relative;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.copyright {
  position: absolute;
  bottom: 0;
  left: 3em;
}
</style>
