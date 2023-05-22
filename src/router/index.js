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
        {
            path: "/urus-pekerja",
            component: () => import ("../views/ManageWorker.vue"),
        },
        {
            path: "/urus-produk",
            component: () => import ("../views/ManageProduct.vue"),
        },
        {
            path: "/urus-promosi",
            component: () => import ("../views/ManagePromotion.vue"),
        },
        {
            path: "/daftar-pekerja",
            component: () => import ("../views/RegisterWorker.vue"),
        },
        {
            path: "/update-pekerja/:id",
            component: () => import ("../views/UpdateWorkerView.vue"),
        },
    ],
    linkActiveClass: "routerlink-active-link",
});

export default router;