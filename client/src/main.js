import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
sync(store, router);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
