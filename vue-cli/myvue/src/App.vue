<template>
  <div id="app">
    <!--router-link： 默认会被渲染成一个 <a> 标签，to 属性为指定链接 
      router-view： 用于渲染路由匹配到的组件 -->
      <router-link to="/main">首页</router-link>
      <router-link to="/content">内容</router-link>
      <router-view></router-view>
    </div>
</template>

<script>


</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
