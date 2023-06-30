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
        <div class="join">
          <router-link to="/join">회원가입</router-link>
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
import { LoginService } from "@/service/SocialService";
import { MobileCheck } from "@/assets/ts/MobileChexk";
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

const changePwType = () => {
  isShow.value = !isShow.value;
};

const getSocialLoginToken = async (
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

onMounted(() => {
  LoginService.naverLogin();
  code.value = route.query.code;
  let href = window.location.href;
  redirectUri.value = href.split("?")[0];
  localStorage.setItem("code", code.value);
  if (localStorage.getItem("code") !== "undefined") {
    isMobileCheck();
  }
});

const doLogin = () => {
  //   if (userId.value !== "" && userPw.value !== "") {
  router.push("/home");
  //   }
};

const doKakaoLogin = () => {
  const params = {
    redirectUri: import.meta.env.VITE_APP_KAKAO_REDIRECT,
    throughTalk: false,
  };
  window.Kakao.Auth.authorize(params);
  localStorage.setItem("type", "2");
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
  LoginService.googleLoginLink(params);
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
