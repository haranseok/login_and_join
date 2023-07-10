<template>
  <div class="scroll-box">
    <div class="wheel"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.scroll-box {
  position: relative;
  width: 30px;
  height: 60px;
  border-radius: 20px;
  border: 2px solid #f0bc2e;
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 8px;
    border-radius: 10px;
    opacity: 1;
    background: #f0bc2e;
    animation-name: scroll 2s infinite;
    -webkit-animation: scroll 2s infinite;
  }
}

@keyframes scroll {
  to {
    opacity: 0;
    top: 40px;
  }
}
</style>
