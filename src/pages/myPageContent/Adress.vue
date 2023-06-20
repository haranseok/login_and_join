<template>
  <div><input type="text" /><v-btn @click="setAdress">검색</v-btn></div>
</template>

<script lang="ts" setup>
const setAdress = () => {
  new daum.Postcode({
    oncomplete: function (data: any) {
      console.log(data);
    },
  }).open();
};
</script>

<style lang="scss" scoped></style>
