import Vue from "vue";
import App from "/home/gabrielanascimento/workspace/2022/busertech/js/vuejs/crud-cli-components/pages/App.vue";
import router from "/home/gabrielanascimento/workspace/2022/busertech/js/vuejs/crud-cli-components/src/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
