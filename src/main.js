import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import i18n from "@/i18n";
import "element-ui/lib/theme-chalk/index.css";
import request from "@/utils/request";
Vue.config.productionTip = false;
Vue.prototype.request = request;
Vue.use(ElementUI);
new Vue({
  router,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
