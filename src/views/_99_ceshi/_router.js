const subrouters = {
    name: "ceshi99",
    component: () => import("./_99_ceshi"),
    children: [
        {
            name: "ceshi99/ceshi1",                 // 测试-1
            meta: {keepAlive: false, scrollTop: 0},
            component: () => import( "./ceshi1")
        },
        {
            name: "ceshi99/ceshi2",                 // 测试-2
            meta: {keepAlive: false, scrollTop: 0},
            component: () => import( "./ceshi2")
        },
    ]
};

// 处理路由path
subrouters.path =( window.__MICRO_APP_BASE_ROUTE__ || '/') + subrouters.name
subrouters.children.forEach(item => {
    item.path = ( window.__MICRO_APP_BASE_ROUTE__ || '/') + item.name
})

export default subrouters;