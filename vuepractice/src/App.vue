<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <HelloWorld />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router)
  export default {
    name: 'App',
    components: {
      path: '/helloworld',
      name: 'HelloWorld',
      HelloWorld
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
