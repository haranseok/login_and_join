<template>
  <div class="container">
    <div data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="250">
      <v-card>
        <p><strong>admin</strong> dashboard</p>
        <div class="form_box">
          <input type="text" placeholder="id" />
          <div class="pw_box">
            <input
              :type="isShow === true ? 'text' : 'password'"
              placeholder="password"
            />
            <v-icon
              class="cp"
              @click="changePwTpe"
              color="#d3d3d3"
              :icon="isShow === true ? 'mdi-eye-off' : 'mdi-eye'"
            />
          </div>
        </div>
        <v-btn @click="doLogin" block color="#fec422" rounded="xs">Login</v-btn>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const isShow = ref(false);

const doLogin = () => {
  router.push("/home");
};

const changePwTpe = () => {
  isShow.value = !isShow.value;
  console.log(isShow.value);
};
</script>

<style lang="scss" scoped>
input {
  &::placeholder {
    font-size: 0.85rem;
    text-transform: uppercase;
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
  padding: 5%;
  border-top: 8px solid #ffd151;
  text-transform: capitalize;
  text-align: center;
  p {
    margin: 10% 0;
    strong {
      color: #fec422;
    }
  }
}

.form_box {
  width: 100%;
  & > input,
  .pw_box {
    width: 100%;
    padding: 3%;
    margin: 2% 0;
    background: rgba(177, 161, 77, 0.055);
  }
  .pw_box {
    display: flex;
    justify-content: space-between;
    input {
      width: 100%;
    }
  }
}

.v-btn {
  margin: 5% 0;
  color: #f8f8f8;
}
</style>
