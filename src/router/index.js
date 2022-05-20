import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import ceshi99 from "../views/_99_ceshi/_router"

const routes = [
    // {
    //     path: "/",
    //     redirect: "/firstpage"
    // },
    // {
    //     name: "firstpage",
    //     path: "/firstpage",
    //     component: () => import( "../views/firstpage")
    // },
    ceshi99,        // 测试业务
]

const router = new VueRouter({
    // mode: "history",
    // 👇 __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach((to, from) => {
});

// 》》》解决跳转重复路由报错问题
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 《《《解决跳转重复路由报错问题

export default router
