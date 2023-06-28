<template>
  <div class="container">
    <article>
      <h2>join</h2>
      <section class="jcsb">
        <div class="step-box" v-for="(num, i) in icons.num" :key="i">
          <div class="circle jcc" :class="{ active: count >= i }">
            <p v-if="num">{{ num }}</p>
            <v-icon v-else>mdi-check</v-icon>
          </div>
          <small>{{ icons.text[i] }}</small>
        </div>
      </section>
      <v-btn append-icon="mdi-chevron-right" size="small" @click="isNext"
        >next</v-btn
      >
    </article>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const icons = ref({
  num: ["1", "2", "3"],
  text: ["step1", "step2", "step3"],
});
const num = ref(true);
const count = ref(0);
const isNext = () => {
  if (count.value < 2) {
    count.value += 1;
  }
  console.log(count.value);
};

const steps = () => {
  if (count.value === 0) {
    num.value = false;
  }
};
</script>

<style lang="scss" scoped>
@import url("@/style/pages/login.scss");
article {
  max-width: 1200px;
  margin: 5% auto;
  text-align: center;
  section {
    width: 500px;
    margin: 0 auto;
    .circle {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #bdbdbd;
      color: #ffffff;
    }
    & > :nth-child(2) {
      position: relative;
    }
    & > :nth-child(2)::before,
    & > :nth-child(2)::after {
      position: absolute;
      top: 30%;
      transform: translate(-50%, -50%);
      content: "";
      width: 180px;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
    }
    & > :nth-child(2)::before {
      left: -100px;
    }
    & > :nth-child(2)::after {
      left: 133px;
    }
    .active {
      background: rgb(0, 185, 0);
    }
  }
}
</style>
