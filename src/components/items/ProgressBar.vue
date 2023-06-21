<template>
  <div class="progress_container">
    <div class="progress_fill"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.progress_container {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 3px;
  background: #f6eac5;
  .progress_fill {
    position: absolute;
    height: inherit;
    background: #e88382;
    animation: progressBarFill 5s linear;
  }
}

@keyframes progressBarFill {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
