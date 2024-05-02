import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import LoginView from "../pages/LoginView.vue";
import RegistView from "../pages/RegistView.vue";
import Cookies from "js-cookie";
import VendorView from "../pages/VendorView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: LoginView,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/regist',
        name: 'registration',
        component: RegistView,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/dashboard',
        name: 'Home',
        component: HomeView,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/dashboard/vendor',
        name: 'Vendor',
        component: VendorView,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthentication = Cookies.get('token')
    if(to.meta.requiresAuth){
        if(isAuthentication){
            next()
        }else{
            next('/')
        }
    }else{
        if((to.path === '/' ||  to.path === "/regist") && isAuthentication){
            next('/dashboard')
        }else{
            next()
        }
    }
})

export default router