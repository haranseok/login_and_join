<template>
  <div>
    login
    <v-btn @click="doLogin">Login</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const doLogin = () => {
  router.push("/home");
};
</script>

<style lang="scss" scoped></style>
