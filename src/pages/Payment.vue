<template>
  <v-main>
    <article class="jcc">
      결제 및 본인인증
      <v-btn @click="identityVerification">본인인증</v-btn>
      <v-btn @click="doPayment">결제하기</v-btn>
    </article>
  </v-main>
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

const paymentReq = ref({
  pg: "html5_inicis.INIpayTest",
  pay_method: "card",
  merchant_uid: "57008833-33003",
  name: "당근 10kg",
  amount: 1004,
  buyer_email: "Iamport@chai.finance",
  buyer_name: "포트원 기술지원팀",
  buyer_tel: "010-1234-5678",
  buyer_addr: "서울특별시 강남구 삼성동",
  buyer_postcode: "123-456",
  popup: true,
});

const identityVerification = async () => {
  console.log("본인인증");
  let auth = await PorOneService.doIdentityVertification(data.value);
  console.log(auth);
};

const doPayment = () => {
  console.log("결제");
  if (!window.IMP) return;
  PorOneService.doRequestPay(paymentReq.value);
};
</script>

<style lang="scss" scoped></style>
