<template>
  <v-navigation-drawer v-model="global.navDrawer" temporary>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useGlobalStore } from "@/store/GlobalStore";

const global = useGlobalStore();

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

<style lang="scss" scoped></style>
