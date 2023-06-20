<template>
  <article>
    <h1>my page</h1>
    <ul>
      <li v-for="(list, i) in myPageList" :key="i">
        <router-link :to="`/myPage/${list.link}`">
          <v-btn
            variant="plan"
            rounded="0"
            :class="{ active: current === i }"
            @click="currentTab((current = i))"
          >
            {{ list.name }}
          </v-btn>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </article>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const myPageList = ref([
  { link: "adress", name: "배송지 등록" },
  { link: "B", name: "b" },
  { link: "C", name: "c" },
]);
const current = ref();
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
  justify-content: center;
  .active {
    border-bottom: 3px solid #eac805;
  }
}
</style>
