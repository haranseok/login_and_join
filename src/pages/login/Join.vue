<template>
  <div class="container">
    <article>
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
        <div class="chexk_box">
          <input
            type="checkbox"
            id="agree"
            v-model="check"
            @change="checked"
          /><label for="agree">위 약관에 동의합니다.</label>
        </div>
      </section>
      <section v-if="count === 2" class="content">
        <div class="id_box">
          <input type="text" placeholder="아이디" />
          <v-btn size="small">중복확인</v-btn>
        </div>
        <div class="pw_box">
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
        </div>
      </section>
      <section v-if="count === 3" class="content">
        <v-icon>mdi-account-check</v-icon>
      </section>
      <v-btn
        append-icon="mdi-chevron-right"
        size="small"
        @click="isNext"
        :disabled="disabled"
        >next</v-btn
      >
    </article>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const count = ref(0);
const disabled = ref(true);
const check = ref(false);
if (count.value === 0) {
  disabled.value = false;
}
const checked = () => {
  if (check.value === true) {
    disabled.value = false;
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
</script>

<style lang="scss" scoped>
@import url("@/style/pages/login.scss");
article {
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
  background: rgb(239, 242, 243);
}
</style>
