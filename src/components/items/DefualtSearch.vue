<template>
  <div class="searchBox jcsb">
    <input
      type="text"
      v-model="searchText"
      @keydown.enter="searchMovies"
      placeholder="검색어를 입력해주세요."
    />
    <v-btn @click="searchMovies">검색</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const searchText = ref("");

const emits = defineEmits(["searchEnter"]);
const searchMovies = () => {
  emits("searchEnter", searchText.value);
};
</script>

<style lang="scss" scoped>
.searchBox {
  width: 600px;
  height: 50px;
  margin: 0 auto;
  & > input {
    width: 85%;
    height: 45px;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
    &::placeholder {
      font-size: 14px;
    }
  }
}
</style>
