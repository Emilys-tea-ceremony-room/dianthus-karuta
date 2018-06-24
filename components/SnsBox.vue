<template>
  <div class="sns-box">
    <ul class="sns-list">
      <li class="sns-item">
        <a
          href="https://twitter.com/Emily_Discord/"
          target="_blank">
          <img 
            src="" 
            alt="Twitter">
        </a>
      </li>
      <li class="sns-item">
        <a
          href="https://discord.gg/hhNTytM"
          target="_blank">
          <img 
            src="" 
            alt="Discord">
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
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
}
</style>
