
import './assets/styles/index.scss'
import { createApp } from 'vue'
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from "./router/router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons";
import App from './App.vue'
import store from './store';

library.add(fas)
const app = createApp(App)
app
  .use(VueQueryPlugin)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
