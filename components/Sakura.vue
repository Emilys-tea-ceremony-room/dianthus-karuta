<template>
  <div class="sakura-container">
    <div 
      v-for="i in 12" 
      :key="i" 
      :id="'sakura' + i"
      class="sakura" />
  </div>
</template>

<style scoped>
.sakura {
  position: absolute;
  height: 0;
  width: 0;
  border: 10px solid rgba(240, 210, 210, 0.9);
  border-radius: 15px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}

.sakura::after {
  content: "";
  display: block;
  position: absolute;
  top: -7px;
  left: -7px;
  height: 0;
  width: 0;
  border: 10px solid rgba(240, 210, 210, 0.9);
  border-radius: 15px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  transform: rotate(15deg);
}

#sakura1 {
  animation: sakura01 12s ease-out 2.0s infinite normal,
    sakura11 2.2s ease-in-out 0s infinite alternate,
    sakura21 3.5s ease 0s infinite alternate;
  z-index: 0;
}

#sakura2 {
  animation: sakura02 11s ease-out 3.0s infinite normal,
    sakura11 2.5s ease-in-out 0s infinite alternate,
    sakura22 4.4s ease 0s infinite alternate;
  z-index: 10;
}

#sakura3 {
  animation: sakura03 13s ease-out 1.0s infinite normal,
    sakura12 2.0s ease-in-out 0s infinite alternate,
    sakura23 2.6s ease 0s infinite alternate;
  z-index: 5;
}

#sakura4 {
  animation: sakura04 12s ease-out 0.0s infinite normal,
    sakura11 2.4s ease-in-out 0s infinite alternate,
    sakura21 4.2s ease 0s infinite alternate;
  z-index: 0;
}

#sakura5 {
  animation: sakura05 11s ease-out 1.5s infinite normal,
    sakura12 3.0s ease-in-out 0s infinite alternate,
    sakura22 2.8s ease 0s infinite alternate;
  z-index: 10;
}

#sakura6 {
  animation: sakura06 30s ease-out 2.3s infinite normal,
    sakura12 2.2s ease-in-out 0s infinite alternate,
    sakura23 3.4s ease 0s infinite alternate;
  z-index: 2;
}

#sakura7 {
  animation: sakura07 10s ease-out 1.4s infinite normal,
    sakura12 2.0s ease-in-out 0s infinite alternate,
    sakura22 3.0s ease 0s infinite alternate;
  z-index: 0;
}

#sakura8 {
  animation: sakura02 40s ease-out 3.0s infinite normal,
    sakura11 2.5s ease-in-out 0s infinite alternate,
    sakura23 3.8s ease 0s infinite alternate;
  z-index: 10;
}

#sakura9 {
  animation: sakura01 12s ease-out 5.0s infinite normal,
    sakura11 2.4s ease-in-out 0s infinite alternate,
    sakura21 4.0s ease 0s infinite alternate;
  z-index: 4;
}

#sakura10 {
  animation: sakura05 11s ease-out 0.5s infinite normal,
    sakura12 2.6s ease-in-out 0s infinite alternate,
    sakura23 2.2s ease 0s infinite alternate;
  z-index: 0;
}

#sakura11 {
  animation: sakura03 16s ease-out 2.0s infinite normal,
    sakura11 3.0s ease-in-out 0s infinite alternate,
    sakura21 3.6s ease 0s infinite alternate;
  z-index: 10;
}

#sakura12 {
  animation: sakura07 15s ease-out 3.0s infinite normal,
    sakura12 2.8s ease-in-out 0s infinite alternate,
    sakura22 3.2s ease 0s infinite alternate;
  z-index: 2;
}

@keyframes sakura01 {
  0% {
    opacity: 1;
    top: -50px;
    left: 50%;
  }
  100% {
    opacity: 1;
    top: 100%;
    left: 20%;
  }
}

@keyframes sakura02 {
  0% {
    opacity: 1;
    top: -50px;
    left: 80%;
  }
  100% {
    opacity: 1;
    top: 100%;
    left: 30%;
  }
}

@keyframes sakura03 {
  0% {
    opacity: 1;
    top: -50px;
    left: 105%;
  }
  100% {
    opacity: 1;
    top: 100%;
    left: 40%;
  }
}

@keyframes sakura04 {
  0% {
    opacity: 1;
    top: -50px;
    left: 75%;
  }
  100% {
    opacity: 1;
    top: 100%;
    left: 60%;
  }
}

@keyframes sakura05 {
  0% {
    opacity: 1;
    top: -50px;
    left: 90%;
  }
  100% {
    opacity: 1;
    top: 100%;
    left: -5%;
  }
}

@keyframes sakura06 {
  0% {
    opacity: 1;
    top: -50px;
    left: 50%;
  }
  100% {
    opacity: 1;
    top: 100%;
    left: 10%;
  }
}

@keyframes sakura07 {
  0% {
    opacity: 1;
    top: -50px;
    left: 80%;
  }
  100% {
    opacity: 1;
    top: 100%;
    left: -5%;
  }
}

@keyframes sakura11 {
  0% {
    margin-left: 120px;
  }
  100% {
    margin-left: 10px;
  }
}

@keyframes sakura12 {
  0% {
    margin-left: 150px;
  }
  100% {
    margin-left: -50px;
  }
}

@keyframes sakura21 {
  0% {
    transform: rotateX(-60deg) rotateY(-160deg);
  }
  50% {
    transform: rotateX(120deg) rotateY(80deg);
  }
  100% {
    transform: rotateX(320deg) rotateY(360deg);
  }
}

@keyframes sakura22 {
  0% {
    transform: rotateX(-60deg) rotateY(160deg);
  }
  50% {
    transform: rotateX(120deg) rotateY(-80deg);
  }
  100% {
    transform: rotateX(320deg) rotateY(-360deg);
  }
}

@keyframes sakura23 {
  0% {
    transform: rotateX(60deg) rotateY(-160deg);
  }
  50% {
    transform: rotateX(-120deg) rotateY(80deg);
  }
  100% {
    transform: rotateX(-320deg) rotateY(360deg);
  }
}
</style>
