<template>
  <header>
    <div class="inner_container jcsb">
      <p>movie</p>
      <nav>
        <ul class="flex">
          <li v-for="(nav, i) in navigations" :key="i">
            <router-link :to="nav.path">
              {{ nav.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lnag="ts" setup>
import { ref } from "vue";

const navigations = ref([
  {
    path: "/home",
    name: "홈",
  },
  //   {
  //     path: "/movies/:heropy",
  //     name: "movies",
  //   },
  {
    path: "/my_page",
    name: "마이페이지",
  },
  {
    path: "/payment",
    name: "결제",
  },
]);
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  position: fixed;
}

.inner_container {
  height: 60px;
  p {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  nav {
    text-transform: uppercase;
    ul {
      li {
        padding: 5px;
        a {
          color: rgb(208, 128, 0);
        }
      }
    }
  }
}
</style>
