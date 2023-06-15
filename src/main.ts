import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Router from '@/router/index'
import i18n from './i18n'

const app = createApp(App);
const pinia = createPinia();

loadFonts()
app.use(i18n)
app.use(pinia)
app.use(vuetify)
app.use(Router)
app.mount('#app')
