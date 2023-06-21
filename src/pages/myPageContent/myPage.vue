<template>
  <article>
    <h1>my page</h1>
    <ul>
      <li v-for="(list, i) in myPageList" :key="i">
        <router-link :to="`/myPage/${list.link}`">
          <v-btn
            variant="plain"
            rounded="xs"
            :class="{ active: current === i }"
            @click="currentTab(i)"
          >
            {{ list.name }}
          </v-btn>
        </router-link>
      </li>
    </ul>
    <LoadingSpinner v-if="isSpinner" />
    <ProgressBar />
    <router-view></router-view>
  </article>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoadingSpinner from "@/components/items/LoadingSpinner.vue";
import ProgressBar from "@/components/items/ProgressBar.vue";

const myPageList = ref([
  { link: "address", name: "배송지 등록" },
  //   { link: "B", name: "b" },
  //   { link: "C", name: "c" },
]);
const current = ref();
const currentTab = (num: number) => {
  isSpinner.value = true;
  current.value = num;
  isSpinner.value = false;
};
const isSpinner = ref(false);
</script>

<style lang="scss" scoped>
article {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin: 5% 0;
    color: #222;
    text-transform: capitalize;
  }
}
ul {
  display: flex;
  justify-content: end;
  .active {
    color: #f5f5ef;
    font-weight: bold;
    background: rgb(208, 128, 0);
  }
}
</style>
