import Vue from "vue";
import App from "./App.vue";
import router from "./rouuter/index"; // 路由
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);

new Vue({
    el: "#app",
    router,
    render: (h) => h(App),
}).$mount();
