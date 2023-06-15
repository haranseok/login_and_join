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
const app = createApp(App);
const pinia = createPinia();

app.provide("$axios", Axios);

loadFonts();
app.use(Aos.init());
app.use(i18n);
app.use(pinia);
app.use(vuetify);
app.use(Router);
app.mount("#app");
