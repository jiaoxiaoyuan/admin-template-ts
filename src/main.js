import Vue from "vue";
import App from "./App";
import { store } from "./store/store";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "./utils/http";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

new Vue({
  el: "#APP",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
