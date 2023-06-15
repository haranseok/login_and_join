<template>
  <article>
    <div class="searchBox jcsb">
      <input
        type="text"
        v-model="searchText"
        @keydown.enter="searchMovies"
        placeholder="검색어를 입력해주세요."
      />
      <v-btn @click="searchMovies">검색</v-btn>
    </div>
    <ul>
      <li v-for="movie in movies" :key="movie">
        <router-link :to="`/movies/${movie.imdbID}`">{{
          movie.Title
        }}</router-link>
      </li>
    </ul>
    <v-btn @click="link">상세보기</v-btn>
  </article>
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

<style lang="scss" scoped>
.searchBox {
  width: 600px;
  height: 50px;
  margin: 0 auto;
  input {
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
