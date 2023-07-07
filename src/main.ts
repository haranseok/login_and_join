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

// initKakao("bc75ad9398e1d0094f0abad0f9b0b723");
initKakao("7a1b2deeb0903f905ce7396bf9d826ac");
