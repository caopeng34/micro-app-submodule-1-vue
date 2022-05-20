import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {ls} from "../../submodules/micro-app-common-vue/src/plugins/storage.js"
// 子模块
import ceshi99 from "../views/_99_ceshi/_store";

export default new Vuex.Store({
  state: {
    // -- 取自基座应用的数据，LocalStorage --
    accesstoken: ls.get("accesstoken") || "",       // token
    userinfo: ls.get("userinfo") || {},             // 用户信息
    // -- 其他 --
    failuretime: 1000 * 60 * 60 * 24 * 7,           // localstorage失效时间，配合storage使用
    // -- 接收基座应用数据 --
    subbackmain: ls.get("subbackmain") || "",       // 子应用返回基座应用路由名

  },
  mutations: {
    updatesubbackmain(state, obj) {
      ls.set("subbackmain", obj, state.failuretime)
      state.mainbackroute = ls.get("subbackmain")
    },
  },
  actions: {
    // 微前端：子应用获取基座应用数据
    initbasicinfo({state, commit, dispatch}, obj) {
      return new Promise(resolve => {
        // 返回基座下发的data数据
        const data = window.microApp && window.microApp.getData()
        if (data) {
          commit('updatesubbackmain',data.subbackmain)
          console.log('子应用更新基础信息成功')
          resolve(true)
        } else {
          resolve(false)
        }
      })
    }
  },
  modules: {
    ceshi99,        // 测试业务
  }
})
