<template>
  <article class="jcc">
    결제 및 본인인증
    <v-btn @click="identityVerification">본인인증</v-btn>
    <v-btn @click="doPayment">결제하기</v-btn>
  </article>
</template>

<script lang="ts" setup>
const identityVerification = () => {
  console.log("본인인증");
  IMP.certification(
    {
      //   pg: "A010002002.{CPID}",
      merchant_uid: "ORD20180131-0000011",
      m_redirect_url: "http://192.168.0.90:5173/",
      popup: true,
    },
    function (rsp: any) {
      // callback
      if (rsp.success) {
        // true를 내뱉어줌. 인증성공하고 나면 처리할 코드를 입력하면 된다.
      } else {
        console.log("실패");
      }
    }
  );
};

const doPayment = () => {
  console.log("결제");
  requestPay();
};

const requestPay = () => {
  IMP.request_pay(
    {
      // param
      pg: "kcp.{A52CY}",
      pay_method: "card",
      merchant_uid: "IMP20180131-0000011",
      name: "노르웨이 회전 의자",
      amount: 64900,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181",
    },
    (rsp: any) => {
      // callback
      if (rsp.success) {
        console.log(rsp);
      } else {
        console.log("실패");
      }
    }
  );
};
</script>

<style lang="scss" scoped></style>
