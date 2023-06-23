<template>
  <v-app>
    <!-- <Header /> -->
    <router-view name="TheHeader"></router-view>
    <TheSideBar />
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheSideBar from "@/components/TheSideBar.vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      //
    };
  },
  components: {
    TheSideBar,
  },
});
</script>
