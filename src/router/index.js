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
            children:
            [
                {
                    path: "",
                    name: "basePromotion",
                    component: () => import("../views/UrusPromosi/PromotionBase.vue"),
                },
                {
                    path: "add",
                    name: "addPromotion",
                    component: () => import("../views/UrusPromosi/addPromotion.vue"),
                },
                {
                    path: "update/:id",
                    name: "updatePromotion",
                    component: () => import("../views/UrusPromosi/updatePromotion.vue"),
                }
            ]
        },

        // Display Stock
        {
            path: "/paparan-stok",
            component: () => import ("../views/DisplayInventory.vue"),
        },
        {
            path: "/paparan-stok/:id",
            component: () => import ("../views/DisplayProduct.vue"),
        },
        {
            path: "/laporan",
            component: () => import ("../views/SalesReport.vue"),
        },

        // Pekerja Page
        {
            path: "/pekerja/utama",
            component: () => import ("../views/PekerjaPage/DashboardPekerja.vue"),
        },
        {
            path: "/pekerja/jualan",
            component: () => import ("../views/PekerjaPage/Sales.vue"),
        },
        {
            path: "/pekerja/bakul",
            component: () => import ("../views/PekerjaPage/Cart.vue"),
        },
        {
            path: "/pekerja/tambah-produk",
            component: () => import ("../views/PekerjaPage/addInventory.vue"),
        },

        {
            path: "/pekerja/tambah-produk/:id",
            component: () => import ("../views/PekerjaPage/editQuantity.vue"),
        },
        {
            path: "/graf-jualan",
            component: () => import ("../views/GraphSales.vue"),
        }
        
    ],
    linkActiveClass: "routerlink-active-link",
});

export default router;