<template>
  <div class="share-box">
    <div class="share-title">
      <span>共有:</span>
    </div>
    <ul class="share-list">
      <li class="share-item">
        <a 
          href="https://www.facebook.com/share.php?u=https://Emilys-tea-ceremony-room.github.io/dianthus-karuta/"
          onclick="window.open(this.href, 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;">
          <i class="fab fa-facebook"/>
        </a>
      </li>
      <li class="share-item">
        <a 
          href="https://twitter.com/share?text=Emily&amp;url=https://Emilys-tea-ceremony-room.github.io/dianthus-karuta/" 
          onclick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;" 
          rel="nofollow">
          <i class="fab fa-twitter"/>
        </a>
      </li>
      <li class="share-item">
        <a href="https://line.me/R/msg/text/?Emily https%3a%2f%2fEmilys-tea-ceremony-room%2egithub%2eio%2fdianthus-karuta%2f">
          <i class="fab fa-line"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
.share-box {
  width: calc(100% - 380px);
  float: right;
}

.share-title {
  font-size: 20px;
  display: inline-flex;
}

.share-list {
  display: inline-flex;
  float: right;
  justify-content: flex-end;
  align-items: stretch;
  width: auto;
}

.share-item {
  padding: 8px;
}

.share-item a {
  font-size: 30px;
  color: #161616;
}
</style>
