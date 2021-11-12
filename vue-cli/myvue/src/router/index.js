// ES6 写法，会被转换成 require("vue"); （require 是 NodeJS 提供的模块加载器）
import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入自定义的组件
import Content from '../components/Content'
// 导入自定义的Main组件
import Main from '../components/Main'
// 导入NotFound组件
import NotFound from '../components/NotFound'
// 安装路由
Vue.use(Router);
// 配路由
export default new Router({
    mode:'history',
    routes:[
        {
            // 路由路径
            path:'/content',
            // 路由名称
            name:'content',
            // 跳转到组件
            component:Content
        },
        {
            // 路由路径
            path:'/main',
            // 名称
            name:'main',
            // 跳转到的组件
            component:Main

        },
        {
            path:'*',
            component:NotFound
        }
    ]
})

