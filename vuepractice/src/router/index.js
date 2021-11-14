import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
//导入登录组件
import Login from '../views/login'
//安装路由
Vue.use(Router);
//配置路由
export default  new Router({
  routes:[
    {
    //  路由路径
      path:'/login',
    //  路由名称
      name:'login',
    //  跳转到组件
      component:Login
    }
  ]
});
