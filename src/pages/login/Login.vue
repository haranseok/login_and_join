<template>
  <div class="container jcc">
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
              @click="doNaverLogin"
            ></v-btn>
            <GoogleLogin :callback="googleCode">
              <v-btn rounded="xs" size="small" icon="">
                <img
                  class="google_logo"
                  src="@/assets/images/g-logo.png"
                  alt=""
              /></v-btn>
            </GoogleLogin>
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
import type { CallbackTypes } from "vue3-google-login";
import ProgressBar from "@/components/items/ProgressBar.vue";
import { LoginService } from "@/service/SocialService";
import { Social } from "@/assets/ts/pages/Social";
const router = useRouter();
const isShow = ref(false);
const route = useRoute();
const code = ref("");
const isProgress = ref(true);
const redirectUri = ref();
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
  localStorage.setItem("type", "2");
};

const doNaverLogin = () => {
  localStorage.setItem("type", "1");
};

onMounted(() => {
  Social.naverLogin();
  code.value = route.query.code;
  let href = window.location.href;
  redirectUri.value = href.split("?")[0];
  localStorage.setItem("code", code.value);
  if (localStorage.getItem("code") !== "undefined") {
    let snsType = localStorage.getItem("type");
    doSocialLogin(code.value, snsType, redirectUri.value);
  }
});

const doSocialLogin = async (
  code: string,
  type: number,
  redirectUrl: string
) => {
  let res = await LoginService.doSnsLogin(code, type, redirectUrl);
  if (res.status === 200) {
    localStorage.setItem("token", res.data.accessToken);
    router.push("/home");
  }
};

const googleCode: CallbackTypes.CodeResponseCallback = (response) => {
  console.log(response.code);
  localStorage.setItem("type", "3");
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
