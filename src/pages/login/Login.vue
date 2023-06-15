<template>
  <div class="container">
    <div data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="400">
      <v-card>
        <div class="top">
          <h2>login</h2>
          <p><strong>admin</strong> dashboard</p>
        </div>
        <div class="form_box">
          <input type="text" placeholder="id" />
          <input type="password" placeholder="password" />
        </div>
        <v-btn @click="doLogin">Login</v-btn>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const doLogin = () => {
  router.push("/home");
};
</script>

<style lang="scss" scoped>
input {
  &::placeholder {
    text-transform: capitalize;
  }
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 250, 247);
}
.v-card {
  width: 500px;
  border-top: 8px solid #ffd151;
  text-transform: capitalize;
  .top {
    padding: 6% 0;
    text-align: center;
    h2 {
      margin-bottom: 3%;
      font-size: 2rem;
    }
    p {
      strong {
        color: #fec422;
      }
    }
  }
}
</style>
