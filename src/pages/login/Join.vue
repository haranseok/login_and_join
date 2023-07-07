<template>
  <div class="container">
    <article class="join_inner">
      <h2>join</h2>
      <section class="jcsb step_wrap">
        <div class="step-box" v-for="(num, i) in icons.num" :key="i">
          <div class="circle jcc" :class="{ active: count >= i }">
            <v-icon v-if="count >= i" :icon="'mdi-check'" />
            <p v-else>{{ num }}</p>
          </div>
          <small>{{ icons.text[i] }}</small>
        </div>
      </section>
      <section v-if="count === 0" class="content">step1</section>
      <section v-if="count === 1" class="content">
        <div class="text_box">개인정보....</div>
        <div class="check_box">
          <input
            type="checkbox"
            id="agree"
            v-model="check"
            @change="checked"
          /><label for="agree">위 약관에 동의합니다.</label>
        </div>
      </section>
      <section v-if="count === 2" class="content">
        <div class="form_box">
          <div class="id_box">
            <input
              type="text"
              placeholder="아이디"
              v-model="userInfo.userID"
              @focusout="idRegExp"
              autofocus
            />
            <v-btn color="rgb(0, 185, 0)" @click="checkIsDuplication"
              >중복확인</v-btn
            >
          </div>
          <small :class="idCheck === false ? 'perfect' : ''"
            >영문, 숫자조합 6~15</small
          >
          <div class="pw_box">
            <input
              type="password"
              placeholder="비밀번호"
              v-model="userInfo.userPw"
              @focusout="pwRegExp"
            />
            <small :class="pwCheck === false ? 'perfect' : ''"
              >대소문자 1글자 이상, 숫자, 특수문자 1글자 이상 조합 8~20
            </small>
            <input
              type="password"
              placeholder="비밀번호 확인"
              v-model="userInfo.userPwCheck"
              @focusout="samePwCheck"
            />
            <small :class="samePw === false ? 'perfect' : ''"
              >비밀번호가 일치하지 않습니다.
            </small>
          </div>
        </div>
      </section>
      <section v-if="count === 3" class="content">
        <v-icon color="#FBC02D" size="100">mdi-account-check</v-icon>
        <p>회원가입이 완료되었습니다.</p>
      </section>
      <v-btn
        append-icon="mdi-chevron-right"
        size="small"
        @click="isNext"
        :disabled="disabled"
        color="rgb(254, 196, 34)"
        v-if="count !== 3"
        >next</v-btn
      >
      <router-link to="/home">
        <v-btn
          v-if="count === 3"
          append-icon="mdi-chevron-right"
          size="small"
          color="rgb(254, 196, 34)"
        >
          home
        </v-btn>
      </router-link>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { RegExpCheck } from "@/assets/ts/RegExp";
const count = ref(0);
const disabled = ref(true);
const check = ref(false);
const userInfo = ref({
  userID: "",
  userPw: "",
  userPwCheck: "",
});
const idCheck = ref(true);
const pwCheck = ref(true);
const samePw = ref(true);
const userID = ref("test");
if (count.value === 0) {
  disabled.value = false;
}
const checked = () => {
  if (check.value === true) {
    disabled.value = false;
  } else {
    disabled.value = true;
  }
};
const icons = ref({
  num: ["1", "2", "3", "4"],
  text: ["본인인증", "약관 동의", "정보입력", "완료"],
});
const isNext = () => {
  if (count.value < 3) {
    count.value += 1;
  }
  if (disabled.value === false) {
    disabled.value = true;
  }
};

const checkIsDuplication = () => {
  if (userID.value === userInfo.value.userID) {
    alert("이미 있는 아이디입니다.");
  } else {
    alert("사용 가능한 아이디입니다.");
  }
};

const idRegExp = () => {
  let res = RegExpCheck.idRegExpCheck(userInfo.value.userID);
  if (res === false) {
    idCheck.value = false;
  } else {
    idCheck.value = true;
  }
};

const pwRegExp = () => {
  let res = RegExpCheck.pwRegExpCheck(userInfo.value.userPw);
  if (res === false) {
    pwCheck.value = false;
  } else {
    pwCheck.value = true;
  }
};

const samePwCheck = () => {
  if (userInfo.value.userPw !== userInfo.value.userPwCheck) {
    samePw.value = false;
  } else {
    samePw.value = true;
    disabled.value = false;
  }
};
</script>

<style lang="scss" scoped>
.join_inner {
  max-width: 1200px;
  margin: 5% auto;
  text-align: center;

  h2 {
    text-transform: uppercase;
  }
  section {
    width: 500px;
    margin: 5% auto;
  }
  .step_wrap {
    .step-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      small {
        margin-top: 10px;
      }
    }
    .circle {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #bdbdbd;
      color: #ffffff;
    }
    & > :not(:last-child) {
      position: relative;
    }
    & > :not(:last-child)::after {
      position: absolute;
      top: 30%;
      transform: translate(-50%, -50%);
      content: "";
      width: 100px;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
      left: 105px;
    }
    & > :nth-child(3)::after {
      left: 100px;
      width: 95px;
    }

    .active {
      transition: 0.5s;
      background: rgb(0, 185, 0);
    }
  }
}
.content {
  padding: 5%;
  input[type="password"] {
    width: 100%;
  }
}

input[type="text"],
input[type="password"] {
  margin: 5px 0;
  padding: 1.5%;
  border-radius: 5px;
  background: rgb(240, 241, 237);
  &::placeholder {
    font-size: 0.8rem;
  }
  &:focus {
    outline: #a4caac auto 3px;
  }
}
.form_box {
  .id_box {
    display: flex;
    align-items: center;
    input[type="text"] {
      width: 80%;
    }
    .v-btn {
      margin-left: 5%;
      font-weight: bold;
      font-size: 0.8rem;
      color: #ffffff;
    }
  }
  small {
    opacity: 0;
    display: block;
    text-align: left;
    color: rgba(240, 57, 1, 0.877);
    font-weight: bold;
    transition: all 0.3s;
  }
  .perfect {
    opacity: 1;
    transition: all 0.3s;
  }
}
</style>
