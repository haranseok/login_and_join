import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Router from "@/router/index";
import "@/router/guard";
import i18n from "./i18n";
import Axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { initKakao } from "kakao-js-sdk";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);
const pinia = createPinia();

app.provide("$axios", Axios);

loadFonts();
app.use(
  Aos.init({
    duration: 1000,
  })
);
app.use(i18n);
app.use(pinia);
app.use(vuetify);
app.use(Router);
app.mount("#app");
app.use(vue3GoogleLogin, {
  clientId:
    "803988286583-8903s8ggtvc7faamh0s84oc9ovniud52.apps.googleusercontent.com",
});
initKakao("bc75ad9398e1d0094f0abad0f9b0b723");

const { IMP } = window;
IMP.init("imp84326881");
