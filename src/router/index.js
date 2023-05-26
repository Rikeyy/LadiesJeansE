import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // landing page + login
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

        //dashboard
        {
            path: "/main",
            component: () => import ("../views/Dashboard.vue"),
        },

        //manage worker
        {
            path: "/urus-pekerja",
            component: () => import ("../views/UrusPekerja/ManageWorker.vue"),
        },
        {
            path: "/daftar-pekerja",
            component: () => import ("../views/UrusPekerja/RegisterWorker.vue"),
        },
        {
            path: "/update-pekerja/:id",
            component: () => import ("../views/UrusPekerja/UpdateWorkerView.vue"),
        },

        //manage product
        {
            path: "/urus-produk",
            component: () => import ("../views/UrusProduk/ManageProduct.vue"),
            children:
            [
                {
                    path: "",
                    name: "basekategory",
                    component: () => import("../views/kategory/kategoryBase.vue"),
                },
                {
                    path: "add",
                    name: "addkategory",
                    component: () => import("../views/kategory/addKategory.vue"),
                },
                {
                    path: "update/:id",
                    name: "updatekategory",
                    component: () => import("../views/kategory/updateKategory.vue"),
                }
            ]
        },
        {
            path: "/daftar-produk",
            component: () => import ("../views/UrusProduk/RegisterProduct.vue"),
        },
        {
            path: "/update-product/:id",
            component: () => import ("../views/UrusProduk/UpdateProduct.vue"),
        },

        //manage promotion
        {
            path: "/urus-promosi",
            component: () => import ("../views/UrusPromosi/ManagePromotion.vue"),
        },
        
    ],
    linkActiveClass: "routerlink-active-link",
});

export default router;