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
import { ref, inject } from "vue";
const searchText = ref("");
const movies = ref([]);

const axios = inject("$axios");
interface Movie {}

const searchMovies = async () => {
  let res = await axios.get(
    `https://www.omdbapi.com?apikey=7035c60c&s=${searchText.value}`
  );
  console.log(res);
};
</script>

<style lang="scss" scoped></style>
