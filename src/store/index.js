import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import router from '../router'
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
    updateaccesstoken(state, obj) {
      ls.set("accesstoken", obj, state.failuretime)
      state.accesstoken = ls.get("accesstoken")
    },
    updateuserinfo(state, obj) {
      ls.set("userinfo", obj, state.failuretime)
      state.userinfo = ls.get("userinfo")
    },
    updatesubbackmain(state, obj) {
      ls.set("subbackmain", obj, state.failuretime)
      state.subbackmain = ls.get("subbackmain")
    },
  },
  actions: {
    // 微前端：子应用获取基座应用数据
    initbasicinfo({state, commit, dispatch}, obj) {
      return new Promise(resolve => {
        // 返回基座下发的data数据
        const data = window.microApp && window.microApp.getData()
        if (data) {   // 是微前端
          commit('updatesubbackmain',data.subbackmain)
          console.log('子应用更新基础信息成功')
          resolve('')
        } else {      // 非微前端
          // 判断当前页面，根路径或加载页则跳转首页，否则不跳转
          let currentpages = window.location.href.split('#')
          if (currentpages.length < 2 || currentpages[1] === '' || currentpages[1] === '/' || currentpages[1] === '/firstpage') {
            resolve('home')
          } else {
            resolve('')
          }
        }
      })
    },
    // 微前端：子应用返回到基座应用
    backbasic({state, commit, dispatch}, obj) {
      return new Promise(resolve => {
        if (window.__MICRO_APP_ENVIRONMENT__) {   // 是微前端环境
          // 子应用向基座应用发送数据
          window.microApp.dispatch({type: 'back', subbackmain: state.subbackmain}) // dispatch只接受对象作为参数
        } else {                                  // 非微前端环境
          obj && router.push({name: obj})
        }
      })
    },
  },
  modules: {
    ceshi99,        // 测试业务
  }
})
