<template>
  <v-app>
    <!-- <Header /> -->
    <router-view name="TheHeader"></router-view>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import Header from "@/components/TheHeader.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      //
    };
  },
  //   components: {
  //     Header,
  //   },
});
</script>
