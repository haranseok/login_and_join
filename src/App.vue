<template>
  <v-app>
    <router-view name="TheHeader"></router-view>
    <router-view name="TheSideBar"></router-view>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      //
    };
  },
});
</script>
