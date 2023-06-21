<template>
  <article>
    <ul id="form_container">
      <li><span>주문자</span><input type="text" /></li>
      <li><span class="essential">수령인</span><input type="text" /></li>
      <li>
        <span class="essential">배송지</span>
        <ul class="address_box">
          <li class="address">
            <input type="text" placeholder="주소" v-model="address" /><v-btn
              @click="setAddress"
              >주소 검색</v-btn
            >
          </li>
          <li>
            <input type="text" placeholder="우편번호" v-model="postNum" />
          </li>
          <li><input type="text" placeholder="상세주소 입력" /></li>
        </ul>
      </li>
      <li>
        <span class="essential">연락처</span>
        <input
          type="text"
          placeholder="휴대폰 번호 ( '-' 제외 )"
          @input="
            $event.target.value = $event.target.value.replace(/[^0-9]/g, '')
          "
        />
      </li>
      <v-btn block>저장</v-btn>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const address = ref("");
const postNum = ref();
const setAddress = () => {
  new daum.Postcode({
    oncomplete: function (data: any) {
      address.value = data.address;
      postNum.value = data.zonecode;
    },
  }).open();
};
</script>

<style lang="scss" scoped>
#form_container {
  width: 800px;
  margin: 0 auto;
  li {
    span {
      display: block;
      margin: 1.5% 0;
      text-align: left;
      font-weight: bold;
    }
    & > input {
      width: 100%;
      padding: 1%;
      background: rgba(227, 227, 232, 0.557);
      border-radius: 3px;
    }
    .essential {
      &::after {
        content: "*";
        margin-left: 5px;
        color: rgb(224, 2, 2);
      }
    }
    .address_box {
      .address {
        display: flex;
        justify-content: space-between;
        margin: 0 0 1.5% 0;
        input {
          width: 82%;
        }
      }
      input:not(.address input) {
        margin: 0 0 1.5% 0;
      }
    }
  }
  & > .v-btn {
    margin-top: 3%;
  }
}
</style>
