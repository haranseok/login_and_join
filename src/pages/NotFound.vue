<template>
  <article class="not_found">
    <div>
      <h1>404</h1>
      <h3>not found</h3>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
console.log(t);
</script>
<style lang="scss" scoped>
.not_found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f0ee;
  text-align: center;
  div {
    h1 {
      font-size: 8rem;
      color: #d37800;
    }
    h3 {
      font-weight: normal;
      font-size: 4rem;
      text-transform: uppercase;
    }
  }
}
</style>
