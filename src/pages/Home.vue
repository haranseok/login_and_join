<template>
  <main>
    <img src="@/assets/images/main_title.png" alt="cinema" data-aos="zoom-in" />
  </main>
  <article>
    <Search @searchEnter="searchEnter" />
    <ul>
      <li v-for="movie in movies" :key="movie" data-aos="fade-up">
        <router-link :to="`/movies/${movie.imdbID}`">
          <div
            class="img"
            :style="{ backgroundImage: `url(${movie.Poster})` }"
          ></div>
          <div class="text_box">
            <h4>{{ movie.Title }}</h4>
            <p>{{ movie.Year }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { MovieContentService } from "@/service/MovieService";
import Search from "@/components/items/DefualtSearch.vue";
import { UserInfo } from "@/service/SocialService";
import { useGlobalStore } from "@/store/GlobalStore";

const global = useGlobalStore();
const movies = ref({});
const token = ref(localStorage.getItem("token"));
const searchEnter = async (val: string) => {
  let res = await MovieContentService.getSearchMovie(val);
  movies.value = res.Search;
};

const setUserInfo = async () => {
  let res = await UserInfo.getUserInfo(token.value);
  global.setUserID(res.data.name);
};
setUserInfo();
localStorage.removeItem("code");
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 249, 237);
}
.img {
  width: 150px;
  height: calc(150px * 3 / 2);
  background-size: cover;
}

ul {
  width: 1000px;
  margin: 5% auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  li {
    width: 150px;
    margin: 3% 0;
    .text_box {
      margin-top: 10px;
      h4 {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
