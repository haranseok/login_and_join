<template>
  <div class="container">
    <div data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="1000">
      <v-card>
        <p class="title"><strong>login</strong> template</p>
        <div class="form_box">
          <input type="text" placeholder="id" v-model="userId" />
          <div class="pw_box">
            <input
              :type="isShow === true ? 'text' : 'password'"
              placeholder="password"
              v-model="userPw"
            />
            <v-icon
              class="cp"
              @click="changePwType"
              color="#d3d3d3"
              :icon="isShow === true ? 'mdi-eye-off' : 'mdi-eye'"
            />
          </div>
          <v-btn @click="doLogin" block color="#fec422" rounded="xs"
            >Login</v-btn
          >
        </div>
        <div class="social_box">
          <span class="line">or</span>
          <div class="btn_wrap">
            <v-btn
              color="#fae100"
              @click="doKakaoLogin"
              icon="mdi-chat"
              rounded="xs"
              size="small"
            ></v-btn>
            <v-btn
              id="naver_id_login"
              icon=""
              rounded="xs"
              size="small"
            ></v-btn>
            <v-btn @click="googleLogin" rounded="xs" size="small" icon=""
              ><img class="google_logo" src="@/assets/images/g-logo.png" alt=""
            /></v-btn>
          </div>
        </div>
      </v-card>
    </div>
    <ProgressBar class="progress_position" v-if="isProgress" />
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import Axios from "axios";
import { googleTokenLogin } from "vue3-google-login";
import ProgressBar from "@/components/items/ProgressBar.vue";

const router = useRouter();
const isShow = ref(false);
const route = useRoute();
const kakaoCode = ref(route.query);
const naverToken = ref("");
const isProgress = ref(true);

const user = ref({
  username: "test",
  password: "test1234*",
});
const userId = ref("");
const userPw = ref("");

const doLogin = () => {
  router.push("/home");
};

const changePwType = () => {
  isShow.value = !isShow.value;
};

const doKakaoLogin = () => {
  const params = {
    redirectUri: import.meta.env.VITE_APP_KAKAO_REDIRECT,
  };
  window.Kakao.Auth.authorize(params);
};

const getKakaoToken = async (token: any) => {
  const kakaoHeaders = {
    Authorization: "929136f8bc395f6a3ce07ad42d4a9713", // admin key
    "Content-type": "application/x-www-form-urlencodedlcharset=utf-8",
  };

  let params = {
    grant_type: "authorization_code",
    client_id: "041576102e9613c9acb57fb766533896",
    redirect_uri: import.meta.env.VITE_APP_KAKAO_REDIRECT,
    code: kakaoCode.value.code,
  };
  if (token) {
    let data = await Axios.post(
      import.meta.env.VITE_APP_KAKAO_API +
        `/oauth/token?grant_type=${params.grant_type}&client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&code=${params.code}`,
      { headers: kakaoHeaders }
    );
  }
};

getKakaoToken(kakaoCode.value.code);

onMounted(() => {
  const naver_id_login = new window.naver_id_login(
    "5mAAvwV9lZE3kQ82t5AF",
    "http://192.168.0.90:5173/"
  );
  const state = naver_id_login.getUniqState();
  naver_id_login.setState(state);
  naver_id_login.init_naver_id_login();
  naverToken.value = naver_id_login.getAccessToken();
});

const googleLogin = () => {
  googleTokenLogin().then((response) => {
    console.log(response);
  });
};

const showProgress = () => {
  setTimeout(() => {
    isProgress.value = false;
  }, 800);
};
showProgress();
</script>

<style lang="scss" scoped>
@import url("@/style/pages/login.scss");
</style>
