import { createRouter, createWebHistory } from "vue-router";

//buat komponen route
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import("../views/index.vue") //=> memanggil file view nya
    },
    {
        path: '/tambah',
        name: 'tambah',
        component: () => import("../views/tambah.vue")
    },
    {
        path: '/bantuan',
        name: 'bantuan',
        component: () => import("../views/bantuan.vue")
    },
    {
        path: '/materi/:idx',
        name: 'materi',
        component: () => import("../views/materi.vue")
    }
];

//membuat router
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; //diekspor agar bisa dibaca di main.js