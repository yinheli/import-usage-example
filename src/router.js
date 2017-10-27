import Vue from 'vue'
import VueRouter from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'layout' */ '@/layout/main'),
        children: [
            {
                path: '/',
                component: () => import(/* webpackChunkName: 'home' */ '@/page/home')
            },

            {
                path: '/about',
                component: () => import(/* webpackChunkName: 'about' */ '@/page/about')
            },

            {
                path: '*',
                component: () => import(/* webpackChunkName: '404' */ '@/page/404')
            }
        ]
    }
]

Vue.use(VueRouter)
const router = new VueRouter({
    routes
})

export default router
