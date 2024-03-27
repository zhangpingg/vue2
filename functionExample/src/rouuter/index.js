import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导出路由 在 main.js 里使用
const router = new VueRouter({
    routes: [
        {
            path: `/`,
            redirect: {
                name: "home",
            },
        },
        {
            path: `/home`,
            name: "home",
            meta: {
                title: "首页",
            },
            component: () => import("@/pages/home/index.vue"),
        },
        {
            path: `/test`,
            meta: {
                title: "首页",
            },
            component: () => import("@/pages/test/index.vue"),
        },
    ],
    mode: "history",
});

export default router;
