import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('../views/Home')
    },
    {
        path: "/about",
        name: "About us",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/privacy",
        name: "Privacy",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Privacy.vue")
    },
    {
        path: "/service",
        name: "Service",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Service'),
    },
    {
        path: '/service/heatmap',
        name: 'heatmap',
        component: () => import('../views/Service_heatmap')
    },
    {
        path: '/service/overview',
        name: 'overview',
        component: () => import('../views/Service_overview')
    }

];

const router = new VueRouter({
    routes
});

export default router;
