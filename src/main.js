// 微前端子应用设置
import './public-path'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./plugins/vant";
// 引入git子模块-公共模块功能
import "microcommon/src/assets/less/index.less";
import "microcommon/src/plugins/http.js";  // 里面含vue-ls引入
import "microcommon/src/mixins/index.js"

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')

// 监听卸载操作
window.addEventListener('unmount', function () {
  app.$destroy()
})
