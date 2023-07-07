<template>
  <div class="inner_container">
    <h3>장바구니</h3>
    <ul>
      <li v-for="(list, i) in artWork" :key="i">
        <p>작품 명 : {{ list.name }}</p>
        <p>가격 : {{ list.price }}</p>
        <v-btn
          icon="mdi-trash-can-outline"
          size="small"
          variant="plain"
          @click="deleteCart"
        ></v-btn>
      </li>
    </ul>
    <v-btn size="small" @click="addCart">장바구니 담기</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const artWork = ref([{ name: "", price: 0 }]);
const addCart = () => {
  artWork.value.push({ name: "artlist", price: 2 });
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 5% 0;
}
</style>
