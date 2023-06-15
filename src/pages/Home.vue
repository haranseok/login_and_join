<template>
  <div>
    <h1>Home</h1>
    <input type="text" v-model="searchText" @keydown.enter="searchMovies" />
    <v-btn @click="searchMovies">검색</v-btn>
    <ul>
      <li v-for="movie in movies" :key="movie">
        <router-link :to="`/movies/${movie.imdbID}`">{{
          movie.Title
        }}</router-link>
      </li>
    </ul>
    <v-btn @click="link">상세보기</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { MovieContentService } from "@/service/MovieServics";

const router = useRouter();
const searchText = ref("");
const movies = ref({});
const searchMovies = async () => {
  let res = await MovieContentService.getSearchMovie(searchText.value);
  movies.value = res.Search;
};

const link = () => {
  router.push("/movies/detail");
};
</script>

<style lang="scss" scoped></style>
