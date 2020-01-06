import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import test from '../pages/test.vue'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/test',
            component: test
        }
    ]
})
export default router
