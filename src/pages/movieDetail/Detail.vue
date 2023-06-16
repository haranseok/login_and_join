<template>
  <article>
    <div class="inner_container flex">
      <div
        class="img_container"
        :style="{ backgroundImage: `url(${movieDetail.Poster})` }"
      ></div>
      <div class="text-content">
        <h1>{{ movieDetail.Title }}</h1>
        <div>
          <strong>출연 </strong><br />
          {{ movieDetail.Actors }}
        </div>
        <div>
          <strong>줄거리</strong> <br />
          {{ movieDetail.Plot }}
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { MovieContentService } from "@/service/MovieServics";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const movieDetail = ref({});

const getDetail = async () => {
  let res = await MovieContentService.getMovieDetail(`${route.params.heropy}`);
  movieDetail.value = res;
  console.log(res);
};

getDetail();
</script>

<style lang="scss" scoped>
.inner_container {
  margin-top: 5%;
}
.img_container {
  width: 400px;
  height: calc(400px * 3 / 2);
  margin: 0 auto;
  background-size: cover;
}

.text-content {
  width: 500px;
  div {
    margin: 5% 0;
    strong {
      display: block;
      margin-bottom: 0px;
    }
  }
}
</style>
