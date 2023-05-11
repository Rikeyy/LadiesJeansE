import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: () => import ("../views/Landing.vue"),
        },
        {
            path: "/logmasuk-pekerja",
            component: () => import ("../views/LoginWorker.vue"),
        },
        {
            path: "/logmasuk-pengurus",
            component: () => import ("../views/LoginManager.vue"),
        },
        {
            path: "/main",
            component: () => import ("../views/Dashboard.vue"),
        },
    ],
    linkActiveClass: "routerlink-active-link",
});

export default router;