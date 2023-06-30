<template>
  <v-navigation-drawer v-model="drawer">
    <!--  -->
  </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>

  <v-main>
    <!--  -->
  </v-main>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(null);
</script>
