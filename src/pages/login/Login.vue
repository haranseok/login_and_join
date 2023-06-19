<template>
  <div class="container">
    <div data-aos="zoom-in" data-aos-easing="ease" data-aos-delay="250">
      <v-card>
        <p><strong>login</strong> template</p>
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
          <v-btn @click="doLogin" block color="#fec422" rounded="xs"
            >Login</v-btn
          >
        </div>
        <div class="social_box">
          <span class="line">or</span>
          <v-btn color="#fae100" block @click="doKakaoLogin"
            ><v-icon class="chatIcon">mdi-chat</v-icon>카카오 로그인</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watch } from "vue";
import Axios from "axios";
const router = useRouter();
const isShow = ref(false);
const route = useRoute();
const kakaoCode = ref(route.query);

const user = ref({
  username: "test",
  password: "test1234*",
});

const doLogin = () => {
  router.push("/home");
};

const changePwTpe = () => {
  isShow.value = !isShow.value;
  console.log(isShow.value);
};

const doKakaoLogin = () => {
  const params = {
    redirectUri: import.meta.env.VITE_APP_KAKAO_REDIRECT,
  };
  window.Kakao.Auth.authorize(params);
};

const getKakaoToken = (token: any) => {
  const kakaoHeaders = {
    Authorization: "929136f8bc395f6a3ce07ad42d4a9713", // admin key
    "Content-type": "application/x-www-form-urlencodedlcharset=utf-8",
  };
  let params = {
    grant_type: "authorization_code",
    client_id: "041576102e9613c9acb57fb766533896",
    redirect_uri: import.meta.env.VITE_APP_KAKAO_REDIRECT,
    code: kakaoCode.value.code,
    // client_secret: "JHQYbs9IKYmzFzRcKWgEdut8Ucqoy9vq",
  };
  if (token) {
    let data = Axios.post(
      import.meta.env.VITE_APP_KAKAO_API +
        `/oauth/token?grant_type=${params.grant_type}&client_id=${params.client_id}&redirect_uri=${params.redirect_uri}&code=${params.code}`,
      { headers: kakaoHeaders }
    );
    console.log(data);
  }
};
getKakaoToken(kakaoCode.value.code);
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
  .v-btn {
    margin: 5% 0;
    color: #f8f8f8;
  }
}

.social_box {
  .line {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.2);
    font-size: 0.85rem;
    margin: 2.5rem 0;
    text-transform: uppercase;
    color: #aaa;
    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      margin: 0px 14px;
      background: rgba(0, 0, 0, 0.15);
      height: 1px;
      line-height: 0px;
    }
  }
  .v-btn {
    color: #624a3d;
    position: relative;
    font-weight: bold;
    .chatIcon {
      position: absolute;
      left: 10%;
    }
  }
}
</style>
