<template>
  <div class="sns-box">
    <ul class="sns-list">
      <li class="sns-item">
        <a
          href="https://twitter.com/Emily_Discord/"
          target="_blank">
          <i class="fab fa-twitter"/>
        </a>
      </li>
      <li class="sns-item">
        <a
          href="https://discord.gg/YHVsB9S"
          target="_blank">
          <i class="fab fa-discord"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
.sns-list {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 10;
}

.sns-item {
  margin: 5px;
  font-size: 40px;
  color: #554171;
}
</style>
