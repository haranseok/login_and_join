<template>
  <div>
    <h1>Home</h1>
    <input type="text" v-model="searchText" @keydown.enter="searchMovies" />
    <v-btn @click="searchMovies">검색</v-btn>
    <ul>
      <!-- <li v-for="movie in movies" :key="movie">{{ movie.Title }}</li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { MoviceContentService } from "@/service/MoviceServics";
const searchText = ref("");
const movies = ref([]);
// console.log(VUE_APP_TEST);
const searchMovies = async () => {
  let res = await MoviceContentService.getSearchMovice(searchText.value);
  console.log(res);
};
</script>

<style lang="scss" scoped></style>
