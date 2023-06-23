<template>
  <article class="jcc">
    결제 및 본인인증
    <v-btn @click="identityVerification">본인인증</v-btn>
    <v-btn @click="doPayment">결제하기</v-btn>
  </article>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { PorOneService } from "@/service/PortOneService";
const data = ref({
  //   pg: "A010002002.{CPID}",
  merchant_uid: "ORD20180131-0000011",
  m_redirect_url: "http://192.168.0.90:5173/",
  popup: true,
});
const identityVerification = () => {
  console.log("본인인증");
  let res = PorOneService.doIdentityVertification(data.value);
  console.log(res);
};

const doPayment = () => {
  console.log("결제");
  requestPay();
};

const requestPay = () => {
  IMP.request_pay(
    {
      // param
      pg: "html5_inicis.INIpayTest",
      pay_method: "card",
      merchant_uid: "57008833-33004",
      name: "당근 10kg",
      amount: 1004,
      buyer_email: "Iamport@chai.finance",
      buyer_name: "포트원 기술지원팀",
      buyer_tel: "010-1234-5678",
      buyer_addr: "서울특별시 강남구 삼성동",
      buyer_postcode: "123-456",
      popup: true,
    },
    (rsp: any) => {
      // callback
      if (rsp.success) {
        console.log(rsp);
      } else {
        console.log(rsp);
      }
    }
  );
};
</script>

<style lang="scss" scoped></style>
