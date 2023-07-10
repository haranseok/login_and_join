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
            <v-btn rounded="xs" size="small" icon="" @click="doGoogleLogin">
              <img
                class="google_logo"
                src="@/assets/images/g-logo.png"
                alt=""
              />
            </v-btn>
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
import ProgressBar from "@/components/items/ProgressBar.vue";
import { SnsLoginService } from "@/service/SocialService";
import { UserAuthService } from "@/service/UserAuthService";
import { MobileCheck } from "@/assets/ts/MobileChexk";
import Axios from "axios";
const router = useRouter();
const isShow = ref(false);
const route = useRoute();
const code = ref();
const isProgress = ref(true);
const redirectUri = ref();
const user = ref({
  username: "test",
  password: "test1234*",
});
const userId = ref("");
const userPw = ref("");

const changePwType = () => {
  isShow.value = !isShow.value;
};

const getSocialLoginToken = async (
  code: string,
  type: any,
  redirectUrl: string
) => {
  let res = await SnsLoginService.doSnsLogin(code, type, redirectUrl);
  if (res.status === 200) {
    localStorage.setItem("token", res.data.accessToken);
    router.push("/home");
  }
};

onMounted(() => {
  SnsLoginService.naverLogin();
  code.value = route.query.code;
  let href = window.location.href;
  redirectUri.value = href.split("?")[0];
  localStorage.setItem("code", code.value);
  if (localStorage.getItem("code") !== "undefined") {
    // isMobileCheck();
    getKakaoToken(code.value);
  }
});

const doLogin = () => {
  //   if (userId.value !== "" && userPw.value !== "") {
  router.push({ path: "/home", replace: true });
  //   }
};

const doKakaoLogin = () => {
  const params = {
    redirectUri: import.meta.env.VITE_APP_KAKAO_REDIRECT,
    throughTalk: false,
    prompts: "login",
  };
  window.Kakao.Auth.authorize(params);
  localStorage.setItem("type", "2");
};

// 카카오톡 로그아웃 구현하면서 임시로 추가
const getKakaoToken = async (token: any) => {
  const kakaoHeaders = {
    Authorization: "929136f8bc395f6a3ce07ad42d4a9713",
    "Content-type": "application/x-www-form-urlencodedlcharset=utf-8",
  };
  let params = {
    grant_type: "authorization_code",
    client_id: "041576102e9613c9acb57fb766533896",
    redirect_uri: import.meta.env.VITE_APP_KAKAO_REDIRECT,
    code: code.value,
    // client_secret: "JHQYbs9IKYmzFzRcKWgEdut8Ucqoy9vq",
  };
  if (token) {
    let data = await Axios.post(
      import.meta.env.VITE_APP_KAKAO_API +
        `/oauth/token?grant_type=${params.grant_type}&client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&code=${params.code}`,
      { headers: kakaoHeaders }
    );
    localStorage.setItem("access_token", data.data.access_token);
    if (data.status === 200) {
      router.push("/home");
    }
  }
};

const doNaverLogin = () => {
  localStorage.setItem("type", "1");
};

const isMobileCheck = () => {
  let snsType = localStorage.getItem("type");
  //   if (code.value && MobileCheck.any()) {
  //     window.location.href = `secrettown://${redirectUri.value}?mcode=${code.value}`;
  //   } else {
  getSocialLoginToken(code.value, snsType, redirectUri.value);
  //   }
};

const doGoogleLogin = () => {
  let params = {
    client_id:
      "678295128892-4tu4fhpa2637o13fhs2pumosd5pnj7uf.apps.googleusercontent.com",
    redirect_uri: "http://localhost:5173/login",
    response_type: "code",
    state: "aa",
    scope: "email profile",
  };
  SnsLoginService.googleLoginLink(params);
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
