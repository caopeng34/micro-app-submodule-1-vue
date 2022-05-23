const subrouters = {
    name: "tmp00",
    component: () => import("./_00_tmp"),
    children: [
        {
            name: "tmp00/home",                     // 临时首页
            meta: {keepAlive: false, scrollTop: 0},
            component: () => import( "./home")
        },
    ]
};

// 处理路由path
subrouters.path =( window.__MICRO_APP_BASE_ROUTE__ || '/') + subrouters.name
subrouters.children.forEach(item => {
    item.path = ( window.__MICRO_APP_BASE_ROUTE__ || '/') + item.name
})

export default subrouters;