// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 项目入口
import Vue from 'vue'
import App from './App'
// 导入创建的路由配置目录
import router from './router'//自动扫描里面的路由配置
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 配置路由
  router,
  components: { App },
  template: '<App/>'
})
