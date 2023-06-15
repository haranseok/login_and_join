<template>
  <div>
    movie details

    <div
      class="img_container"
      :style="{ backgroundImage: `url(${movieDetail.Poster})` }"
    ></div>
  </div>
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
};

getDetail();
</script>

<style lang="scss" scoped>
.img_container {
  width: 400px;
  height: calc(400px * 3 / 2);
  background-size: cover;
}
</style>
